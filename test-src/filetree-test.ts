import { BodyNode } from "@hanul/skynode";
import FileTree from "../src/FileTree";

const fileTree = new FileTree([{
    color: "#4CAF50",
    filename: "TEST!",
}]);
BodyNode.append(fileTree);
