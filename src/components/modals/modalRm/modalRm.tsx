import dataRmModal from "../../../store/dataRmModal";
import treeStructure from "../../../store/treeStructure";
import { ModalContainer } from "../modalContainer.styles";
import {
  BtnCancel,
  BtnRm,
  Modal,
  ModalPath,
  ModalText,
  Wrapper,
} from "./modalRm.style";

export const ModalRm = () => {
  const handleClickContainer = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (e.target === e.currentTarget) {
      dataRmModal.closeRmModal();
    }
  };

  const handleClickClose = () => {
    dataRmModal.closeRmModal();
  };

  const handleClickRm = () => {
    if (dataRmModal.rmId && dataRmModal.rmParentId) {
      treeStructure.rmBranch({
        id: dataRmModal.rmId,
        parentId: dataRmModal.rmParentId,
      });

      dataRmModal.closeRmModal();
    }
  };

  return (
    <ModalContainer onClick={(e) => handleClickContainer(e)}>
      <Modal>
        <ModalPath>{dataRmModal.path}</ModalPath>
        <ModalText>Are you sure you want to delete this Sequence?</ModalText>
        <Wrapper>
          <BtnCancel onClick={handleClickClose}>No, cancel</BtnCancel>
          <BtnRm onClick={handleClickRm}>Yes, delete</BtnRm>
        </Wrapper>
      </Modal>
    </ModalContainer>
  );
};
