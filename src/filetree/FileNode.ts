import { el } from "@hanul/skynode";
import FileTreeNode from "./FileTreeNode";
import FileTreeNodeData from "./FileTreeNodeData";

export default class FileNode extends FileTreeNode {

    constructor(data: FileTreeNodeData) {
        super(data);
        this.append(
            this.createIcon(),
            el("span", data.name),
        );
    }

    private createIcon() {
        return el("div",
            { style: { padding: 4 } },
            el("div",
                {
                    style: {
                        position: "relative",
                        width: 14,
                        height: 14,
                        border: "solid 1px currentColor",
                        borderRadius: 2,
                    },
                },
                el("div", {
                    style: {
                        position: "absolute",
                        left: 2,
                        top: 2,
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        border: "solid 1px currentColor",
                    },
                }),
                el("div", {
                    style: {
                        position: "absolute",
                        left: 2,
                        top: 8,
                        width: 10,
                        height: 6,
                        borderTop: "solid 1px currentColor",
                        borderRight: "solid 1px currentColor",
                        transform: "rotate(-45deg)",
                    },
                }),
            ),
        );
    }
}
