import {Request, Response} from "express"
import BaseMock from "../support/BaseMock";

export default class extends BaseMock {

  loginState = ""
  succeed = true
  doMultiFactorAuth = false

  async init() {
    this.#registerLogin();
    this.#registerValidate();
    this.#registerLogout();
  }

  #registerLogin() {
    this.app.use("/api/auth/callback/credentials", (req:Request, res:Response) => {
      if (this.succeed) {
        // next-auth.session-token
        // next-auth.csrf-token
        console.dir(req.session)
        res.status(200)
        // res.redirect("/demos/login")
      } else if (this.doMultiFactorAuth) {
        res.status(200).json({loginState: "notValidated"})
      } else {
        res.status(200).json({loginState: "loggedIn"})
      }
    })
  }

  #registerValidate() {
    this.app.use("/api/auth/validate", (req:Request, res:Response) => {
      res.status(200).json({loginState: "loggedIn"})
    })
  }

  #registerLogout() {
    this.app.use("/api/auth/logout", (req:Request, res:Response) => {
      res.status(200).json({loginState: "notLoggedIn"})
    })
  }
}