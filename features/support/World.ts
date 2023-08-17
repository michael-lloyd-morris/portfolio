import { World } from "@cucumber/cucumber";
import { Browser } from "./Browser";

export default class extends World {
  #browser: Browser;

  get browser() {
    return this.#browser;
  }

  set browser(browser: Browser) {
    if (this.#browser) throw new Error("Browser can be set only once");
    this.#browser = browser;
  }
}
