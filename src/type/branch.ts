export interface IBranch {
  id: number;
  parentId: number;
  type: TTypeBranch;
  name: string;
  path: string;
  childrens?: IBranch[];
}

export type TTypeBranch = "Folder" | "Sequence";
