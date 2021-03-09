import FileTreeNodeData from "./FileTreeData";
import FileTreeNode from "./FileTreeNode";
import Tree from "./Tree";
import TreeNode from "./TreeNode";

export default class FileTree extends Tree {

    constructor(dataSet: FileTreeNodeData[]) {
        super(dataSet);
    }

    protected createNode(data: FileTreeNodeData): TreeNode {
        return new FileTreeNode(data);
    }
}
