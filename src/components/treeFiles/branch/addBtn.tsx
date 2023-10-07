import { useState } from "react";
import { observer } from "mobx-react-lite";
import dataAddModal from "../../../store/dataAddModal";

import { addSvg, folderSvg, sequenceSvg } from "../../../assets/svg";
import { Btn } from "../TreeFiles.styled";
import { BtnAddContainer, TypeBtn, TypeItem, TypesList } from "./branch.style";
import { TTypeBranch } from "../../../type/branch";

interface addBtn {
  id: number;
  name: string;
  path: string;
}

export const AddBtn = observer(({ id, name, path }: addBtn) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickForOpenTypeList = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickAddTypedSequence = (type: TTypeBranch) => {
    console.log(id, name, path, "данные в addBtn");

    setIsOpen(false);
    dataAddModal.openAddModal({ parrentName: name, parrentId: id, type, path });
  };

  return (
    <BtnAddContainer>
      <Btn onClick={handleClickForOpenTypeList}>{addSvg}</Btn>
      {isOpen && (
        <TypesList>
          <TypeItem>
            <TypeBtn onClick={(e) => handleClickAddTypedSequence("Folder")}>
              {folderSvg}
              Add Folder
            </TypeBtn>
          </TypeItem>
          <TypeItem>
            <TypeBtn onClick={(e) => handleClickAddTypedSequence("Sequence")}>
              {sequenceSvg}
              Add Sequence
            </TypeBtn>
          </TypeItem>
        </TypesList>
      )}
    </BtnAddContainer>
  );
});
