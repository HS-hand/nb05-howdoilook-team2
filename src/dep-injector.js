import { Server } from "./01-app/server.js";

export class DepInjector {
  #server;

  constructor(){
    this.#server = this.injectDeps();
  }

  injectDeps() {
    return new Server();
  }

  get server() {
    return this.#server;
  }
}