import { el } from "@hanul/skynode";
import File from "./File";
import FileTreeNode from "./FileTreeNode";

export default class FileNode extends FileTreeNode {

    constructor(file: File, depth: number) {
        super(file.name, depth);
        this.display(
            this.createIcon(),
            el("span", file.name),
        );
    }

    private createIcon() {
        return el("div",
            {
                style: {
                    padding: 4,
                },
            }, el("div",
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
