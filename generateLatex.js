var antlr4 = require('antlr4/index');
const SlickListener = require('./SlickListener.js').SlickListener;
const SlickLexer = require('./SlickLexer.js').SlickLexer;
const SlickParser = require('./SlickParser.js').SlickParser;

// METHOD OVERRIDES

// SlickListener.prototype.enterEveryRule = (node) => {
//
// }
//
// SlickListener.prototype.exitEveryRule = (node) => {
//
// }
//
SlickListener.prototype.enterProof = (ctx) =>  {
  process.stdout.write("\n\nBEGIN\n\t");
}

SlickListener.prototype.exitProof = (ctx) => {
  process.stdout.write("\nEND\n\n");
}

SlickListener.prototype.enterExpr = (ctx) => {
  process.stdout.write("EXPRESSION(");
}

SlickListener.prototype.exitExpr = (ctx) => {
  process.stdout.write(ctx.getText() + "): " + ctx.getTokens());
}

SlickListener.prototype.enterJOP

SlickListener.prototype.enterHint = (ctx) => {
  process.stdout.write("\n\t\tHINT\n\t");
}

// MAIN

let input = "\tp ⋁ q\n=\t\t〈 symmetry of ⋁ 〉\n\tq ⋁ p ╱╱";

let chars = new antlr4.InputStream(input);
let lexer = new SlickLexer(chars);
let tokens = new antlr4.CommonTokenStream(lexer);
let parser = new SlickParser(tokens);
let printer = new SlickListener();
parser.buildParseTrees = true;
let tree = parser.proof();
console.log(input);
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
