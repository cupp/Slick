var antlr4 = require('antlr4/index');
//const Slick = require('./SlickListener.js');
const SlickListener = require('./SlickListener.js').SlickListener;
const SlickLexer = require('./SlickLexer.js').SlickLexer;
const SlickParser = require('./SlickParser.js').SlickParser;

// METHOD OVERRIDES

SlickListener.enterEveryRule = (ctx) => {

}

SlickListener.exitEveryRule = (ctx) => {

}

SlickListener.enterProof = (ctx) =>  {
  console.log("Begin");
}

SlickListener.exitProof = (ctx) => {
  console.log("End");
}


// MAIN

let input = "p ⋁ q =    〈 hint 〉 q ⋁ p ╱╱";

let chars = new antlr4.InputStream(input);
let lexer = new SlickLexer(chars);
let tokens = new antlr4.CommonTokenStream(lexer);
let parser = new SlickParser(tokens);
let printer = new SlickListener();
parser.buildParseTrees = true;
let tree = parser.proof();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(parser, tree);
