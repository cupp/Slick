"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SlickCompiler_1 = require("./SlickCompiler");
const fs = require("fs");
const filename = process.argv[2];
if (filename) {
    let compiler = new SlickCompiler_1.SlickCompiler();
    let code = fs.readFileSync(filename).toString();
    let results = compiler.compile(code);
    process.stdout.write(results);
}
else {
    process.stdout.write("Missing filename\n");
}
//# sourceMappingURL=fm2latex.js.map