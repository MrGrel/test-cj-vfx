import {
  Item,
  List,
  TreeFilesContainer,
} from "../components/treeFiles/TreeFiles.styled";
import { Branch } from "../components/treeFiles/branch/branch";
import treeStructure from "../store/treeStructure";

export const TreeFiles = () => {
  const { tree } = treeStructure;
  return (
    <TreeFilesContainer>
      <List isOpen={true}>
        {tree.length &&
          tree.map((item, index) => (
            <Item key={String(item.id) + item.name}>
              <Branch currentItem={item} path={item.path} />
            </Item>
          ))}
      </List>
    </TreeFilesContainer>
  );
};
