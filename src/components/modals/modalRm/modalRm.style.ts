import styled from "@emotion/styled";

export const Modal = styled.div`
  position: relative;
  text-align: center;
  max-width: 523px;
  width: 100%;
  padding: 44px 15px 12px;
  background: #232323;
  border: 1px solid #333;

  & svg {
    margin-bottom: 42px;
  }
`;

export const ModalPath = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #cecece;
`;

export const ModalText = styled.p`
  margin-bottom: 41px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #cecece;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
`;

export const BtnCancel = styled.button`
  flex-basis: 50%;
  padding: 6px 14px;
  background: #393939;
  border: 1px solid #393939;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #cecece;
  cursor: pointer;
`;

export const BtnRm = styled.button`
  flex-basis: 50%;
  padding: 6px 14px;
  background: #5e3838;
  border: 1px solid #5e3838;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #db5c5c;
  cursor: pointer;
`;
