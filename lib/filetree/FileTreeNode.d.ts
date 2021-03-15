import { DomNode } from "@hanul/skynode";
export default abstract class FileTreeNode extends DomNode<HTMLLIElement> {
    private name;
    private depth;
    private displayContainer;
    private draggingCopy;
    constructor(name: string, depth: number);
    protected display(...contents: DomNode<any>[]): void;
}
//# sourceMappingURL=FileTreeNode.d.ts.map