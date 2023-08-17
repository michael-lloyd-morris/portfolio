import { Browser as driver, BrowserContext, chromium, Page } from "playwright";

let port: string;

class Browser {
  private _driver: driver;
  private _context: BrowserContext;
  private _page: Page;

  get driver() {
    return this._driver;
  }

  get context() {
    return this._context;
  }

  get page() {
    return this._page;
  }

  async init() {  
    if (process.env.DEBUG_TEST) {
      this._driver = await chromium.launch({headless: false, slowMo: 50});
    } else {
      this._driver = await chromium.launch();
    }
    await this.reset();
  }

  async reset() {
    if (this.page) {
      await this.page.close();
    }
    if (this.context) {
      await this.context.close();
    }
    this._context = await this.driver.newContext();
    this._page = await this.context.newPage();
  }

  async close() {
    await this._driver.close();
  }

  async goto(relativePath: string = "/") {
    if (!relativePath.startsWith("/")) {
      relativePath = `/${relativePath}`;
    }
    await this._page.goto(`http://localhost:${port}${relativePath}`);
  }
}

const getPort = () => port;
const setPort = (newPort: string) => {
  port = newPort;
};

export { Browser, getPort, setPort };
