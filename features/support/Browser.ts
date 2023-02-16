import { Browser as driver, BrowserContext, chromium, Page } from 'playwright';

let port:string;

class Browser {
  private _driver:driver;
  private _context:BrowserContext;
  private _page:Page;

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
    const driver = await chromium.launch({headless: true});
    this._driver = driver;

    const context = await driver.newContext();
    this._context = context;

    const page = await context.newPage();
    this._page = page;
  }

  async close() {
    await this._driver.close();
  }

  async goto(relativePath:string = "/") {
    if (!relativePath.startsWith("/")) {
      relativePath = `/${relativePath}`;
    }
    await this._page.goto(`http://localhost:${port}${relativePath}`);
  }
} 

const getPort = () => port;
const setPort = (newPort:string) => { port = newPort; }

export {
  Browser,
  getPort,
  setPort
}