import { makeAutoObservable } from "mobx";
import { IBranch, TTypeBranch } from "../type/branch";

interface IRmBranch {
  id: number;
  parentId: number;
}

class treeStructure {
  tree: IBranch[] = [
    {
      id: 1,
      parentId: 0,
      name: "test1",
      path: "PROJECT",
      type: "Folder",
      childrens: [],
    },
    {
      id: 2,
      parentId: 0,
      name: "test2",
      path: "PROJECT",
      type: "Folder",
      childrens: [],
    },
    {
      id: 3,
      parentId: 0,
      name: "test3",
      path: "PROJECT",
      type: "Folder",
      childrens: [],
    },
    {
      id: 4,
      parentId: 0,
      name: "test4",
      path: "PROJECT",
      type: "Folder",
      childrens: [
        {
          id: 5,
          parentId: 4,
          name: "test5",
          path: "PROJECT/test5",
          type: "Folder",
          childrens: [],
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addBranch({ id, name, parentId, path, type, childrens = [] }: IBranch) {
    const newBranch: IBranch = {
      id,
      name,
      parentId,
      path,
      type,
      childrens,
    };

    const recourse = (list: IBranch[]) =>
      list.map((item) => {
        if (parentId === item.id) {
          console.log("проверка id родителя работает");
          if (item.childrens) {
            item.childrens.push(newBranch);
          }
        }

        if (item.childrens && item.childrens.length) {
          console.log("началась рекурсия");
          recourse(item.childrens);
        }

        return item;
      });

    this.tree = recourse(this.tree);
  }

  rmBranch({ id, parentId }: IRmBranch) {
    const recourse = (list: IBranch[]) =>
      list.map((item) => {
        if (parentId === item.id) {
          // console.log("проверка id родителя работает");

          let indexBranch: number | null = null;
          if (item.childrens && item.childrens.length) {
            item.childrens.forEach((child, index) => {
              if (child.id === id) {
                indexBranch = index;
                // console.log("индекс ребенка передан");
              }
            });
          }
          if (indexBranch !== null) {
            // console.log("Произошло удаление");
            item.childrens?.splice(indexBranch, 1);
            return item;
          }
        }

        if (item.childrens && item.childrens.length) {
          // console.log("началась рекурсия");
          recourse(item.childrens);
        }

        return item;
      });

    this.tree = recourse(this.tree);
  }
}

export default new treeStructure();
