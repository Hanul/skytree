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
    }
    get nodeData() { return this.data; }
}
exports.default = FileTreeNode;
//# sourceMappingURL=FileTreeNode.js.map