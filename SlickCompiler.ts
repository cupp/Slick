// SlickCompiler.ts

import { ImplicationExprContext,
         EquivalenceExprContext,
         AtomContext,
         RelativeExprContext,
         SetEnumExprContext,
         FunctionCallExprContext,
         AdditionExprContext,
         LeibnizExprContext,
         SetCompExprContext,
         GeneralExprContext,
         ParenExprContext,
         TSExprContext,
         JunctionExprContext,
         QuantExprContext,
         UnaryPrefixExprContext,
         DocContext,
         StandardProofContext,
         CaseProofContext,
         SepContext,
         HeaderContext,
         TheoremContext,
         MethodContext,
         MethodNameContext,
         StepContext,
         ExprContext,
         HintContext,
         VarlistContext,
         ExprlistContext,
         QuantifiedExprContext,
         SetEnumerationContext,
         SetComprehensionContext,
         FunctionCallContext,
         TypedVarContext,
         HintOpContext,
         BibleTheoremContext,
         AdHocTheoremContext,
         StartExpoContext,
         EndExpoContext,
         AssumingConjunctsMethodContext
} from './SlickParser';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TerminalNode, ParseTreeWalker } from 'antlr4ts/tree';
import { TokenStream } from 'antlr4ts/tree';
import { SlickParser } from './SlickParser';
import { SlickListener } from './SlickListener';
import { SlickLexer } from './SlickLexer';

import * as fs from 'fs';

export class SlickCompiler implements SlickListener {
  private parser : SlickParser;
  private bible : Object;
  private latex : Object;
  private output : string;
  private preamble : string;
  private input : string;
  private chars : ANTLRInputStream;
  private lexer : SlickLexer;
  private tokens : CommonTokenStream;
  private stack : Array;


  constructor() {
    this.preamble = fs.readFileSync("preamble.tex").toString();
    let theoremsStr= fs.readFileSync("theorems.json").toString();
    this.bible = {};
    let theorems = JSON.parse(theoremsStr).theorems;
    for (let i = 0; i < theorems.length; i++) {
      let theorem = theorems[i];
      this.bible[theorem.rule] = "(" + theorem.rule + ") " + (theorem.name? theorem.name.substr(0,1).toUpperCase() + theorem.name.substr(1) + ":\\ \\ ": "\\ \\ ") + theorem.eq;
    }

    // this.listener = new SlickListener();
    this.latex = {
      '⋀' : '\\wedge',
      '⋁' : '\\vee',
      '=' : '=',
      '≡' : '\\equiv',
      '⇒' : '\\Rightarrow',
      '⇐' : '\\Leftarrow',
      '¬' : '\\neg',
      '≢' : '\\not \\equiv',
      '≔'  : ':='
    };

    this.output = "";
    this.stack = [];
  }

  public exitDoc = (ctx : DocContext) => {
    this.output += this.preamble;
    while (this.stack.length > 0) {
      this.output += this.stack.shift() + "\n";
    }
    this.output += "\\end{tabbing}\\end{document}\n\n";
  }

  public exitStartExpo = (ctx : StartExpoContext) => {
    if (ctx.EXPO()) {
      let expo = ctx.EXPO().toString();
      expo = this.removeFm(expo);
      expo = this.formatExpo(expo);
      this.stack.push("\\\\\n\\text{" + expo);
    }
  }

  public exitEndExpo = (ctx : EndExpoContext) => {
    if (ctx.EXPO()) {
      let expo = ctx.EXPO().toString();
      expo = this.removeFm(expo);
      expo = this.formatExpo(expo);
      this.stack.push("\\\\\n\\text{" + expo);
    }
  }

  public exitStandardProof = (ctx : StandardProofContext) => {
    if (ctx.END()) {
      this.stack.push("\\done\n");
    }
  }

  public exitSep = (ctx : SepContext) => {
    this.stack.push("\\end{tabbing}\n\\newpage\n\\begin{tabbing}\n99.\\;\\=(m)\\;\\=\\kill\n");
  }


  public exitAtom = (ctx : AtomContext) => {
    this.stack.push(ctx.text);
  }

  public exitJunctionExpr = (ctx : JunctionExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    let x = lhs + " " + this.latex[ctx.JOP()] + " " + rhs;
    this.stack.push(x);
  }

  public exitImplicationExpr = (ctx : ImplicationExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    let x = lhs + " " + this.latex[ctx.IMPOP()] + " " + rhs;
    this.stack.push(x);
  }

  public exitEquivalenceExpr = (ctx : EquivalenceExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    let x = lhs + " " + this.latex[ctx.EQOP()] + " " + rhs;
    this.stack.push(x);
  }

  public exitUnaryPrefixExpr = (ctx : UnaryPrefixExprContext) => {
    let rhs = this.stack.pop();
    let x = "\\neg " + rhs;
    this.stack.push(x);
  }

  public exitParenExpr = (ctx : ParenExprContext) => {
    let e = this.stack.pop();
    let x = "(" + e + ")";
    this.stack.push(x);
  }

  public exitLeibnizExpr = (ctx : LeibnizExprContext) => {
    let z = this.stack.pop();
    let v = ctx.VAR().text;
    let e = this.stack.pop()
    let x = e + "^\{" + v + "\}_\{" + z + "\}";
    this.stack.push(x);
  }

  public exitStep = (ctx : StepContext) => {
    this.stack.push("\\Step\{" + this.stack.pop() + "\}");
  }

  public exitHint = (ctx : HintContext) => {
    let token = ctx.COMMENT().text;
    token = token.substr(1, token.length - 2);
    token = this.removeFm(token);
    let op = this.stack.pop();
    this.stack.push("\\\\$" + this.latex[op] + "$\\>\\>\\ \\ \\ $\\Gll$\\ \\text{" + token + "}\\ $\\Ggg$ \\\\");
  }

  public exitHintOp = (ctx : HintOpContext) => {
    this.stack.push(ctx.text);
  }

  public exitBibleTheorem = (ctx : BibleTheoremContext) => {
    let proveOrReprove = ctx.PROVE();
    let theorem = this.bible[ctx.RULENUM()];
    this.stack.push("\\color{blue}" + proveOrReprove + "\\ " + theorem + "\\\\ \\\\\n");
  }

  public exitAdHocTheorem = (ctx : AdHocTheoremContext) => {
    let proveOrReprove = ctx.PROVE();
    let theorem = this.stack.pop();
    this.stack.push("\\color{blue}" + proveOrReprove + "\\ $" + theorem + "$\\\\ \\\\\n")
  }

  public exitAssumingConjunctsMethod = (ctx : AssumingConjunctsMethodContext) => {
    this.stack.push("by assuming the conjuncts of the antecedent\\\\\\\\");
  }

  public enterCaseProof = (ctx: CaseProofContext) => {
    this.stack.push("by case analysis on " + ctx.VAR() + "\\\\\\\\");
  }

  public exitCaseProof = (ctx : CaseProofContext) => {

  }

  public exitExpo = (ctx : ExpoContext) => {
    this.stack.push("\\text{" + ctx.text + "}");
  }

  public removeFm(s : string) {
    let ops = Object.keys(this.latex);
    for (let i = 0; i < ops.length; i++) {
      s = s.replace(new RegExp(ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
    }
    return s;
  }

  public formatExpo(s : string) {
    s = s.replace(/\/\*/, "");
    s = s.replace(/\*\//, "");
    s = s.replace(/(\W)([B-Zb-z])(\W)/g, "$1\\textit{$2}$3");
    s = s.replace(/true/g, "\\textit{true}");
    s = s.replace(/false/g, "\\textit{false}");
    s = s.replace(/\n/g, "\} \\\\\n\\text\{");
    s = s.replace(/ /g, "\\ \\ ");
    s = s.substr(0, s.length - 7);
    return s;
  }

  public compile(data : string) {
    this.input = data;
    this.chars = new ANTLRInputStream(this.input);
    this.lexer = new SlickLexer(this.chars);
    this.tokens = new CommonTokenStream(this.lexer);
    this.parser = new SlickParser(this.tokens);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.doc();
    ParseTreeWalker.DEFAULT.walk(this, this.tree);
    return this.output;
  }
}
