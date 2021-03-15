import { DomNode, el } from "@hanul/skynode";
import File from "./File";
import FileNode from "./FileNode";
import Folder from "./Folder";
import FolderNode from "./FolderNode";

export default class FileTree extends DomNode<HTMLUListElement> {

    private folderList: DomNode<HTMLUListElement>;
    private fileList: DomNode<HTMLUListElement>;

    constructor(folders: Folder[], files: File[], private depth = 0) {
        super(document.createElement("ul"));
        this.style({
            background: "#252526",
            color: "#ccc",
            fontSize: 13,
        });
        this.append(el("li", this.folderList = el("ul")));
        this.append(el("li", this.fileList = el("ul")));
        for (const folder of folders) { this.addFolder(folder); }
        for (const file of files) { this.addFile(file); }
    }

    public addFolder(folder: Folder): void {
        this.folderList.append(new FolderNode(folder, this.depth));
    }

    public addFile(file: File): void {
        this.fileList.append(new FileNode(file, this.depth));
    }
}
