// SlickCompiler.js

var antlr4 = require('antlr4/index');
const SlickListener = require('./SlickListener.js').SlickListener;
const SlickLexer = require('./SlickLexer.js').SlickLexer;
const SlickParser = require('./SlickParser.js').SlickParser;
const fs = require('fs');
const preamble = fs.readFileSync("preamble.tex").toString();
const theoremsStr= fs.readFileSync("theorems.json").toString();


class SlickCompiler {
  constructor() {
    // this.bible = {
    //   '3.3'  : "(3.3) \\textbf{Identity of $\\,\\equiv$}:\\ \\ \\ $\\textit{true} \\equiv q \\equiv q$",
    //   '3.5'  : "(3.5) $p \\equiv p$",
    //   '3.24' : "(3.24) \\textbf{Symmetry of $\\vee$}:\\ \\ \\ $p \\vee q \\equivs q \\vee p$",
    //   '3.29' : "(3.29) \\textbf{Zero of $\\vee$}:\\ \\ \\ $p \\vee \\textit{true}\\ \\equiv\\ \\textit{true}$",
    //   '3.35' : "(3.35) \\textbf{Golden rule}:\\ \\ \\ $p \\wedge q\\ \\equiv\\ p\\ \\equiv\\ q\\ \\equiv\\ p \\vee q$",
    //   '3.39' : "(3.39) \\textbf{Identity of $\\wedge$}:\\ \\ \\ $p \\wedge \\textit{true}\\ \\equiv\\ p$",
    //   '3.49' : "(3.49) $p \\wedge (q \\equiv r)\\ \\equiv\\ p \\wedge q\\ \\equiv\\ p \\wedge r\\ \\equiv\\ p$",
    //   '3.60' : "(3.60) \\textbf{Implication}:\\ \\ \\ $p \\Rightarrow q\\ \\equiv\\ p \\wedge q\\ \\equiv\\ p$",
    //   '3.62' : "(3.62) $p \\Rightarrow (q \\equiv r)\\ \\equiv\\ p \\wedge q\\ \\equiv\\ p \\wedge r$",
    //   '' : ""
    // };

    this.bible = {};
    let theorems = JSON.parse(theoremsStr).theorems;
    for (let i = 0; i < theorems.length; i++) {
      let theorem = theorems[i];
      this.bible[theorem.rule] = "(" + theorem.rule + ") " + (theorem.name? "\\textbf{" + theorem.name + "}: ": " ") + theorem.eq;
    }

    this.latex = {
      '⋀' : '\\wedge',
      '⋁' : '\\vee',
      '≡' : '\\equiv',
      '⇒' : '\\Rightarrow'
    };
    this.input;
    this.output = "";
    this.chars;
    this.lexer;
    this.tokens;
    this.parser;
    this.listener = new SlickListener();
    this.stack = [];

    this.listener.exitDoc = (ctx) => {
      this.output += preamble;
      while (this.stack.length > 0) {
        this.output += this.stack.shift() + "\n";
      }
      this.output += "\\end{tabbing}\\end{document}\n\n";
    }

    this.listener.exitProof = (ctx) => {
      this.stack.push("\\done\n");
    }

    this.listener.exitSep = (ctx) => {
      this.stack.push("\\\\\\\\\\\\\\\\\\pagebreak\n");
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

    this.listener.exitImplicationExpr = (ctx) => {
      let lhs = this.stack.pop();
      let rhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.IMPOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitEquivalenceExpr = (ctx) => {
      let lhs = this.stack.pop();
      let rhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.EQOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitStep = (ctx) => {
      this.stack.push("\\Step\{" + this.stack.pop() + "\}");
    }

    this.listener.exitHint = (ctx) => {
      let token = ctx.COMMENT().getText();
      token = token.substr(1, token.length - 3);
      token = this.removeFm(token);
      this.stack.push("\\Hint\{" + token + "\}\n");
    }

    this.listener.exitTheorem = (ctx) => {
      let theorem = this.bible[ctx.RULENUM().getText()];
      this.stack.push("Prove\\ " + theorem + "\\\\ \\\\\n");
    }
  }

  removeFm(s) {
    s = s.replace(/⋀/g, '$\\wedge$');
    s = s.replace(/⋁/g, '$\\vee$');
    s = s.replace(/≡/g, '$\\equiv$');
    s = s.replace(/⇒/g, '$\\Rightarrow$');
    return s;
  }

  compile(str) {
    this.input = str;
    this.chars = new antlr4.InputStream(this.input);
    this.lexer = new SlickLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new SlickParser(this.tokens);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.doc();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
    return this.output;
  }
}




exports.SlickCompiler = SlickCompiler;
