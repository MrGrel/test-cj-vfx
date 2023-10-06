import {
  addSvg,
  folderSvg,
  removeSvg,
  sequenceSvg,
  shapeSvg,
} from "../../../assets/svg";
import {
  Btn,
  BtnOpen,
  BtnsContainer,
  DescContainer,
  Name,
  NameContainer,
} from "../TreeFiles.styled";

interface IFolder {
  id: number;
  type: string;
  path: string;
  name: string;
}

export const Folder = ({ id, type, path, name }: IFolder) => {
  return (
    <>
      <DescContainer>
        <BtnOpen>{shapeSvg}</BtnOpen>
        <NameContainer>
          {type === "folder" ? folderSvg : sequenceSvg}
          <Name>{name}</Name>
        </NameContainer>
        <BtnsContainer>
          {type === "folder" && <Btn>{addSvg}</Btn>}
          <Btn>{removeSvg}</Btn>
        </BtnsContainer>
      </DescContainer>
    </>
  );
};
