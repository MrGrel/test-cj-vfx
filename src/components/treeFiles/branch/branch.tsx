import { useState } from "react";
import {
  folderSvg,
  sequenceSvg,
  removeSvg,
  shapeSvg,
} from "../../../assets/svg";
import {
  Btn,
  BtnOpen,
  BtnsContainer,
  DescContainer,
  Item,
  List,
  Name,
  NameContainer,
} from "../TreeFiles.styled";

import { IBranch } from "../../../type/branch";
import { observer } from "mobx-react-lite";
import { AddBtn } from "./addBtn";
import dataRmModal from "../../../store/dataRmModal";

interface IFunBranch {
  currentItem: IBranch;
  path: string;
}

export const Branch = observer(({ currentItem }: IFunBranch) => {
  const { id, parentId, name, type, path, childrens } = currentItem;

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOnElement = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (e.target === e.currentTarget) {
      setIsOpen((prev) => !prev);
    }

    if (e.target === e.currentTarget && !isActive) {
      setIsActive(true);
    }

    if (isActive && e.target !== e.currentTarget) {
      setIsActive(true);
    }
  };

  const handleClickRm = () => {
    dataRmModal.openRmModal({ path, rmId: id, rmParentId: parentId });
  };

  return (
    <>
      <DescContainer onClick={(e) => handleClickOnElement(e)}>
        <BtnOpen>{shapeSvg}</BtnOpen>
        <NameContainer>
          {type === "Folder" ? folderSvg : sequenceSvg}
          <Name>{name}</Name>
        </NameContainer>
        <BtnsContainer>
          {type === "Folder" && <AddBtn id={id} name={name} path={path} />}
          <Btn onClick={handleClickRm}>{removeSvg}</Btn>
        </BtnsContainer>
      </DescContainer>
      {childrens && childrens.length && (
        <List>
          {childrens.map((item) => (
            <Item key={String(item.id) + item.name}>
              <Branch
                currentItem={item}
                path={`${item.path}/${item.name}`}
              ></Branch>
            </Item>
          ))}
        </List>
      )}
    </>
  );
});
