import { World } from "@cucumber/cucumber"
import { Browser } from "./Browser"

export default class extends World {
  private _browser:Browser
  get browser() {
    return this._browser;
  }
  async startBrowser() {
    this._browser = new Browser();
    await this._browser.init();
  }
}