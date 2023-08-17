/**
 * @file
 * This class sets up ExpressJS to serve the Mock data files that are used by
 * the tests.
 */
import express from "express";
import cors from "cors";
import cookieSession from "cookie-session"
import fs from "fs";
import http from "http";
import path from "path";
import JsonMock from "./JsonMock";
import {Application, Request, Response, NextFunction} from "express"
import { Server } from "http";

/**
 * Built on Express.js and wrapping an Express.js app server, the Mock Server simulates the real API during the tests.
 */
export default class {

  #app:Application;
  #port = 0;
  #mocks = new Map();
  #strict = false;
  #delay = 0;
  #mockRoot = "";

  #server:Server;

  constructor(mockRoot:string, mockPort = 0) {
    this.#mockRoot = mockRoot;
    this.#initApp();
    this.#port = mockPort;
  }

  get app() {
    return this.#app;
  }

  get delay() {
    return this.#delay;
  }

  set delay(delay:number) {
    this.#delay = delay;
  }

  get port() {
    return this.#port;
  }

  getMock(mock:string) {
    return this.#mocks.get(mock);
  }

  enableStrictMode() {
    this.#strict = true;
  }

  disableStrictMode() {
    this.#strict = false;
  }

  async start() {
    if (typeof(this.#server) !== "undefined") {
      throw new Error("Server has already started.");
    }

    await this.#loadMocks(this.#mockRoot);
    this.#registerHandleNull();
    await this.#createServer();
  }

  #initApp() {
    this.#app = express()
    this.#app.use(cors())
    this.#app.use(cookieSession({
      keys: ["test key"],
      name: "session",
      maxAge: 86400000
    }))
    this.#app.use((req:Request, res:Response, next:NextFunction) => {
      setTimeout(next, this.#delay * 1000);
    })
  }

  async #loadMocks(dir:string) {
    for (const file of fs.readdirSync(dir)) {
      const fullPath = path.resolve(`${dir}/${file}`);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        await this.#loadMocks(fullPath);
      } else if (file.endsWith(".ts")) {
        const key = fullPath
          .substring(this.#mockRoot.length + 1, fullPath.length - 3)
          .replace("\\", "/");
        const MockClass = (await import(fullPath)).default;
        const mock = new MockClass(this);
        await mock.init();
        this.#mocks.set(key, mock);
      } else if (file.endsWith(".json")) {
        const key = fullPath
          .substring(this.#mockRoot.length + 1, fullPath.length - 5)
          .replace("\\", "/");
        const mock = new JsonMock(this);
        await mock.init(fullPath);
        this.#mocks.set(key, mock);
      }
    }
  }

  async #createServer() {
    return new Promise<void>((resolve) => {
      this.#server = http.createServer(this.app);
      this.#server.listen(this.#port, () => {
        //@ts-ignore
        this.#port = this.#server.address().port;
        resolve();
      });
    });
  }

  /**
   * Close the server
   * @method
   * @returns {void}
   */
  close() {
    this.#server.close();
  }

  /**
   * Register handler for endpoints that have no assigned handler.
   * In strict mode we allow Express.js to return 404 or 500.
   * If strict mode is disabled we send an empty object.
   * @private
   */
  #registerHandleNull() {
    this.#app.use("/", (req, res, next) => {
      if (this.#strict) {
        next();
      } else {
        res.json({});
      }
    });
  }
}
