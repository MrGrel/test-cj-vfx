import { makeAutoObservable } from "mobx";

interface IOpenRm {
  rmId: number;
  rmParentId: number;
  path: string;
}

class dataRmModal {
  isOpenRmModal: boolean = false;
  rmParentId: number | null = null;
  rmId: number | null = null;
  path: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  openRmModal({ rmId, rmParentId, path }: IOpenRm) {
    this.rmId = rmId;
    this.rmParentId = rmParentId;
    this.isOpenRmModal = true;
    this.path = path;
  }

  closeRmModal() {
    this.rmId = null;
    this.rmParentId = null;
    this.isOpenRmModal = false;
    this.path = "";
  }
}

export default new dataRmModal();
