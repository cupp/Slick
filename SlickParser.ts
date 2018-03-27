// Generated from Slick.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { SlickListener } from './SlickListener';
import { SlickVisitor } from './SlickVisitor';


export class SlickParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly COMMENT=26;
	public static readonly EXPO=27;
	public static readonly PROVE=28;
	public static readonly RULENUM=29;
	public static readonly EVAR=30;
	public static readonly VAR=31;
	public static readonly TYPE=32;
	public static readonly NUM=33;
	public static readonly ADDOP=34;
	public static readonly RELOP=35;
	public static readonly JOP=36;
	public static readonly IMPOP=37;
	public static readonly EQOP=38;
	public static readonly QUANTIFIER=39;
	public static readonly WS=40;
	public static readonly END=41;
	public static readonly RULE_doc = 0;
	public static readonly RULE_proof = 1;
	public static readonly RULE_sep = 2;
	public static readonly RULE_header = 3;
	public static readonly RULE_exposition = 4;
	public static readonly RULE_expoDelim = 5;
	public static readonly RULE_expoLine = 6;
	public static readonly RULE_theorem = 7;
	public static readonly RULE_method = 8;
	public static readonly RULE_methodName = 9;
	public static readonly RULE_step = 10;
	public static readonly RULE_expr = 11;
	public static readonly RULE_hint = 12;
	public static readonly RULE_hintOp = 13;
	public static readonly RULE_varlist = 14;
	public static readonly RULE_exprlist = 15;
	public static readonly RULE_quantifiedExpr = 16;
	public static readonly RULE_setEnumeration = 17;
	public static readonly RULE_setComprehension = 18;
	public static readonly RULE_functionCall = 19;
	public static readonly RULE_typedVar = 20;
	public static readonly ruleNames: string[] = [
		"doc", "proof", "sep", "header", "exposition", "expoDelim", "expoLine", 
		"theorem", "method", "methodName", "step", "expr", "hint", "hintOp", "varlist", 
		"exprlist", "quantifiedExpr", "setEnumeration", "setComprehension", "functionCall", 
		"typedVar"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'-'", "'*'", "';'", "'by'", "'showing equivalence to previous theorem'", 
		"'showing the LHS is equivalent to the RHS'", "'showing the RHS is equivalent to the LHS'", 
		"'showing the LHS implies the RHS'", "'showing the RHS follows from the LHS'", 
		"'assuming the conjuncts of the antecedent'", "'['", "'≔'", "']'", "','", 
		"'¬'", "'★'", "'true'", "'false'", "'('", "')'", "'|'", "':'", "'{'", 
		"'}'", "'.'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'╱╱'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "COMMENT", "EXPO", 
		"PROVE", "RULENUM", "EVAR", "VAR", "TYPE", "NUM", "ADDOP", "RELOP", "JOP", 
		"IMPOP", "EQOP", "QUANTIFIER", "WS", "END"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SlickParser._LITERAL_NAMES, SlickParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return SlickParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Slick.g4"; }

	@Override
	public get ruleNames(): string[] { return SlickParser.ruleNames; }

	@Override
	public get serializedATN(): string { return SlickParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SlickParser._ATN, this);
	}
	@RuleVersion(0)
	public doc(): DocContext {
		let _localctx: DocContext = new DocContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SlickParser.RULE_doc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.proof();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SlickParser.T__0) {
				{
				{
				this.state = 43;
				this.sep();
				this.state = 44;
				this.proof();
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public proof(): ProofContext {
		let _localctx: ProofContext = new ProofContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SlickParser.RULE_proof);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.PROVE) {
				{
				this.state = 51;
				this.header();
				}
			}

			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.T__1) {
				{
				this.state = 54;
				this.exposition();
				}
			}

			this.state = 57;
			this.step();
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SlickParser.RELOP - 35)) | (1 << (SlickParser.IMPOP - 35)) | (1 << (SlickParser.EQOP - 35)))) !== 0)) {
				{
				{
				this.state = 58;
				this.hint();
				this.state = 59;
				this.step();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.END) {
				{
				this.state = 66;
				this.match(SlickParser.END);
				}
			}

			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.T__1) {
				{
				this.state = 69;
				this.exposition();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sep(): SepContext {
		let _localctx: SepContext = new SepContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SlickParser.RULE_sep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(SlickParser.T__0);
			this.state = 73;
			this.match(SlickParser.T__0);
			this.state = 74;
			this.match(SlickParser.T__0);
			this.state = 76; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 75;
				this.match(SlickParser.T__0);
				}
				}
				this.state = 78; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===SlickParser.T__0 );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SlickParser.RULE_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.theorem();
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.T__3) {
				{
				this.state = 81;
				this.method();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exposition(): ExpositionContext {
		let _localctx: ExpositionContext = new ExpositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SlickParser.RULE_exposition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.expoDelim();
			this.state = 86; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 85;
				this.expoLine();
				}
				}
				this.state = 88; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===SlickParser.T__2 );
			this.state = 90;
			this.expoDelim();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expoDelim(): ExpoDelimContext {
		let _localctx: ExpoDelimContext = new ExpoDelimContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SlickParser.RULE_expoDelim);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(SlickParser.T__1);
			this.state = 93;
			this.match(SlickParser.T__1);
			this.state = 94;
			this.match(SlickParser.T__1);
			this.state = 96; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 95;
				this.match(SlickParser.T__1);
				}
				}
				this.state = 98; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===SlickParser.T__1 );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expoLine(): ExpoLineContext {
		let _localctx: ExpoLineContext = new ExpoLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SlickParser.RULE_expoLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(SlickParser.T__2);
			this.state = 101;
			this.match(SlickParser.EXPO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public theorem(): TheoremContext {
		let _localctx: TheoremContext = new TheoremContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SlickParser.RULE_theorem);
		try {
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
			case 1:
				_localctx = new BibleTheoremContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.match(SlickParser.PROVE);
				this.state = 104;
				this.match(SlickParser.RULENUM);
				}
				break;

			case 2:
				_localctx = new AdHocTheoremContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.match(SlickParser.PROVE);
				this.state = 106;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SlickParser.RULE_method);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(SlickParser.T__3);
			this.state = 110;
			this.methodName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SlickParser.RULE_methodName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SlickParser.T__4) | (1 << SlickParser.T__5) | (1 << SlickParser.T__6) | (1 << SlickParser.T__7) | (1 << SlickParser.T__8) | (1 << SlickParser.T__9))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public step(): StepContext {
		let _localctx: StepContext = new StepContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SlickParser.RULE_step);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	@RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, SlickParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,11,this._ctx) ) {
			case 1:
				{
				_localctx = new FunctionCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 117;
				this.functionCall();
				}
				break;

			case 2:
				{
				_localctx = new UnaryPrefixExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.match(SlickParser.T__14);
				this.state = 119;
				this.expr(16);
				}
				break;

			case 3:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 120;
				this.match(SlickParser.EVAR);
				}
				break;

			case 4:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 121;
				this.match(SlickParser.VAR);
				}
				break;

			case 5:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 122;
				this.match(SlickParser.T__16);
				}
				break;

			case 6:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 123;
				this.match(SlickParser.T__17);
				}
				break;

			case 7:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 124;
				this.match(SlickParser.NUM);
				}
				break;

			case 8:
				{
				_localctx = new QuantExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 125;
				this.quantifiedExpr();
				}
				break;

			case 9:
				{
				_localctx = new SetEnumExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
				this.setEnumeration();
				}
				break;

			case 10:
				{
				_localctx = new SetCompExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 127;
				this.setComprehension();
				}
				break;

			case 11:
				{
				_localctx = new ParenExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
				this.match(SlickParser.T__18);
				this.state = 129;
				this.expr(0);
				this.state = 130;
				this.match(SlickParser.T__19);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 166;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
					case 1:
						{
						_localctx = new AdditionExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 134;
						if (!(this.precpred(this._ctx, 15))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						this.state = 135;
						this.match(SlickParser.ADDOP);
						this.state = 136;
						this.expr(16);
						}
						break;

					case 2:
						{
						_localctx = new GeneralExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 137;
						if (!(this.precpred(this._ctx, 14))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						this.state = 138;
						this.match(SlickParser.T__15);
						this.state = 139;
						this.expr(15);
						}
						break;

					case 3:
						{
						_localctx = new RelativeExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 140;
						if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						this.state = 141;
						this.match(SlickParser.RELOP);
						this.state = 142;
						this.expr(14);
						}
						break;

					case 4:
						{
						_localctx = new JunctionExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 143;
						if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						this.state = 144;
						this.match(SlickParser.JOP);
						this.state = 145;
						this.expr(13);
						}
						break;

					case 5:
						{
						_localctx = new ImplicationExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 146;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 147;
						this.match(SlickParser.IMPOP);
						this.state = 148;
						this.expr(12);
						}
						break;

					case 6:
						{
						_localctx = new EquivalenceExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 149;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 150;
						this.match(SlickParser.EQOP);
						this.state = 151;
						this.expr(11);
						}
						break;

					case 7:
						{
						_localctx = new TSExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 152;
						if (!(this.precpred(this._ctx, 19))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						this.state = 153;
						this.match(SlickParser.T__10);
						this.state = 154;
						this.varlist();
						this.state = 155;
						this.match(SlickParser.T__11);
						this.state = 156;
						this.exprlist();
						this.state = 157;
						this.match(SlickParser.T__12);
						}
						break;

					case 8:
						{
						_localctx = new LeibnizExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 159;
						if (!(this.precpred(this._ctx, 18))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						this.state = 160;
						this.match(SlickParser.T__10);
						this.state = 161;
						this.match(SlickParser.VAR);
						this.state = 162;
						this.match(SlickParser.T__13);
						this.state = 163;
						this.expr(0);
						this.state = 164;
						this.match(SlickParser.T__12);
						}
						break;
					}
					} 
				}
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public hint(): HintContext {
		let _localctx: HintContext = new HintContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SlickParser.RULE_hint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.hintOp();
			this.state = 172;
			this.match(SlickParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public hintOp(): HintOpContext {
		let _localctx: HintOpContext = new HintOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SlickParser.RULE_hintOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			_la = this._input.LA(1);
			if ( !(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SlickParser.RELOP - 35)) | (1 << (SlickParser.IMPOP - 35)) | (1 << (SlickParser.EQOP - 35)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public varlist(): VarlistContext {
		let _localctx: VarlistContext = new VarlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SlickParser.RULE_varlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.typedVar();
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SlickParser.T__13) {
				{
				{
				this.state = 177;
				this.match(SlickParser.T__13);
				this.state = 178;
				this.typedVar();
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SlickParser.RULE_exprlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.expr(0);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SlickParser.T__13) {
				{
				{
				this.state = 185;
				this.match(SlickParser.T__13);
				this.state = 186;
				this.expr(0);
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public quantifiedExpr(): QuantifiedExprContext {
		let _localctx: QuantifiedExprContext = new QuantifiedExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SlickParser.RULE_quantifiedExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(SlickParser.T__18);
			this.state = 193;
			this.match(SlickParser.QUANTIFIER);
			this.state = 194;
			this.varlist();
			this.state = 195;
			this.match(SlickParser.T__20);
			this.state = 196;
			this.expr(0);
			this.state = 197;
			this.match(SlickParser.T__21);
			this.state = 198;
			this.expr(0);
			this.state = 199;
			this.match(SlickParser.T__19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setEnumeration(): SetEnumerationContext {
		let _localctx: SetEnumerationContext = new SetEnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SlickParser.RULE_setEnumeration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(SlickParser.T__22);
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (SlickParser.T__14 - 15)) | (1 << (SlickParser.T__16 - 15)) | (1 << (SlickParser.T__17 - 15)) | (1 << (SlickParser.T__18 - 15)) | (1 << (SlickParser.T__22 - 15)) | (1 << (SlickParser.EVAR - 15)) | (1 << (SlickParser.VAR - 15)) | (1 << (SlickParser.NUM - 15)))) !== 0)) {
				{
				this.state = 202;
				this.expr(0);
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===SlickParser.T__13) {
					{
					{
					this.state = 203;
					this.match(SlickParser.T__13);
					this.state = 204;
					this.expr(0);
					}
					}
					this.state = 209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 212;
			this.match(SlickParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setComprehension(): SetComprehensionContext {
		let _localctx: SetComprehensionContext = new SetComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SlickParser.RULE_setComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(SlickParser.T__22);
			this.state = 215;
			this.typedVar();
			this.state = 216;
			this.match(SlickParser.T__20);
			this.state = 217;
			this.expr(0);
			this.state = 218;
			this.match(SlickParser.T__21);
			this.state = 219;
			this.expr(0);
			this.state = 220;
			this.match(SlickParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SlickParser.RULE_functionCall);
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,18,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				this.match(SlickParser.VAR);
				this.state = 223;
				this.match(SlickParser.T__24);
				this.state = 224;
				this.expr(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 225;
				this.match(SlickParser.VAR);
				this.state = 226;
				this.match(SlickParser.T__18);
				this.state = 227;
				this.expr(0);
				this.state = 228;
				this.match(SlickParser.T__19);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typedVar(): TypedVarContext {
		let _localctx: TypedVarContext = new TypedVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SlickParser.RULE_typedVar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(SlickParser.VAR);
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.T__21) {
				{
				this.state = 233;
				this.match(SlickParser.T__21);
				this.state = 234;
				this.match(SlickParser.TYPE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03+\xF0\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03"+
		"\x02\x03\x02\x07\x021\n\x02\f\x02\x0E\x024\v\x02\x03\x03\x05\x037\n\x03"+
		"\x03\x03\x05\x03:\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03@\n\x03"+
		"\f\x03\x0E\x03C\v\x03\x03\x03\x05\x03F\n\x03\x03\x03\x05\x03I\n\x03\x03"+
		"\x04\x03\x04\x03\x04\x03\x04\x06\x04O\n\x04\r\x04\x0E\x04P\x03\x05\x03"+
		"\x05\x05\x05U\n\x05\x03\x06\x03\x06\x06\x06Y\n\x06\r\x06\x0E\x06Z\x03"+
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07c\n\x07\r\x07\x0E"+
		"\x07d\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\tn\n\t\x03\n\x03\n"+
		"\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x87\n\r"+
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xA9\n\r\f\r\x0E"+
		"\r\xAC\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03"+
		"\x10\x07\x10\xB6\n\x10\f\x10\x0E\x10\xB9\v\x10\x03\x11\x03\x11\x03\x11"+
		"\x07\x11\xBE\n\x11\f\x11\x0E\x11\xC1\v\x11\x03\x12\x03\x12\x03\x12\x03"+
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03"+
		"\x13\x07\x13\xD0\n\x13\f\x13\x0E\x13\xD3\v\x13\x05\x13\xD5\n\x13\x03\x13"+
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15"+
		"\xE9\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\xEE\n\x16\x03\x16\x02\x02\x03"+
		"\x18\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12"+
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&"+
		"\x02(\x02*\x02\x02\x04\x03\x02\x07\f\x04\x02%%\'(\xFD\x02,\x03\x02\x02"+
		"\x02\x046\x03\x02\x02\x02\x06J\x03\x02\x02\x02\bR\x03\x02\x02\x02\nV\x03"+
		"\x02\x02\x02\f^\x03\x02\x02\x02\x0Ef\x03\x02\x02\x02\x10m\x03\x02\x02"+
		"\x02\x12o\x03\x02\x02\x02\x14r\x03\x02\x02\x02\x16t\x03\x02\x02\x02\x18"+
		"\x86\x03\x02\x02\x02\x1A\xAD\x03\x02\x02\x02\x1C\xB0\x03\x02\x02\x02\x1E"+
		"\xB2\x03\x02\x02\x02 \xBA\x03\x02\x02\x02\"\xC2\x03\x02\x02\x02$\xCB\x03"+
		"\x02\x02\x02&\xD8\x03\x02\x02\x02(\xE8\x03\x02\x02\x02*\xEA\x03\x02\x02"+
		"\x02,2\x05\x04\x03\x02-.\x05\x06\x04\x02./\x05\x04\x03\x02/1\x03\x02\x02"+
		"\x020-\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02"+
		"\x023\x03\x03\x02\x02\x0242\x03\x02\x02\x0257\x05\b\x05\x0265\x03\x02"+
		"\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x028:\x05\n\x06\x0298\x03\x02"+
		"\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;A\x05\x16\f\x02<=\x05\x1A"+
		"\x0E\x02=>\x05\x16\f\x02>@\x03\x02\x02\x02?<\x03\x02\x02\x02@C\x03\x02"+
		"\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02"+
		"\x02\x02DF\x07+\x02\x02ED\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02"+
		"\x02\x02GI\x05\n\x06\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02I\x05\x03"+
		"\x02\x02\x02JK\x07\x03\x02\x02KL\x07\x03\x02\x02LN\x07\x03\x02\x02MO\x07"+
		"\x03\x02\x02NM\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03"+
		"\x02\x02\x02Q\x07\x03\x02\x02\x02RT\x05\x10\t\x02SU\x05\x12\n\x02TS\x03"+
		"\x02\x02\x02TU\x03\x02\x02\x02U\t\x03\x02\x02\x02VX\x05\f\x07\x02WY\x05"+
		"\x0E\b\x02XW\x03\x02\x02\x02YZ\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03"+
		"\x02\x02\x02[\\\x03\x02\x02\x02\\]\x05\f\x07\x02]\v\x03\x02\x02\x02^_"+
		"\x07\x04\x02\x02_`\x07\x04\x02\x02`b\x07\x04\x02\x02ac\x07\x04\x02\x02"+
		"ba\x03\x02\x02\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02"+
		"e\r\x03\x02\x02\x02fg\x07\x05\x02\x02gh\x07\x1D\x02\x02h\x0F\x03\x02\x02"+
		"\x02ij\x07\x1E\x02\x02jn\x07\x1F\x02\x02kl\x07\x1E\x02\x02ln\x05\x18\r"+
		"\x02mi\x03\x02\x02\x02mk\x03\x02\x02\x02n\x11\x03\x02\x02\x02op\x07\x06"+
		"\x02\x02pq\x05\x14\v\x02q\x13\x03\x02\x02\x02rs\t\x02\x02\x02s\x15\x03"+
		"\x02\x02\x02tu\x05\x18\r\x02u\x17\x03\x02\x02\x02vw\b\r\x01\x02w\x87\x05"+
		"(\x15\x02xy\x07\x11\x02\x02y\x87\x05\x18\r\x12z\x87\x07 \x02\x02{\x87"+
		"\x07!\x02\x02|\x87\x07\x13\x02\x02}\x87\x07\x14\x02\x02~\x87\x07#\x02"+
		"\x02\x7F\x87\x05\"\x12\x02\x80\x87\x05$\x13\x02\x81\x87\x05&\x14\x02\x82"+
		"\x83\x07\x15\x02\x02\x83\x84\x05\x18\r\x02\x84\x85\x07\x16\x02\x02\x85"+
		"\x87\x03\x02\x02\x02\x86v\x03\x02\x02\x02\x86x\x03\x02\x02\x02\x86z\x03"+
		"\x02\x02\x02\x86{\x03\x02\x02\x02\x86|\x03\x02\x02\x02\x86}\x03\x02\x02"+
		"\x02\x86~\x03\x02\x02\x02\x86\x7F\x03\x02\x02\x02\x86\x80\x03\x02\x02"+
		"\x02\x86\x81\x03\x02\x02\x02\x86\x82\x03\x02\x02\x02\x87\xAA\x03\x02\x02"+
		"\x02\x88\x89\f\x11\x02\x02\x89\x8A\x07$\x02\x02\x8A\xA9\x05\x18\r\x12"+
		"\x8B\x8C\f\x10\x02\x02\x8C\x8D\x07\x12\x02\x02\x8D\xA9\x05\x18\r\x11\x8E"+
		"\x8F\f\x0F\x02\x02\x8F\x90\x07%\x02\x02\x90\xA9\x05\x18\r\x10\x91\x92"+
		"\f\x0E\x02\x02\x92\x93\x07&\x02\x02\x93\xA9\x05\x18\r\x0F\x94\x95\f\r"+
		"\x02\x02\x95\x96\x07\'\x02\x02\x96\xA9\x05\x18\r\x0E\x97\x98\f\f\x02\x02"+
		"\x98\x99\x07(\x02\x02\x99\xA9\x05\x18\r\r\x9A\x9B\f\x15\x02\x02\x9B\x9C"+
		"\x07\r\x02\x02\x9C\x9D\x05\x1E\x10\x02\x9D\x9E\x07\x0E\x02\x02\x9E\x9F"+
		"\x05 \x11\x02\x9F\xA0\x07\x0F\x02\x02\xA0\xA9\x03\x02\x02\x02\xA1\xA2"+
		"\f\x14\x02\x02\xA2\xA3\x07\r\x02\x02\xA3\xA4\x07!\x02\x02\xA4\xA5\x07"+
		"\x10\x02\x02\xA5\xA6\x05\x18\r\x02\xA6\xA7\x07\x0F\x02\x02\xA7\xA9\x03"+
		"\x02\x02\x02\xA8\x88\x03\x02\x02\x02\xA8\x8B\x03\x02\x02\x02\xA8\x8E\x03"+
		"\x02\x02\x02\xA8\x91\x03\x02\x02\x02\xA8\x94\x03\x02\x02\x02\xA8\x97\x03"+
		"\x02\x02\x02\xA8\x9A\x03\x02\x02\x02\xA8\xA1\x03\x02\x02\x02\xA9\xAC\x03"+
		"\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\x19\x03"+
		"\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAE\x05\x1C\x0F\x02\xAE\xAF\x07"+
		"\x1C\x02\x02\xAF\x1B\x03\x02\x02\x02\xB0\xB1\t\x03\x02\x02\xB1\x1D\x03"+
		"\x02\x02\x02\xB2\xB7\x05*\x16\x02\xB3\xB4\x07\x10\x02\x02\xB4\xB6\x05"+
		"*\x16\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03"+
		"\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\x1F\x03\x02\x02\x02\xB9\xB7\x03"+
		"\x02\x02\x02\xBA\xBF\x05\x18\r\x02\xBB\xBC\x07\x10\x02\x02\xBC\xBE\x05"+
		"\x18\r\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03"+
		"\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0!\x03\x02\x02\x02\xC1\xBF\x03"+
		"\x02\x02\x02\xC2\xC3\x07\x15\x02\x02\xC3\xC4\x07)\x02\x02\xC4\xC5\x05"+
		"\x1E\x10\x02\xC5\xC6\x07\x17\x02\x02\xC6\xC7\x05\x18\r\x02\xC7\xC8\x07"+
		"\x18\x02\x02\xC8\xC9\x05\x18\r\x02\xC9\xCA\x07\x16\x02\x02\xCA#\x03\x02"+
		"\x02\x02\xCB\xD4\x07\x19\x02\x02\xCC\xD1\x05\x18\r\x02\xCD\xCE\x07\x10"+
		"\x02\x02\xCE\xD0\x05\x18\r\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD3\x03\x02"+
		"\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5\x03\x02"+
		"\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xCC\x03\x02\x02\x02\xD4\xD5\x03\x02"+
		"\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x07\x1A\x02\x02\xD7%\x03\x02"+
		"\x02\x02\xD8\xD9\x07\x19\x02\x02\xD9\xDA\x05*\x16\x02\xDA\xDB\x07\x17"+
		"\x02\x02\xDB\xDC\x05\x18\r\x02\xDC\xDD\x07\x18\x02\x02\xDD\xDE\x05\x18"+
		"\r\x02\xDE\xDF\x07\x1A\x02\x02\xDF\'\x03\x02\x02\x02\xE0\xE1\x07!\x02"+
		"\x02\xE1\xE2\x07\x1B\x02\x02\xE2\xE9\x05\x18\r\x02\xE3\xE4\x07!\x02\x02"+
		"\xE4\xE5\x07\x15\x02\x02\xE5\xE6\x05\x18\r\x02\xE6\xE7\x07\x16\x02\x02"+
		"\xE7\xE9\x03\x02\x02\x02\xE8\xE0\x03\x02\x02\x02\xE8\xE3\x03\x02\x02\x02"+
		"\xE9)\x03\x02\x02\x02\xEA\xED\x07!\x02\x02\xEB\xEC\x07\x18\x02\x02\xEC"+
		"\xEE\x07\"\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE"+
		"+\x03\x02\x02\x02\x16269AEHPTZdm\x86\xA8\xAA\xB7\xBF\xD1\xD4\xE8\xED";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SlickParser.__ATN) {
			SlickParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SlickParser._serializedATN));
		}

		return SlickParser.__ATN;
	}

}

export class DocContext extends ParserRuleContext {
	public proof(): ProofContext[];
	public proof(i: number): ProofContext;
	public proof(i?: number): ProofContext | ProofContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProofContext);
		} else {
			return this.getRuleContext(i, ProofContext);
		}
	}
	public sep(): SepContext[];
	public sep(i: number): SepContext;
	public sep(i?: number): SepContext | SepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SepContext);
		} else {
			return this.getRuleContext(i, SepContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_doc; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterDoc) listener.enterDoc(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitDoc) listener.exitDoc(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitDoc) return visitor.visitDoc(this);
		else return visitor.visitChildren(this);
	}
}


export class ProofContext extends ParserRuleContext {
	public step(): StepContext[];
	public step(i: number): StepContext;
	public step(i?: number): StepContext | StepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StepContext);
		} else {
			return this.getRuleContext(i, StepContext);
		}
	}
	public header(): HeaderContext | undefined {
		return this.tryGetRuleContext(0, HeaderContext);
	}
	public exposition(): ExpositionContext[];
	public exposition(i: number): ExpositionContext;
	public exposition(i?: number): ExpositionContext | ExpositionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpositionContext);
		} else {
			return this.getRuleContext(i, ExpositionContext);
		}
	}
	public hint(): HintContext[];
	public hint(i: number): HintContext;
	public hint(i?: number): HintContext | HintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HintContext);
		} else {
			return this.getRuleContext(i, HintContext);
		}
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(SlickParser.END, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_proof; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterProof) listener.enterProof(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitProof) listener.exitProof(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitProof) return visitor.visitProof(this);
		else return visitor.visitChildren(this);
	}
}


export class SepContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_sep; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterSep) listener.enterSep(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitSep) listener.exitSep(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitSep) return visitor.visitSep(this);
		else return visitor.visitChildren(this);
	}
}


export class HeaderContext extends ParserRuleContext {
	public theorem(): TheoremContext {
		return this.getRuleContext(0, TheoremContext);
	}
	public method(): MethodContext | undefined {
		return this.tryGetRuleContext(0, MethodContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_header; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterHeader) listener.enterHeader(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitHeader) listener.exitHeader(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitHeader) return visitor.visitHeader(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpositionContext extends ParserRuleContext {
	public expoDelim(): ExpoDelimContext[];
	public expoDelim(i: number): ExpoDelimContext;
	public expoDelim(i?: number): ExpoDelimContext | ExpoDelimContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpoDelimContext);
		} else {
			return this.getRuleContext(i, ExpoDelimContext);
		}
	}
	public expoLine(): ExpoLineContext[];
	public expoLine(i: number): ExpoLineContext;
	public expoLine(i?: number): ExpoLineContext | ExpoLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpoLineContext);
		} else {
			return this.getRuleContext(i, ExpoLineContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_exposition; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterExposition) listener.enterExposition(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitExposition) listener.exitExposition(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitExposition) return visitor.visitExposition(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpoDelimContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_expoDelim; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterExpoDelim) listener.enterExpoDelim(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitExpoDelim) listener.exitExpoDelim(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitExpoDelim) return visitor.visitExpoDelim(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpoLineContext extends ParserRuleContext {
	public EXPO(): TerminalNode { return this.getToken(SlickParser.EXPO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_expoLine; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterExpoLine) listener.enterExpoLine(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitExpoLine) listener.exitExpoLine(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitExpoLine) return visitor.visitExpoLine(this);
		else return visitor.visitChildren(this);
	}
}


export class TheoremContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_theorem; }
 
	public copyFrom(ctx: TheoremContext): void {
		super.copyFrom(ctx);
	}
}
export class AdHocTheoremContext extends TheoremContext {
	public PROVE(): TerminalNode { return this.getToken(SlickParser.PROVE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: TheoremContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterAdHocTheorem) listener.enterAdHocTheorem(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitAdHocTheorem) listener.exitAdHocTheorem(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitAdHocTheorem) return visitor.visitAdHocTheorem(this);
		else return visitor.visitChildren(this);
	}
}
export class BibleTheoremContext extends TheoremContext {
	public PROVE(): TerminalNode { return this.getToken(SlickParser.PROVE, 0); }
	public RULENUM(): TerminalNode { return this.getToken(SlickParser.RULENUM, 0); }
	constructor(ctx: TheoremContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterBibleTheorem) listener.enterBibleTheorem(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitBibleTheorem) listener.exitBibleTheorem(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitBibleTheorem) return visitor.visitBibleTheorem(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodContext extends ParserRuleContext {
	public methodName(): MethodNameContext {
		return this.getRuleContext(0, MethodNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_method; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterMethod) listener.enterMethod(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitMethod) listener.exitMethod(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitMethod) return visitor.visitMethod(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodNameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_methodName; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterMethodName) listener.enterMethodName(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitMethodName) listener.exitMethodName(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitMethodName) return visitor.visitMethodName(this);
		else return visitor.visitChildren(this);
	}
}


export class StepContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_step; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterStep) listener.enterStep(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitStep) listener.exitStep(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitStep) return visitor.visitStep(this);
		else return visitor.visitChildren(this);
	}
}


export class ExprContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_expr; }
 
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ImplicationExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IMPOP(): TerminalNode { return this.getToken(SlickParser.IMPOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterImplicationExpr) listener.enterImplicationExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitImplicationExpr) listener.exitImplicationExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitImplicationExpr) return visitor.visitImplicationExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class EquivalenceExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQOP(): TerminalNode { return this.getToken(SlickParser.EQOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterEquivalenceExpr) listener.enterEquivalenceExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitEquivalenceExpr) listener.exitEquivalenceExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitEquivalenceExpr) return visitor.visitEquivalenceExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class AtomContext extends ExprContext {
	public EVAR(): TerminalNode | undefined { return this.tryGetToken(SlickParser.EVAR, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(SlickParser.VAR, 0); }
	public NUM(): TerminalNode | undefined { return this.tryGetToken(SlickParser.NUM, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterAtom) listener.enterAtom(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitAtom) listener.exitAtom(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitAtom) return visitor.visitAtom(this);
		else return visitor.visitChildren(this);
	}
}
export class RelativeExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RELOP(): TerminalNode { return this.getToken(SlickParser.RELOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterRelativeExpr) listener.enterRelativeExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitRelativeExpr) listener.exitRelativeExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitRelativeExpr) return visitor.visitRelativeExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class SetEnumExprContext extends ExprContext {
	public setEnumeration(): SetEnumerationContext {
		return this.getRuleContext(0, SetEnumerationContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterSetEnumExpr) listener.enterSetEnumExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitSetEnumExpr) listener.exitSetEnumExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitSetEnumExpr) return visitor.visitSetEnumExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class FunctionCallExprContext extends ExprContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterFunctionCallExpr) listener.enterFunctionCallExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitFunctionCallExpr) listener.exitFunctionCallExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpr) return visitor.visitFunctionCallExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class AdditionExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ADDOP(): TerminalNode { return this.getToken(SlickParser.ADDOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterAdditionExpr) listener.enterAdditionExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitAdditionExpr) listener.exitAdditionExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitAdditionExpr) return visitor.visitAdditionExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class LeibnizExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterLeibnizExpr) listener.enterLeibnizExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitLeibnizExpr) listener.exitLeibnizExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitLeibnizExpr) return visitor.visitLeibnizExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class SetCompExprContext extends ExprContext {
	public setComprehension(): SetComprehensionContext {
		return this.getRuleContext(0, SetComprehensionContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterSetCompExpr) listener.enterSetCompExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitSetCompExpr) listener.exitSetCompExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitSetCompExpr) return visitor.visitSetCompExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class GeneralExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterGeneralExpr) listener.enterGeneralExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitGeneralExpr) listener.exitGeneralExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitGeneralExpr) return visitor.visitGeneralExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class ParenExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterParenExpr) listener.enterParenExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitParenExpr) listener.exitParenExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitParenExpr) return visitor.visitParenExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class TSExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public varlist(): VarlistContext {
		return this.getRuleContext(0, VarlistContext);
	}
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterTSExpr) listener.enterTSExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitTSExpr) listener.exitTSExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitTSExpr) return visitor.visitTSExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class JunctionExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public JOP(): TerminalNode { return this.getToken(SlickParser.JOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterJunctionExpr) listener.enterJunctionExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitJunctionExpr) listener.exitJunctionExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitJunctionExpr) return visitor.visitJunctionExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class QuantExprContext extends ExprContext {
	public quantifiedExpr(): QuantifiedExprContext {
		return this.getRuleContext(0, QuantifiedExprContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterQuantExpr) listener.enterQuantExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitQuantExpr) listener.exitQuantExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitQuantExpr) return visitor.visitQuantExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class UnaryPrefixExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterUnaryPrefixExpr) listener.enterUnaryPrefixExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitUnaryPrefixExpr) listener.exitUnaryPrefixExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitUnaryPrefixExpr) return visitor.visitUnaryPrefixExpr(this);
		else return visitor.visitChildren(this);
	}
}


export class HintContext extends ParserRuleContext {
	public hintOp(): HintOpContext {
		return this.getRuleContext(0, HintOpContext);
	}
	public COMMENT(): TerminalNode { return this.getToken(SlickParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_hint; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterHint) listener.enterHint(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitHint) listener.exitHint(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitHint) return visitor.visitHint(this);
		else return visitor.visitChildren(this);
	}
}


export class HintOpContext extends ParserRuleContext {
	public RELOP(): TerminalNode | undefined { return this.tryGetToken(SlickParser.RELOP, 0); }
	public IMPOP(): TerminalNode | undefined { return this.tryGetToken(SlickParser.IMPOP, 0); }
	public EQOP(): TerminalNode | undefined { return this.tryGetToken(SlickParser.EQOP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_hintOp; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterHintOp) listener.enterHintOp(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitHintOp) listener.exitHintOp(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitHintOp) return visitor.visitHintOp(this);
		else return visitor.visitChildren(this);
	}
}


export class VarlistContext extends ParserRuleContext {
	public typedVar(): TypedVarContext[];
	public typedVar(i: number): TypedVarContext;
	public typedVar(i?: number): TypedVarContext | TypedVarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypedVarContext);
		} else {
			return this.getRuleContext(i, TypedVarContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_varlist; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterVarlist) listener.enterVarlist(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitVarlist) listener.exitVarlist(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitVarlist) return visitor.visitVarlist(this);
		else return visitor.visitChildren(this);
	}
}


export class ExprlistContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_exprlist; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterExprlist) listener.enterExprlist(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitExprlist) listener.exitExprlist(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitExprlist) return visitor.visitExprlist(this);
		else return visitor.visitChildren(this);
	}
}


export class QuantifiedExprContext extends ParserRuleContext {
	public QUANTIFIER(): TerminalNode { return this.getToken(SlickParser.QUANTIFIER, 0); }
	public varlist(): VarlistContext {
		return this.getRuleContext(0, VarlistContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_quantifiedExpr; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterQuantifiedExpr) listener.enterQuantifiedExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitQuantifiedExpr) listener.exitQuantifiedExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitQuantifiedExpr) return visitor.visitQuantifiedExpr(this);
		else return visitor.visitChildren(this);
	}
}


export class SetEnumerationContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_setEnumeration; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterSetEnumeration) listener.enterSetEnumeration(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitSetEnumeration) listener.exitSetEnumeration(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitSetEnumeration) return visitor.visitSetEnumeration(this);
		else return visitor.visitChildren(this);
	}
}


export class SetComprehensionContext extends ParserRuleContext {
	public typedVar(): TypedVarContext {
		return this.getRuleContext(0, TypedVarContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_setComprehension; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterSetComprehension) listener.enterSetComprehension(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitSetComprehension) listener.exitSetComprehension(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitSetComprehension) return visitor.visitSetComprehension(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_functionCall; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterFunctionCall) listener.enterFunctionCall(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitFunctionCall) listener.exitFunctionCall(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitFunctionCall) return visitor.visitFunctionCall(this);
		else return visitor.visitChildren(this);
	}
}


export class TypedVarContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(SlickParser.TYPE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_typedVar; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterTypedVar) listener.enterTypedVar(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitTypedVar) listener.exitTypedVar(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitTypedVar) return visitor.visitTypedVar(this);
		else return visitor.visitChildren(this);
	}
}


