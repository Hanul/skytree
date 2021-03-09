import { DomNode } from "@hanul/skynode";
import Tree from "./Tree";
import TreeNodeData from "./TreeNodeData";

export default abstract class TreeNode extends DomNode<HTMLLIElement> {

    private childTree: Tree | undefined;

    constructor(data: TreeNodeData) {
        super(document.createElement("li"));
    }
}
