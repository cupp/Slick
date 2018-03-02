const SlickCompiler = require('./SlickCompiler').SlickCompiler;

let compiler = new SlickCompiler();
let results = compiler.compile("\tp ⋁ q\n=\t\t〈 3.24 〉\n\tq ⋁ p ╱╱");
process.stdout.write(results);


// p ⋁ q ≡ q ⋁ p
