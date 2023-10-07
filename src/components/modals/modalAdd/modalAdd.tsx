import { useForm } from "react-hook-form";
import { closeSvg, shapeSvg } from "../../../assets/svg";
import dataAddModal from "../../../store/dataAddModal";
import { ModalContainer } from "../modalContainer.styles";
import {
  CloseBtn,
  Input,
  Label,
  Modal,
  ModalForm,
  ModalNameContainer,
  ModalText,
  ModalTopContainer,
  Submit,
  Wrapper,
} from "./modalAdd.style";
import { IBranch } from "../../../type/branch";
import treeStructure from "../../../store/treeStructure";

interface IForm {
  name: string;
}

export const ModalAdd = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const svg = "123";

  const handleClickContainer = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (e.target === e.currentTarget) {
      dataAddModal.closeAddModal();
    }
  };

  const handleClickClose = () => {
    dataAddModal.closeAddModal();
  };

  const onSubmit = (data: IForm) => {
    if (dataAddModal.parrentId && dataAddModal.type) {
      const newBranch: IBranch = {
        id: dataAddModal.lastId + 1,
        name: data.name,
        parentId: dataAddModal.parrentId,
        path: dataAddModal.path + "/" + data.name,
        type: dataAddModal.type,
        childrens: [],
      };

      console.log(newBranch, "данные в модалке");

      treeStructure.addBranch({ ...newBranch });
      dataAddModal.closeAddModalWithConfirmforAdding();
    }
  };

  return (
    <ModalContainer onClick={(e) => handleClickContainer(e)}>
      <Modal>
        <CloseBtn onClick={handleClickClose}>{closeSvg}</CloseBtn>
        <ModalTopContainer>
          <ModalNameContainer>
            {svg}
            <ModalText>{dataAddModal.parrentName}</ModalText>
          </ModalNameContainer>
          {shapeSvg}
          <ModalText>{`new ${dataAddModal.type}`}</ModalText>
        </ModalTopContainer>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <Input
              placeholder={`Enter ${dataAddModal.type} name`}
              {...register("name", {
                required: true,
                pattern: /[a-zA-Z]/,
              })}
            />
          </Label>
          <Wrapper>
            <Submit>{`Add ${dataAddModal.type}`}</Submit>
          </Wrapper>
        </ModalForm>
      </Modal>
    </ModalContainer>
  );
};
