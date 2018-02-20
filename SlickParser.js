// Generated from Slick.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SlickListener = require('./SlickListener').SlickListener;
var grammarFileName = "Slick.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003 \u009f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0006\u0002\u001b\n\u0002\r\u0002\u000e",
    "\u0002\u001c\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u00031\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "S\n\u0003\f\u0003\u000e\u0003V\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004[\n\u0004\f\u0004\u000e\u0004^\u000b\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005e\n\u0005",
    "\f\u0005\u000e\u0005h\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006m\n\u0006\f\u0006\u000e\u0006p\u000b\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u007f\n\b",
    "\f\b\u000e\b\u0082\u000b\b\u0005\b\u0084\n\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u0098\n\n",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u009d\n\u000b\u0003",
    "\u000b\u0003\\\u0003\u0004\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0002\u0002\u0002\u00ae\u0002\u0016\u0003\u0002\u0002\u0002\u0004",
    "0\u0003\u0002\u0002\u0002\u0006W\u0003\u0002\u0002\u0002\ba\u0003\u0002",
    "\u0002\u0002\ni\u0003\u0002\u0002\u0002\fq\u0003\u0002\u0002\u0002\u000e",
    "z\u0003\u0002\u0002\u0002\u0010\u0087\u0003\u0002\u0002\u0002\u0012",
    "\u0097\u0003\u0002\u0002\u0002\u0014\u0099\u0003\u0002\u0002\u0002\u0016",
    "\u001a\u0005\u0004\u0003\u0002\u0017\u0018\u0005\u0006\u0004\u0002\u0018",
    "\u0019\u0005\u0004\u0003\u0002\u0019\u001b\u0003\u0002\u0002\u0002\u001a",
    "\u0017\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c",
    "\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0003\u0002\u0002\u0002\u001e\u001f\u0007 \u0002\u0002\u001f",
    "\u0003\u0003\u0002\u0002\u0002 !\b\u0003\u0001\u0002!1\u0005\u0012\n",
    "\u0002\"#\u0007\u0007\u0002\u0002#1\u0005\u0004\u0003\u0012$1\u0007",
    "\u0015\u0002\u0002%1\u0007\u0016\u0002\u0002&1\u0007\t\u0002\u0002\'",
    "1\u0007\n\u0002\u0002(1\u0007\u0018\u0002\u0002)1\u0005\f\u0007\u0002",
    "*1\u0005\u000e\b\u0002+1\u0005\u0010\t\u0002,-\u0007\u000b\u0002\u0002",
    "-.\u0005\u0004\u0003\u0002./\u0007\f\u0002\u0002/1\u0003\u0002\u0002",
    "\u00020 \u0003\u0002\u0002\u00020\"\u0003\u0002\u0002\u00020$\u0003",
    "\u0002\u0002\u00020%\u0003\u0002\u0002\u00020&\u0003\u0002\u0002\u0002",
    "0\'\u0003\u0002\u0002\u00020(\u0003\u0002\u0002\u00020)\u0003\u0002",
    "\u0002\u00020*\u0003\u0002\u0002\u00020+\u0003\u0002\u0002\u00020,\u0003",
    "\u0002\u0002\u00021T\u0003\u0002\u0002\u000223\f\u0011\u0002\u00023",
    "4\u0007\u0019\u0002\u00024S\u0005\u0004\u0003\u001256\f\u0010\u0002",
    "\u000267\u0007\b\u0002\u00027S\u0005\u0004\u0003\u001189\f\u000f\u0002",
    "\u00029:\u0007\u001a\u0002\u0002:S\u0005\u0004\u0003\u0010;<\f\u000e",
    "\u0002\u0002<=\u0007\u001b\u0002\u0002=S\u0005\u0004\u0003\u000f>?\f",
    "\r\u0002\u0002?@\u0007\u001c\u0002\u0002@S\u0005\u0004\u0003\u000eA",
    "B\f\f\u0002\u0002BC\u0007\u001d\u0002\u0002CS\u0005\u0004\u0003\rDE",
    "\f\u0015\u0002\u0002EF\u0007\u0003\u0002\u0002FG\u0005\b\u0005\u0002",
    "GH\u0007\u0004\u0002\u0002HI\u0005\n\u0006\u0002IJ\u0007\u0005\u0002",
    "\u0002JS\u0003\u0002\u0002\u0002KL\f\u0014\u0002\u0002LM\u0007\u0003",
    "\u0002\u0002MN\u0007\u0016\u0002\u0002NO\u0007\u0006\u0002\u0002OP\u0005",
    "\u0004\u0003\u0002PQ\u0007\u0005\u0002\u0002QS\u0003\u0002\u0002\u0002",
    "R2\u0003\u0002\u0002\u0002R5\u0003\u0002\u0002\u0002R8\u0003\u0002\u0002",
    "\u0002R;\u0003\u0002\u0002\u0002R>\u0003\u0002\u0002\u0002RA\u0003\u0002",
    "\u0002\u0002RD\u0003\u0002\u0002\u0002RK\u0003\u0002\u0002\u0002SV\u0003",
    "\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002",
    "U\u0005\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WX\u0007\r",
    "\u0002\u0002X\\\u0007\u000e\u0002\u0002Y[\u000b\u0002\u0002\u0002ZY",
    "\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002",
    "\u0002\\Z\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002\u0002^\\\u0003",
    "\u0002\u0002\u0002_`\u0007\u000f\u0002\u0002`\u0007\u0003\u0002\u0002",
    "\u0002af\u0005\u0014\u000b\u0002bc\u0007\u0006\u0002\u0002ce\u0005\u0014",
    "\u000b\u0002db\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003",
    "\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002g\t\u0003\u0002\u0002\u0002",
    "hf\u0003\u0002\u0002\u0002in\u0005\u0004\u0003\u0002jk\u0007\u0006\u0002",
    "\u0002km\u0005\u0004\u0003\u0002lj\u0003\u0002\u0002\u0002mp\u0003\u0002",
    "\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002o\u000b",
    "\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002qr\u0007\u000b\u0002",
    "\u0002rs\u0007\u001e\u0002\u0002st\u0005\b\u0005\u0002tu\u0007\u0010",
    "\u0002\u0002uv\u0005\u0004\u0003\u0002vw\u0007\u0011\u0002\u0002wx\u0005",
    "\u0004\u0003\u0002xy\u0007\f\u0002\u0002y\r\u0003\u0002\u0002\u0002",
    "z\u0083\u0007\u0012\u0002\u0002{\u0080\u0005\u0004\u0003\u0002|}\u0007",
    "\u0006\u0002\u0002}\u007f\u0005\u0004\u0003\u0002~|\u0003\u0002\u0002",
    "\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002\u0002",
    "\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083{\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0007\u0013\u0002\u0002\u0086\u000f\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0007\u0012\u0002\u0002\u0088\u0089\u0005\u0014\u000b",
    "\u0002\u0089\u008a\u0007\u0010\u0002\u0002\u008a\u008b\u0005\u0004\u0003",
    "\u0002\u008b\u008c\u0007\u0011\u0002\u0002\u008c\u008d\u0005\u0004\u0003",
    "\u0002\u008d\u008e\u0007\u0013\u0002\u0002\u008e\u0011\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0007\u0016\u0002\u0002\u0090\u0091\u0007\u0014\u0002",
    "\u0002\u0091\u0098\u0005\u0004\u0003\u0002\u0092\u0093\u0007\u0016\u0002",
    "\u0002\u0093\u0094\u0007\u000b\u0002\u0002\u0094\u0095\u0005\u0004\u0003",
    "\u0002\u0095\u0096\u0007\f\u0002\u0002\u0096\u0098\u0003\u0002\u0002",
    "\u0002\u0097\u008f\u0003\u0002\u0002\u0002\u0097\u0092\u0003\u0002\u0002",
    "\u0002\u0098\u0013\u0003\u0002\u0002\u0002\u0099\u009c\u0007\u0016\u0002",
    "\u0002\u009a\u009b\u0007\u0011\u0002\u0002\u009b\u009d\u0007\u0017\u0002",
    "\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002",
    "\u0002\u009d\u0015\u0003\u0002\u0002\u0002\r\u001c0RT\\fn\u0080\u0083",
    "\u0097\u009c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'['", "'\u2254'", "']'", "','", "'\u00AC'", 
                     "'\u2605'", "'true'", "'false'", "'('", "')'", "'='", 
                     "'\u2329'", "'\u232A'", "'|'", "':'", "'{'", "'}'", 
                     "'.'", null, null, null, null, null, null, null, null, 
                     null, null, null, "'\u2571\u2571'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "EVAR", "VAR", "TYPE", "NUM", "ADDOP", "RELOP", 
                      "JOP", "IMPOP", "EQOP", "QUANTIFIER", "WS", "END" ];

var ruleNames =  [ "proof", "expr", "hint", "varlist", "exprlist", "quantifiedExpr", 
                   "setEnumeration", "setComprehension", "functionCall", 
                   "typedVar" ];

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
SlickParser.EVAR = 19;
SlickParser.VAR = 20;
SlickParser.TYPE = 21;
SlickParser.NUM = 22;
SlickParser.ADDOP = 23;
SlickParser.RELOP = 24;
SlickParser.JOP = 25;
SlickParser.IMPOP = 26;
SlickParser.EQOP = 27;
SlickParser.QUANTIFIER = 28;
SlickParser.WS = 29;
SlickParser.END = 30;

SlickParser.RULE_proof = 0;
SlickParser.RULE_expr = 1;
SlickParser.RULE_hint = 2;
SlickParser.RULE_varlist = 3;
SlickParser.RULE_exprlist = 4;
SlickParser.RULE_quantifiedExpr = 5;
SlickParser.RULE_setEnumeration = 6;
SlickParser.RULE_setComprehension = 7;
SlickParser.RULE_functionCall = 8;
SlickParser.RULE_typedVar = 9;

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

ProofContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ProofContext.prototype.END = function() {
    return this.getToken(SlickParser.END, 0);
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
    this.enterRule(localctx, 0, SlickParser.RULE_proof);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.expr(0);
        this.state = 24; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 21;
            this.hint();
            this.state = 22;
            this.expr(0);
            this.state = 26; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SlickParser.T__10);
        this.state = 28;
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

ExprContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.EVAR = function() {
    return this.getToken(SlickParser.EVAR, 0);
};

ExprContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

ExprContext.prototype.NUM = function() {
    return this.getToken(SlickParser.NUM, 0);
};

ExprContext.prototype.quantifiedExpr = function() {
    return this.getTypedRuleContext(QuantifiedExprContext,0);
};

ExprContext.prototype.setEnumeration = function() {
    return this.getTypedRuleContext(SetEnumerationContext,0);
};

ExprContext.prototype.setComprehension = function() {
    return this.getTypedRuleContext(SetComprehensionContext,0);
};

ExprContext.prototype.ADDOP = function() {
    return this.getToken(SlickParser.ADDOP, 0);
};

ExprContext.prototype.RELOP = function() {
    return this.getToken(SlickParser.RELOP, 0);
};

ExprContext.prototype.JOP = function() {
    return this.getToken(SlickParser.JOP, 0);
};

ExprContext.prototype.IMPOP = function() {
    return this.getToken(SlickParser.IMPOP, 0);
};

ExprContext.prototype.EQOP = function() {
    return this.getToken(SlickParser.EQOP, 0);
};

ExprContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

ExprContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitExpr(this);
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
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, SlickParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 31;
            this.functionCall();
            break;

        case 2:
            this.state = 32;
            this.match(SlickParser.T__4);
            this.state = 33;
            this.expr(16);
            break;

        case 3:
            this.state = 34;
            this.match(SlickParser.EVAR);
            break;

        case 4:
            this.state = 35;
            this.match(SlickParser.VAR);
            break;

        case 5:
            this.state = 36;
            this.match(SlickParser.T__6);
            break;

        case 6:
            this.state = 37;
            this.match(SlickParser.T__7);
            break;

        case 7:
            this.state = 38;
            this.match(SlickParser.NUM);
            break;

        case 8:
            this.state = 39;
            this.quantifiedExpr();
            break;

        case 9:
            this.state = 40;
            this.setEnumeration();
            break;

        case 10:
            this.state = 41;
            this.setComprehension();
            break;

        case 11:
            this.state = 42;
            this.match(SlickParser.T__8);
            this.state = 43;
            this.expr(0);
            this.state = 44;
            this.match(SlickParser.T__9);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 82;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 80;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 48;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 49;
                    this.match(SlickParser.ADDOP);
                    this.state = 50;
                    this.expr(16);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 51;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 52;
                    this.match(SlickParser.T__5);
                    this.state = 53;
                    this.expr(15);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 54;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 55;
                    this.match(SlickParser.RELOP);
                    this.state = 56;
                    this.expr(14);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 57;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 58;
                    this.match(SlickParser.JOP);
                    this.state = 59;
                    this.expr(13);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 60;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 61;
                    this.match(SlickParser.IMPOP);
                    this.state = 62;
                    this.expr(12);
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 63;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 64;
                    this.match(SlickParser.EQOP);
                    this.state = 65;
                    this.expr(11);
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 66;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 67;
                    this.match(SlickParser.T__0);
                    this.state = 68;
                    this.varlist();
                    this.state = 69;
                    this.match(SlickParser.T__1);
                    this.state = 70;
                    this.exprlist();
                    this.state = 71;
                    this.match(SlickParser.T__2);
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 73;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 74;
                    this.match(SlickParser.T__0);
                    this.state = 75;
                    this.match(SlickParser.VAR);
                    this.state = 76;
                    this.match(SlickParser.T__3);
                    this.state = 77;
                    this.expr(0);
                    this.state = 78;
                    this.match(SlickParser.T__2);
                    break;

                } 
            }
            this.state = 84;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
    this.enterRule(localctx, 4, SlickParser.RULE_hint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(SlickParser.T__10);
        this.state = 86;
        this.match(SlickParser.T__11);
        this.state = 90;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 87;
                this.matchWildcard(); 
            }
            this.state = 92;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 93;
        this.match(SlickParser.T__12);
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
    this.enterRule(localctx, 6, SlickParser.RULE_varlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.typedVar();
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__3) {
            this.state = 96;
            this.match(SlickParser.T__3);
            this.state = 97;
            this.typedVar();
            this.state = 102;
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
    this.enterRule(localctx, 8, SlickParser.RULE_exprlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.expr(0);
        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__3) {
            this.state = 104;
            this.match(SlickParser.T__3);
            this.state = 105;
            this.expr(0);
            this.state = 110;
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
    this.enterRule(localctx, 10, SlickParser.RULE_quantifiedExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(SlickParser.T__8);
        this.state = 112;
        this.match(SlickParser.QUANTIFIER);
        this.state = 113;
        this.varlist();
        this.state = 114;
        this.match(SlickParser.T__13);
        this.state = 115;
        this.expr(0);
        this.state = 116;
        this.match(SlickParser.T__14);
        this.state = 117;
        this.expr(0);
        this.state = 118;
        this.match(SlickParser.T__9);
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
    this.enterRule(localctx, 12, SlickParser.RULE_setEnumeration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(SlickParser.T__15);
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SlickParser.T__4) | (1 << SlickParser.T__6) | (1 << SlickParser.T__7) | (1 << SlickParser.T__8) | (1 << SlickParser.T__15) | (1 << SlickParser.EVAR) | (1 << SlickParser.VAR) | (1 << SlickParser.NUM))) !== 0)) {
            this.state = 121;
            this.expr(0);
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SlickParser.T__3) {
                this.state = 122;
                this.match(SlickParser.T__3);
                this.state = 123;
                this.expr(0);
                this.state = 128;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 131;
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
    this.enterRule(localctx, 14, SlickParser.RULE_setComprehension);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(SlickParser.T__15);
        this.state = 134;
        this.typedVar();
        this.state = 135;
        this.match(SlickParser.T__13);
        this.state = 136;
        this.expr(0);
        this.state = 137;
        this.match(SlickParser.T__14);
        this.state = 138;
        this.expr(0);
        this.state = 139;
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
    this.enterRule(localctx, 16, SlickParser.RULE_functionCall);
    try {
        this.state = 149;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.match(SlickParser.VAR);
            this.state = 142;
            this.match(SlickParser.T__17);
            this.state = 143;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
            this.match(SlickParser.VAR);
            this.state = 145;
            this.match(SlickParser.T__8);
            this.state = 146;
            this.expr(0);
            this.state = 147;
            this.match(SlickParser.T__9);
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
    this.enterRule(localctx, 18, SlickParser.RULE_typedVar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(SlickParser.VAR);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__14) {
            this.state = 152;
            this.match(SlickParser.T__14);
            this.state = 153;
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
	case 1:
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
