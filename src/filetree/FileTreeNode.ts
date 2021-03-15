import { BodyNode, DomNode, el } from "@hanul/skynode";

export default abstract class FileTreeNode extends DomNode<HTMLLIElement> {

    private displayContainer: DomNode<HTMLDivElement>;
    private draggingCopy: DomNode<HTMLDivElement> | undefined;

    constructor(private name: string, private depth: number) {
        super(document.createElement("li"));
        this.displayContainer = el<HTMLDivElement>("div").appendTo(this);
    }

    protected display(...contents: DomNode<any>[]) {
        this.displayContainer.empty();
        el("div",
            {
                style: {
                    paddingLeft: this.depth * 20,
                    display: "flex",
                    height: 22,
                    lineHeight: 22,
                },
                mouseenter: () => this.style({ background: "#2a2d2e" }),
                mouseleave: () => this.style({ background: "transparent" }),
                draggable: true,
                dragstart: (event: DragEvent) => {
                    this.draggingCopy = new DomNode(document.createElement("div")).appendTo(BodyNode);
                    this.draggingCopy.appendText(this.name);
                    this.draggingCopy.style({
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
                        event.dataTransfer.setDragImage(this.draggingCopy.domElement, 0, 0);
                    }
                },
                dragend: () => this.draggingCopy?.delete(),
            },
            ...contents,
        ).appendTo(this.displayContainer);
    }
}
