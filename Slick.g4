grammar Slick;

proof : step (hint step)+ END ;

step: expr;

expr : expr '[' varlist '≔' exprlist ']'
   | expr '[' VAR ',' expr ']'
   | functionCall
   | '¬' expr
   | expr ADDOP expr
   | expr '★' expr
   | expr RELOP expr
   | expr JOP expr
   | expr IMPOP expr
   | expr EQOP expr
   | EVAR
   | VAR
   | 'true'
   | 'false'
   | NUM
   | quantifiedExpr
   | setEnumeration
   | setComprehension
   | '(' expr ')'
;

hint : '=' '〈' .*? '〉' ;
varlist : typedVar (',' typedVar)* ;
exprlist : expr (',' expr)* ;
quantifiedExpr : '(' QUANTIFIER varlist '|' expr ':' expr ')' ;
setEnumeration : '{' (expr (',' expr)*)? '}' ;
setComprehension : '{' typedVar '|' expr ':' expr '}' ;
functionCall : VAR '.' expr | VAR '(' expr ')' ;
typedVar : VAR (':' TYPE)? ;

EVAR : [A-Z] ;
VAR : [a-z] ;
TYPE : 'ℤ' | 'ℕ' | 'ℤ+' | 'ℤ-' | 'ℚ' | 'ℝ' | 'ℝ+' | '𝔹' ;
NUM : ([0-9]('.' [0-9]+)?) | ([1-9][0-9]*('.' [0-9]+)?) ;
ADDOP : '+' | '-' | '∪' | '∩';
RELOP : '=' | '<' | '>' | '≤' | '≥' | '∈' | '⊂' | '⊆' | '⊃' | '⊇';
JOP : '⋀' | '⋁' ;
IMPOP : '⇒'| '⇐' | '⇏' | '⇍';
EQOP : '≡' | '≢' ;
QUANTIFIER : '★' | '∀' | '∃' ;
WS : [ \t\r\n]+ -> skip ;
END : '╱╱' ;
