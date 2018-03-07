// Generated from Slick.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SlickParser.
function SlickListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SlickListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SlickListener.prototype.constructor = SlickListener;

// Enter a parse tree produced by SlickParser#doc.
SlickListener.prototype.enterDoc = function(ctx) {
};

// Exit a parse tree produced by SlickParser#doc.
SlickListener.prototype.exitDoc = function(ctx) {
};


// Enter a parse tree produced by SlickParser#proof.
SlickListener.prototype.enterProof = function(ctx) {
};

// Exit a parse tree produced by SlickParser#proof.
SlickListener.prototype.exitProof = function(ctx) {
};


// Enter a parse tree produced by SlickParser#sep.
SlickListener.prototype.enterSep = function(ctx) {
};

// Exit a parse tree produced by SlickParser#sep.
SlickListener.prototype.exitSep = function(ctx) {
};


// Enter a parse tree produced by SlickParser#header.
SlickListener.prototype.enterHeader = function(ctx) {
};

// Exit a parse tree produced by SlickParser#header.
SlickListener.prototype.exitHeader = function(ctx) {
};


// Enter a parse tree produced by SlickParser#theorem.
SlickListener.prototype.enterTheorem = function(ctx) {
};

// Exit a parse tree produced by SlickParser#theorem.
SlickListener.prototype.exitTheorem = function(ctx) {
};


// Enter a parse tree produced by SlickParser#method.
SlickListener.prototype.enterMethod = function(ctx) {
};

// Exit a parse tree produced by SlickParser#method.
SlickListener.prototype.exitMethod = function(ctx) {
};


// Enter a parse tree produced by SlickParser#methodName.
SlickListener.prototype.enterMethodName = function(ctx) {
};

// Exit a parse tree produced by SlickParser#methodName.
SlickListener.prototype.exitMethodName = function(ctx) {
};


// Enter a parse tree produced by SlickParser#step.
SlickListener.prototype.enterStep = function(ctx) {
};

// Exit a parse tree produced by SlickParser#step.
SlickListener.prototype.exitStep = function(ctx) {
};


// Enter a parse tree produced by SlickParser#ImplicationExpr.
SlickListener.prototype.enterImplicationExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#ImplicationExpr.
SlickListener.prototype.exitImplicationExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#EquivalenceExpr.
SlickListener.prototype.enterEquivalenceExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#EquivalenceExpr.
SlickListener.prototype.exitEquivalenceExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#Atom.
SlickListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by SlickParser#Atom.
SlickListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by SlickParser#RelativeExpr.
SlickListener.prototype.enterRelativeExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#RelativeExpr.
SlickListener.prototype.exitRelativeExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#SetEnumExpr.
SlickListener.prototype.enterSetEnumExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#SetEnumExpr.
SlickListener.prototype.exitSetEnumExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#FunctionCallExpr.
SlickListener.prototype.enterFunctionCallExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#FunctionCallExpr.
SlickListener.prototype.exitFunctionCallExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#AdditionExpr.
SlickListener.prototype.enterAdditionExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#AdditionExpr.
SlickListener.prototype.exitAdditionExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#LeibnizExpr.
SlickListener.prototype.enterLeibnizExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#LeibnizExpr.
SlickListener.prototype.exitLeibnizExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#SetCompExpr.
SlickListener.prototype.enterSetCompExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#SetCompExpr.
SlickListener.prototype.exitSetCompExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#GeneralExpr.
SlickListener.prototype.enterGeneralExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#GeneralExpr.
SlickListener.prototype.exitGeneralExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#ParenExpr.
SlickListener.prototype.enterParenExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#ParenExpr.
SlickListener.prototype.exitParenExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#QuantExpr.
SlickListener.prototype.enterQuantExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#QuantExpr.
SlickListener.prototype.exitQuantExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#JunctionExpr.
SlickListener.prototype.enterJunctionExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#JunctionExpr.
SlickListener.prototype.exitJunctionExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#TSExpr.
SlickListener.prototype.enterTSExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#TSExpr.
SlickListener.prototype.exitTSExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#UnaryPrefixExpr.
SlickListener.prototype.enterUnaryPrefixExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#UnaryPrefixExpr.
SlickListener.prototype.exitUnaryPrefixExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#hint.
SlickListener.prototype.enterHint = function(ctx) {
};

// Exit a parse tree produced by SlickParser#hint.
SlickListener.prototype.exitHint = function(ctx) {
};


// Enter a parse tree produced by SlickParser#varlist.
SlickListener.prototype.enterVarlist = function(ctx) {
};

// Exit a parse tree produced by SlickParser#varlist.
SlickListener.prototype.exitVarlist = function(ctx) {
};


// Enter a parse tree produced by SlickParser#exprlist.
SlickListener.prototype.enterExprlist = function(ctx) {
};

// Exit a parse tree produced by SlickParser#exprlist.
SlickListener.prototype.exitExprlist = function(ctx) {
};


// Enter a parse tree produced by SlickParser#quantifiedExpr.
SlickListener.prototype.enterQuantifiedExpr = function(ctx) {
};

// Exit a parse tree produced by SlickParser#quantifiedExpr.
SlickListener.prototype.exitQuantifiedExpr = function(ctx) {
};


// Enter a parse tree produced by SlickParser#setEnumeration.
SlickListener.prototype.enterSetEnumeration = function(ctx) {
};

// Exit a parse tree produced by SlickParser#setEnumeration.
SlickListener.prototype.exitSetEnumeration = function(ctx) {
};


// Enter a parse tree produced by SlickParser#setComprehension.
SlickListener.prototype.enterSetComprehension = function(ctx) {
};

// Exit a parse tree produced by SlickParser#setComprehension.
SlickListener.prototype.exitSetComprehension = function(ctx) {
};


// Enter a parse tree produced by SlickParser#functionCall.
SlickListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SlickParser#functionCall.
SlickListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SlickParser#typedVar.
SlickListener.prototype.enterTypedVar = function(ctx) {
};

// Exit a parse tree produced by SlickParser#typedVar.
SlickListener.prototype.exitTypedVar = function(ctx) {
};



exports.SlickListener = SlickListener;