import { DomNode } from "@hanul/skynode";
import TreeNodeData from "./TreeNodeData";
export default abstract class TreeNode extends DomNode<HTMLLIElement> {
    private childTree;
    constructor(data: TreeNodeData);
}
//# sourceMappingURL=TreeNode.d.ts.map