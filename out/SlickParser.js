"use strict";
// Generated from Slick.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Decorators_1 = require("antlr4ts/Decorators");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class SlickParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SlickParser._ATN, this);
    }
    get vocabulary() {
        return SlickParser.VOCABULARY;
    }
    get grammarFileName() { return "Slick.g4"; }
    get ruleNames() { return SlickParser.ruleNames; }
    get serializedATN() { return SlickParser._serializedATN; }
    doc() {
        let _localctx = new DocContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SlickParser.RULE_doc);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this.proof();
                this.state = 40;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SlickParser.T__0) {
                    {
                        {
                            this.state = 35;
                            this.sep();
                            this.state = 36;
                            this.proof();
                        }
                    }
                    this.state = 42;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    proof() {
        let _localctx = new ProofContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SlickParser.RULE_proof);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SlickParser.T__1) {
                    {
                        this.state = 43;
                        this.header();
                    }
                }
                this.state = 46;
                this.step();
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SlickParser.T__17) {
                    {
                        {
                            this.state = 47;
                            this.hint();
                            this.state = 48;
                            this.step();
                        }
                    }
                    this.state = 54;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 56;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SlickParser.END) {
                    {
                        this.state = 55;
                        this.match(SlickParser.END);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sep() {
        let _localctx = new SepContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SlickParser.RULE_sep);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this.match(SlickParser.T__0);
                this.state = 59;
                this.match(SlickParser.T__0);
                this.state = 60;
                this.match(SlickParser.T__0);
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 61;
                            this.match(SlickParser.T__0);
                        }
                    }
                    this.state = 64;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SlickParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    header() {
        let _localctx = new HeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SlickParser.RULE_header);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.theorem();
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SlickParser.T__2) {
                    {
                        this.state = 67;
                        this.method();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    theorem() {
        let _localctx = new TheoremContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SlickParser.RULE_theorem);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 70;
                this.match(SlickParser.T__1);
                this.state = 71;
                this.match(SlickParser.RULENUM);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    method() {
        let _localctx = new MethodContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SlickParser.RULE_method);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this.match(SlickParser.T__2);
                this.state = 74;
                this.methodName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    methodName() {
        let _localctx = new MethodNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SlickParser.RULE_methodName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SlickParser.T__3) | (1 << SlickParser.T__4) | (1 << SlickParser.T__5) | (1 << SlickParser.T__6))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    step() {
        let _localctx = new StepContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SlickParser.RULE_step);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this.expr(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    expr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExprContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 16;
        this.enterRecursionRule(_localctx, 16, SlickParser.RULE_expr, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            _localctx = new FunctionCallExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 81;
                            this.functionCall();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new UnaryPrefixExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 82;
                            this.match(SlickParser.T__11);
                            this.state = 83;
                            this.expr(16);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new AtomContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 84;
                            this.match(SlickParser.EVAR);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new AtomContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 85;
                            this.match(SlickParser.VAR);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new AtomContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 86;
                            this.match(SlickParser.T__13);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new AtomContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 87;
                            this.match(SlickParser.T__14);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new AtomContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 88;
                            this.match(SlickParser.NUM);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new QuantExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 89;
                            this.quantifiedExpr();
                        }
                        break;
                    case 9:
                        {
                            _localctx = new SetEnumExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 90;
                            this.setEnumeration();
                        }
                        break;
                    case 10:
                        {
                            _localctx = new SetCompExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 91;
                            this.setComprehension();
                        }
                        break;
                    case 11:
                        {
                            _localctx = new ParenExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 92;
                            this.match(SlickParser.T__15);
                            this.state = 93;
                            this.expr(0);
                            this.state = 94;
                            this.match(SlickParser.T__16);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 132;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 130;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new AdditionExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                                        this.state = 98;
                                        if (!(this.precpred(this._ctx, 15)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                                        this.state = 99;
                                        this.match(SlickParser.ADDOP);
                                        this.state = 100;
                                        this.expr(16);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new GeneralExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                                        this.state = 101;
                                        if (!(this.precpred(this._ctx, 14)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                                        this.state = 102;
                                        this.match(SlickParser.T__12);
                                        this.state = 103;
                                        this.expr(15);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new RelativeExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                                        this.state = 104;
                                        if (!(this.precpred(this._ctx, 13)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                        this.state = 105;
                                        this.match(SlickParser.RELOP);
                                        this.state = 106;
                                        this.expr(14);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new JunctionExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                                        this.state = 107;
                                        if (!(this.precpred(this._ctx, 12)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                        this.state = 108;
                                        this.match(SlickParser.JOP);
                                        this.state = 109;
                                        this.expr(13);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ImplicationExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                                        this.state = 110;
                                        if (!(this.precpred(this._ctx, 11)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        this.state = 111;
                                        this.match(SlickParser.IMPOP);
                                        this.state = 112;
                                        this.expr(12);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new EquivalenceExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                                        this.state = 113;
                                        if (!(this.precpred(this._ctx, 10)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                        this.state = 114;
                                        this.match(SlickParser.EQOP);
                                        this.state = 115;
                                        this.expr(11);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new TSExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                                        this.state = 116;
                                        if (!(this.precpred(this._ctx, 19)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                        this.state = 117;
                                        this.match(SlickParser.T__7);
                                        this.state = 118;
                                        this.varlist();
                                        this.state = 119;
                                        this.match(SlickParser.T__8);
                                        this.state = 120;
                                        this.exprlist();
                                        this.state = 121;
                                        this.match(SlickParser.T__9);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new LeibnizExprContext(new ExprContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                                        this.state = 123;
                                        if (!(this.precpred(this._ctx, 18)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                                        this.state = 124;
                                        this.match(SlickParser.T__7);
                                        this.state = 125;
                                        this.match(SlickParser.VAR);
                                        this.state = 126;
                                        this.match(SlickParser.T__10);
                                        this.state = 127;
                                        this.expr(0);
                                        this.state = 128;
                                        this.match(SlickParser.T__9);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 134;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    hint() {
        let _localctx = new HintContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SlickParser.RULE_hint);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.match(SlickParser.T__17);
                this.state = 136;
                this.match(SlickParser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    varlist() {
        let _localctx = new VarlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SlickParser.RULE_varlist);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.typedVar();
                this.state = 143;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SlickParser.T__10) {
                    {
                        {
                            this.state = 139;
                            this.match(SlickParser.T__10);
                            this.state = 140;
                            this.typedVar();
                        }
                    }
                    this.state = 145;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    exprlist() {
        let _localctx = new ExprlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SlickParser.RULE_exprlist);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 146;
                this.expr(0);
                this.state = 151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SlickParser.T__10) {
                    {
                        {
                            this.state = 147;
                            this.match(SlickParser.T__10);
                            this.state = 148;
                            this.expr(0);
                        }
                    }
                    this.state = 153;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    quantifiedExpr() {
        let _localctx = new QuantifiedExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SlickParser.RULE_quantifiedExpr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(SlickParser.T__15);
                this.state = 155;
                this.match(SlickParser.QUANTIFIER);
                this.state = 156;
                this.varlist();
                this.state = 157;
                this.match(SlickParser.T__18);
                this.state = 158;
                this.expr(0);
                this.state = 159;
                this.match(SlickParser.T__19);
                this.state = 160;
                this.expr(0);
                this.state = 161;
                this.match(SlickParser.T__16);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    setEnumeration() {
        let _localctx = new SetEnumerationContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SlickParser.RULE_setEnumeration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.match(SlickParser.T__20);
                this.state = 172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SlickParser.T__11) | (1 << SlickParser.T__13) | (1 << SlickParser.T__14) | (1 << SlickParser.T__15) | (1 << SlickParser.T__20) | (1 << SlickParser.EVAR) | (1 << SlickParser.VAR) | (1 << SlickParser.NUM))) !== 0)) {
                    {
                        this.state = 164;
                        this.expr(0);
                        this.state = 169;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SlickParser.T__10) {
                            {
                                {
                                    this.state = 165;
                                    this.match(SlickParser.T__10);
                                    this.state = 166;
                                    this.expr(0);
                                }
                            }
                            this.state = 171;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 174;
                this.match(SlickParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    setComprehension() {
        let _localctx = new SetComprehensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SlickParser.RULE_setComprehension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 176;
                this.match(SlickParser.T__20);
                this.state = 177;
                this.typedVar();
                this.state = 178;
                this.match(SlickParser.T__18);
                this.state = 179;
                this.expr(0);
                this.state = 180;
                this.match(SlickParser.T__19);
                this.state = 181;
                this.expr(0);
                this.state = 182;
                this.match(SlickParser.T__21);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    functionCall() {
        let _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, SlickParser.RULE_functionCall);
        try {
            this.state = 192;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 184;
                        this.match(SlickParser.VAR);
                        this.state = 185;
                        this.match(SlickParser.T__22);
                        this.state = 186;
                        this.expr(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 187;
                        this.match(SlickParser.VAR);
                        this.state = 188;
                        this.match(SlickParser.T__15);
                        this.state = 189;
                        this.expr(0);
                        this.state = 190;
                        this.match(SlickParser.T__16);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    typedVar() {
        let _localctx = new TypedVarContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, SlickParser.RULE_typedVar);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.match(SlickParser.VAR);
                this.state = 197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SlickParser.T__19) {
                    {
                        this.state = 195;
                        this.match(SlickParser.T__19);
                        this.state = 196;
                        this.match(SlickParser.TYPE);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 8:
                return this.expr_sempred(_localctx, predIndex);
        }
        return true;
    }
    expr_sempred(_localctx, predIndex) {
        switch (predIndex) {
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
        }
        return true;
    }
    static get _ATN() {
        if (!SlickParser.__ATN) {
            SlickParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SlickParser._serializedATN));
        }
        return SlickParser.__ATN;
    }
}
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
SlickParser.ruleNames = [
    "doc", "proof", "sep", "header", "theorem", "method", "methodName", "step",
    "expr", "hint", "varlist", "exprlist", "quantifiedExpr", "setEnumeration",
    "setComprehension", "functionCall", "typedVar"
];
SlickParser._LITERAL_NAMES = [
    undefined, "'-'", "'Prove'", "'Method:'", "'A'", "'B'", "'C'", "'D'",
    "'['", "'≔'", "']'", "','", "'¬'", "'★'", "'true'", "'false'", "'('",
    "')'", "'='", "'|'", "':'", "'{'", "'}'", "'.'", undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'╱╱'"
];
SlickParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "COMMENT", "RULENUM", "EVAR", "VAR",
    "TYPE", "NUM", "ADDOP", "RELOP", "JOP", "IMPOP", "EQOP", "QUANTIFIER",
    "WS", "END"
];
SlickParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SlickParser._LITERAL_NAMES, SlickParser._SYMBOLIC_NAMES, []);
SlickParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\'\xCA\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x07\x02)\n\x02\f\x02\x0E\x02,\v\x02\x03\x03" +
    "\x05\x03/\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x035\n\x03\f\x03\x0E" +
    "\x038\v\x03\x03\x03\x05\x03;\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06" +
    "\x04A\n\x04\r\x04\x0E\x04B\x03\x05\x03\x05\x05\x05G\n\x05\x03\x06\x03" +
    "\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x05\nc\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x07\n\x85\n\n\f\n\x0E\n\x88\v\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
    "\x07\f\x90\n\f\f\f\x0E\f\x93\v\f\x03\r\x03\r\x03\r\x07\r\x98\n\r\f\r\x0E" +
    "\r\x9B\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xAA\n\x0F\f\x0F\x0E" +
    "\x0F\xAD\v\x0F\x05\x0F\xAF\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
    "\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC3\n\x11\x03\x12\x03\x12\x03" +
    "\x12\x05\x12\xC8\n\x12\x03\x12\x02\x02\x03\x12\x13\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x03\x03\x02\x06\t\xD6\x02$\x03" +
    "\x02\x02\x02\x04.\x03\x02\x02\x02\x06<\x03\x02\x02\x02\bD\x03\x02\x02" +
    "\x02\nH\x03\x02\x02\x02\fK\x03\x02\x02\x02\x0EN\x03\x02\x02\x02\x10P\x03" +
    "\x02\x02\x02\x12b\x03\x02\x02\x02\x14\x89\x03\x02\x02\x02\x16\x8C\x03" +
    "\x02\x02\x02\x18\x94\x03\x02\x02\x02\x1A\x9C\x03\x02\x02\x02\x1C\xA5\x03" +
    "\x02\x02\x02\x1E\xB2\x03\x02\x02\x02 \xC2\x03\x02\x02\x02\"\xC4\x03\x02" +
    "\x02\x02$*\x05\x04\x03\x02%&\x05\x06\x04\x02&\'\x05\x04\x03\x02\')\x03" +
    "\x02\x02\x02(%\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02*+\x03" +
    "\x02\x02\x02+\x03\x03\x02\x02\x02,*\x03\x02\x02\x02-/\x05\b\x05\x02.-" +
    "\x03\x02\x02\x02./\x03\x02\x02\x02/0\x03\x02\x02\x0206\x05\x10\t\x021" +
    "2\x05\x14\v\x0223\x05\x10\t\x0235\x03\x02\x02\x0241\x03\x02\x02\x0258" +
    "\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x027:\x03\x02\x02\x02" +
    "86\x03\x02\x02\x029;\x07\'\x02\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02" +
    ";\x05\x03\x02\x02\x02<=\x07\x03\x02\x02=>\x07\x03\x02\x02>@\x07\x03\x02" +
    "\x02?A\x07\x03\x02\x02@?\x03\x02\x02\x02AB\x03\x02\x02\x02B@\x03\x02\x02" +
    "\x02BC\x03\x02\x02\x02C\x07\x03\x02\x02\x02DF\x05\n\x06\x02EG\x05\f\x07" +
    "\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02G\t\x03\x02\x02\x02HI\x07\x04" +
    "\x02\x02IJ\x07\x1B\x02\x02J\v\x03\x02\x02\x02KL\x07\x05\x02\x02LM\x05" +
    "\x0E\b\x02M\r\x03\x02\x02\x02NO\t\x02\x02\x02O\x0F\x03\x02\x02\x02PQ\x05" +
    "\x12\n\x02Q\x11\x03\x02\x02\x02RS\b\n\x01\x02Sc\x05 \x11\x02TU\x07\x0E" +
    "\x02\x02Uc\x05\x12\n\x12Vc\x07\x1C\x02\x02Wc\x07\x1D\x02\x02Xc\x07\x10" +
    "\x02\x02Yc\x07\x11\x02\x02Zc\x07\x1F\x02\x02[c\x05\x1A\x0E\x02\\c\x05" +
    "\x1C\x0F\x02]c\x05\x1E\x10\x02^_\x07\x12\x02\x02_`\x05\x12\n\x02`a\x07" +
    "\x13\x02\x02ac\x03\x02\x02\x02bR\x03\x02\x02\x02bT\x03\x02\x02\x02bV\x03" +
    "\x02\x02\x02bW\x03\x02\x02\x02bX\x03\x02\x02\x02bY\x03\x02\x02\x02bZ\x03" +
    "\x02\x02\x02b[\x03\x02\x02\x02b\\\x03\x02\x02\x02b]\x03\x02\x02\x02b^" +
    "\x03\x02\x02\x02c\x86\x03\x02\x02\x02de\f\x11\x02\x02ef\x07 \x02\x02f" +
    "\x85\x05\x12\n\x12gh\f\x10\x02\x02hi\x07\x0F\x02\x02i\x85\x05\x12\n\x11" +
    "jk\f\x0F\x02\x02kl\x07!\x02\x02l\x85\x05\x12\n\x10mn\f\x0E\x02\x02no\x07" +
    "\"\x02\x02o\x85\x05\x12\n\x0Fpq\f\r\x02\x02qr\x07#\x02\x02r\x85\x05\x12" +
    "\n\x0Est\f\f\x02\x02tu\x07$\x02\x02u\x85\x05\x12\n\rvw\f\x15\x02\x02w" +
    "x\x07\n\x02\x02xy\x05\x16\f\x02yz\x07\v\x02\x02z{\x05\x18\r\x02{|\x07" +
    "\f\x02\x02|\x85\x03\x02\x02\x02}~\f\x14\x02\x02~\x7F\x07\n\x02\x02\x7F" +
    "\x80\x07\x1D\x02\x02\x80\x81\x07\r\x02\x02\x81\x82\x05\x12\n\x02\x82\x83" +
    "\x07\f\x02\x02\x83\x85\x03\x02\x02\x02\x84d\x03\x02\x02\x02\x84g\x03\x02" +
    "\x02\x02\x84j\x03\x02\x02\x02\x84m\x03\x02\x02\x02\x84p\x03\x02\x02\x02" +
    "\x84s\x03\x02\x02\x02\x84v\x03\x02\x02\x02\x84}\x03\x02\x02\x02\x85\x88" +
    "\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x13" +
    "\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07\x14\x02\x02\x8A\x8B" +
    "\x07\x1A\x02\x02\x8B\x15\x03\x02\x02\x02\x8C\x91\x05\"\x12\x02\x8D\x8E" +
    "\x07\r\x02\x02\x8E\x90\x05\"\x12\x02\x8F\x8D\x03\x02\x02\x02\x90\x93\x03" +
    "\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x17\x03" +
    "\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x99\x05\x12\n\x02\x95\x96\x07" +
    "\r\x02\x02\x96\x98\x05\x12\n\x02\x97\x95\x03\x02\x02\x02\x98\x9B\x03\x02" +
    "\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x19\x03\x02" +
    "\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x9D\x07\x12\x02\x02\x9D\x9E\x07%" +
    "\x02\x02\x9E\x9F\x05\x16\f\x02\x9F\xA0\x07\x15\x02\x02\xA0\xA1\x05\x12" +
    "\n\x02\xA1\xA2\x07\x16\x02\x02\xA2\xA3\x05\x12\n\x02\xA3\xA4\x07\x13\x02" +
    "\x02\xA4\x1B\x03\x02\x02\x02\xA5\xAE\x07\x17\x02\x02\xA6\xAB\x05\x12\n" +
    "\x02\xA7\xA8\x07\r\x02\x02\xA8\xAA\x05\x12\n\x02\xA9\xA7\x03\x02\x02\x02" +
    "\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02" +
    "\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xA6\x03\x02\x02\x02" +
    "\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x07\x18\x02\x02" +
    "\xB1\x1D\x03\x02\x02\x02\xB2\xB3\x07\x17\x02\x02\xB3\xB4\x05\"\x12\x02" +
    "\xB4\xB5\x07\x15\x02\x02\xB5\xB6\x05\x12\n\x02\xB6\xB7\x07\x16\x02\x02" +
    "\xB7\xB8\x05\x12\n\x02\xB8\xB9\x07\x18\x02\x02\xB9\x1F\x03\x02\x02\x02" +
    "\xBA\xBB\x07\x1D\x02\x02\xBB\xBC\x07\x19\x02\x02\xBC\xC3\x05\x12\n\x02" +
    "\xBD\xBE\x07\x1D\x02\x02\xBE\xBF\x07\x12\x02\x02\xBF\xC0\x05\x12\n\x02" +
    "\xC0\xC1\x07\x13\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xBA\x03\x02\x02\x02" +
    "\xC2\xBD\x03\x02\x02\x02\xC3!\x03\x02\x02\x02\xC4\xC7\x07\x1D\x02\x02" +
    "\xC5\xC6\x07\x16\x02\x02\xC6\xC8\x07\x1E\x02\x02\xC7\xC5\x03\x02\x02\x02" +
    "\xC7\xC8\x03\x02\x02\x02\xC8#\x03\x02\x02\x02\x11*.6:BFb\x84\x86\x91\x99" +
    "\xAB\xAE\xC2\xC7";
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], SlickParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], SlickParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], SlickParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], SlickParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "doc", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "proof", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "sep", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "header", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "theorem", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "method", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "methodName", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "step", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "expr", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "hint", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "varlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "exprlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "quantifiedExpr", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "setEnumeration", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "setComprehension", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "functionCall", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], SlickParser.prototype, "typedVar", null);
exports.SlickParser = SlickParser;
class DocContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    proof(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProofContext);
        }
        else {
            return this.getRuleContext(i, ProofContext);
        }
    }
    sep(i) {
        if (i === undefined) {
            return this.getRuleContexts(SepContext);
        }
        else {
            return this.getRuleContext(i, SepContext);
        }
    }
    get ruleIndex() { return SlickParser.RULE_doc; }
    enterRule(listener) {
        if (listener.enterDoc)
            listener.enterDoc(this);
    }
    exitRule(listener) {
        if (listener.exitDoc)
            listener.exitDoc(this);
    }
    accept(visitor) {
        if (visitor.visitDoc)
            return visitor.visitDoc(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DocContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DocContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DocContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DocContext.prototype, "accept", null);
exports.DocContext = DocContext;
class ProofContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    step(i) {
        if (i === undefined) {
            return this.getRuleContexts(StepContext);
        }
        else {
            return this.getRuleContext(i, StepContext);
        }
    }
    header() {
        return this.tryGetRuleContext(0, HeaderContext);
    }
    hint(i) {
        if (i === undefined) {
            return this.getRuleContexts(HintContext);
        }
        else {
            return this.getRuleContext(i, HintContext);
        }
    }
    END() { return this.tryGetToken(SlickParser.END, 0); }
    get ruleIndex() { return SlickParser.RULE_proof; }
    enterRule(listener) {
        if (listener.enterProof)
            listener.enterProof(this);
    }
    exitRule(listener) {
        if (listener.exitProof)
            listener.exitProof(this);
    }
    accept(visitor) {
        if (visitor.visitProof)
            return visitor.visitProof(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ProofContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ProofContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ProofContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ProofContext.prototype, "accept", null);
exports.ProofContext = ProofContext;
class SepContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return SlickParser.RULE_sep; }
    enterRule(listener) {
        if (listener.enterSep)
            listener.enterSep(this);
    }
    exitRule(listener) {
        if (listener.exitSep)
            listener.exitSep(this);
    }
    accept(visitor) {
        if (visitor.visitSep)
            return visitor.visitSep(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SepContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SepContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SepContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SepContext.prototype, "accept", null);
exports.SepContext = SepContext;
class HeaderContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    theorem() {
        return this.getRuleContext(0, TheoremContext);
    }
    method() {
        return this.tryGetRuleContext(0, MethodContext);
    }
    get ruleIndex() { return SlickParser.RULE_header; }
    enterRule(listener) {
        if (listener.enterHeader)
            listener.enterHeader(this);
    }
    exitRule(listener) {
        if (listener.exitHeader)
            listener.exitHeader(this);
    }
    accept(visitor) {
        if (visitor.visitHeader)
            return visitor.visitHeader(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], HeaderContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], HeaderContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], HeaderContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], HeaderContext.prototype, "accept", null);
exports.HeaderContext = HeaderContext;
class TheoremContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    RULENUM() { return this.getToken(SlickParser.RULENUM, 0); }
    get ruleIndex() { return SlickParser.RULE_theorem; }
    enterRule(listener) {
        if (listener.enterTheorem)
            listener.enterTheorem(this);
    }
    exitRule(listener) {
        if (listener.exitTheorem)
            listener.exitTheorem(this);
    }
    accept(visitor) {
        if (visitor.visitTheorem)
            return visitor.visitTheorem(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TheoremContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TheoremContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TheoremContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TheoremContext.prototype, "accept", null);
exports.TheoremContext = TheoremContext;
class MethodContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    methodName() {
        return this.getRuleContext(0, MethodNameContext);
    }
    get ruleIndex() { return SlickParser.RULE_method; }
    enterRule(listener) {
        if (listener.enterMethod)
            listener.enterMethod(this);
    }
    exitRule(listener) {
        if (listener.exitMethod)
            listener.exitMethod(this);
    }
    accept(visitor) {
        if (visitor.visitMethod)
            return visitor.visitMethod(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MethodContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MethodContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MethodContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MethodContext.prototype, "accept", null);
exports.MethodContext = MethodContext;
class MethodNameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return SlickParser.RULE_methodName; }
    enterRule(listener) {
        if (listener.enterMethodName)
            listener.enterMethodName(this);
    }
    exitRule(listener) {
        if (listener.exitMethodName)
            listener.exitMethodName(this);
    }
    accept(visitor) {
        if (visitor.visitMethodName)
            return visitor.visitMethodName(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], MethodNameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], MethodNameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], MethodNameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], MethodNameContext.prototype, "accept", null);
exports.MethodNameContext = MethodNameContext;
class StepContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() { return SlickParser.RULE_step; }
    enterRule(listener) {
        if (listener.enterStep)
            listener.enterStep(this);
    }
    exitRule(listener) {
        if (listener.exitStep)
            listener.exitStep(this);
    }
    accept(visitor) {
        if (visitor.visitStep)
            return visitor.visitStep(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StepContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StepContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StepContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StepContext.prototype, "accept", null);
exports.StepContext = StepContext;
class ExprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        if (parent !== undefined && invokingState !== undefined) {
            super(parent, invokingState);
        }
        else {
            super();
        }
    }
    get ruleIndex() { return SlickParser.RULE_expr; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
__decorate([
    Decorators_2.Override
], ExprContext.prototype, "ruleIndex", null);
exports.ExprContext = ExprContext;
class ImplicationExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    IMPOP() { return this.getToken(SlickParser.IMPOP, 0); }
    enterRule(listener) {
        if (listener.enterImplicationExpr)
            listener.enterImplicationExpr(this);
    }
    exitRule(listener) {
        if (listener.exitImplicationExpr)
            listener.exitImplicationExpr(this);
    }
    accept(visitor) {
        if (visitor.visitImplicationExpr)
            return visitor.visitImplicationExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ImplicationExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ImplicationExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ImplicationExprContext.prototype, "accept", null);
exports.ImplicationExprContext = ImplicationExprContext;
class EquivalenceExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    EQOP() { return this.getToken(SlickParser.EQOP, 0); }
    enterRule(listener) {
        if (listener.enterEquivalenceExpr)
            listener.enterEquivalenceExpr(this);
    }
    exitRule(listener) {
        if (listener.exitEquivalenceExpr)
            listener.exitEquivalenceExpr(this);
    }
    accept(visitor) {
        if (visitor.visitEquivalenceExpr)
            return visitor.visitEquivalenceExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EquivalenceExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EquivalenceExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EquivalenceExprContext.prototype, "accept", null);
exports.EquivalenceExprContext = EquivalenceExprContext;
class AtomContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    EVAR() { return this.tryGetToken(SlickParser.EVAR, 0); }
    VAR() { return this.tryGetToken(SlickParser.VAR, 0); }
    NUM() { return this.tryGetToken(SlickParser.NUM, 0); }
    enterRule(listener) {
        if (listener.enterAtom)
            listener.enterAtom(this);
    }
    exitRule(listener) {
        if (listener.exitAtom)
            listener.exitAtom(this);
    }
    accept(visitor) {
        if (visitor.visitAtom)
            return visitor.visitAtom(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AtomContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AtomContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AtomContext.prototype, "accept", null);
exports.AtomContext = AtomContext;
class RelativeExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    RELOP() { return this.getToken(SlickParser.RELOP, 0); }
    enterRule(listener) {
        if (listener.enterRelativeExpr)
            listener.enterRelativeExpr(this);
    }
    exitRule(listener) {
        if (listener.exitRelativeExpr)
            listener.exitRelativeExpr(this);
    }
    accept(visitor) {
        if (visitor.visitRelativeExpr)
            return visitor.visitRelativeExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], RelativeExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], RelativeExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], RelativeExprContext.prototype, "accept", null);
exports.RelativeExprContext = RelativeExprContext;
class SetEnumExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    setEnumeration() {
        return this.getRuleContext(0, SetEnumerationContext);
    }
    enterRule(listener) {
        if (listener.enterSetEnumExpr)
            listener.enterSetEnumExpr(this);
    }
    exitRule(listener) {
        if (listener.exitSetEnumExpr)
            listener.exitSetEnumExpr(this);
    }
    accept(visitor) {
        if (visitor.visitSetEnumExpr)
            return visitor.visitSetEnumExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SetEnumExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SetEnumExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SetEnumExprContext.prototype, "accept", null);
exports.SetEnumExprContext = SetEnumExprContext;
class FunctionCallExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    functionCall() {
        return this.getRuleContext(0, FunctionCallContext);
    }
    enterRule(listener) {
        if (listener.enterFunctionCallExpr)
            listener.enterFunctionCallExpr(this);
    }
    exitRule(listener) {
        if (listener.exitFunctionCallExpr)
            listener.exitFunctionCallExpr(this);
    }
    accept(visitor) {
        if (visitor.visitFunctionCallExpr)
            return visitor.visitFunctionCallExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctionCallExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctionCallExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctionCallExprContext.prototype, "accept", null);
exports.FunctionCallExprContext = FunctionCallExprContext;
class AdditionExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    ADDOP() { return this.getToken(SlickParser.ADDOP, 0); }
    enterRule(listener) {
        if (listener.enterAdditionExpr)
            listener.enterAdditionExpr(this);
    }
    exitRule(listener) {
        if (listener.exitAdditionExpr)
            listener.exitAdditionExpr(this);
    }
    accept(visitor) {
        if (visitor.visitAdditionExpr)
            return visitor.visitAdditionExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AdditionExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AdditionExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AdditionExprContext.prototype, "accept", null);
exports.AdditionExprContext = AdditionExprContext;
class LeibnizExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    VAR() { return this.getToken(SlickParser.VAR, 0); }
    enterRule(listener) {
        if (listener.enterLeibnizExpr)
            listener.enterLeibnizExpr(this);
    }
    exitRule(listener) {
        if (listener.exitLeibnizExpr)
            listener.exitLeibnizExpr(this);
    }
    accept(visitor) {
        if (visitor.visitLeibnizExpr)
            return visitor.visitLeibnizExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LeibnizExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LeibnizExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LeibnizExprContext.prototype, "accept", null);
exports.LeibnizExprContext = LeibnizExprContext;
class SetCompExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    setComprehension() {
        return this.getRuleContext(0, SetComprehensionContext);
    }
    enterRule(listener) {
        if (listener.enterSetCompExpr)
            listener.enterSetCompExpr(this);
    }
    exitRule(listener) {
        if (listener.exitSetCompExpr)
            listener.exitSetCompExpr(this);
    }
    accept(visitor) {
        if (visitor.visitSetCompExpr)
            return visitor.visitSetCompExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SetCompExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SetCompExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SetCompExprContext.prototype, "accept", null);
exports.SetCompExprContext = SetCompExprContext;
class GeneralExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    enterRule(listener) {
        if (listener.enterGeneralExpr)
            listener.enterGeneralExpr(this);
    }
    exitRule(listener) {
        if (listener.exitGeneralExpr)
            listener.exitGeneralExpr(this);
    }
    accept(visitor) {
        if (visitor.visitGeneralExpr)
            return visitor.visitGeneralExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], GeneralExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], GeneralExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], GeneralExprContext.prototype, "accept", null);
exports.GeneralExprContext = GeneralExprContext;
class ParenExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    enterRule(listener) {
        if (listener.enterParenExpr)
            listener.enterParenExpr(this);
    }
    exitRule(listener) {
        if (listener.exitParenExpr)
            listener.exitParenExpr(this);
    }
    accept(visitor) {
        if (visitor.visitParenExpr)
            return visitor.visitParenExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParenExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParenExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParenExprContext.prototype, "accept", null);
exports.ParenExprContext = ParenExprContext;
class TSExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    varlist() {
        return this.getRuleContext(0, VarlistContext);
    }
    exprlist() {
        return this.getRuleContext(0, ExprlistContext);
    }
    enterRule(listener) {
        if (listener.enterTSExpr)
            listener.enterTSExpr(this);
    }
    exitRule(listener) {
        if (listener.exitTSExpr)
            listener.exitTSExpr(this);
    }
    accept(visitor) {
        if (visitor.visitTSExpr)
            return visitor.visitTSExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TSExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TSExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TSExprContext.prototype, "accept", null);
exports.TSExprContext = TSExprContext;
class JunctionExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    JOP() { return this.getToken(SlickParser.JOP, 0); }
    enterRule(listener) {
        if (listener.enterJunctionExpr)
            listener.enterJunctionExpr(this);
    }
    exitRule(listener) {
        if (listener.exitJunctionExpr)
            listener.exitJunctionExpr(this);
    }
    accept(visitor) {
        if (visitor.visitJunctionExpr)
            return visitor.visitJunctionExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], JunctionExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], JunctionExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], JunctionExprContext.prototype, "accept", null);
exports.JunctionExprContext = JunctionExprContext;
class QuantExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    quantifiedExpr() {
        return this.getRuleContext(0, QuantifiedExprContext);
    }
    enterRule(listener) {
        if (listener.enterQuantExpr)
            listener.enterQuantExpr(this);
    }
    exitRule(listener) {
        if (listener.exitQuantExpr)
            listener.exitQuantExpr(this);
    }
    accept(visitor) {
        if (visitor.visitQuantExpr)
            return visitor.visitQuantExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], QuantExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], QuantExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], QuantExprContext.prototype, "accept", null);
exports.QuantExprContext = QuantExprContext;
class UnaryPrefixExprContext extends ExprContext {
    constructor(ctx) { super(); this.copyFrom(ctx); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    enterRule(listener) {
        if (listener.enterUnaryPrefixExpr)
            listener.enterUnaryPrefixExpr(this);
    }
    exitRule(listener) {
        if (listener.exitUnaryPrefixExpr)
            listener.exitUnaryPrefixExpr(this);
    }
    accept(visitor) {
        if (visitor.visitUnaryPrefixExpr)
            return visitor.visitUnaryPrefixExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnaryPrefixExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnaryPrefixExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnaryPrefixExprContext.prototype, "accept", null);
exports.UnaryPrefixExprContext = UnaryPrefixExprContext;
class HintContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COMMENT() { return this.getToken(SlickParser.COMMENT, 0); }
    get ruleIndex() { return SlickParser.RULE_hint; }
    enterRule(listener) {
        if (listener.enterHint)
            listener.enterHint(this);
    }
    exitRule(listener) {
        if (listener.exitHint)
            listener.exitHint(this);
    }
    accept(visitor) {
        if (visitor.visitHint)
            return visitor.visitHint(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], HintContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], HintContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], HintContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], HintContext.prototype, "accept", null);
exports.HintContext = HintContext;
class VarlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typedVar(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypedVarContext);
        }
        else {
            return this.getRuleContext(i, TypedVarContext);
        }
    }
    get ruleIndex() { return SlickParser.RULE_varlist; }
    enterRule(listener) {
        if (listener.enterVarlist)
            listener.enterVarlist(this);
    }
    exitRule(listener) {
        if (listener.exitVarlist)
            listener.exitVarlist(this);
    }
    accept(visitor) {
        if (visitor.visitVarlist)
            return visitor.visitVarlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VarlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VarlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VarlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VarlistContext.prototype, "accept", null);
exports.VarlistContext = VarlistContext;
class ExprlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    get ruleIndex() { return SlickParser.RULE_exprlist; }
    enterRule(listener) {
        if (listener.enterExprlist)
            listener.enterExprlist(this);
    }
    exitRule(listener) {
        if (listener.exitExprlist)
            listener.exitExprlist(this);
    }
    accept(visitor) {
        if (visitor.visitExprlist)
            return visitor.visitExprlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExprlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExprlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExprlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExprlistContext.prototype, "accept", null);
exports.ExprlistContext = ExprlistContext;
class QuantifiedExprContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QUANTIFIER() { return this.getToken(SlickParser.QUANTIFIER, 0); }
    varlist() {
        return this.getRuleContext(0, VarlistContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    get ruleIndex() { return SlickParser.RULE_quantifiedExpr; }
    enterRule(listener) {
        if (listener.enterQuantifiedExpr)
            listener.enterQuantifiedExpr(this);
    }
    exitRule(listener) {
        if (listener.exitQuantifiedExpr)
            listener.exitQuantifiedExpr(this);
    }
    accept(visitor) {
        if (visitor.visitQuantifiedExpr)
            return visitor.visitQuantifiedExpr(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], QuantifiedExprContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], QuantifiedExprContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], QuantifiedExprContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], QuantifiedExprContext.prototype, "accept", null);
exports.QuantifiedExprContext = QuantifiedExprContext;
class SetEnumerationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    get ruleIndex() { return SlickParser.RULE_setEnumeration; }
    enterRule(listener) {
        if (listener.enterSetEnumeration)
            listener.enterSetEnumeration(this);
    }
    exitRule(listener) {
        if (listener.exitSetEnumeration)
            listener.exitSetEnumeration(this);
    }
    accept(visitor) {
        if (visitor.visitSetEnumeration)
            return visitor.visitSetEnumeration(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SetEnumerationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SetEnumerationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SetEnumerationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SetEnumerationContext.prototype, "accept", null);
exports.SetEnumerationContext = SetEnumerationContext;
class SetComprehensionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typedVar() {
        return this.getRuleContext(0, TypedVarContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        else {
            return this.getRuleContext(i, ExprContext);
        }
    }
    get ruleIndex() { return SlickParser.RULE_setComprehension; }
    enterRule(listener) {
        if (listener.enterSetComprehension)
            listener.enterSetComprehension(this);
    }
    exitRule(listener) {
        if (listener.exitSetComprehension)
            listener.exitSetComprehension(this);
    }
    accept(visitor) {
        if (visitor.visitSetComprehension)
            return visitor.visitSetComprehension(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SetComprehensionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SetComprehensionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SetComprehensionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SetComprehensionContext.prototype, "accept", null);
exports.SetComprehensionContext = SetComprehensionContext;
class FunctionCallContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VAR() { return this.getToken(SlickParser.VAR, 0); }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() { return SlickParser.RULE_functionCall; }
    enterRule(listener) {
        if (listener.enterFunctionCall)
            listener.enterFunctionCall(this);
    }
    exitRule(listener) {
        if (listener.exitFunctionCall)
            listener.exitFunctionCall(this);
    }
    accept(visitor) {
        if (visitor.visitFunctionCall)
            return visitor.visitFunctionCall(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctionCallContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctionCallContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctionCallContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctionCallContext.prototype, "accept", null);
exports.FunctionCallContext = FunctionCallContext;
class TypedVarContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VAR() { return this.getToken(SlickParser.VAR, 0); }
    TYPE() { return this.tryGetToken(SlickParser.TYPE, 0); }
    get ruleIndex() { return SlickParser.RULE_typedVar; }
    enterRule(listener) {
        if (listener.enterTypedVar)
            listener.enterTypedVar(this);
    }
    exitRule(listener) {
        if (listener.exitTypedVar)
            listener.exitTypedVar(this);
    }
    accept(visitor) {
        if (visitor.visitTypedVar)
            return visitor.visitTypedVar(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypedVarContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypedVarContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypedVarContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypedVarContext.prototype, "accept", null);
exports.TypedVarContext = TypedVarContext;
//# sourceMappingURL=SlickParser.js.map