import { When, Then } from "@cucumber/cucumber";
import World from "../support/World";
import { expect } from "chai";

When("I navigate to the {string}", async function (this: World, page: string) {
  await this.browser.goto(page);
});

Then(
  "the page title should be {string}",
  async function (this: World, title: string) {
    const actualTitle = await this.browser.page.title();
    expect(actualTitle).to.equal(title);
  }
);
