import { makeAutoObservable } from "mobx";
import { TTypeBranch } from "../type/branch";

export interface IAddModal {
  parrentName: string;
  parrentId: number;
  type: TTypeBranch;
  path: string;
}

class dataAddModal {
  isOpenAddModal: boolean = false;
  lastId: number = 100;
  parrentName: string = "";
  path: string = "";
  parrentId: number | null = null;
  type: TTypeBranch | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  openAddModal({ parrentName, parrentId, type, path }: IAddModal) {
    this.isOpenAddModal = true;
    this.parrentName = parrentName;
    this.parrentId = parrentId;
    this.type = type;
    this.path = path;

    console.log(this, "данные в сторе");
  }

  closeAddModal() {
    this.isOpenAddModal = false;
    this.parrentName = "";
    this.parrentId = null;
    this.type = null;
    this.path = "";
  }

  closeAddModalWithConfirmforAdding() {
    this.isOpenAddModal = false;
    this.lastId = this.lastId + 1;
    this.parrentName = "";
    this.parrentId = null;
    this.type = null;
    this.path = "";
  }
}

export default new dataAddModal();
