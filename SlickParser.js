// Generated from Slick.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SlickListener = require('./SlickListener').SlickListener;
var grammarFileName = "Slick.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003 \u00a3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0006\u0002\u001d\n\u0002",
    "\r\u0002\u000e\u0002\u001e\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00045",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004W\n\u0004\f\u0004\u000e",
    "\u0004Z\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "_\n\u0005\f\u0005\u000e\u0005b\u000b\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006i\n\u0006\f\u0006\u000e\u0006",
    "l\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007q\n\u0007",
    "\f\u0007\u000e\u0007t\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u0083\n\t\f\t\u000e\t\u0086\u000b\t\u0005\t\u0088\n\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u009c\n\u000b\u0003\f\u0003\f\u0003\f",
    "\u0005\f\u00a1\n\f\u0003\f\u0003`\u0003\u0006\r\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0002\u0002\u0002\u00b1\u0002\u0018",
    "\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u00064\u0003",
    "\u0002\u0002\u0002\b[\u0003\u0002\u0002\u0002\ne\u0003\u0002\u0002\u0002",
    "\fm\u0003\u0002\u0002\u0002\u000eu\u0003\u0002\u0002\u0002\u0010~\u0003",
    "\u0002\u0002\u0002\u0012\u008b\u0003\u0002\u0002\u0002\u0014\u009b\u0003",
    "\u0002\u0002\u0002\u0016\u009d\u0003\u0002\u0002\u0002\u0018\u001c\u0005",
    "\u0004\u0003\u0002\u0019\u001a\u0005\b\u0005\u0002\u001a\u001b\u0005",
    "\u0004\u0003\u0002\u001b\u001d\u0003\u0002\u0002\u0002\u001c\u0019\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001c\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f \u0003",
    "\u0002\u0002\u0002 !\u0007 \u0002\u0002!\u0003\u0003\u0002\u0002\u0002",
    "\"#\u0005\u0006\u0004\u0002#\u0005\u0003\u0002\u0002\u0002$%\b\u0004",
    "\u0001\u0002%5\u0005\u0014\u000b\u0002&\'\u0007\u0007\u0002\u0002\'",
    "5\u0005\u0006\u0004\u0012(5\u0007\u0015\u0002\u0002)5\u0007\u0016\u0002",
    "\u0002*5\u0007\t\u0002\u0002+5\u0007\n\u0002\u0002,5\u0007\u0018\u0002",
    "\u0002-5\u0005\u000e\b\u0002.5\u0005\u0010\t\u0002/5\u0005\u0012\n\u0002",
    "01\u0007\u000b\u0002\u000212\u0005\u0006\u0004\u000223\u0007\f\u0002",
    "\u000235\u0003\u0002\u0002\u00024$\u0003\u0002\u0002\u00024&\u0003\u0002",
    "\u0002\u00024(\u0003\u0002\u0002\u00024)\u0003\u0002\u0002\u00024*\u0003",
    "\u0002\u0002\u00024+\u0003\u0002\u0002\u00024,\u0003\u0002\u0002\u0002",
    "4-\u0003\u0002\u0002\u00024.\u0003\u0002\u0002\u00024/\u0003\u0002\u0002",
    "\u000240\u0003\u0002\u0002\u00025X\u0003\u0002\u0002\u000267\f\u0011",
    "\u0002\u000278\u0007\u0019\u0002\u00028W\u0005\u0006\u0004\u00129:\f",
    "\u0010\u0002\u0002:;\u0007\b\u0002\u0002;W\u0005\u0006\u0004\u0011<",
    "=\f\u000f\u0002\u0002=>\u0007\u001a\u0002\u0002>W\u0005\u0006\u0004",
    "\u0010?@\f\u000e\u0002\u0002@A\u0007\u001b\u0002\u0002AW\u0005\u0006",
    "\u0004\u000fBC\f\r\u0002\u0002CD\u0007\u001c\u0002\u0002DW\u0005\u0006",
    "\u0004\u000eEF\f\f\u0002\u0002FG\u0007\u001d\u0002\u0002GW\u0005\u0006",
    "\u0004\rHI\f\u0015\u0002\u0002IJ\u0007\u0003\u0002\u0002JK\u0005\n\u0006",
    "\u0002KL\u0007\u0004\u0002\u0002LM\u0005\f\u0007\u0002MN\u0007\u0005",
    "\u0002\u0002NW\u0003\u0002\u0002\u0002OP\f\u0014\u0002\u0002PQ\u0007",
    "\u0003\u0002\u0002QR\u0007\u0016\u0002\u0002RS\u0007\u0006\u0002\u0002",
    "ST\u0005\u0006\u0004\u0002TU\u0007\u0005\u0002\u0002UW\u0003\u0002\u0002",
    "\u0002V6\u0003\u0002\u0002\u0002V9\u0003\u0002\u0002\u0002V<\u0003\u0002",
    "\u0002\u0002V?\u0003\u0002\u0002\u0002VB\u0003\u0002\u0002\u0002VE\u0003",
    "\u0002\u0002\u0002VH\u0003\u0002\u0002\u0002VO\u0003\u0002\u0002\u0002",
    "WZ\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002",
    "\u0002Y\u0007\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\\u0007",
    "\r\u0002\u0002\\`\u0007\u000e\u0002\u0002]_\u000b\u0002\u0002\u0002",
    "^]\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002ac\u0003\u0002\u0002\u0002b`\u0003\u0002",
    "\u0002\u0002cd\u0007\u000f\u0002\u0002d\t\u0003\u0002\u0002\u0002ej",
    "\u0005\u0016\f\u0002fg\u0007\u0006\u0002\u0002gi\u0005\u0016\f\u0002",
    "hf\u0003\u0002\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002k\u000b\u0003\u0002\u0002\u0002lj\u0003",
    "\u0002\u0002\u0002mr\u0005\u0006\u0004\u0002no\u0007\u0006\u0002\u0002",
    "oq\u0005\u0006\u0004\u0002pn\u0003\u0002\u0002\u0002qt\u0003\u0002\u0002",
    "\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s\r\u0003",
    "\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002uv\u0007\u000b\u0002\u0002",
    "vw\u0007\u001e\u0002\u0002wx\u0005\n\u0006\u0002xy\u0007\u0010\u0002",
    "\u0002yz\u0005\u0006\u0004\u0002z{\u0007\u0011\u0002\u0002{|\u0005\u0006",
    "\u0004\u0002|}\u0007\f\u0002\u0002}\u000f\u0003\u0002\u0002\u0002~\u0087",
    "\u0007\u0012\u0002\u0002\u007f\u0084\u0005\u0006\u0004\u0002\u0080\u0081",
    "\u0007\u0006\u0002\u0002\u0081\u0083\u0005\u0006\u0004\u0002\u0082\u0080",
    "\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082",
    "\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0088",
    "\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u007f",
    "\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089",
    "\u0003\u0002\u0002\u0002\u0089\u008a\u0007\u0013\u0002\u0002\u008a\u0011",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0012\u0002\u0002\u008c\u008d",
    "\u0005\u0016\f\u0002\u008d\u008e\u0007\u0010\u0002\u0002\u008e\u008f",
    "\u0005\u0006\u0004\u0002\u008f\u0090\u0007\u0011\u0002\u0002\u0090\u0091",
    "\u0005\u0006\u0004\u0002\u0091\u0092\u0007\u0013\u0002\u0002\u0092\u0013",
    "\u0003\u0002\u0002\u0002\u0093\u0094\u0007\u0016\u0002\u0002\u0094\u0095",
    "\u0007\u0014\u0002\u0002\u0095\u009c\u0005\u0006\u0004\u0002\u0096\u0097",
    "\u0007\u0016\u0002\u0002\u0097\u0098\u0007\u000b\u0002\u0002\u0098\u0099",
    "\u0005\u0006\u0004\u0002\u0099\u009a\u0007\f\u0002\u0002\u009a\u009c",
    "\u0003\u0002\u0002\u0002\u009b\u0093\u0003\u0002\u0002\u0002\u009b\u0096",
    "\u0003\u0002\u0002\u0002\u009c\u0015\u0003\u0002\u0002\u0002\u009d\u00a0",
    "\u0007\u0016\u0002\u0002\u009e\u009f\u0007\u0011\u0002\u0002\u009f\u00a1",
    "\u0007\u0017\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1",
    "\u0003\u0002\u0002\u0002\u00a1\u0017\u0003\u0002\u0002\u0002\r\u001e",
    "4VX`jr\u0084\u0087\u009b\u00a0"].join("");


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

var ruleNames =  [ "proof", "step", "expr", "hint", "varlist", "exprlist", 
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
SlickParser.RULE_step = 1;
SlickParser.RULE_expr = 2;
SlickParser.RULE_hint = 3;
SlickParser.RULE_varlist = 4;
SlickParser.RULE_exprlist = 5;
SlickParser.RULE_quantifiedExpr = 6;
SlickParser.RULE_setEnumeration = 7;
SlickParser.RULE_setComprehension = 8;
SlickParser.RULE_functionCall = 9;
SlickParser.RULE_typedVar = 10;

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
        this.state = 22;
        this.step();
        this.state = 26; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 23;
            this.hint();
            this.state = 24;
            this.step();
            this.state = 28; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SlickParser.T__10);
        this.state = 30;
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
    this.enterRule(localctx, 2, SlickParser.RULE_step);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
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
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, SlickParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 35;
            this.functionCall();
            break;

        case 2:
            this.state = 36;
            this.match(SlickParser.T__4);
            this.state = 37;
            this.expr(16);
            break;

        case 3:
            this.state = 38;
            this.match(SlickParser.EVAR);
            break;

        case 4:
            this.state = 39;
            this.match(SlickParser.VAR);
            break;

        case 5:
            this.state = 40;
            this.match(SlickParser.T__6);
            break;

        case 6:
            this.state = 41;
            this.match(SlickParser.T__7);
            break;

        case 7:
            this.state = 42;
            this.match(SlickParser.NUM);
            break;

        case 8:
            this.state = 43;
            this.quantifiedExpr();
            break;

        case 9:
            this.state = 44;
            this.setEnumeration();
            break;

        case 10:
            this.state = 45;
            this.setComprehension();
            break;

        case 11:
            this.state = 46;
            this.match(SlickParser.T__8);
            this.state = 47;
            this.expr(0);
            this.state = 48;
            this.match(SlickParser.T__9);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 86;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 84;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 52;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 53;
                    this.match(SlickParser.ADDOP);
                    this.state = 54;
                    this.expr(16);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 55;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 56;
                    this.match(SlickParser.T__5);
                    this.state = 57;
                    this.expr(15);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 58;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 59;
                    this.match(SlickParser.RELOP);
                    this.state = 60;
                    this.expr(14);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 61;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 62;
                    this.match(SlickParser.JOP);
                    this.state = 63;
                    this.expr(13);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 65;
                    this.match(SlickParser.IMPOP);
                    this.state = 66;
                    this.expr(12);
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 67;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 68;
                    this.match(SlickParser.EQOP);
                    this.state = 69;
                    this.expr(11);
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 70;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 71;
                    this.match(SlickParser.T__0);
                    this.state = 72;
                    this.varlist();
                    this.state = 73;
                    this.match(SlickParser.T__1);
                    this.state = 74;
                    this.exprlist();
                    this.state = 75;
                    this.match(SlickParser.T__2);
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 77;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 78;
                    this.match(SlickParser.T__0);
                    this.state = 79;
                    this.match(SlickParser.VAR);
                    this.state = 80;
                    this.match(SlickParser.T__3);
                    this.state = 81;
                    this.expr(0);
                    this.state = 82;
                    this.match(SlickParser.T__2);
                    break;

                } 
            }
            this.state = 88;
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
    this.enterRule(localctx, 6, SlickParser.RULE_hint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(SlickParser.T__10);
        this.state = 90;
        this.match(SlickParser.T__11);
        this.state = 94;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 91;
                this.matchWildcard(); 
            }
            this.state = 96;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 97;
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
    this.enterRule(localctx, 8, SlickParser.RULE_varlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.typedVar();
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__3) {
            this.state = 100;
            this.match(SlickParser.T__3);
            this.state = 101;
            this.typedVar();
            this.state = 106;
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
    this.enterRule(localctx, 10, SlickParser.RULE_exprlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.expr(0);
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__3) {
            this.state = 108;
            this.match(SlickParser.T__3);
            this.state = 109;
            this.expr(0);
            this.state = 114;
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
    this.enterRule(localctx, 12, SlickParser.RULE_quantifiedExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(SlickParser.T__8);
        this.state = 116;
        this.match(SlickParser.QUANTIFIER);
        this.state = 117;
        this.varlist();
        this.state = 118;
        this.match(SlickParser.T__13);
        this.state = 119;
        this.expr(0);
        this.state = 120;
        this.match(SlickParser.T__14);
        this.state = 121;
        this.expr(0);
        this.state = 122;
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
    this.enterRule(localctx, 14, SlickParser.RULE_setEnumeration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(SlickParser.T__15);
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SlickParser.T__4) | (1 << SlickParser.T__6) | (1 << SlickParser.T__7) | (1 << SlickParser.T__8) | (1 << SlickParser.T__15) | (1 << SlickParser.EVAR) | (1 << SlickParser.VAR) | (1 << SlickParser.NUM))) !== 0)) {
            this.state = 125;
            this.expr(0);
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SlickParser.T__3) {
                this.state = 126;
                this.match(SlickParser.T__3);
                this.state = 127;
                this.expr(0);
                this.state = 132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 135;
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
    this.enterRule(localctx, 16, SlickParser.RULE_setComprehension);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(SlickParser.T__15);
        this.state = 138;
        this.typedVar();
        this.state = 139;
        this.match(SlickParser.T__13);
        this.state = 140;
        this.expr(0);
        this.state = 141;
        this.match(SlickParser.T__14);
        this.state = 142;
        this.expr(0);
        this.state = 143;
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
    this.enterRule(localctx, 18, SlickParser.RULE_functionCall);
    try {
        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 145;
            this.match(SlickParser.VAR);
            this.state = 146;
            this.match(SlickParser.T__17);
            this.state = 147;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 148;
            this.match(SlickParser.VAR);
            this.state = 149;
            this.match(SlickParser.T__8);
            this.state = 150;
            this.expr(0);
            this.state = 151;
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
    this.enterRule(localctx, 20, SlickParser.RULE_typedVar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(SlickParser.VAR);
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__14) {
            this.state = 156;
            this.match(SlickParser.T__14);
            this.state = 157;
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
	case 2:
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