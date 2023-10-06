import styled from "@emotion/styled";

export const TreeFilesContainer = styled.div`
  max-width: 380px;
  width: 100%;
  padding: 12px 12px 12px 3px;
  background: #232323;
`;

export const List = styled.ul`
  width: calc(100% - 9px);
  padding-left: 9px;
`;

export const Item = styled.li`
  width: 100%;
`;

export const DescContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 34px);
  padding: 13px 14px 13px 20px;
  border-radius: 3px;
`;

export const BtnOpen = styled.button`
  position: relative;
  width: 14px;
  height: 14px;
  margin-right: 6px;
  padding: 3px 4px;
  /* background: inherit; */
  border: none;
  border-radius: 3px;

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
  margin: 0;
  padding: 0;
  /* background: inherit; */
  border: none;
  border-radius: 3px;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
