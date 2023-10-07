import { observer } from "mobx-react-lite";
import { Container } from "./components/container/container.style";
import { ModalAdd } from "./components/modals/modalAdd/modalAdd";
import { ModalRm } from "./components/modals/modalRm/modalRm";
import { DisplaingFiles } from "./pages/displingFile";
import { TreeFiles } from "./pages/treeFiles";
import dataAddModal from "./store/dataAddModal";
import dataRmModal from "./store/dataRmModal";

const App = observer(() => {
  return (
    <Container>
      <TreeFiles></TreeFiles>
      <DisplaingFiles></DisplaingFiles>
      {dataAddModal.isOpenAddModal && <ModalAdd />}
      {dataRmModal.isOpenRmModal && <ModalRm />}
    </Container>
  );
});

export default App;
