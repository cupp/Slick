// Generated from Slick.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SlickListener = require('./SlickListener').SlickListener;
var grammarFileName = "Slick.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\'\u00c8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002)\n\u0002\f\u0002\u000e\u0002,\u000b\u0002\u0003",
    "\u0003\u0005\u0003/\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u00035\n\u0003\r\u0003\u000e\u00036\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004?\n\u0004",
    "\r\u0004\u000e\u0004@\u0003\u0005\u0003\u0005\u0005\u0005E\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\na\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u0083\n\n\f\n\u000e\n\u0086\u000b\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u008e\n\f\f\f\u000e\f\u0091\u000b",
    "\f\u0003\r\u0003\r\u0003\r\u0007\r\u0096\n\r\f\r\u000e\r\u0099\u000b",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u00a8\n\u000f\f\u000f\u000e\u000f\u00ab",
    "\u000b\u000f\u0005\u000f\u00ad\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00c1\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00c6\n\u0012\u0003",
    "\u0012\u0002\u0003\u0012\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002\u0003\u0003\u0002\u0006",
    "\t\u0002\u00d3\u0002$\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002",
    "\u0002\u0006:\u0003\u0002\u0002\u0002\bB\u0003\u0002\u0002\u0002\nF",
    "\u0003\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002\u000eL\u0003\u0002",
    "\u0002\u0002\u0010N\u0003\u0002\u0002\u0002\u0012`\u0003\u0002\u0002",
    "\u0002\u0014\u0087\u0003\u0002\u0002\u0002\u0016\u008a\u0003\u0002\u0002",
    "\u0002\u0018\u0092\u0003\u0002\u0002\u0002\u001a\u009a\u0003\u0002\u0002",
    "\u0002\u001c\u00a3\u0003\u0002\u0002\u0002\u001e\u00b0\u0003\u0002\u0002",
    "\u0002 \u00c0\u0003\u0002\u0002\u0002\"\u00c2\u0003\u0002\u0002\u0002",
    "$*\u0005\u0004\u0003\u0002%&\u0005\u0006\u0004\u0002&\'\u0005\u0004",
    "\u0003\u0002\')\u0003\u0002\u0002\u0002(%\u0003\u0002\u0002\u0002),",
    "\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+\u0003\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002-/\u0005",
    "\b\u0005\u0002.-\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/",
    "0\u0003\u0002\u0002\u000204\u0005\u0010\t\u000212\u0005\u0014\u000b",
    "\u000223\u0005\u0010\t\u000235\u0003\u0002\u0002\u000241\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003",
    "\u0002\u0002\u000278\u0003\u0002\u0002\u000289\u0007\'\u0002\u00029",
    "\u0005\u0003\u0002\u0002\u0002:;\u0007\u0003\u0002\u0002;<\u0007\u0003",
    "\u0002\u0002<>\u0007\u0003\u0002\u0002=?\u0007\u0003\u0002\u0002>=\u0003",
    "\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002",
    "@A\u0003\u0002\u0002\u0002A\u0007\u0003\u0002\u0002\u0002BD\u0005\n",
    "\u0006\u0002CE\u0005\f\u0007\u0002DC\u0003\u0002\u0002\u0002DE\u0003",
    "\u0002\u0002\u0002E\t\u0003\u0002\u0002\u0002FG\u0007\u0004\u0002\u0002",
    "GH\u0007\u001b\u0002\u0002H\u000b\u0003\u0002\u0002\u0002IJ\u0007\u0005",
    "\u0002\u0002JK\u0005\u000e\b\u0002K\r\u0003\u0002\u0002\u0002LM\t\u0002",
    "\u0002\u0002M\u000f\u0003\u0002\u0002\u0002NO\u0005\u0012\n\u0002O\u0011",
    "\u0003\u0002\u0002\u0002PQ\b\n\u0001\u0002Qa\u0005 \u0011\u0002RS\u0007",
    "\u000e\u0002\u0002Sa\u0005\u0012\n\u0012Ta\u0007\u001c\u0002\u0002U",
    "a\u0007\u001d\u0002\u0002Va\u0007\u0010\u0002\u0002Wa\u0007\u0011\u0002",
    "\u0002Xa\u0007\u001f\u0002\u0002Ya\u0005\u001a\u000e\u0002Za\u0005\u001c",
    "\u000f\u0002[a\u0005\u001e\u0010\u0002\\]\u0007\u0012\u0002\u0002]^",
    "\u0005\u0012\n\u0002^_\u0007\u0013\u0002\u0002_a\u0003\u0002\u0002\u0002",
    "`P\u0003\u0002\u0002\u0002`R\u0003\u0002\u0002\u0002`T\u0003\u0002\u0002",
    "\u0002`U\u0003\u0002\u0002\u0002`V\u0003\u0002\u0002\u0002`W\u0003\u0002",
    "\u0002\u0002`X\u0003\u0002\u0002\u0002`Y\u0003\u0002\u0002\u0002`Z\u0003",
    "\u0002\u0002\u0002`[\u0003\u0002\u0002\u0002`\\\u0003\u0002\u0002\u0002",
    "a\u0084\u0003\u0002\u0002\u0002bc\f\u0011\u0002\u0002cd\u0007 \u0002",
    "\u0002d\u0083\u0005\u0012\n\u0012ef\f\u0010\u0002\u0002fg\u0007\u000f",
    "\u0002\u0002g\u0083\u0005\u0012\n\u0011hi\f\u000f\u0002\u0002ij\u0007",
    "!\u0002\u0002j\u0083\u0005\u0012\n\u0010kl\f\u000e\u0002\u0002lm\u0007",
    "\"\u0002\u0002m\u0083\u0005\u0012\n\u000fno\f\r\u0002\u0002op\u0007",
    "#\u0002\u0002p\u0083\u0005\u0012\n\u000eqr\f\f\u0002\u0002rs\u0007$",
    "\u0002\u0002s\u0083\u0005\u0012\n\rtu\f\u0015\u0002\u0002uv\u0007\n",
    "\u0002\u0002vw\u0005\u0016\f\u0002wx\u0007\u000b\u0002\u0002xy\u0005",
    "\u0018\r\u0002yz\u0007\f\u0002\u0002z\u0083\u0003\u0002\u0002\u0002",
    "{|\f\u0014\u0002\u0002|}\u0007\n\u0002\u0002}~\u0007\u001d\u0002\u0002",
    "~\u007f\u0007\r\u0002\u0002\u007f\u0080\u0005\u0012\n\u0002\u0080\u0081",
    "\u0007\f\u0002\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082b\u0003",
    "\u0002\u0002\u0002\u0082e\u0003\u0002\u0002\u0002\u0082h\u0003\u0002",
    "\u0002\u0002\u0082k\u0003\u0002\u0002\u0002\u0082n\u0003\u0002\u0002",
    "\u0002\u0082q\u0003\u0002\u0002\u0002\u0082t\u0003\u0002\u0002\u0002",
    "\u0082{\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002",
    "\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002",
    "\u0085\u0013\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0007\u0014\u0002\u0002\u0088\u0089\u0007\u001a\u0002\u0002",
    "\u0089\u0015\u0003\u0002\u0002\u0002\u008a\u008f\u0005\"\u0012\u0002",
    "\u008b\u008c\u0007\r\u0002\u0002\u008c\u008e\u0005\"\u0012\u0002\u008d",
    "\u008b\u0003\u0002\u0002\u0002\u008e\u0091\u0003\u0002\u0002\u0002\u008f",
    "\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090",
    "\u0017\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092",
    "\u0097\u0005\u0012\n\u0002\u0093\u0094\u0007\r\u0002\u0002\u0094\u0096",
    "\u0005\u0012\n\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0099",
    "\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u0019\u0003\u0002\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0012\u0002\u0002\u009b\u009c",
    "\u0007%\u0002\u0002\u009c\u009d\u0005\u0016\f\u0002\u009d\u009e\u0007",
    "\u0015\u0002\u0002\u009e\u009f\u0005\u0012\n\u0002\u009f\u00a0\u0007",
    "\u0016\u0002\u0002\u00a0\u00a1\u0005\u0012\n\u0002\u00a1\u00a2\u0007",
    "\u0013\u0002\u0002\u00a2\u001b\u0003\u0002\u0002\u0002\u00a3\u00ac\u0007",
    "\u0017\u0002\u0002\u00a4\u00a9\u0005\u0012\n\u0002\u00a5\u00a6\u0007",
    "\r\u0002\u0002\u00a6\u00a8\u0005\u0012\n\u0002\u00a7\u00a5\u0003\u0002",
    "\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ad\u0003\u0002",
    "\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ac\u00a4\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002",
    "\u0002\u0002\u00ae\u00af\u0007\u0018\u0002\u0002\u00af\u001d\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0007\u0017\u0002\u0002\u00b1\u00b2\u0005\"",
    "\u0012\u0002\u00b2\u00b3\u0007\u0015\u0002\u0002\u00b3\u00b4\u0005\u0012",
    "\n\u0002\u00b4\u00b5\u0007\u0016\u0002\u0002\u00b5\u00b6\u0005\u0012",
    "\n\u0002\u00b6\u00b7\u0007\u0018\u0002\u0002\u00b7\u001f\u0003\u0002",
    "\u0002\u0002\u00b8\u00b9\u0007\u001d\u0002\u0002\u00b9\u00ba\u0007\u0019",
    "\u0002\u0002\u00ba\u00c1\u0005\u0012\n\u0002\u00bb\u00bc\u0007\u001d",
    "\u0002\u0002\u00bc\u00bd\u0007\u0012\u0002\u0002\u00bd\u00be\u0005\u0012",
    "\n\u0002\u00be\u00bf\u0007\u0013\u0002\u0002\u00bf\u00c1\u0003\u0002",
    "\u0002\u0002\u00c0\u00b8\u0003\u0002\u0002\u0002\u00c0\u00bb\u0003\u0002",
    "\u0002\u0002\u00c1!\u0003\u0002\u0002\u0002\u00c2\u00c5\u0007\u001d",
    "\u0002\u0002\u00c3\u00c4\u0007\u0016\u0002\u0002\u00c4\u00c6\u0007\u001e",
    "\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002",
    "\u0002\u0002\u00c6#\u0003\u0002\u0002\u0002\u0010*.6@D`\u0082\u0084",
    "\u008f\u0097\u00a9\u00ac\u00c0\u00c5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'-'", "'Prove'", "'Method:'", "'A'", "'B'", 
                     "'C'", "'D'", "'['", "'\u2254'", "']'", "','", "'\u00AC'", 
                     "'\u2605'", "'true'", "'false'", "'('", "')'", "'='", 
                     "'|'", "':'", "'{'", "'}'", "'.'", null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, "'\u2571\u2571'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "COMMENT", "RULENUM", 
                      "EVAR", "VAR", "TYPE", "NUM", "ADDOP", "RELOP", "JOP", 
                      "IMPOP", "EQOP", "QUANTIFIER", "WS", "END" ];

var ruleNames =  [ "doc", "proof", "sep", "header", "theorem", "method", 
                   "methodName", "step", "expr", "hint", "varlist", "exprlist", 
                   "quantifiedExpr", "setEnumeration", "setComprehension", 
                   "functionCall", "typedVar" ];

function SlickParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SlickParser.prototype = Object.create(antlr4.Parser.prototype);
SlickParser.prototype.constructor = SlickParser;

Object.defineProperty(SlickParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SlickParser.EOF = antlr4.Token.EOF;
SlickParser.T__0 = 1;
SlickParser.T__1 = 2;
SlickParser.T__2 = 3;
SlickParser.T__3 = 4;
SlickParser.T__4 = 5;
SlickParser.T__5 = 6;
SlickParser.T__6 = 7;
SlickParser.T__7 = 8;
SlickParser.T__8 = 9;
SlickParser.T__9 = 10;
SlickParser.T__10 = 11;
SlickParser.T__11 = 12;
SlickParser.T__12 = 13;
SlickParser.T__13 = 14;
SlickParser.T__14 = 15;
SlickParser.T__15 = 16;
SlickParser.T__16 = 17;
SlickParser.T__17 = 18;
SlickParser.T__18 = 19;
SlickParser.T__19 = 20;
SlickParser.T__20 = 21;
SlickParser.T__21 = 22;
SlickParser.T__22 = 23;
SlickParser.COMMENT = 24;
SlickParser.RULENUM = 25;
SlickParser.EVAR = 26;
SlickParser.VAR = 27;
SlickParser.TYPE = 28;
SlickParser.NUM = 29;
SlickParser.ADDOP = 30;
SlickParser.RELOP = 31;
SlickParser.JOP = 32;
SlickParser.IMPOP = 33;
SlickParser.EQOP = 34;
SlickParser.QUANTIFIER = 35;
SlickParser.WS = 36;
SlickParser.END = 37;

SlickParser.RULE_doc = 0;
SlickParser.RULE_proof = 1;
SlickParser.RULE_sep = 2;
SlickParser.RULE_header = 3;
SlickParser.RULE_theorem = 4;
SlickParser.RULE_method = 5;
SlickParser.RULE_methodName = 6;
SlickParser.RULE_step = 7;
SlickParser.RULE_expr = 8;
SlickParser.RULE_hint = 9;
SlickParser.RULE_varlist = 10;
SlickParser.RULE_exprlist = 11;
SlickParser.RULE_quantifiedExpr = 12;
SlickParser.RULE_setEnumeration = 13;
SlickParser.RULE_setComprehension = 14;
SlickParser.RULE_functionCall = 15;
SlickParser.RULE_typedVar = 16;

function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.proof = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ProofContext);
    } else {
        return this.getTypedRuleContext(ProofContext,i);
    }
};

DocContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitDoc(this);
	}
};




SlickParser.DocContext = DocContext;

SlickParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SlickParser.RULE_doc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.proof();
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__0) {
            this.state = 35;
            this.sep();
            this.state = 36;
            this.proof();
            this.state = 42;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProofContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_proof;
    return this;
}

ProofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProofContext.prototype.constructor = ProofContext;

ProofContext.prototype.step = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StepContext);
    } else {
        return this.getTypedRuleContext(StepContext,i);
    }
};

ProofContext.prototype.END = function() {
    return this.getToken(SlickParser.END, 0);
};

ProofContext.prototype.header = function() {
    return this.getTypedRuleContext(HeaderContext,0);
};

ProofContext.prototype.hint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HintContext);
    } else {
        return this.getTypedRuleContext(HintContext,i);
    }
};

ProofContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterProof(this);
	}
};

ProofContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitProof(this);
	}
};




SlickParser.ProofContext = ProofContext;

SlickParser.prototype.proof = function() {

    var localctx = new ProofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SlickParser.RULE_proof);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__1) {
            this.state = 43;
            this.header();
        }

        this.state = 46;
        this.step();
        this.state = 50; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 47;
            this.hint();
            this.state = 48;
            this.step();
            this.state = 52; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SlickParser.T__17);
        this.state = 54;
        this.match(SlickParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_sep;
    return this;
}

SepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SepContext.prototype.constructor = SepContext;


SepContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSep(this);
	}
};

SepContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSep(this);
	}
};




SlickParser.SepContext = SepContext;

SlickParser.prototype.sep = function() {

    var localctx = new SepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SlickParser.RULE_sep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(SlickParser.T__0);
        this.state = 57;
        this.match(SlickParser.T__0);
        this.state = 58;
        this.match(SlickParser.T__0);
        this.state = 60; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 59;
            this.match(SlickParser.T__0);
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SlickParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.theorem = function() {
    return this.getTypedRuleContext(TheoremContext,0);
};

HeaderContext.prototype.method = function() {
    return this.getTypedRuleContext(MethodContext,0);
};

HeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterHeader(this);
	}
};

HeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitHeader(this);
	}
};




SlickParser.HeaderContext = HeaderContext;

SlickParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SlickParser.RULE_header);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.theorem();
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__2) {
            this.state = 65;
            this.method();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TheoremContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_theorem;
    return this;
}

TheoremContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TheoremContext.prototype.constructor = TheoremContext;

TheoremContext.prototype.RULENUM = function() {
    return this.getToken(SlickParser.RULENUM, 0);
};

TheoremContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterTheorem(this);
	}
};

TheoremContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitTheorem(this);
	}
};




SlickParser.TheoremContext = TheoremContext;

SlickParser.prototype.theorem = function() {

    var localctx = new TheoremContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SlickParser.RULE_theorem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(SlickParser.T__1);
        this.state = 69;
        this.match(SlickParser.RULENUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_method;
    return this;
}

MethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodContext.prototype.constructor = MethodContext;

MethodContext.prototype.methodName = function() {
    return this.getTypedRuleContext(MethodNameContext,0);
};

MethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterMethod(this);
	}
};

MethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitMethod(this);
	}
};




SlickParser.MethodContext = MethodContext;

SlickParser.prototype.method = function() {

    var localctx = new MethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SlickParser.RULE_method);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(SlickParser.T__2);
        this.state = 72;
        this.methodName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_methodName;
    return this;
}

MethodNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodNameContext.prototype.constructor = MethodNameContext;


MethodNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterMethodName(this);
	}
};

MethodNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitMethodName(this);
	}
};




SlickParser.MethodNameContext = MethodNameContext;

SlickParser.prototype.methodName = function() {

    var localctx = new MethodNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SlickParser.RULE_methodName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SlickParser.T__3) | (1 << SlickParser.T__4) | (1 << SlickParser.T__5) | (1 << SlickParser.T__6))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_step;
    return this;
}

StepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepContext.prototype.constructor = StepContext;

StepContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StepContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterStep(this);
	}
};

StepContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitStep(this);
	}
};




SlickParser.StepContext = StepContext;

SlickParser.prototype.step = function() {

    var localctx = new StepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SlickParser.RULE_step);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ImplicationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ImplicationExprContext.prototype = Object.create(ExprContext.prototype);
ImplicationExprContext.prototype.constructor = ImplicationExprContext;

SlickParser.ImplicationExprContext = ImplicationExprContext;

ImplicationExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ImplicationExprContext.prototype.IMPOP = function() {
    return this.getToken(SlickParser.IMPOP, 0);
};
ImplicationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterImplicationExpr(this);
	}
};

ImplicationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitImplicationExpr(this);
	}
};


function EquivalenceExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EquivalenceExprContext.prototype = Object.create(ExprContext.prototype);
EquivalenceExprContext.prototype.constructor = EquivalenceExprContext;

SlickParser.EquivalenceExprContext = EquivalenceExprContext;

EquivalenceExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

EquivalenceExprContext.prototype.EQOP = function() {
    return this.getToken(SlickParser.EQOP, 0);
};
EquivalenceExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterEquivalenceExpr(this);
	}
};

EquivalenceExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitEquivalenceExpr(this);
	}
};


function AtomContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomContext.prototype = Object.create(ExprContext.prototype);
AtomContext.prototype.constructor = AtomContext;

SlickParser.AtomContext = AtomContext;

AtomContext.prototype.EVAR = function() {
    return this.getToken(SlickParser.EVAR, 0);
};

AtomContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

AtomContext.prototype.NUM = function() {
    return this.getToken(SlickParser.NUM, 0);
};
AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitAtom(this);
	}
};


function RelativeExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelativeExprContext.prototype = Object.create(ExprContext.prototype);
RelativeExprContext.prototype.constructor = RelativeExprContext;

SlickParser.RelativeExprContext = RelativeExprContext;

RelativeExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RelativeExprContext.prototype.RELOP = function() {
    return this.getToken(SlickParser.RELOP, 0);
};
RelativeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterRelativeExpr(this);
	}
};

RelativeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitRelativeExpr(this);
	}
};


function SetEnumExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetEnumExprContext.prototype = Object.create(ExprContext.prototype);
SetEnumExprContext.prototype.constructor = SetEnumExprContext;

SlickParser.SetEnumExprContext = SetEnumExprContext;

SetEnumExprContext.prototype.setEnumeration = function() {
    return this.getTypedRuleContext(SetEnumerationContext,0);
};
SetEnumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSetEnumExpr(this);
	}
};

SetEnumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSetEnumExpr(this);
	}
};


function FunctionCallExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallExprContext.prototype = Object.create(ExprContext.prototype);
FunctionCallExprContext.prototype.constructor = FunctionCallExprContext;

SlickParser.FunctionCallExprContext = FunctionCallExprContext;

FunctionCallExprContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};
FunctionCallExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterFunctionCallExpr(this);
	}
};

FunctionCallExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitFunctionCallExpr(this);
	}
};


function AdditionExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditionExprContext.prototype = Object.create(ExprContext.prototype);
AdditionExprContext.prototype.constructor = AdditionExprContext;

SlickParser.AdditionExprContext = AdditionExprContext;

AdditionExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AdditionExprContext.prototype.ADDOP = function() {
    return this.getToken(SlickParser.ADDOP, 0);
};
AdditionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterAdditionExpr(this);
	}
};

AdditionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitAdditionExpr(this);
	}
};


function LeibnizExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeibnizExprContext.prototype = Object.create(ExprContext.prototype);
LeibnizExprContext.prototype.constructor = LeibnizExprContext;

SlickParser.LeibnizExprContext = LeibnizExprContext;

LeibnizExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

LeibnizExprContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};
LeibnizExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterLeibnizExpr(this);
	}
};

LeibnizExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitLeibnizExpr(this);
	}
};


function SetCompExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetCompExprContext.prototype = Object.create(ExprContext.prototype);
SetCompExprContext.prototype.constructor = SetCompExprContext;

SlickParser.SetCompExprContext = SetCompExprContext;

SetCompExprContext.prototype.setComprehension = function() {
    return this.getTypedRuleContext(SetComprehensionContext,0);
};
SetCompExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSetCompExpr(this);
	}
};

SetCompExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSetCompExpr(this);
	}
};


function GeneralExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GeneralExprContext.prototype = Object.create(ExprContext.prototype);
GeneralExprContext.prototype.constructor = GeneralExprContext;

SlickParser.GeneralExprContext = GeneralExprContext;

GeneralExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
GeneralExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterGeneralExpr(this);
	}
};

GeneralExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitGeneralExpr(this);
	}
};


function ParenExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(ExprContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

SlickParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterParenExpr(this);
	}
};

ParenExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitParenExpr(this);
	}
};


function QuantExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QuantExprContext.prototype = Object.create(ExprContext.prototype);
QuantExprContext.prototype.constructor = QuantExprContext;

SlickParser.QuantExprContext = QuantExprContext;

QuantExprContext.prototype.quantifiedExpr = function() {
    return this.getTypedRuleContext(QuantifiedExprContext,0);
};
QuantExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterQuantExpr(this);
	}
};

QuantExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitQuantExpr(this);
	}
};


function JunctionExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

JunctionExprContext.prototype = Object.create(ExprContext.prototype);
JunctionExprContext.prototype.constructor = JunctionExprContext;

SlickParser.JunctionExprContext = JunctionExprContext;

JunctionExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

JunctionExprContext.prototype.JOP = function() {
    return this.getToken(SlickParser.JOP, 0);
};
JunctionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterJunctionExpr(this);
	}
};

JunctionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitJunctionExpr(this);
	}
};


function TSExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TSExprContext.prototype = Object.create(ExprContext.prototype);
TSExprContext.prototype.constructor = TSExprContext;

SlickParser.TSExprContext = TSExprContext;

TSExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

TSExprContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

TSExprContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};
TSExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterTSExpr(this);
	}
};

TSExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitTSExpr(this);
	}
};


function UnaryPrefixExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPrefixExprContext.prototype = Object.create(ExprContext.prototype);
UnaryPrefixExprContext.prototype.constructor = UnaryPrefixExprContext;

SlickParser.UnaryPrefixExprContext = UnaryPrefixExprContext;

UnaryPrefixExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
UnaryPrefixExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterUnaryPrefixExpr(this);
	}
};

UnaryPrefixExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitUnaryPrefixExpr(this);
	}
};



SlickParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, SlickParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FunctionCallExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 79;
            this.functionCall();
            break;

        case 2:
            localctx = new UnaryPrefixExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 80;
            this.match(SlickParser.T__11);
            this.state = 81;
            this.expr(16);
            break;

        case 3:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 82;
            this.match(SlickParser.EVAR);
            break;

        case 4:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 83;
            this.match(SlickParser.VAR);
            break;

        case 5:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 84;
            this.match(SlickParser.T__13);
            break;

        case 6:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 85;
            this.match(SlickParser.T__14);
            break;

        case 7:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 86;
            this.match(SlickParser.NUM);
            break;

        case 8:
            localctx = new QuantExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 87;
            this.quantifiedExpr();
            break;

        case 9:
            localctx = new SetEnumExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 88;
            this.setEnumeration();
            break;

        case 10:
            localctx = new SetCompExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 89;
            this.setComprehension();
            break;

        case 11:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 90;
            this.match(SlickParser.T__15);
            this.state = 91;
            this.expr(0);
            this.state = 92;
            this.match(SlickParser.T__16);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 130;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 128;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AdditionExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 96;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 97;
                    this.match(SlickParser.ADDOP);
                    this.state = 98;
                    this.expr(16);
                    break;

                case 2:
                    localctx = new GeneralExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 99;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 100;
                    this.match(SlickParser.T__12);
                    this.state = 101;
                    this.expr(15);
                    break;

                case 3:
                    localctx = new RelativeExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 103;
                    this.match(SlickParser.RELOP);
                    this.state = 104;
                    this.expr(14);
                    break;

                case 4:
                    localctx = new JunctionExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 105;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 106;
                    this.match(SlickParser.JOP);
                    this.state = 107;
                    this.expr(13);
                    break;

                case 5:
                    localctx = new ImplicationExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 108;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 109;
                    this.match(SlickParser.IMPOP);
                    this.state = 110;
                    this.expr(12);
                    break;

                case 6:
                    localctx = new EquivalenceExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 111;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 112;
                    this.match(SlickParser.EQOP);
                    this.state = 113;
                    this.expr(11);
                    break;

                case 7:
                    localctx = new TSExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 114;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 115;
                    this.match(SlickParser.T__7);
                    this.state = 116;
                    this.varlist();
                    this.state = 117;
                    this.match(SlickParser.T__8);
                    this.state = 118;
                    this.exprlist();
                    this.state = 119;
                    this.match(SlickParser.T__9);
                    break;

                case 8:
                    localctx = new LeibnizExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 121;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 122;
                    this.match(SlickParser.T__7);
                    this.state = 123;
                    this.match(SlickParser.VAR);
                    this.state = 124;
                    this.match(SlickParser.T__10);
                    this.state = 125;
                    this.expr(0);
                    this.state = 126;
                    this.match(SlickParser.T__9);
                    break;

                } 
            }
            this.state = 132;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function HintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_hint;
    return this;
}

HintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HintContext.prototype.constructor = HintContext;

HintContext.prototype.COMMENT = function() {
    return this.getToken(SlickParser.COMMENT, 0);
};

HintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterHint(this);
	}
};

HintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitHint(this);
	}
};




SlickParser.HintContext = HintContext;

SlickParser.prototype.hint = function() {

    var localctx = new HintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SlickParser.RULE_hint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(SlickParser.T__17);
        this.state = 134;
        this.match(SlickParser.COMMENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_varlist;
    return this;
}

VarlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarlistContext.prototype.constructor = VarlistContext;

VarlistContext.prototype.typedVar = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypedVarContext);
    } else {
        return this.getTypedRuleContext(TypedVarContext,i);
    }
};

VarlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterVarlist(this);
	}
};

VarlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitVarlist(this);
	}
};




SlickParser.VarlistContext = VarlistContext;

SlickParser.prototype.varlist = function() {

    var localctx = new VarlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SlickParser.RULE_varlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.typedVar();
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__10) {
            this.state = 137;
            this.match(SlickParser.T__10);
            this.state = 138;
            this.typedVar();
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_exprlist;
    return this;
}

ExprlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprlistContext.prototype.constructor = ExprlistContext;

ExprlistContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterExprlist(this);
	}
};

ExprlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitExprlist(this);
	}
};




SlickParser.ExprlistContext = ExprlistContext;

SlickParser.prototype.exprlist = function() {

    var localctx = new ExprlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SlickParser.RULE_exprlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.expr(0);
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__10) {
            this.state = 145;
            this.match(SlickParser.T__10);
            this.state = 146;
            this.expr(0);
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuantifiedExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_quantifiedExpr;
    return this;
}

QuantifiedExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantifiedExprContext.prototype.constructor = QuantifiedExprContext;

QuantifiedExprContext.prototype.QUANTIFIER = function() {
    return this.getToken(SlickParser.QUANTIFIER, 0);
};

QuantifiedExprContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

QuantifiedExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

QuantifiedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterQuantifiedExpr(this);
	}
};

QuantifiedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitQuantifiedExpr(this);
	}
};




SlickParser.QuantifiedExprContext = QuantifiedExprContext;

SlickParser.prototype.quantifiedExpr = function() {

    var localctx = new QuantifiedExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SlickParser.RULE_quantifiedExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(SlickParser.T__15);
        this.state = 153;
        this.match(SlickParser.QUANTIFIER);
        this.state = 154;
        this.varlist();
        this.state = 155;
        this.match(SlickParser.T__18);
        this.state = 156;
        this.expr(0);
        this.state = 157;
        this.match(SlickParser.T__19);
        this.state = 158;
        this.expr(0);
        this.state = 159;
        this.match(SlickParser.T__16);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetEnumerationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_setEnumeration;
    return this;
}

SetEnumerationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetEnumerationContext.prototype.constructor = SetEnumerationContext;

SetEnumerationContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

SetEnumerationContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSetEnumeration(this);
	}
};

SetEnumerationContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSetEnumeration(this);
	}
};




SlickParser.SetEnumerationContext = SetEnumerationContext;

SlickParser.prototype.setEnumeration = function() {

    var localctx = new SetEnumerationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SlickParser.RULE_setEnumeration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(SlickParser.T__20);
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SlickParser.T__11) | (1 << SlickParser.T__13) | (1 << SlickParser.T__14) | (1 << SlickParser.T__15) | (1 << SlickParser.T__20) | (1 << SlickParser.EVAR) | (1 << SlickParser.VAR) | (1 << SlickParser.NUM))) !== 0)) {
            this.state = 162;
            this.expr(0);
            this.state = 167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SlickParser.T__10) {
                this.state = 163;
                this.match(SlickParser.T__10);
                this.state = 164;
                this.expr(0);
                this.state = 169;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 172;
        this.match(SlickParser.T__21);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetComprehensionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_setComprehension;
    return this;
}

SetComprehensionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetComprehensionContext.prototype.constructor = SetComprehensionContext;

SetComprehensionContext.prototype.typedVar = function() {
    return this.getTypedRuleContext(TypedVarContext,0);
};

SetComprehensionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

SetComprehensionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSetComprehension(this);
	}
};

SetComprehensionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSetComprehension(this);
	}
};




SlickParser.SetComprehensionContext = SetComprehensionContext;

SlickParser.prototype.setComprehension = function() {

    var localctx = new SetComprehensionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SlickParser.RULE_setComprehension);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(SlickParser.T__20);
        this.state = 175;
        this.typedVar();
        this.state = 176;
        this.match(SlickParser.T__18);
        this.state = 177;
        this.expr(0);
        this.state = 178;
        this.match(SlickParser.T__19);
        this.state = 179;
        this.expr(0);
        this.state = 180;
        this.match(SlickParser.T__21);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

FunctionCallContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitFunctionCall(this);
	}
};




SlickParser.FunctionCallContext = FunctionCallContext;

SlickParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SlickParser.RULE_functionCall);
    try {
        this.state = 190;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 182;
            this.match(SlickParser.VAR);
            this.state = 183;
            this.match(SlickParser.T__22);
            this.state = 184;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 185;
            this.match(SlickParser.VAR);
            this.state = 186;
            this.match(SlickParser.T__15);
            this.state = 187;
            this.expr(0);
            this.state = 188;
            this.match(SlickParser.T__16);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypedVarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_typedVar;
    return this;
}

TypedVarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypedVarContext.prototype.constructor = TypedVarContext;

TypedVarContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

TypedVarContext.prototype.TYPE = function() {
    return this.getToken(SlickParser.TYPE, 0);
};

TypedVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterTypedVar(this);
	}
};

TypedVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitTypedVar(this);
	}
};




SlickParser.TypedVarContext = TypedVarContext;

SlickParser.prototype.typedVar = function() {

    var localctx = new TypedVarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SlickParser.RULE_typedVar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(SlickParser.VAR);
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__19) {
            this.state = 193;
            this.match(SlickParser.T__19);
            this.state = 194;
            this.match(SlickParser.TYPE);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SlickParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SlickParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);
		case 1:
			return this.precpred(this._ctx, 14);
		case 2:
			return this.precpred(this._ctx, 13);
		case 3:
			return this.precpred(this._ctx, 12);
		case 4:
			return this.precpred(this._ctx, 11);
		case 5:
			return this.precpred(this._ctx, 10);
		case 6:
			return this.precpred(this._ctx, 19);
		case 7:
			return this.precpred(this._ctx, 18);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SlickParser = SlickParser;
