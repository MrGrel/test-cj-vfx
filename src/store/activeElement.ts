import { makeAutoObservable } from "mobx";

class activeElement {
  activeId: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveId(id: number) {
    this.activeId = id;
  }
}

export default new activeElement();
