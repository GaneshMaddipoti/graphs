let javaSyntaxHTML = `
Java is case sensitive, while declaring variables, methods, classes, literals <br/>
(/ /) used for comments <br/>
`;

let javaLiteralHTML = `
Its a character or word which denotes either number,string, boolean<br/>
Ex: 6, 23.332, 'A', "Hello", true, '\u0044'(unicode literal D) <br/>
In java, we can not put commas in a numberic literal, but we can use _ for readability <br/>
We can not use comma, at start or end of the numeric literal <br/>
Ex: long income = 1_234_456l;

`;

let javaDataTypeHTML = `
There are 8 data types we can have in Java primitively <br/>
Whole Numbers are int by default, we can put l or L as suffix to treat it as long <br/>
Real numbers are double by default, we can put f or F as suffix to treat it as float <br/>
boolean         - 1 bit
byte            - 1 byte
short           - 2 byte
int             - 4 byte
long            - 8 byte
float           - 4 byte
double          - 8 byte
char            - 2 byte
For precise calculations use BigDecimal, because float, double will behave inconsistently <br/>
`;

let javaVariableHTML = `
Variables with given name, we use to store and retrieve information in memory <br/>
A variable can be any primitive data type - boolean, byte, short, int, long, float, double, char <br/>
or any custom data type (class) that user defined <br/>
Ex : int orderNumber = 0;
`;

let javaOperatorHTML = `
The operator performs an operation on variable values its used with <br/>
Ex : +, -, *, >, etc... <br/>
`;

let javaExpressionHTML = `
An expression is a coding construct, that evaluates to a single value <br/>
This will be the code segment on the right side of = operator, in an assignment or declaration statement <br/>
Ex : (orderNumber + 100)
`;

let javaStatementHTML = `
Its a complete command to be executed <br/>
It can include one or more expressions <br/>
Ex : total = orderValue + tax;
`;

let javaKeywordHTML = `
Its a reserved word, have predefined meaning in java language <br/>
Ex: int, byte, for, which, try, catch, etc...<br/>
`;

let javaClassHTML = `
Its a template to create objects, and we use it to create custom data types <br/>
Ex:                                                         <br/>
class Box {                                                 <br/>
    int length;                                             <br/>
    int width;                                              <br/>
    int area(int length, int width) {                       <br/>
        return length, width;                               <br/>
    }                                                       <br/>
}                                                           <br/>
`;

let javaWrapperClassHTML = `
A wrapper class provides the basic operations like the corresponding primitive data type <br/>
as well as some information about the primitive data type stored in it, which can not be stored in primitive itself <br/>
Ex: Integer length = 0;         <br/>
boolean     - Boolean           <br/>
byte        - Byte              <br/>
short       - Short             <br/>
int         - Integer           <br/>
long        - Long              <br/>
float       - Float             <br/>
double      - Double            <br/>
char        - Character         <br/>
Wraparound will happen for byte, short, int, long data types <br/>
Integer wraparounds (Integer.MIN_VALUE - 1)(-2147483648 -1) to 2147483647 (Integer.MAX_VALUE) <br/>
Integer wraparounds (Integer.MAX_VALUE + 1)(2147483647+1) to -2147483648 (Integer.MIN_VALUE) <br/>

`;

let javaCastingHTML = `
We can change the data type from one to another using casting <br/>
Ex: byte value = (byte) 1000;
`;

let javaStringHTML = `
A string is a class object that contains a sequence of characters. <br/>
Strings are immutable <br/>
+       - for concatenation <br/>

`;























