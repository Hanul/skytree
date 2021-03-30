import { ScrollItemDomNode } from "@hanul/skynode";
import FileTreeNodeData from "./FileTreeNodeData";

export default class FileTreeNode extends ScrollItemDomNode<FileTreeNodeData, HTMLLIElement> {

    constructor(private data: FileTreeNodeData) {
        super(document.createElement("li"));
        this.style({
            paddingLeft: data.depth * 20,
            display: "flex",
            height: 22,
            lineHeight: 22,
        });
    }

    public get nodeData(): FileTreeNodeData { return this.data; }
}
