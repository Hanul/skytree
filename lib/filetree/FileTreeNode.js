"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class FileTreeNode extends skynode_1.DomNode {
    constructor(name, depth) {
        super(document.createElement("li"));
        this.name = name;
        this.depth = depth;
        this.displayContainer = skynode_1.el("div").appendTo(this);
    }
    display(...contents) {
        this.displayContainer.empty();
        skynode_1.el("div", {
            style: {
                paddingLeft: this.depth * 20,
                display: "flex",
                height: 22,
                lineHeight: 22,
            },
            mouseenter: () => this.style({ background: "#2a2d2e" }),
            mouseleave: () => this.style({ background: "transparent" }),
            draggable: true,
            dragstart: (event) => {
                this.draggingCopy = new skynode_1.DomNode(document.createElement("div")).appendTo(skynode_1.BodyNode);
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
            dragend: () => { var _a; return (_a = this.draggingCopy) === null || _a === void 0 ? void 0 : _a.delete(); },
        }, ...contents).appendTo(this.displayContainer);
    }
}
exports.default = FileTreeNode;
//# sourceMappingURL=FileTreeNode.js.map