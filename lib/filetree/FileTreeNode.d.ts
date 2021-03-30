import { ScrollItemDomNode } from "@hanul/skynode";
import FileTreeNodeData from "./FileTreeNodeData";
export default class FileTreeNode extends ScrollItemDomNode<FileTreeNodeData, HTMLLIElement> {
    private data;
    constructor(data: FileTreeNodeData);
    get nodeData(): FileTreeNodeData;
}
//# sourceMappingURL=FileTreeNode.d.ts.map