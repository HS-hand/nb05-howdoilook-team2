import { Server } from "./01-app/server.js";

export class DepInjector {
  #server;

  constructor(){
    this.#server = this.injectDeps();
  }

  get server() {
    return this.#server;
  }

  injectDeps() {
    return new Server();
  }
}