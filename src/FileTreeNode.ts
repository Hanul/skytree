import { DomNode, el } from "@hanul/skynode";
import FileTreeNodeData from "./FileTreeData";
import TreeNode from "./TreeNode";

export default class FileTreeNode extends TreeNode {

    private icon: DomNode<HTMLSpanElement>;

    constructor(data: FileTreeNodeData) {
        super(data);
        this.append(
            this.icon = el("span", data.color),
            el("span", data.filename)
        );
    }
}
