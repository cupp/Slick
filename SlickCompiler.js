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
    this.bible = {};
    let theorems = JSON.parse(theoremsStr).theorems;
    for (let i = 0; i < theorems.length; i++) {
      let theorem = theorems[i];
      this.bible[theorem.rule] = "(" + theorem.rule + ") " + (theorem.name? "\\textbf{" + theorem.name.slice(0,1).toUpperCase() + theorem.name.slice(1) + "}:\\ \\ ": "\\ \\ ") + theorem.eq;
    }

    this.latex = {
      '⋀' : '\\wedge',
      '⋁' : '\\vee',
      '≡' : '\\equiv',
      '⇒' : '\\Rightarrow',
      '¬' : '\\neg',
      '≢' : '\\not \\equiv',
      '≔'  : ':='
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
      if (ctx.END()) {
        this.stack.push("\\done\n");
      }
    }

    this.listener.exitSep = (ctx) => {
      this.stack.push("\\end{tabbing}\n\\newpage\n\\begin{tabbing}\n99.\\;\\=(m)\\;\\=\\kill\n");
    }


    this.listener.exitAtom = (ctx) => {
      this.stack.push(ctx.getText());
    }

    this.listener.exitJunctionExpr = (ctx) => {
      let rhs = this.stack.pop();
      let lhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.JOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitImplicationExpr = (ctx) => {
      let rhs = this.stack.pop();
      let lhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.IMPOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitEquivalenceExpr = (ctx) => {
      let rhs = this.stack.pop();
      let lhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.EQOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitUnaryPrefixExpr = (ctx) => {
      let rhs = this.stack.pop();
      let x = "\\neg " + rhs;
      this.stack.push(x);
    }

    this.listener.exitParenExpr = (ctx) => {
      let e = this.stack.pop();
      let x = "(" + e + ")";
      this.stack.push(x);
    }

    this.listener.exitStep = (ctx) => {
      this.stack.push("\\Step\{" + this.stack.pop() + "\}");
    }

    this.listener.exitHint = (ctx) => {
      let token = ctx.COMMENT().getText();
      token = token.substr(1, token.length - 2);
      token = this.removeFm(token);
      this.stack.push("\\Hint\{" + token + "\}\n");
    }

    this.listener.exitTheorem = (ctx) => {
      let theorem = this.bible[ctx.RULENUM().getText()];
      this.stack.push("Prove\\ " + theorem + "\\\\ \\\\\n");
    }
  }

  removeFm(s) {
    let ops = Object.keys(this.latex);
    for (let i = 0; i < ops.length; i++) {
      s = s.replace(new RegExp(ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
    }
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
