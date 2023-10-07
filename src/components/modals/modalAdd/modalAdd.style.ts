import styled from "@emotion/styled";

export const Modal = styled.div`
  position: relative;
  max-width: 581px;
  width: 100%;
  background: #232323;
  border: 1px solid #333333;
  border-radius: 3px;
  font-size: 0;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 11px;
  right: 13px;
  background: inherit;
  border: 1px solid #232323;
  cursor: pointer;
`;

export const ModalTopContainer = styled.div`
  padding-top: 7px;
  padding-left: 11px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const ModalNameContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 6px 20px;
  background: #323232;
  border-radius: 3px;
`;

export const ModalText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #cecece;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Label = styled.label`
  padding-left: 5px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 10px;
  background: inherit;
  border: 1px solid #232323;
  border-radius: 3px;
  font-size: 22px;
  font-weight: 400;
  line-height: 27px;
  color: #cecece;

  &::placeholder {
    color: #acacac;
  }

  & svg {
    margin-right: 9px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 13px;
  border-top: 1px solid #333333;
`;

export const Submit = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 14px;
  background: #e08855;
  border: 1px solid #e08855;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #333333;
  cursor: pointer;

  & svg {
    margin-right: 8px;
  }
`;
