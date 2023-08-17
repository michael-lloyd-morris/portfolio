import MockServer from "./MockServer";

export default class {
  #mockServer:MockServer;

  constructor(mockServer:MockServer) {
    this.#mockServer = mockServer;
  }

  get app() {
    return this.#mockServer.app;
  }

  getMock(mock:string) {
    return this.#mockServer.getMock(mock);
  }

  async init(...args:any[]) {
    throw new Error("This method must be defined in child class");
  }
}
