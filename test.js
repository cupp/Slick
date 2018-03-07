const SlickCompiler = require('./SlickCompiler').SlickCompiler;
const fs = require('fs');
let compiler = new SlickCompiler();
let code = fs.readFileSync('Test/test2.fm').toString();
let results = compiler.compile(code);
process.stdout.write(results);


// p ⋁ q ≡ q ⋁ p
