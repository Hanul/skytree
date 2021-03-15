import { DomNode } from "@hanul/skynode";
import File from "./File";
import Folder from "./Folder";
export default class FileTree extends DomNode<HTMLUListElement> {
    private depth;
    private folderList;
    private fileList;
    constructor(folders: Folder[], files: File[], depth?: number);
    addFolder(folder: Folder): void;
    addFile(file: File): void;
}
//# sourceMappingURL=FileTree.d.ts.map