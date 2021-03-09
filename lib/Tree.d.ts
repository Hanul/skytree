import { DomNode } from "@hanul/skynode";
import TreeNode from "./TreeNode";
import TreeNodeData from "./TreeNodeData";
export default abstract class Tree extends DomNode<HTMLUListElement> {
    constructor(dataSet: TreeNodeData[]);
    protected abstract createNode(data: TreeNodeData): TreeNode;
}
//# sourceMappingURL=Tree.d.ts.map