import styled from "@emotion/styled";
import { TTypeBranch } from "../../type/branch";
import IMG from "../../assets/IMG";

interface IActive {
  isActive: boolean;
  type: TTypeBranch;
}

interface IOpened {
  isOpen: boolean;
}

export const TreeFilesContainer = styled.div`
  max-width: 380px;
  width: 100%;
  padding: 12px 12px 12px 3px;
  background: #232323;
`;

export const List = styled.ul<IOpened>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 100%;
  padding-left: 9px;
`;

export const Item = styled.li`
  width: 100%;
`;

export const DescContainer = styled.div<IActive>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 20px 8px
    ${(props) => (props.type === "Folder" ? "14px" : "44px")};

  background-color: ${(props) => (props.isActive ? "#343434" : "inherit")};

  background-image: ${(props) => (!!props.isActive ? IMG.yellowLine : "none")};

  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const BtnOpen = styled.button<IOpened>`
  position: relative;
  width: 14px;
  height: 14px;
  margin-right: 6px;
  padding: 3px 4px;
  background: inherit;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (!!props.isOpen ? " rotate(90deg)" : "none")};

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const NameContainer = styled.div`
  display: flex;
  max-width: 204px;
  width: 100%;
  margin-right: auto;

  & svg {
    margin-right: 6px;
  }
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #cecece;
`;

export const BtnsContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 45px;
`;

export const Btn = styled.button`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;
  padding: 0;
  background: inherit;
  border: 1px solid #343434;
  border-radius: 3px;
  cursor: pointer;

  & svg {
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
