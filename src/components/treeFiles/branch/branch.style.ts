import styled from "@emotion/styled";

export const BtnAddContainer = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
`;

export const TypesList = styled.ul`
  position: absolute;
  top: 20px;
  right: -50px;
  max-width: 163px;
  width: 2000%;
  margin: 0;
  padding: 2px 4px;
  background: #2c2c2c;
  border-radius: 3px;
  list-style: none;
  z-index: 10;
`;

export const TypeItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TypeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 3px 7px;
  background: inherit;
  border: 1px solid #2c2c2c;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #cecece;
  cursor: pointer;

  & svg {
    margin-right: 8px;
  }
`;
