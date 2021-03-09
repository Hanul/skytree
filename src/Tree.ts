import { DomNode } from "@hanul/skynode";
import TreeNode from "./TreeNode";
import TreeNodeData from "./TreeNodeData";

export default abstract class Tree extends DomNode<HTMLUListElement> {

    constructor(dataSet: TreeNodeData[]) {
        super(document.createElement("ul"));
        for (const data of dataSet) {
            this.append(this.createNode(data));
        }
    }

    protected abstract createNode(data: TreeNodeData): TreeNode;
}
