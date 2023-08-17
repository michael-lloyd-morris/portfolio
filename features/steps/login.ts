import { Given, When, Then } from "@cucumber/cucumber"
import World from "../support/World"
import { expect } from "@playwright/test"

const jwt = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..3ZlBM7xY_ztOPZAK.o3dy7NxVhyLuTYIr4Q7qdyKUDDJnXELEpApbY7YXhaBSQfE-Dfwsq3WRyYlkJ9xLksvOGz0HXMbzQ8pKqgTuWBoX6eXetU5jQhW5DoZYlCqPhSFHa-LIVrhZI8H908IicbXKaRJd-cugwpQ3JvioKJbmAWTlfU24dHKX1s91uJKd9_83rubeNg.pjNMZaAZiE0vvf1YAVP-jQ"

Given("I am not logged in", async function(this:World) {

})

When("I provide valid login credentials", async function(this:World) {
  await this.browser.goto("/demos/login")
  this.browser.page.route(/http:\/\/localhost:(\d+)\/api\/auth\/callback\/credentials/, async (route) => {
    const url = new URL(route.request().url())
    const siteBase = `http://localhost:${url.port}`

    this.browser.context.addCookies([
      { name: "next-auth.session-token", value: jwt, url: siteBase},
    ])

    route.fulfill({
      status: 302,
      headers: {
        Location: "/demos/login"
      },
      body: ""
    })
  })

  await this.browser.page.getByLabel("Email").fill("john.doe@test.com")
  await this.browser.page.getByLabel("Password").fill("p@ssw0rd")
  await this.browser.page.getByRole("button", { name: "Login"}).click()

})

When("I provide invalid login credentials", async function(this:World) {
  await this.browser.goto("/demos/login")
  this.browser.page.route(/http:\/\/localhost:(\d+)\/api\/auth\/callback\/credentials/, async (route) => {

    route.fulfill({
      status: 302,
      headers: {
        Location: "/demos/login?error=InvalidLogin"
      },
      body: ""
    })
  })

  await this.browser.page.getByLabel("Email").fill("john.doe@test.com")
  await this.browser.page.getByLabel("Password").fill("p@ssw0rd")
  await this.browser.page.getByRole("button", { name: "Login"}).click()
})

Then ("I should be logged in", async function(this:World) {
 await expect(this.browser.page.getByText('You are now logged in.')).toBeVisible()
})

Then ("I should see a login failure message", async function(this:World) {
  await expect(this.browser.page.getByText('Invalid Credentials')).toBeVisible()
})