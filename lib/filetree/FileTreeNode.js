"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class FileTreeNode extends skynode_1.ScrollItemDomNode {
    constructor(data) {
        super(document.createElement("li"));
        this.data = data;
        this.style({
            paddingLeft: data.depth * 20,
            display: "flex",
            height: 22,
            lineHeight: 22,
        });
        this.on("mouseenter", () => this.style({ background: "#2a2d2e" }));
        this.on("mouseleave", () => this.style({ background: "transparent" }));
        this.domElement.draggable = true;
        this.on("dragstart", (event) => {
            this.dragging = new skynode_1.DomNode(document.createElement("div")).appendTo(skynode_1.BodyNode);
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
        this.on("dragend", () => { var _a; return (_a = this.dragging) === null || _a === void 0 ? void 0 : _a.delete(); });
    }
    get nodeData() { return this.data; }
}
exports.default = FileTreeNode;
//# sourceMappingURL=FileTreeNode.js.map