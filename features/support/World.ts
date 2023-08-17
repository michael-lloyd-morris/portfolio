import { World } from "@cucumber/cucumber";
import { Browser } from "./Browser";
import MockServer from "./MockServer";
import path from "path";

export default class extends World {
  #browser: Browser;
  #mockServer: MockServer;

  get browser() {
    return this.#browser;
  }

  getMock(mock: string) {
    return this.#mockServer.getMock(mock);
  }

  async startBrowser(headless = false) {
    this.#browser = new Browser();
    await this.#browser.init(headless);
  }

  async startMockServer() {
    this.#mockServer = new MockServer(path.resolve(`${__dirname}/../mocks`));
    await this.#mockServer.start();
  }

  async stopMockServer() {
    this.#mockServer.close();
  }
}
