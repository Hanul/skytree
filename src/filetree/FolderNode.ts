import { DomNode, el } from "@hanul/skynode";
import FileTreeNode from "./FileTreeNode";
import FileTreeNodeData from "./FileTreeNodeData";

export default class FolderNode extends FileTreeNode {

    private arrow: DomNode<HTMLDivElement>;

    constructor(data: FileTreeNodeData) {
        super(data);
        this.append(
            el("div", // icon
                { style: { padding: "6px 7px" } },
                this.arrow = el("div", {
                    style: {
                        width: 8,
                        height: 8,
                        borderBottom: "solid 1px currentColor",
                        borderLeft: "solid 1px currentColor",
                    },
                }),
            ),
            el("span", data.name),
        );
    }
}
