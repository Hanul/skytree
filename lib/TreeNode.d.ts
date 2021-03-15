import { DomNode } from "@hanul/skynode";
import Tree from "./Tree";
import TreeNodeData from "./TreeNodeData";
export default abstract class TreeNode extends DomNode<HTMLLIElement> {
    private childTree;
    constructor(data: TreeNodeData, depth: number);
    protected abstract createTree(dataSet: TreeNodeData[]): Tree;
    protected addChild(...children: TreeNodeData[]): void;
}
//# sourceMappingURL=TreeNode.d.ts.map