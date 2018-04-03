grammar Slick;

doc : proof (sep proof)* ;

proof : header? startExpo? step (hint step)* END? endExpo? ;

startExpo : EXPO ;

endExpo : EXPO ;

sep : '-' '-' '-' '-'+ ;

header : theorem method? ;

theorem : PROVE RULENUM     # BibleTheorem
  | PROVE expr              # AdHocTheorem
;

method : 'by' methodName ;

methodName : 'showing' 'equivalence' 'to' 'previous' 'theorem'
  | 'showing' 'the' 'LHS' 'is' 'equivalent' 'to' 'the' 'RHS'
  | 'showing' 'the' 'RHS' 'is' 'equivalent' 'to' 'the' 'LHS'
  | 'showing' 'the' 'LHS' 'implies' 'the' 'RHS'
  | 'showing' 'the' 'RHS' 'follows' 'from' 'the' 'LHS'
  | 'assuming' 'the' 'conjuncts' 'of' 'the' 'antecedent'
  | 'case' 'analysis' 'on' VAR
;

step: expr;

expr : expr '[' varlist '≔' exprlist ']'    # TSExpr
   | expr '[' VAR ',' expr ']'              # LeibnizExpr
   | functionCall                           # FunctionCallExpr
   | '¬' expr                               # UnaryPrefixExpr
   | expr ADDOP expr                        # AdditionExpr
   | expr '★' expr                          # GeneralExpr
   | expr RELOP expr                        # RelativeExpr
   | expr JOP expr                          # JunctionExpr
   | expr IMPOP expr                        # ImplicationExpr
   | expr EQOP expr                         # EquivalenceExpr
   | EVAR                                   # Atom
   | VAR                                    # Atom
   | 'true'                                 # Atom
   | 'false'                                # Atom
   | NUM                                    # Atom
   | quantifiedExpr                         # QuantExpr
   | setEnumeration                         # SetEnumExpr
   | setComprehension                       # SetCompExpr
   | '(' expr ')'                           # ParenExpr
;

hint : hintOp COMMENT ;
hintOp : RELOP | IMPOP | EQOP ;
varlist : typedVar (',' typedVar)* ;
exprlist : expr (',' expr)* ;
quantifiedExpr : '(' QUANTIFIER varlist '|' expr ':' expr ')' ;
setEnumeration : '{' (expr (',' expr)*)? '}' ;
setComprehension : '{' typedVar '|' expr ':' expr '}' ;
functionCall : VAR '.' expr | VAR '(' expr ')' ;
typedVar : VAR (':' TYPE)? ;

COMMENT : '〈' .+? '〉' ;
EXPO : '/*' .+? '*/' ;
PROVE : 'Prove' | 'Reprove' ;
RULENUM: [1-9][0-9]?'.'[1-9][0-9]?[0-9]?[a-e]?('.'[0-9])? ;
EVAR : [A-Z] ;
VAR : [a-z] ;
TYPE : 'ℤ' | 'ℕ' | 'ℤ+' | 'ℤ-' | 'ℚ' | 'ℝ' | 'ℝ+' | '𝔹' ;
NUM : ([0-9]('.' [0-9]+)?) | ([1-9][0-9]*('.' [0-9]+)?) ;
ADDOP : '+' | '-' | '∪' | '∩';
RELOP : '=' | '≠' | '<' | '>' | '≤' | '≥' | '∈' | '⊂' | '⊆' | '⊃' | '⊇';
JOP : '⋀' | '⋁' ;
IMPOP : '⇒'| '⇐' | '⇏' | '⇍';
EQOP : '≡' | '≢' ;
QUANTIFIER : '★' | '∀' | '∃' ;
WS : [ \t\r\n]+ -> channel(HIDDEN) ;
END : '╱╱' ;
