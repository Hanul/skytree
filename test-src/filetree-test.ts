import { BodyNode } from "@hanul/skynode";
import SkyUtil from "skyutil";
import File from "../src/filetree/File";
import FileTree from "../src/filetree/FileTree";
import Folder from "../src/filetree/Folder";

const folders: Folder[] = [];
const files: File[] = [];

SkyUtil.repeat(1000, () => {
    folders.push({
        name: "폴더1",
        opened: true,
        folders: [],
        files: [{
            name: "파일1",
        }],
    });
    files.push({
        name: "하핫",
    });
});

const fileTree = new FileTree(folders, files);

fileTree.style({
    position: "absolute",
    width: "100%",
    height: "100%",
});

BodyNode.append(fileTree);
