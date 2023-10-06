import { List } from "@mui/material";
import {
  Item,
  TreeFilesContainer,
} from "../components/treeFiles/TreeFiles.styled";
import { Folder } from "../components/treeFiles/folder/folder";

export const TreeFiles = () => {
  const nok = { type: "folder", name: "test", path: "", id: 1 };

  return (
    <TreeFilesContainer>
      <List>
        <Item>
          <Folder id={1} type="folder" path="" name="test"></Folder>
        </Item>
      </List>
    </TreeFilesContainer>
  );
};
