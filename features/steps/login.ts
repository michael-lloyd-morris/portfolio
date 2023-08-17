import { Given, When, Then } from "@cucumber/cucumber";
import World from "../support/World";
import { expect } from "@playwright/test";
import { Browser } from "../support/Browser";

const jwt =
  "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..3ZlBM7xY_ztOPZAK.o3dy7NxVhyLuTYIr4Q7qdyKUDDJnXELEpApbY7YXhaBSQfE-Dfwsq3WRyYlkJ9xLksvOGz0HXMbzQ8pKqgTuWBoX6eXetU5jQhW5DoZYlCqPhSFHa-LIVrhZI8H908IicbXKaRJd-cugwpQ3JvioKJbmAWTlfU24dHKX1s91uJKd9_83rubeNg.pjNMZaAZiE0vvf1YAVP-jQ";
const authRoute = /http:\/\/localhost:(\d+)\/api\/auth\/callback\/credentials/;

async function doLogin(browser: Browser) {
  await browser.goto("/demos/login");
  await browser.page.getByLabel("Email").fill("john.doe@test.com");
  await browser.page.getByLabel("Password").fill("p@ssw0rd");
  await browser.page.getByRole("button", { name: "Login" }).click();
}

Given("I am not logged in", async function (this: World) {});

When("I provide valid login credentials", async function (this: World) {
  this.browser.page.route(authRoute, async (route) => {
    const url = new URL(route.request().url());
    const siteBase = `http://localhost:${url.port}`;

    this.browser.context.addCookies([
      { name: "next-auth.session-token", value: jwt, url: siteBase },
    ]);

    route.fulfill({
      status: 302,
      headers: {
        Location: "/demos/login",
      },
      body: "",
    });
  });

  await doLogin(this.browser);
});

When("I provide invalid login credentials", async function (this: World) {
  this.browser.page.route(authRoute, async (route) => {
    route.fulfill({
      status: 302,
      headers: {
        Location: "/demos/login?error=InvalidLogin",
      },
      body: "",
    });
  });

  await doLogin(this.browser);
});

When(
  "I provide invalid login credentials five times",
  async function (this: World) {
    this.browser.page.route(authRoute, async (route) => {
      const url = new URL(route.request().url());
      const siteBase = `http://localhost:${url.port}`;

      this.browser.context.addCookies([
        { name: "account-lock", value: "true", url: siteBase },
      ]);

      route.fulfill({
        status: 302,
        headers: {
          Location: "/demos/login?error=LoginStrikeout",
        },
        body: "",
      });
    });

    await doLogin(this.browser);
  }
);

Then("I should be logged in", async function (this: World) {
  await expect(
    this.browser.page.getByText("You are now logged in.")
  ).toBeVisible();
});

Then("I should see a login failure message", async function (this: World) {
  await expect(
    this.browser.page.getByText("Invalid Credentials")
  ).toBeVisible();
});

Then("I should see a login strikeout message", async function (this: World) {
  await expect(this.browser.page.getByText("Login Strike Out")).toBeVisible();
  await expect(this.browser.page.getByLabel("Email")).toHaveCount(0);
});

Then("my account should be locked", async function () {
  await this.browser.goto("/demos/login");
  await expect(this.browser.page.getByText("Login Strike Out")).toBeVisible();
  await expect(this.browser.page.getByLabel("Email")).toHaveCount(0);
});
