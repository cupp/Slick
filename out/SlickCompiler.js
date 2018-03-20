"use strict";
// SlickCompiler.ts
Object.defineProperty(exports, "__esModule", { value: true });
const SlickParser_1 = require("./SlickParser");
const fs = require("fs");
class SlickCompiler {
    constructor() {
        this.exitDoc = (ctx) => {
            this.output += this.preamble;
            while (this.stack.length > 0) {
                this.output += this.stack.shift() + "\n";
            }
            this.output += "\\end{tabbing}\\end{document}\n\n";
        };
        this.exitProof = (ctx) => {
            if (ctx.END()) {
                this.stack.push("\\done\n");
            }
        };
        this.exitSep = (ctx) => {
            this.stack.push("\\end{tabbing}\n\\newpage\n\\begin{tabbing}\n99.\\;\\=(m)\\;\\=\\kill\n");
        };
        this.exitAtom = (ctx) => {
            this.stack.push(ctx.getText());
        };
        this.exitJunctionExpr = (ctx) => {
            let rhs = this.stack.pop();
            let lhs = this.stack.pop();
            let x = lhs + " " + this.latex[ctx.JOP()] + " " + rhs;
            this.stack.push(x);
        };
        this.exitImplicationExpr = (ctx) => {
            let rhs = this.stack.pop();
            let lhs = this.stack.pop();
            let x = lhs + " " + this.latex[ctx.IMPOP()] + " " + rhs;
            this.stack.push(x);
        };
        this.exitEquivalenceExpr = (ctx) => {
            let rhs = this.stack.pop();
            let lhs = this.stack.pop();
            let x = lhs + " " + this.latex[ctx.EQOP()] + " " + rhs;
            this.stack.push(x);
        };
        this.exitUnaryPrefixExpr = (ctx) => {
            let rhs = this.stack.pop();
            let x = "\\neg " + rhs;
            this.stack.push(x);
        };
        this.exitParenExpr = (ctx) => {
            let e = this.stack.pop();
            let x = "(" + e + ")";
            this.stack.push(x);
        };
        this.exitStep = (ctx) => {
            this.stack.push("\\Step\{" + this.stack.pop() + "\}");
        };
        this.exitHint = (ctx) => {
            let token = ctx.COMMENT().getText();
            token = token.substr(1, token.length - 2);
            token = this.removeFm(token);
            this.stack.push("\\Hint\{" + token + "\}\n");
        };
        this.exitTheorem = (ctx) => {
            let theorem = this.bible[ctx.RULENUM().getText()];
            this.stack.push("Prove\\ " + theorem + "\\\\ \\\\\n");
        };
        this.preamble = fs.readFileSync("preamble.tex").toString();
        let theoremsStr = fs.readFileSync("theorems.json").toString();
        this.bible = {};
        let theorems = JSON.parse(theoremsStr).theorems;
        for (let i = 0; i < theorems.length; i++) {
            let theorem = theorems[i];
            this.bible[theorem.rule] = "(" + theorem.rule + ") " + (theorem.name ? "\\textbf{" + theorem.name.slice(0, 1).toUpperCase() + theorem.name.slice(1) + "}:\\ \\ " : "\\ \\ ") + theorem.eq;
        }
        this.latex = {
            '⋀': '\\wedge',
            '⋁': '\\vee',
            '≡': '\\equiv',
            '⇒': '\\Rightarrow',
            '¬': '\\neg',
            '≢': '\\not \\equiv',
            '≔': ':='
        };
        this.input;
        this.output = "";
        this.chars;
        this.lexer;
        this.tokens;
        this.parser;
        this.listener = new SlickListener();
        this.stack = [];
    }
    removeFm(s) {
        let ops = Object.keys(this.latex);
        for (let i = 0; i < ops.length; i++) {
            s = s.replace(new RegExp(ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
        }
        return s;
    }
    compile(data) {
        this.input = data;
        this.chars = new ANTLRInputStream(this.input);
        this.lexer = new SlickLexer(this.chars);
        this.tokens = new CommonTokenStream(this.lexer);
        this.parser = new SlickParser_1.SlickParser(this.tokens);
        this.parser.buildParseTrees = true;
        this.tree = this.parser.doc();
        ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
        return this.output;
    }
}
exports.SlickCompiler = SlickCompiler;
exports.SlickCompiler = SlickCompiler;
//# sourceMappingURL=SlickCompiler.js.map