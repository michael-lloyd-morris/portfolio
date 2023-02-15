import { When, Then } from "@cucumber/cucumber"

When("I navigate to the site", () => {
  console.log("navigate");
}); 

Then("I should see the about page", () => {
  console.log("page");
});