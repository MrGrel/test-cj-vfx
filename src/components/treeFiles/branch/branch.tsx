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
import activeElement from "../../../store/activeElement";

interface IFunBranch {
  currentItem: IBranch;
  path: string;
}

export const Branch = observer(({ currentItem }: IFunBranch) => {
  const { id, parentId, name, type, path, childrens } = currentItem;

  const isActive = id === activeElement.activeId;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOnElement = () => {
    activeElement.setActiveId(id);
    setIsOpen((prev) => !prev);
  };

  const handleClickRm = () => {
    dataRmModal.openRmModal({ path, rmId: id, rmParentId: parentId });
  };

  return (
    <>
      <DescContainer
        isActive={isActive}
        type={type}
        onClick={handleClickOnElement}
      >
        {type === "Folder" && <BtnOpen isOpen={isOpen}>{shapeSvg}</BtnOpen>}
        <NameContainer>
          {type === "Folder" ? folderSvg : sequenceSvg}
          <Name>{name}</Name>
        </NameContainer>
        {isActive && (
          <BtnsContainer>
            {type === "Folder" && <AddBtn id={id} name={name} path={path} />}
            <Btn onClick={handleClickRm}>{removeSvg}</Btn>
          </BtnsContainer>
        )}
      </DescContainer>
      {childrens && childrens.length && (
        <List isOpen={isOpen}>
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
