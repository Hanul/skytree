import { DomNode, el } from "@hanul/skynode";
import FileTree from "./FileTree";
import FileTreeNode from "./FileTreeNode";
import Folder from "./Folder";

export default class FolderNode extends FileTreeNode {

    private arrow: DomNode<HTMLDivElement>;
    private fileTree: FileTree;
    private opening = false;

    constructor(folder: Folder, depth: number) {
        super(folder.name, depth);
        this.display(
            el("div", // icon
                {
                    style: {
                        padding: "6px 7px",
                    },
                }, this.arrow = el("div", {
                    style: {
                        width: 8,
                        height: 8,
                        borderBottom: "solid 1px currentColor",
                        borderLeft: "solid 1px currentColor",
                    },
                }),
            ),
            el("span", folder.name),
        );
        this.fileTree = new FileTree(folder.folders, folder.files, depth + 1).appendTo(this);
        this.close();
    }

    public open(): void {
        this.arrow.style({ transform: "translate(0px, 0px) rotate(-45deg)" });
        this.opening = true;
    }

    public close(): void {
        this.arrow.style({ transform: "translate(-2px, 2px) rotate(-135deg)" });
        this.opening = false;
    }

    public toggle(): void {
        this.opening !== true ? this.open() : this.close();
    }
}
