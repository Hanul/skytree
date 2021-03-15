"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Tree extends skynode_1.DomNode {
    constructor(dataSet, depth) {
        super(document.createElement("ul"));
        this.depth = depth;
        for (const data of dataSet) {
            this.append(this.createNode(data));
        }
    }
}
exports.default = Tree;
//# sourceMappingURL=Tree.js.map