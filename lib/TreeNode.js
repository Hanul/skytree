"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class TreeNode extends skynode_1.DomNode {
    constructor(data, depth) {
        super(document.createElement("li"));
    }
    addChild(...children) {
        if (this.childTree === undefined) {
            this.append(this.childTree = this.createTree(children));
        }
    }
}
exports.default = TreeNode;
//# sourceMappingURL=TreeNode.js.map