/**
 * @file
 * This is a generic Mock responder class that handles json mock files.
 * 
 * Json file handler.  Json files must follow this format:
 *
 * {
 *  "route": "",
 *  "responses": {
 *    "default": {} or []
 *  }
 * }
 * See {@tutorial mock-server}
 */
import fs from "fs";
import BaseMock from "./BaseMock";
import {Request, Response, NextFunction} from "express"

type Responses = {
  [key:string]: string
}

export default class extends BaseMock {
  #route:string;
  #responses:Responses = {};
  #response = "default";

  getResponse(response = null) {
    return response
      ? {
          response,
          body: this.#responses[response],
        }
      : {
          response: this.#response,
          body: this.#responses[this.#response],
        };
  }

  /**
   * Set the response to use.
   * @param {string} response
   */
  setResponse(response:string) {
    if (!this.#responses[response]) {
      throw new Error(
        `Requested Response "${response}" not present in Json File`
      );
    }
    this.#response = response;
  }

  /**
   * @override
   * @param {string} jsonPath
   */
  async init(jsonPath:string) {
    const json = JSON.parse(fs.readFileSync(jsonPath).toString());
    this.#route = json.route;
    this.#responses = json.responses;
    this.app.use(this.#route, (req:Request, res:Response, next:NextFunction) => {
      if (this.#responses[this.#response]) {
        res.json(this.#responses[this.#response]);
      } else {
        next();
      }
    });
  }
}
