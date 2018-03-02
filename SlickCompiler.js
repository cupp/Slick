// SlickCompiler.js

var antlr4 = require('antlr4/index');
const SlickListener = require('./SlickListener.js').SlickListener;
const SlickLexer = require('./SlickLexer.js').SlickLexer;
const SlickParser = require('./SlickParser.js').SlickParser;
const fs = require('fs');
const preamble = fs.readFileSync("preamble.tex");


class SlickCompiler {
  constructor() {
    this.bible = {
      '3.24' : "(3.24) \\textbf{Symmetry of $\\vee$}:\\ \\ $p \\vee q \\equivs q \\vee p$"
    };

    this.latex = {
      '⋀' : '\\wedge',
      '⋁'  : '\\vee'
    };
    this.input;
    this.output = "";
    this.chars;
    this.lexer;
    this.tokens;
    this.parser;
    this.listener = new SlickListener();
    this.stack = [];

    // this.listener.getLatex = (ctx) => {
    //   return this.listener.latex.get(ctx);
    // }
    //
    // this.listener.setLatex = (ctx, str) => {
    //   this.listener.latex.put(ctx, str);
    // }

    // this.listener.enterProof = (ctx) =>  {
    //   this.output += preamble;
    // }

    this.listener.exitProof = (ctx) => {
      this.output += preamble;
      while (this.stack.length > 0) {
        this.output += this.stack.pop() + "\n";
      }
      this.output += "\\done\n\\end{tabbing}\\end{document}\n\n";
    }

    this.listener.exitAtom = (ctx) => {
      this.stack.push(ctx.getText());
    }

    this.listener.exitJunctionExpr = (ctx) => {
      let lhs = this.stack.pop();
      let rhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.JOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitStep = (ctx) => {
      this.stack.push("\\Step\{" + this.stack.pop() + "\}");
    }

    // this.listener.enterHint = (ctx) => {
    //   this.output += "$=$/>/>\\hint{" + ctx.getText();
    // }
    //

    this.listener.exitHint = (ctx) => {
      // let str = "";
      // let i = 2
      // for (i = 2; i < ctx.getChildCount() - 2; i++) {
      //   str += ctx.getChild(i) + " ";
      // }
      // str += ctx.getChild(i);
      this.stack.push("\\Hint\{" + this.bible[ctx.RULENUM()] + "\}\n");
    }
  }

  compile(str) {
    this.input = str;
    this.chars = new antlr4.InputStream(this.input);
    this.lexer = new SlickLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new SlickParser(this.tokens);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.proof();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
    return this.output;
  }
}




exports.SlickCompiler = SlickCompiler;
