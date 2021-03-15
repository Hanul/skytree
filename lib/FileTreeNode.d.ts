import FileTreeNodeData from "./FileTreeData";
import Tree from "./Tree";
import TreeNode from "./TreeNode";
export default class FileTreeNode extends TreeNode {
    private depth;
    constructor(data: FileTreeNodeData, depth: number);
    protected createTree(dataSet: FileTreeNodeData[]): Tree;
}
//# sourceMappingURL=FileTreeNode.d.ts.map