import { BodyNode, DomNode, el, ScrollItemDomNode } from "@hanul/skynode";
import FileTreeNodeData from "./FileTreeNodeData";

export default class FileTreeNode extends ScrollItemDomNode<FileTreeNodeData, HTMLLIElement> {

    private dragging: DomNode<HTMLDivElement> | undefined;

    constructor(private data: FileTreeNodeData) {
        super(document.createElement("li"));

        this.style({
            paddingLeft: data.depth * 20,
            display: "flex",
            height: 22,
            lineHeight: 22,
        });
        this.on("mouseenter", () => this.style({ background: "#2a2d2e" }));
        this.on("mouseleave", () => this.style({ background: "transparent" }));

        this.domElement.draggable = true;
        this.on("dragstart", (event: DragEvent) => {
            this.dragging = el<HTMLDivElement>("div").appendTo(BodyNode);
            this.dragging.appendText(this.data.name);
            this.dragging.style({
                position: "fixed",
                left: -999999,
                top: -999999,
                background: "#094771",
                color: "#ccc",
                fontSize: 12,
                padding: "3px 5px",
                borderRadius: 5,
            });
            if (event.dataTransfer !== null) {
                event.dataTransfer.setDragImage(this.dragging.domElement, 0, 0);
            }
        });
        this.on("dragend", () => this.dragging?.delete());
    }

    public get nodeData(): FileTreeNodeData { return this.data; }
}
