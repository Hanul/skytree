import FileTreeNodeData from "./FileTreeData";
import Tree from "./Tree";
import TreeNode from "./TreeNode";
export default class FileTree extends Tree {
    constructor(dataSet: FileTreeNodeData[], depth?: number);
    protected createNode(data: FileTreeNodeData): TreeNode;
}
//# sourceMappingURL=FileTree.d.ts.map