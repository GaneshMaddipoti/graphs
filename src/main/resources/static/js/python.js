let pythonHTML = `Python is created in 1990 by Guido van Rossum, Python 3 release in 2008 <br/>
Python is specifically designed as easy to use language with high focus on readability of code <br/>
Lots of existing libraries and frameworks exists already allowing us to use Python to a wide variety of tasks <br/>
Python use cases : <br/>
1) Automate simple tasks <br/>
    Searching for files and editing them <br/>
    Scraping information from a website <br/>
    Reading and editing excel files <br/>
    Work with PDFs <br/>
    Automate emails and text messages <br/>
    Fill out forms <br/>
2) Data science and machine learning <br/>
    Analyze large data files <br/>
    Create visualizations <br/>
    Perform machine learning tasks <br/>
    Create and run predictive algorithms <br/>
3) Create websites <br/>
    Using Django, Flask frameworks to handle the backend and data <br/>
    Create interactive dashboards for users using plotly, dash <br/>    
`;

let pythonCLIHTML = `Python is an interpreted language <br/>
So, It will come with a python executable with OS supported libraries <br/>
>python hello.py <br/>
We can also execute one line codes using python provided REPL <br/>
>python <br/>
`;

let jupyterNotebookHTML = `A Jupyter Notebook is an open source web application that allows data scientists to <br/>
create and share documents that include live code, equations, and other multimedia resources. <br/>
Jupyter notebooks are useful for "showing the work" through a combination of code, markdown, links, and images. <br/>
They are easy to use and can be run cell by cell to better understand what the code does. <br/>
Jupyter notebooks can also be converted to a number of standard output formats (HTML, Ppt, PDF, Markdown, Python)<br/>
A Jupyter notebook has two components: <br/>
1) a front-end web page <br/>
2) a back-end kernel. <br/>
The front-end web page allows to enter programming code or text in rectangular "cells." <br/> 
The browser then passes the code to the back-end kernel which runs the code and returns the results. <br/> 
`;

let pythonSyntaxHTML = `a comment is a piece of text that begins with a # <br/>

`;

let pythonDatatypesHTML = `bool - logical value representing True or False <br/>
int - (Integers are whole numbers - 3, 300 etc...) <br/>
&emsp;&emsp; you can write this number either like this: 11111111, or like that: 11_111_111 <br/>
&emsp;&emsp; Octal values are preceded by 0O or 0o, and numbers between [0..7] <br/>
&emsp;&emsp; Hexadecimal values are preceded by 0X or 0x, and numbers between [0..9] and A,B,C,D,E,F <br/>

float - (Decimal numbers - 2.34, 100.33, etc...) <br/>
&emsp;&emsp; To avoid writing out so many zeros, we use abbreviated form, which you have probably already seen <br/>
&emsp;&emsp; 300000000 : 3 x 10^8, same can be written in python by : 3E8, or 3e8 <br/>
str - (Ordered sequence of characters (seperated by' or ") - "Hello", "Sample question", etc...) <br/>
&emsp;&emsp; String are immutable, we can't change characters in string <br/>
&emsp;&emsp; these are indexed and accessed by [index] or [reverse index] <br/>
&emsp;&emsp; There are some builtin functions to manipulate strings like <br/> 
&emsp;&emsp; slice[start:stop:step] - to get sub string <br/>
&emsp;&emsp; split() - split string by white space or given character <br/>
&emsp;&emsp; "This is object {1} {0}".format(obj.name, obj.id) - is used when formatting an object into string <br/>

<br/>
tup - (Ordered immutable sequence of objects - (10, "hello", 23.2323), etc...) <br/>
list - (Ordered sequence of objects - [10, "hello", 23.343], etc...) <br/>
set - (Unordered collection of unique objects - {"test", 10, 23.2323}, etc... <br/>
dict - (Unordered key value pairs - {"key1":"value1", "name":"John"}, etc...) <br/>
`;

let pythonOperatorsHTML = `If both operands integers, result integer, if one is float result is float <br/>
All operators are left sided binding except exponential operator which is right sided <br/>
+ - (for addition and concatenation in string) <br/>
- - (for subtraction) <br/>
* - (for multiplication and times in string(number <= 0 produces an empty string)) <br/>
/ - (for division, always returns float, ZeroDivisionError possible) <br/>
// - (for rounding off division or floor division, ZeroDivisionError possible) <br/>
% - (for modulus, giving reminder of division) <br/>
** - (for exponential 2**3 = 8) <br/>
<br/>
== - for equal, != - for not equal <br/>
> - greater than, >= - greater than or equal to <br/>
< - less than, <= - less than or equal to <br/>
<br/>
and -  conjunction, both should be true <br/>
or - disjunction, any one is true, evaluates to true <br/>
not - negation, true to false, false to true <br/>
<br/>
bitwise &(conjunction), bitwise |(disjunction), bitwise ~(negation), bitwise ^(xor) <br/> 
Bitwise operators works with integers only <br/>
<br/>
<<, >> are binary left and right shift operators <br/>
<br/>
Priority - (), **, unary(+,-), *, /, //, %, +, -, <<, >>, <, <=, >, >=, ==, !=, &, |, short hand operators <br/>
`;

let pythonFlowControlsHTML = `Do execute if condition is met  <br/>
if true_or_not:  <br/>
&emsp; do_this_if_true <br/>
elif: <br/>
&emsp; do_this_else_if <br/>
else: (always preceding with if, last branch, and optional)<br/>
&emsp; do this otherwise <br/>
Supports nested conditions also <br/>
<br/>
while condition_expression: Iterate until condition meets<br/>
&emsp; instruction <br/>
for i in range(10): count the "turns" of the loop than to check the conditions <br/>
&emsp; do_something() <br/>
&emsp; pass <br/>
pass here because the for,if,elif,else,while syntax demands at least one instruction inside the body <br/>
The loop's else branch is always executed once, regardless of whether the loop has entered its body or not.<br/>
<b>break</b> - exits the loop immediately, and unconditionally ends the loop's operation; <br/> 
&emsp; the program begins to execute the nearest instruction after the loop's body; <br/>
<b>continue</b> - behaves as if the program has suddenly reached the end of the body; <br/>
&emsp; the next turn is started and the condition expression is tested immediately. <br/>
`;

let pythonVariablesHTML = `We use variable name to name a data type <br/>
Ex: height = 23 <br/>
Rules for variable names : <br/>
1) alpha numerica characters and _ <br/>
2) Can not start with a number <br/>
3) No spaces in the name, instead we use _ <br/>
4) We cant use special characters other than _ <br/>
5) We cant use python keywords as variable names <br/>
6) PEP8 recommends to use lower case for variables <br/>
7) Dynamic typing - meaning we can re-assign a variable different data type <br/>
`;

let pythonFunctionsHTML = ` print() -  Prints the values to a stream, or to sys.stdout by default.<br/> 
&emsp; - print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)  <br/>
round() - to round the outputted result to the number of decimal places specified in the parentheses <br/>
&emsp; - round(number, ndigits=None) <br/>
input() function is able to read data entered by the user and to return the same data to the running program.<br/>
int() function takes one argument (e.g., a string: int(string)) and tries to convert it into an integer; <br/>
float() function takes one argument (e.g., a string: float(string)) and tries to convert it into a float <br/>
str() function convert a number into a string <br/>
min() - return minimum value of passed parameters <br/>
max() - return maximum value of passed parameters <br/>
range(start, stop, step) - is responsible for generating all the desired values upto given value(not including last one) <br/>

`;

let pythonNodeDataArray = [
    {key: "Python", desc: "Python", color: "WhiteSmoke", isGroup: true, category: "tree", img: "assets/img/python.png", toolTipHTML: pythonHTML},
    {key: "Python-Install", desc: "Install", color: "WhiteSmoke", isGroup: true, group: "Python", category: "grid-congested",},
    {key: "Python-CLI", desc: "CLI", color: "WhiteSmoke", group:"Python-Install", category: "picTemplate", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonCLIHTML},
    {key: "Jupyter-notebook", desc: "Jupyter Notebook", color: "WhiteSmoke", group:"Python-Install", category: "picTemplate", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: jupyterNotebookHTML},

    {key: "Python-Syntax", desc: "Syntax", color: "WhiteSmoke", isGroup: true, group: "Python", category: "grid-congested",},
    {key: "Python-Datatypes", desc: "Datatypes", color: "WhiteSmoke", group:"Python-Syntax", category: "picTemplate", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonDatatypesHTML},
    {key: "Python-Operators", desc: "Operators", color: "WhiteSmoke", group:"Python-Syntax", category: "picTemplate", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonOperatorsHTML},
    {key: "Python-Variables", desc: "Variables", color: "WhiteSmoke", group:"Python-Syntax", category: "picTemplate", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonVariablesHTML},
    {key: "Python-FlowControls", desc: "FlowControls", color: "WhiteSmoke", group:"Python-Syntax", category: "picTemplate", img: "assets/img/terraform/tf-hcl.svg", toolTipHTML: pythonFlowControlsHTML},



];

let pythonLinkDataArray = [
    {from:"Python-Install", to: "Python-Syntax", category: "simplelink"},
];

nodeDataArray = nodeDataArray.concat(pythonNodeDataArray);
linkDataArray = linkDataArray.concat(pythonLinkDataArray);