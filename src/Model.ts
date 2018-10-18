import { observable, computed } from "mobx";
import delay from "./delay";
import * as loq from "loq";

export default class Model {
  constructor() {
    this.go();
  }

  async go() {
    setInterval(() => this.foo++, 100);
  }
  @observable foo: number = 1;
  @observable name: string = "";
  @observable slots: Array<boolean> = loq.repeat(false, 102).toArray();
  @computed
  get fooName() {
    return this.name + this.foo;
  }
}
