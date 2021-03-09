"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Tree extends skynode_1.DomNode {
    constructor(dataSet) {
        super(document.createElement("ul"));
        for (const data of dataSet) {
            this.append(this.createNode(data));
        }
    }
}
exports.default = Tree;
//# sourceMappingURL=Tree.js.map