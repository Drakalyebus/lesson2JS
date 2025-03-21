import path from "path";

export default (name) => path.resolve("..", "client", `${name}${path.extname(name) == "" ? ".html" : path.extname(name)}`);