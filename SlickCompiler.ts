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
         TheoremHeaderContext,
         ExerciseHeaderContext,
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
         AssumingConjunctsMethodContext,
         CaseProofContex,
         CaseListContext,
         Case1Context,
         Case2Context,
         CaseProof1Context,
         CaseProof2Context,
         ContradictionMethodContext,
         ContrapositiveMethodContext,
         FunctionDotContext,
         FunctionParenContext,
         HeaderContext,
         BodyContext,
         RangeContext,
         InvereseCallContext,
         ArrayExprContext,
         EmptyRangeExpr
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
      this.bible[theorem.rule] = "(" + theorem.rule + ") " + (theorem.name? theorem.name.substr(0,1).toUpperCase() + theorem.name.substr(1) + ":\\ \\ ": ":\\ \\ ") + theorem.eq;
    }

    // this.listener = new SlickListener();
    this.latex = {
      '⋀' : '\\wedge',
      '⋁' : '\\vee',
      '=' : '=',
      '≠' : '\\neq',
      '≡' : '\\equiv',
      '⇒' : '\\Rightarrow',
      '⇐' : '\\Leftarrow',
      '¬' : '\\neg',
      '≢' : '\\not \\equiv',
      '≔' : ':=',
      '*' : "\\star",
      '%' : "\\star",
      '∀' : "\\forall",
      '∃' : "\\exists",
      '∑' : "\\Sigma",
      '∏' : "\\Pi",
      '<' : '<',
      '>' : '>',
      '≤' : '\\leq',
      '≥' : '\\geq',
      '+' : '+',
      '-' : '-',
      '∪' : '\\cup',
      '∩' : '\\cap',
      '|:': '\\drrb',
      '|' : '\\dr'
    };

    this.output = "";
    this.stack = [];
    this.lineCount = 0; // provide mechanism for counting lines in a single standard proof
    this.exprCount = 0;
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
      expo = expo.substr(3);
      expo = this.removeFm(expo);
      expo = this.formatExpo(expo);
      this.stack.push("\\\\\n\\text{" + expo);
    }
  }

  public exitEndExpo = (ctx : EndExpoContext) => {
    if (ctx.EXPO()) {
      let expo = ctx.EXPO().toString();
      expo = expo.substr(3);
      expo = this.removeFm(expo);
      expo = this.formatExpo(expo);
      this.stack.push("\\\\\n\\text{" + expo);
    }
  }

  public enterStandardProof = (ctx : StandardProofContext) => {
    this.lineCount = 0;
  }

  public exitStandardProof = (ctx : StandardProofContext) => {
    let proofText = "";
    for (let i = 0; i < this.lineCount; i++) {
      proofText = this.stack.pop() + "\n" + proofText;
    }
    if (ctx.END()) {
      proofText += "\\done\n";
    }
    this.stack.push(proofText);
    this.lineCount = 0;
  }

  public exitTheoremHeader = (ctx : TheoremHeaderContext) => {
    let str = "";
    if (ctx.method()) {
      str = this.stack.pop();
    }
    str = this.stack.pop() + str + "\\\\\n";
    this.stack.push(str);
  }

  public exitExerciseHeader = (ctx : ExerciseHeaderContext) => {
    this.stack.push("\\underline{Exercise " + ctx.RULENUM() + "}\\\\\\\\\n");
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
    this.lineCount++;
  }

  public exitHint = (ctx : HintContext) => {
    let token = ctx.COMMENT().text;
    token = token.substr(1, token.length - 2);
    token = this.removeFm(token);
    token = token.replace(/(\W)([B-Zb-z])(\W)/g, "$1\\textit{$2}$3");
    let op = this.stack.pop();
    this.stack.push("\\\\$" + this.latex[op] + "$\\>\\>\\ \\ \\ $\\Gll$\\ \\text{" + token + "}\\ $\\Ggg$ \\\\");
    this.lineCount++;
  }

  public exitHintOp = (ctx : HintOpContext) => {
    this.stack.push(ctx.text);
  }

  public exitEmptyRangeExpr = (ctx : EmptyRangeExpr) => {
    let q = this.latex[ctx.QUANTIFIER()];
    let body = this.stack.pop();
    let dummies = this.stack.pop();
    this.stack.push("(" + q + " " + dummies + " \\drrb " + body + ")");
  }

  public exitQuantifiedExpr = (ctx : QuantifiedExprContext) => {
    let q = this.latex[ctx.QUANTIFIER()];
    let body = this.stack.pop();
    let range = this.stack.pop();
    let dummies = this.stack.pop();
    this.stack.push("(" + q + " " + dummies + " \\dr " + range + " : " + body + ")");
  }

  public exitBibleTheorem = (ctx : BibleTheoremContext) => {
    let proveOrReprove = ctx.PROVE();
    let theorem = this.bible[ctx.RULENUM()];
    this.stack.push("\\color{blue}" + proveOrReprove + "\\ " + theorem + "\\\\\n");
  }

  public exitAdHocTheorem = (ctx : AdHocTheoremContext) => {
    let proveOrReprove = ctx.PROVE();
    let theorem = this.stack.pop();
    this.stack.push("\\color{blue}" + proveOrReprove + "\\ $" + theorem + "$\\\\\n")
  }

  private removeNewLine = () => {
    let e = this.stack.pop();
    e.replace(/\\\\\\\\$/, "\\\\");
    this.stack.push(e);
  }

  public exitAssumingConjunctsMethod = (ctx : AssumingConjunctsMethodContext) => {
    this.stack.push("\\color{blue}by assuming the conjuncts of the antecedent\\\\\n");
  }

  public exitContradictionMethod = (ctx : ContradictionMethodContext) => {
    this.stack.push("\\color{blue}by contradiction\\\\\n");
  }

  public exitContrapositiveMethod = (ctx : ContrapositiveMethodContext) => {
    let cp = this.stack.pop();
    this.stack.push("\\color{blue}by proving the contrapositive: $" + cp + "$\\\\\n");
  }

  public exitCaseProof = (ctx : CaseProofContext) => {
    let caseProof2 = this.stack.pop();
    let caseProof1 = this.stack.pop();
    let caseList = this.stack.pop();
    let theorem = this.stack.pop();
    this.stack.push(theorem + "\\color{blue}by case analysis on " + ctx.VAR() + "\\\\ \\\\\n"
        + caseList + "\\\\" + caseProof1 + caseProof2);
  }

  public exitCaseList = (ctx : CaseListContext) => {
    let case2 = this.stack.pop();
    let case1 = this.stack.pop();
    this.stack.push("Must prove\\\\\\>" + case1 + "\\\\\\>" + case2
        + "\\\\");
  }

  public exitCase1 = (ctx : Case1Context) => {
    let e = this.stack.pop();
    this.stack.push("(1)\\>$" + e + "$");
  }

  public exitCase2 = (ctx : Case2Context) => {
    let e = this.stack.pop();
    this.stack.push("(2)\\>$" + e + "$");
  }

  public exitCaseProof1 = (ctx : CaseProof1Context) => {
    let p = this.stack.pop();
    this.stack.push("\\underline{Proof of (1)}\\\\\\\\\n" + p + "\\\\\\\\");
  }

  public exitCaseProof2 = (ctx : CaseProof2Context) => {
    let p = this.stack.pop();
    this.stack.push("\\underline{Proof of (2)}\\\\\\\\\n" + p);
  }

/*
  public exitExpo = (ctx : ExpoContext) => {
    this.stack.push("\\text{" + ctx.text + "}");
  }
*/
  public exitFunctionDot = (ctx : FunctionDotContext) => {
    let e = this.stack.pop();
    this.stack.push(ctx.VAR() + "." + e);
  }

  public exitFunctionParen = (ctx : FunctionParenContext) => {
    let e = this.stack.pop();
    this.stack.push(ctx.VAR() + "(" + e + ")");
  }

  public enterExprlist = (ctx : ExprlistContext) => {
    this.stack.push("XXXXXXXXXX");
  }

  public exitExprlist = (ctx : ExprlistContext) => {
    let str = "";
    let i = 0;
    let e = this.stack.pop();
    while (e !== "XXXXXXXXXX") {
      str = e + (i > 0? ", ": "") + str;
      e = this.stack.pop();
      i++;
    }
    this.stack.push(str);
  }

  public enterVarlist = (ctx : VarlistContext) => {
    this.stack.push("VVVVVVVVVV");
  }

  public exitVarlist = (ctx : VarlistContext) => {
    let str = "";
    let i = 0;
    let v = this.stack.pop();
    while (v !== "VVVVVVVVVV") {
      str = v + (i > 0? ", ": "") + str;
      v = this.stack.pop();
      i++;
    }
    this.stack.push(str);
  }

  public exitTypedVar = (ctx : TypedVarContext) => {
    this.stack.push(ctx.VAR() + (ctx.TYPE()? " : " + ctx.TYPE() : ""));
  }

  public exitRelativeExpr = (ctx : RelativeExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    this.stack.push(lhs + " " + this.latex[ctx.RELOP()] + " " + rhs);
  }

  public exitAdditionExpr = (ctx : AdditionExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    this.stack.push(lhs + " " + this.latex[ctx.ADDOP()] + " " + rhs);
  }

  public exitTSExpr = (ctx : TSExprContext) => {
    let eList = this.stack.pop();
    let vList = this.stack.pop();
    let e = this.stack.pop();
    this.stack.push(e + "[" + vList + " := " + eList + "]");
  }

  public exitInverseCall = (ctx : InvereseCallContext) => {
    let f = this.stack.pop();
    let finv = f.substr(0,1) + "^{-1}" + f.substr(1);
    this.stack.push(finv);
  }

  public exitArrayExpr = (ctx : ArrayExprContext) => {
    let index = this.stack.pop();
    let arrayName = ctx.VAR();
    this.stack.push(arrayName + "[" + index + "]");
  }

  public exitGeneralExpr = (ctx : GeneralExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    this.stack.push(lhs + " " + "\\star " + rhs);
  }

  public removeFm(s : string) {
    let ops = Object.keys(this.latex);
    for (let i = 0; i < ops.length; i++) {
      s = s.replace(new RegExp("\\" + ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
    }
    return s;
  }

  public formatExpo(s : string) {
    s = s.replace(/\/\*/, "");
    s = s.replace(/\*\//, "");
    s = s.replace(/(\W)([B-Zb-z])(\W)/g, "$1\\textit{$2}$3");
    s = s.replace(/true/g, "\\textit{true}");
    s = s.replace(/false/g, "\\textit{false}");
    s = s.replace(/ /g, "\\ ");
    s = s.replace(/\n/g, "\}\\\\\n\\text\{");
    s = s.substr(0, s.length - 8);
    s += "\\\\\n"
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
