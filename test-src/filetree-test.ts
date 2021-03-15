import { BodyNode } from "@hanul/skynode";
import FileTree from "../src/filetree/FileTree";

const fileTree = new FileTree([{
    name: "폴더1",
    folders: [],
    files: [{
        name: "파일1",
    }],
}], [{
    name: "하핫",
}]);

BodyNode.append(fileTree);
