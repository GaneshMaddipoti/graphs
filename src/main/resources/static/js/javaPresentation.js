let titleHTML = `
<table style="width: 100%; align:center">
<tr>
<td width="25%">
<div style=""><img src="img/java.png"/></div>
</td><td style="align:right">
<div style="font-size:175px;font-family:fantasy;
margin-top:100px;padding:20px;color:#F8981D">Java</div><br/>
<div style="padding:20px; color:#5382A1">Programming Language </div>
</td>
</tr>
</table>
`;

let aboutMeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
About me
</div>
I am <b>Ganesh Maddipoti </b>,
<ul>
<li>Cloud architect with over 15 years of experience in IT</li>
<li>Primary Skills - java, spring, python, spark, linux, AWS, Terraform </li>
<li>Roles - full stack developer, data engineer, solution architect</li>
<li>Domains - Banking and Finance, Logistics and Travel, IoT </li>
</ul>
<b>Certifications</b><br/>
<ul>
<li>Oracle certified Java Professional</li>
<li>AWS certified solution architect </li>
<li>Hashicorp certified Terraform associate</li>
<li>Linux foundations certified system administrator  </li>
</ul>
<b>Hobbies & Interests </b> <br/>
<ul><li>Blogging and content writing on technology </li></ul>
`;

let featuresHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Content
</div>
<b>Features</b>
<ul>
<li>Starting with system architecture</li>
<li>Program execution with internals </li>
<li>Learning along by coding an application</li>
<li>Language fundamentals to advanced features</li>
</ul>
<b>Presentation</b><br/>
<ul>
<li>Simple enough to understand</li>
<li>Block diagram with flow</li>
<li>Coding in parallel with Intellij IDE</li>
<li>One flow without any deviations</li>
</ul>
<b>Users</b>
<ul><li>Anyone who wants to learn Java language from zero to advanced</li></ul>
`;

let eCommerceHTML = `
<img src="img/eCommerce.svg" width="95%" height="95%"/>
`;

let systemHTML = `
A system is collection of components, serves set of users with set of requirements <br/>
`;

let javaHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to give instructions to the system ?
</div>
<b>Programming Language</b><br/>
A programming language is a set of instructions written by a programmer to deliver instructions <br/>
to the system to perform and accomplish a task<br/>
Ex: Assembly language, C, Python, etc... <br/>
<br/>
<b>Java</b> <br/>
It is a high level programming language<br/>
Created by James Gosling and team at Sun micro systems in 1991 <br/>
<br/>
<b>Features</b><br/>
1) Platform Independent <br/>
2) Interpreted <br/>
3) Object Oriented <br/>
4) Statically typed <br/>
5) Multi threaded <br/>
`;

let jdkHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is JDK ?
</div>
<b>JDK</b><br/>
Java Development Kit(JDK) contains the minimum software you need to do java development. <br/>
It contains <br/>
<ul>
<li>Compiler</li>
<li>Application Programming Interface(API)</li>
<li>Java Virtual Machine(JVM)</li>
</ul>
`;

let compilerHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to compile the program ?
</div>
<b>javac</b><br/>
Java Compiler converts source files(.java) to bytecode(.class) <br/>
Bytecode is a special format that JVM can run <br/>
By default compiler will place class files in same directory as source files <br/>
Using -d option, we can specify destination directory for class files <br/>
Using -cp option, we can specify classpath location/jar to find <br/>
We can use * wild card with -cp to include all classes and jars in that directory <br/>

`;

let jreHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to run the program ?
</div>
<b>JRE</b><br/>
Java runtime environment(JRE) contain Java API and JVM <br/>
java launches Java virtual machine(JVM) before running the program <br/>
`;

let jvmHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is JVM ?
</div>
<b>JVM</b><br/>
Java Virtual Machine(JVM) knows how to run the bytecode on the actual machine <br/>

`;

let javaLiteralHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to represent data in program ?
</div>
<b>Literals</b><br/>
<ul>
<li>We need literals to represent data</li>
<li>It's a character or word which denotes either integers, floats, string,
and boolean values <br/>
(Ex: 6, 23.332, 'A', "Hello", true, '\u0044'(unicode literal D))</li>
<li>We can not put commas in a numberic literal, but we can use _ for readability <br/>
Ex: long income = 1_234_456l;</li>
</ul>
<b>Integer Literals</b> <br/>
<ul>
<li>Decimal Base 10 - use digits(0-9) no prefix of any kind</li>
<li>octal Base 8 - use only digits(0-7), and preceding 0</li>
<li>Hexa decimal Base 16 - use digits (0-9) and A,B,C,D,E,F preceding 0x</li>
</ul>
<b>Floating point Literals</b> <br/>
Ex: double val = 23.456;
`;

let javaKeywordHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What are reserved words in Java ?
</div>
<b>Keywords</b><br/>
It's a reserved word, have predefined meaning in java language <br/>
Ex: int, byte, for, which, try, catch, class, interface, enum, etc...<br/>
`;

let javaOperatorsHMTL = `
<div class="reqBanner"><img class="reqBannerImg"/>
What are all operators available in Java ?
</div>
<b>Operators</b><br/>
The operator performs an operation on variables/literals its used with <br/>
Ex : +, -, *, >, etc... <br/>
<table>
<tr><td>1)</td><td width="300px">Assignment</td><td>=</td></tr>
<tr><td>2)</td><td >Compound Assignment </td><td>+=, -=, *=, /=, etc...</td></tr>
<tr><td>3)</td><td >Arithmetic</td><td>+, -, *, /, %</td></tr>
<tr><td>4)</td><td>Increment & Decrement</td><td>++, --</td></tr>
<tr><td>5)</td><td>Relational</td><td><, <=, >, >=, ==, !=</td></tr>
<tr><td>6)</td><td>Logical</td><td>&, |, ^, !, &&, ||</td></tr>
<tr><td>7)</td><td>Bitwise</td><td>&, |, ^</td></tr>
<tr><td>8)</td><td>Conditional</td><td>? :/td></tr>
<tr><td>9)</td><td>Type check</td><td>instanceOf</td></tr>
</table>
`;

let javaExpressionHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What are expressions ?
</div>
<b>Expressions</b><br/>
An expression is a coding construct, that evaluates to a single value <br/>
This will be the code segment on the right side of = operator, in an assignment or declaration statement <br/>
Ex : (orderNumber + 100)
`;

let javaSourceCodeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How source code is written and organized ?
</div>
<b>Source Code</b><br/>
Source is organized into Packages <br/>
And Package contains files containing high level types - classes, interfaces, records, enums <br/>
A file should contain only one public class, and that class name should match with file name <br/>
Inside class/interface we use syntax to write the code <br/>
A Java program begins execution with its main method - its an entry point <br/>
<br/>
<b>Execution</b><br/>
1) Compile the source code using javac, $javac Program.java -> outputs Program.class <br/>
2) Execute the class file using java,   $java Program                                   <br/>
3) Compile and execute single source file using java, $java Program.java            <br/>
4) Import tells where to find the class <br/>
5) import java.io.*; will import only classes in that package not sub packages <br/>
6) import java.io.*; will not import all classes in that package but needed ones <br/>
7) Listing all import statements for readability, * for shorten the imports <br/>
8) import java.lang.*; is by default placed, we no need to place <br/>
9) Java automatically looks in the current package for classes <br/>
10) import java.util.Date; import java.sql.Date; - will result compilation error <br/>
11) jar -cvf (create, verbose, filename) sample.jar -C temp/ - to create jar containing the file in directory<br/>

<br/>
<b>Package</b>
<ul>
    <li>It is used to group related classes </li>
    <li>To avoid naming conflicts</li>
    <li>To provide access protection</li>
    <li>If package name is not present, it belongs to default package</li>
</ul>
Java is case sensitive, while declaring variables, methods, classes, literals <br/>
// used for comments <br/>
/* <br/>
<br/>
*/ used for multi line comments <br/>
/** <br/>
<br/>
*/ used for Java doc comments - used by javadoc tool for documentation purpose <br/>
<br/>
<b>Keyword</b></br/>
Its a reserved word, have predefined meaning in java language <br/>
Ex: int, byte, for, which, try, catch,  etc...<br/>
<b>Casting</b><br/>
We can change the data type from one to another using casting <br/>
Ex: byte value = (byte) 1000`;

let javaPropertyHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is object state ?
</div>
<b>Properties</b> <br/>
Each object will have its own unique set of instance variables as defined in the class. <br/>
Collectively the values assigned to the object’s instance variables make up the object state. <br/>
Properties are define as : <br/>
Ex : private String name; <br/>
<br/>
Property definition contains Modifier,
<a href="#" onclick="showToolTip1(\'' + javaDataTypeHTML + '\')"> Data Type</a>,
<a href="#" onclick="showToolTip1(\'' + javaIdentifiersHTML + '\')">Identifiers/Variables</a>
<br/><br/>
<b>Access Modifiers </b><br/>
We can modify property access using public, protected, default, private <br/>
Access : inheritance and access using object reference <br/>
default - access to all classes in that package <br/>
private - access to that class only<br/>
protected - access to all classes in that package and sub classes of other packages(inheritance only) <br/>
public - access to all classes in application <br/>
<br/>
<b>Non-access Modifiers</b> <br/>
final - it can't be re-assigned <br/>
volatile - will always access from memory(useful in multithreading) <br/>
`;

let javaMethodHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Where exactly object behavior is defined?
</div>
<b>Methods</b> <br/
Objects behavior is defined using Methods <br/>
Methods are where the class logic is stored, and data gets manipulated. <br/>
Methods are defined as : <br/>
public String getName(String initial, String suffix) {}<br/>
<br/>
Method definition contains Modifier, return type, method name, and arguments <br/>
<br/>
<b>Access Modifiers </b><br/>
We can modify method access using public, protected, default, private <br/>
Access : inheritance and access using object reference <br/>
default - access to all classes in that package <br/>
private - access to that class only<br/>
protected - access to all classes in that package and sub classes of other packages(inheritance only) <br/>
public - access to all classes in application <br/>
<br/>
<b>Non-access Modifiers</b> <br/>
final - if applied to class, it can't be subclassed <br/>
&emsp;&emsp;&emsp; - if applied to method, it can't be override <br/>
&emsp;&emsp;&emsp; - if applied to property, it can't be re-assigned <br/>
abstract - if applied to class, it cant be initialized <br/>
&emsp;&emsp;&emsp; - if applied to methods, no need to implement it<br/>
strictfp - if applied to class, all methods are complied to IEEE standard for FP. <br/>
&emsp;&emsp;&emsp; - if applied to method, only that method is complied to IEEE FP.<br/>
<br/>

`;

let javaDataTypeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to specify the type of data ?
</div>
<b>Data Types </b><br/>
Java is statically typed language<br/>
Data is declared of type primitive, array, string, and object <br/>
<br/>
<b>Primitives</b><br/>
There are 8 primitive data types
<table>
<tr><td>1)</td><td width="200px">boolean</td><td>1 bit</td></tr>
<tr><td>2)</td><td>byte</td><td>1 byte</td></tr>
<tr><td>3)</td><td>short</td><td>2 byte</td></tr>
<tr><td>4)</td><td>int</td><td>4 byte</td></tr>
<tr><td>5)</td><td>long</td><td>8 byte</td></tr>
<tr><td>6)</td><td>float</td><td>4 byte</td></tr>
<tr><td>7)</td><td>double</td><td>8 byte</td></tr>
<tr><td>8)</td><td>char</td><td>2 byte</td></tr>
</table>
<ul>
<li>Integer literals are int by default, we can put l or L as suffix to treat it as long</li>
<li>Float literals are double by default, f or F as suffix to treat it as float</li>
<li>For precise calculations use BigDecimal, because float, double will behave inconsistently</li>
</ul>
<b>Enums</b><br/>
Java lets you restrict a variable to having one of only a few predefined values<br/>
Ex: enum CoffeeSize {BIG,HUGE,SMALL,LARGE}; <br/>
In enums, you can add constructors, variables, methods. <br/>
Every enum has a static method, values() that returns an array of the enum’s values. <br/>
<br/>
<b>Arrays</b><br/>
Arrays are objects that store multiple variables of the same type or variables that are all subclasses of the same type.<br/>
Declare: Arrays are declared by stating the type of elements <br/>
Ex: int[] marks; <br/>
Construct: Arrays are constructed/created on heap with mentioned size <br/>
Ex: int[] marks = new int[100]; <br/>
Initialize: Arrays initialization means that putting things into it <br/>
Ex: int[] marks = {11, 12, 13, 14}; <br/>
&emsp;&emsp; marks[0] = 21; <br/>
They are indexed from 0 <br/>
<br/>
<b>Strings</b><br/>
<ul>
<li>A string is an object that contains a sequence of characters. <br/>
    Ex: String name = "Sample sentence."; <br/></li>
<li>Strings are immutable</li>
<li>To make memory efficient, the JVM sets aside a memory called the “String Constant Pool”.</li>
<li>For string literal, it checks the pool to see if an identical string already exists. <br/>
If match is found, the reference to the new literal is directed to the existing string.</li>
</ul>
Ex: String s = “abc”; <br/>
&emsp;&emsp;String s = new String(“abc”); – in this case 2 objects will be created in pool and in heap<br/>
`;

let javaIdentifiersHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Where to store data temporarily during processing ?
</div>
<b>Variables</b><br/>
<ul>
<li>Variables with given name, used to store and retrieve information in memory <br/>
Ex: length = 120;
</li>
<li>A variable is statically typed to a primitive or object <br/>
Ex: int length = 120;
</li>
</ul>
<b>Identifiers</b><br/>
All the java components(classes, interfaces, enums, methods, variables) need names <br/>
And these names are called identifiers and there are rules for legal identifiers.<br/>
<br/>
<b>Rules</b><br/>
<ol>
<li>Identifiers must start with a letter($),(_)</li>
<li>After first character, they can contain numbers also.</li>
<li>There is no limit on number of characters</li>
<li>You can’t use java keyword as an identifier</li>
<li>Identifiers are case sensitive.</li>
</ol>
`;

let javaStatementHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to represent an instruction to execute by the system?
</div>
<b>Statement </b><br/>
It's a complete command to be executed <br/>
It can include assignment/one or more expressions <br/>
Ex : total = orderValue + tax; <br/>
<br/>
<b>Expression </b><br/>
An expression is a construct with operator and operands, that evaluates to a single value <br/>
This will be the code segment on the right side of = operator, in an assignment or declaration statement <br/>
Ex : (orderNumber + 100) <br/>
<br/>
Expression contains
<a href="#" onclick="showToolTip1(\'' + javaLiteralHTML + '\')">Literals</a>,
<a href="#" onclick="showToolTip1(\'' + javaOperatorsHMTL + '\')">operators</a>.
`;

let javaArraysHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to store homogeneous collection of data ?
</div>
<b>Arrays</b><br/>
Arrays are objects that store multiple variables of the same type or variables that are all subclasses of the same type.<br/>
<br/>
<b>Declare</b><br/>
Arrays are declared by stating the type of elements <br/>
Ex: int[] marks; <br/>
<br/>
<b>Construct</b><br/>
Arrays are constructed/created on heap with mentioned size <br/>
Ex: int[] marks = new int[100]; <br/>
<br/>
<b>Initialize</b><br/>
Arrays initialization means that putting things into it <br/>
Ex: int[] marks = {11, 12, 13, 14}; <br/>
&emsp;&emsp; marks[0] = 21; <br/>
<br/>
They are indexed from 0 <br/>
`;

let javaStringHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to represent words or sentences ?
</div>
<b>Strings</b><br/>
<ul>
<li>A string is an object that contains a sequence of characters. <br/>
    Ex: String name = "Sample sentence."; <br/></li>
<li>Strings are immutable</li>
<li>To make memory efficient, the JVM sets aside a memory called the “String Constant Pool”.</li>
<li>For string literal, it checks the pool to see if an identical string already exists. <br/>
If match is found, the reference to the new literal is directed to the existing string.</li>
</ul>
<b>Creating new Strings </b><br/>
String s = “abc”; <br/>
String s = new String(“abc”); – in this case 2 objects will be created in pool and in heap<br/>
<br/>
<b>Methods in string class </b>
<ol>
<li>charAt(int radix) : returns the character located at the index.</li>
<li>concat(String s) : concatenates with the passed string and returns</li>
<li>equalsIgnoreCase(String s) : checks the strings are equal ignoring case and returns true/false </li>
<li>length() : this method returns length</li>
<li>trim(): will trim the spaces before and after string</li>
<li>substring(int begin, int end): returns sub string indexing from begin to end-1</li>
<li>replace(char old, char new) : replaces all old character occurrence with new character</li>
</ol>
<br/>
<b>Performance improvements </b><br/>
when you are making a lot of modifications to strings of characters, better to use
<ol>
<li>StringBuffer       -              thread safe</li>
<li>StringBuilder      -              not thread safe</li>
</ol>
`;

let javaClassHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to create custom data types/represent real time objects ?
</div>
<b>Class</b><br/>
<ul>
<li>It's a template to create objects, and we use it to create custom data types</li>
<li>Class contain properties and methods which operate on properties</li>
<li>Class names and method names are also should follow legal identifier rules <br/>
<li>Objects are created by using constructor method</li>
<li>Initialization blocks run when the class first loaded (static initialization block) <br/>
or when an instance is created (an instance initialization block)</li>
</ul>
<b>Access Modifiers </b><br/>
We can modify class access using public, default <br/>
Access : extends and object creation <br/>
default - access to all classes in that package <br/>
public - access to all classes in application <br/>
<br/>
<b>Non access modifiers </b> <br/>
final - it can't be subclassed <br/>
abstract - it cant be initialized <br/>
strictfp - all class methods are complied to IEEE standard for FP. <br/>
<br/>
<b>Constructors</b><br/>
Objects are constructed. <br/>
You can’t make a object without invoking constructor and superclass constructors in chain. <br/>
They run whenever you use the keyword new <br/>
Every class including abstract classes, must have a constructor. <br/>
They have no return types, but name must exactly match with the class name. <br/>
Typically, constructors are used to initialize instance variable state. <br/>
If you don’t type a constructor, the compiler will generate implicitly.<br/>
If you type any constructor then compiler wont generate no-arg constructor <br/>
<br/>
<b>Abstract Class</b><br/>
We get code re-use through inheritance by placing all common functionality in super class <br/>
And leave the specific behavior to sub classes by putting abstract keyword before that method<br/>
Even one method is abstract total class is abstract so we have to specify the class as abstract.<br/>
You can’t instantiate an abstract class. <br/>
<div class="sourceCode">public abstract class Animal{
    public abstract void eat();
}</div>
<br/>
<b>Nested Classes</b><br/>
If a class is useful to only one other class, then it is logical to embed it in that class and keep the two together. <br/>
Ex: Helper classes, Builder classes <br/>
Nested classes can also be static like properties and methods <br/>
<div class="sourceCode">public class OuterClass {
    public class NestedClass {
        public void doNothing() {
            System.out.println("nested");
        }
    }
    public static class StaticNestedClass {
        public void doSomething() {
            System.out.println("static nested");
        }
    }
    public static void main(String[] args) {
        OuterClass.StaticNestedClass staticNestedClass = new OuterClass.StaticNestedClass();
        staticNestedClass.doSomething();
        OuterClass outerClass = new OuterClass();
        OuterClass.NestedClass nestedClass = outerClass.new NestedClass();
        nestedClass.doNothing();
    }
}</div>
`;

let javaInterfaceHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Why we need an interface ?
</div>
<b>Interface</b><br/>
Think of interface as 100% abstract class <br/>
It is used to declare the contract, for what a class can do without implementation <br/>
It is used mainly for loose coupling <br/>
A class can extend only one class but implement many interfaces <br/>
<ol>
<li>All interface variables must be public static final</li>
<li>All interface methods are implicitly public abstract</li>
<li>An interface can extend one or more other interfaces</li>
<li>Interface methods must not be static,final,native,strictfp.</li>
</ol>
<div class="sourceCode">public interface Printable {
    public void print();
}</div>
<br/>
<b>Functional Interface</b><br/>
Any interface with single abstract method is a functional interface <br/>
<div class="sourceCode">@FunctionalInterface
public interface Function<T, R> {
    R apply(T t);
}</div>
There are 3 main functional interfaces <br/>
1. Predicate - test method and return true/false <br/>
2. Function - apply method take input apply the function and return output <br/>
3. Consumer - consume method take input and returns nothing <br/>
`;


let javaLambdasHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What are Lambda expressions ?
</div>
<b>Lambda</b> <br/>
Lambda expressions basically express instances of functional interfaces <br/>
An interface with a single abstract method is called a functional interface. <br/>
Lambda Expressions are the short block of code that accepts input as parameters and returns a resultant value. <br/>
<div class="sourceCode">interface FuncInterface {
    void abstractFun(int x);
}
FuncInterface fobj = (int x)->System.out.println(2*x);
fobj.abstractFun(5);
</div>
<br/>
<b>There are 3 main functional interfaces</b> <br/>
1. Predicate - test method and return true/false <br/>
2. Function - apply method take input apply the function and return output <br/>
3. Consumer - consume method take input and returns nothing <br/>
`;

let javaFlowControlsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Can we change the control flow based on a condition ?
</div>
<b>Conditions</b> <br/>
The if & switch statements are decision / conditional controls  <br/>
that allow your program to change the control flow on the result of logical test.<br/>
<br/>
<div class="sourceCode">if (condition) {
    //statements to execute if true
} else if (condition) {
    //statements to execute else if ture
} else {
    //statements to execute else
}

switch (condition) { //condition can be int, string, enum
    case 0:
        System.out.println(0);
        break;
    case 1:
        System.out.println(1);
        break;
    default:
        System.out.println("default");
        break;
}
</div>
`;

let javaLoopsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to execute the statement iteratively up to some times?
</div>
<b>Loops</b><br/>
In situations, where we want to perform task iteratively until a condition met. <br/>
We can use while, do-while, or for loops <br/>
<br/>
<b>Use cases</b><br/>
<ul>
<li>while - here you don’t know how many times a block or statement should repeat, <br/>
    &emsp; &emsp; but you want to continue as long as some condition is true. <br/></li>
<li>do-while - similar to while, but the code in do loop is guaranteed to execute at least once. <br/></li>
<li>for - when you already know how many times you need to execute the statements <br/>
<div class="sourceCode">while(condition) {
    //Statements to execute while true
}

do {
    //Statements to execute once, and while true
} while(condition);

for(int i=0; i<5; i++) {
   //Statements to execute for condition met times
}</div>
</li>
<li>Break : Execution jumps immediately to the first statement after the loop.<br/></li>
<li>Continue : Execution jumps immediately to the next iteration by skipping below code. <br/></li>
<li>Return : execution jumps back to the calling method. <br/></li>
<li>System.exit() : All program execution stops. JVM shutdown. <br/></li>
<li>Many statements in java program can be labeled, but mostly used with break, continue <br/></li>
</ul>`;

let javaExceptionsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Can we handle errors/exceptions at runtime ?
</div>
<b>Exceptions </b><br/>
<ul>
<li>The term exception means exceptional condition and is an occurrence that alters the normal program flow. <br/></li>
<li>A bunch of things can lead to exceptions, including hardware failures, resource exhaustion and some old-bugs. <br/></li>
<li>Probable block of code which will raise exception will be placed in try <br/></li>
<li>We can catch multiple exceptions, with specific to generic order <br/></li>
<li>finally block if present, will always be executed irrespective of exception <br/>
<div class="sourceCode">try {
    Scanner scanner = new Scanner(new File(""));
} catch (FileNotFoundException fileNotFoundException) {
    fileNotFoundException.printStackTrace();
} catch (Exception e) {
    e.getStackTrace();
} finally {
    System.out.println("");
}
</div>
</li>
</ul>
<b>Exception Hierarchy </b><br/>
<img src="img/java-exceptions.svg" style="width:600px;height:400px;"/><br/>
<b>Checked exceptions</b><br/>
the compiler checks to make sure that they have handled or declared <br/>
<b>Runtime exceptions</b><br/>
are unchecked exceptions, which no need to handle or declare <br/>
<b>Custom Exceptions</b><br/>
We can create custom exceptions by extending Exception class <br/>
<div class="sourceCode">Class MyException extends Exception{
    //code
}
</div>
`;

let javaMultiThreadsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Does java support parallel processing ?
</div>
<b>Multithreading</b><br/>
<ul>
<li>A thread is a light weight process that has its own call stack</li>
<li>The main() method, that starts the whole ball rolling runs in one thread called main thread</li>
<li>When we create a new thread, a new stack materializes and method called from that thread run in parallel to main</li>
<li>Every new call stack, run concurrently with other</li>
<li>The jvm like mini os, schedules its own threads  regardless of the underlying us</li>
<li>In some jvm’s the java threads are actually mapped to native os threads</li>
<li>We can create thread by extending Thread class, or implementing Runnable interface <br/>
    <div class="sourceCode">class MyThread extends Thread {
        @Override
        public void run() {
            System.out.println("Thread executed");
        }
    }
    Thread thread = new MyThread();
    thread.start();

    class Task implements Runnable {
        @Override
        public void run() {
            System.out.println("Task executed");
        }
    }
    Thread thread1 = new Thread(new Task());
    thread1.start();
    </div></li>
<li>Sleep() // static method, which to sleep the thread for some time <br/></li>
<li>Yield () //static method, It make the currently running thread to back to runnable state to allow other threads of equal priority to get their turn.</li>
<li>Join() //The non-static method of class thread lets one thread “ join onto the end” of other thread main.join()</li>
<li>To prevent race condition, synchronization issues we use synchronized keyword</li>
</ul>
<b>Thread Interaction </b><br/>
The thread interaction will be done through wait(), notify(), and notifyAll() methods of object
They must be called with in synchronized block
<ul>
<li>b.wait();  waits until b thread finishes</li>
<li>notify(); used to notify one waiting threads</li>
<li>notifyAll(); used to notify all waiting threads
</li>
</ul>`;



let javaWrapperClassHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Why we need wrapper classes for primitive data types ?
</div>
<b>Wrapper classes </b><br/>
In Java, everything is an object, except primitives <br/>
While using collections and generics these wrapper classes come into play <br/>
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

let javaCollectionsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Is there any API/Framework to manage different collections of data ?
</div>
<b>Collection Framework </b><br/>
 It is framework to maintain larger collections of data. <br/>
1). Add objects to it. <br/> 
2). Remove objects from the collection <br/>
3). Searching for an object. <br/>
4). Retrieving an object from the collection <br/>
5). Iterating through the collection  <br/>
<br/>
<b>List Interface </b>: An ordered, indexed collection of objects <br/>
1). ArrayList : Think of this as a growable array. It gives you fast iteration and fast random access. <br/>
2). Vector : Vector is basically the same as arrayList, but vendor methods are synchronized <br/>
3). Linked List: The elements are doubly-linked to one another. Iteration is slow, but its good for fast insertion and deletion. <br/>
<br/>
<b>Set Interface </b>: Unordered collection of unique objects <br/>
1). Hash Set : A Hash set in unsorted, unordered set <br/>
2). LinkedHashSet : Its an ordered version of HashSet. That maintains a doubly-linked list across all elements <br/>
3). TreeSet : It’s a sorted collection, means all elements will be in ascending order. <br/>
<br/>
<b>Map Interface </b>: Unordered collection of key,value pairs <br/>
A Map cares about unique identities, a unique key and the value. <br/>
1). HashMap : HashMap gives you an unsorted, unordered map. <br/>
HashMap allows one null key and multiple null values. <br/>
2). HashTable : Its like HashMap but the methods are synchronized. <br/>
HashTable doesn't allow any null values or null key. <br/>
3). LinkedHashMap : It’s a ordered version of HashMap. It's slower than HashMap but, you can expect faster iterations. <br/>
4). TreeMap : It’s a sorted map. <br/>
<br/>
<b>Comparable vs. Comparator </b> <br/>
if we want to use Arrays or Collections sort method, <br/>
Use Comparable if you need to sort by a property <br/>
Use Comparator if you need to have multiple sort mechanisms on the class <br/>
<br/>
<div class="sourceCode">public class MyCollection implements Comparable<MyCollection>{
    private int prop;
    private int salary;

    @Override
    public int compareTo(MyCollection target) {
        return this.prop - target.prop;
    }
}

class SalaryComparator implements Comparator<MyCollection> {
    @Override
    public int compare(MyCollection o1, MyCollection o2) {
        return o1.getSalary() - o2.getSalary();
    }
}
</div>
`;

let javaGenericsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
Can we have dynamic type properties and dynamic type argument methods ?
</div>
<b>Generic Classes </b> <br/>
We can make a class more generic by adding &lt; &gt; <br/>
<div class="sourceCode">class Printer&lt;T extends Animal & Serializable &gt; {
    T object;
    Printer(T object) {
        this.object = object;
    }
    public void print() {
        System.out.println(object);
    }
}</div>
E - Element (used extensively by the Java Collections Framework) <br/>
K - Key                                                          <br/>   
N - Number                                                       <br/>
T - Type                                                         <br/>   
V - Value                                                        <br/>   
S,U,V etc. - 2nd, 3rd, 4th types                                 <br/>
<br/>
<b>Generic Methods</b> <br/>
We can also make a method generic by adding &lt; &gt;
<div class="sourceCode">public static &lt;T&gt; void print(T thing) {
    System.out.println(thing);
}</div>
And, if we want to pass any type of collection to that method <br/>
We know that Object is the supertype of all Java classes. However, a collection of Object is not the supertype of any collection. <br/>
<div class="sourceCode">public static void print(List&lt;?&gt; thing) {
    System.out.println(thing);
}</div>       
`;

let javaIteratorsHTML = `Iterator is an interface which is used to iterate over a collection <br/>
The iterator interface defines three methods as listed below: <br/>
1. hasNext(): Returns true if the iteration has more elements. <br/>
2. next(): Returns the next element in the iteration. <br/>
3. remove(): Removes the next element in the iteration.<br/>
`;

let javaSpliteratorsHTML = `Spliterator is an interface used to traverse and partition sequences <br/>
- for support of efficient parallel traversal in addition to sequential traversal. <br/>
- it combines the hasNext and next operations into one method. <br/>
- tryAdvance(Consumer) - If a remaining element exists, performs the given action on it, returning true; else returns false. <br/>
- forEachRemaining(Consumer) - Performs the given action for each remaining element, sequentially in the current thread, <br/> 
    until all elements have been processed or the action throws an exception. <br/>
`;

let javaStreamsHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What are the benefits/Why we need Streams ?
</div>
<b>Streams </b> <br/>
Stream API is used to process collections of objects, without external iteration/iterators <br/>
It supports various methods which can be pipelined to produce the desired result. <br/>
Enable us to perform operations like filtering, mapping,reducing and sorting. <br/>
<div class="sourceCode">Stream&lt;T&gt; stream;</div> 
There are two types of Operations in Streams: <br/>
1) Intermediate Operations - in which multiple methods are chained in a row.<br/>
&emsp; - Intermediate operations transform a stream into another stream. <br/>
&emsp; - map() is used to return a stream consisting of the results of applying the given function to the elements of this stream. <br/>
&emsp; - filter()  is used to select elements as per the Predicate passed as an argument. <br/>
&emsp; - sorted() is used to sort the stream. <br/>
2) Terminate Operations <br/>
Terminal Operations are the type of Operations that return the result. <br/> 
These Operations are not processed further just return a final result value. <br/>
&emsp; - collect() is used to return the result of the intermediate operations performed on the stream <br/>
&emsp; - forEach() is used to iterate through every element of the stream. <br/>
&emsp; - reduce() is used to reduce the elements of a stream to a single value. <br/>
<br/>
<b>Benefit of Java Stream </b><br/>
1) No Storage <br/>
2) Pipeline of Functions <br/>
3) Laziness <br/>
4) Can be infinite <br/>
5) Can be parallelized <br/>
6) Can be created from collections, arrays, Files Lines <br/>
`;


let javaProgrammingHTML = `Programming is about data analysis, data ingestion, data transformation, and data generation <br/>
`;

let bufferedReaderHTML = `Use BufferedReader if we need to read long strings from a file
<div class="sourceCode">//From System console input
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//From files
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
//From Network
Socket socket = new Socket(hostName, portNumber);
BufferedReader br =  new BufferedReader(
                new InputStreamReader(socket.getInputStream()));

String line = br.readLine();
</div>
`;

let scannerHTML = `if we need to parse the input stream with a custom regular expression <br/>
<div class="sourceCode">//From System console input
Scanner sc = new Scanner(System.in).useDelimiter("\\n");
//From Files
Scanner sc = new Scanner(new File("file.txt"));
//From Network
Socket socket = new Socket(hostName, portNumber);
Scanner sc =  new Scanner(socket.getInputStream());

String line = sc.next(); //to get parsed input use next***()
</div>
`;

let consoleHTML = `if we’re reading secure data from the system console  <br/>
<div class="sourceCode">Console console = System.console();
String line = console.readLine(); //to get password use readPassword()
</div>
`;

let javaDataTransformationHTML = `
`;

let javaIterationHTML = `We can iterate over an array or collection using for<br/>
<div class="sourceCode">int[] nums = new int[10];
for(int i=0; i &lt; nums.length; i++) {
    System.out.println(nums[i]);
}
for(int pivot: nums) {
    System.out.println(pivot);
}</div>
Iterator - An Iterator is one of many ways we can traverse a collection <br/>
<div class="sourceCode">List&lt;String&gt; strings = List.of(new String[]{"one", "two"});
Iterator&lt;String&gt; iterator = strings.listIterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}</div>
ForEach - Using Java 8 Lambdas, we can iterate over collections <br/>
<div class="sourceCode">List&lt;String&gt; strings = List.of(new String[]{"one", "two"});
strings.forEach(string -> System.out.println(string));
</div>
`;

let javaDataGenerationHTML = `Write data to output devices <br/>
Write data to memory (variables, collections, cache) <br/>
Write data to Files <br/>
Write data to Databases <br/>
Write data over Network <br/>
`;

let javaSPSingleRespHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Single Responsibility principle ?
</div>
<b>Single Responsibility</b> <br/>
a class should only have one responsibility, and one reason to change <br/>
<br/>
<b>How to follow </b><br/>
Class should have methods that directly relate to its properties <br/>
<br/>
<b>Benefits</b><br/>
1) Testing – A class with one responsibility will have far fewer test cases. <br/>
2) Lower coupling – Less functionality in a single class will have fewer dependencies. <br/>
3) Organization – Smaller, well-organized classes are easier to search than monolithic ones. <br/>
<div class="sourceCode">public class Book {
    private String name;
    private String author;
    private String text;
    //constructor, getters and setters
    // methods that directly relate to the book properties
    public String replaceWordInText(String word, String replacementWord){
        return text.replaceAll(word, replacementWord);
    }
    public boolean isWordInText(String word){
        return text.contains(word);
    }
}
</div>
`;


let javaSPOpenCloseHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Open for extension Closed for modification principle ?
</div>
<b>Open for extension Closed for modification</b> <br/>
classes should be open for extension but closed for modification <br/>
i.e., should be able to add new features to a class without changing its existing code <br/>
<br/>
<b>How to follow</b><br/>
1) Abstraction and inheritance <br/>
2) code for interface <br/>
<div class="sourceCode">interface Shape {
  int area();
}

class Circle implements Shape {
  int r;
  int area() { return Math.PI*r*r*;}
}

class Square() implements {
  int height;
  int area() { return height * height; }
}
</div>`;

let javaSPLiskovSubHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Liskov Substitution principle ?
</div>
<b>Liskov Substitution </b> <br/>
Objects of a superclass should be replaceable with objects of its subclasses without breaking the system.<br/>
That requires the objects of your subclasses to behave in the same way as the objects of your superclass.<br/>
i.e., we should provide valid implementation in subclass for all inherited behavior from super class <br/>
<div class="sourceCode">public class Bird{}
public class FlyingBird extends Bird{
    public void fly(){}
}
public class Duck extends FlyingBird{}
public class Ostrich extends Bird{}
</div>
`;

let javaSPInterfaceSegregationHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Interface segregation principle ?
</div>
<b>Interface segregation </b> <br/>
No client should be forced to depend on methods that it does not use.<br/>
i.e., larger interfaces should be split into smaller ones. By doing so, <br/>
we can ensure that implementing classes only need to be concerned about the methods that are of interest to them.
<div class="sourceCode">public class Bird{}
public class FlyingBird extends Bird{
    public void fly(){}
}
public class Duck extends FlyingBird{}
public class Ostrich extends Bird{}
</div>
`;

let javaSPDIHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
What is Dependency Inversion principle ?
</div>
<b>Dependency Inversion </b> <br/>
High-level modules should not depend on low-level modules, both should depend on abstractions. <br/>
This can be achieved by layers of abstraction <br/>
Ex: Controller -> Service -> DAO <br/>
<div class="sourceCode">public class CustomerService {
    private final CustomerDao customerDao;
    // standard constructor / getter
    public Optional<Customer> findById(int id) {
        return customerDao.findById(id);
    }
    public List<Customer> findAll() {
        return customerDao.findAll();
    }
}
public interface CustomerDao {
    Optional<Customer> findById(int id);
    List<Customer> findAll();
}
`;


let javaDPSingletonHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to restrict object creation of a class to create single instance ?
</div>
<b>Singleton Design Pattern </b> <br/>
The singleton pattern restricts the instantiation of a Class and ensures that  <br/>
only one instance of the class exists in the Java Virtual Machine. <br/>
<div class="sourceCode">class Singleton {    
    private static Singleton single_instance = null;
    private String info = "Default";
    private Singleton() {}
    public synchronized static Singleton getInstance() {
        if (single_instance == null) {
            single_instance = new Singleton();
        }
        return single_instance;
    }

public class BillPughSingleton {
    private BillPughSingleton(){}
    private static class SingletonHelper {
        private static final BillPughSingleton INSTANCE = new BillPughSingleton();
    }
    public static BillPughSingleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}
</div>
`;

let javaDPFactoryHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to reuse conditional object creation ?
</div>
<b>Factory Design Pattern </b> <br/>
Its used when we have a superclass with multiple subclasses <br/>
and based on input, we need to return one of the subclass. <br/>
This pattern takes out the responsibility of the instantiation of a class from the client program<br/>
We can keep Factory class Singleton or we can keep the method that returns the subclass as static.<br/>
<div class="sourceCode">public abstract class Computer {
}

public class PC extends Computer {
}

public class ComputerFactory {
    public static Computer getComputer(){
    if("PC".equalsIgnoreCase(type)) return new PC();
    else if("Server".equalsIgnoreCase(type)) return new Server();
    return null;
}
</div>`;

let javaDPAbstractFactoryHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to avoid conditional logic in factory pattern ?
</div>
<b>Factory Design Pattern </b> <br/>
It is a factory of factories <br/>
Abstract Factory pattern is robust and avoid conditional logic of Factory pattern.<br/>
<div class="sourceCode">public interface ComputerAbstractFactory {
    public Computer createComputer();
}
public class ComputerFactory {
	public static Computer getComputer(ComputerAbstractFactory factory){
		return factory.createComputer();
	}
}
public class PCFactory implements ComputerAbstractFactory {
	@Override
	public Computer createComputer() {
		return new PC(ram,hdd,cpu);
	}
}
</div>
`;

let javaDPBuilderHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to simplify constructing huge object with mandatory and optional properties?
</div>
<b>Builder Design Pattern </b> <br/>
First of all you need to create a static nested class <br/>
and then copy all the arguments from the outer class to the Builder class.<br/>
By providing a constructor with required parameters
and then different setter methods to set the optional parameters. <br/>
<div class="sourceCode">public class Computer {
    private String HDD;
    private String RAM;
    private boolean isGraphicsCardEnabled;
    private boolean isBluetoothEnabled;
    private Computer(ComputerBuilder builder) {
        this.HDD=builder.HDD;
        this.RAM=builder.RAM;
        this.isGraphicsCardEnabled=builder.isGraphicsCardEnabled;
        this.isBluetoothEnabled=builder.isBluetoothEnabled;
    }
    public static class ComputerBuilder{
        private String HDD;
        private String RAM;
        private boolean isGraphicsCardEnabled;
        private boolean isBluetoothEnabled;
        public ComputerBuilder(String hdd, String ram){
            this.HDD=hdd;
            this.RAM=ram;
        }
        public ComputerBuilder setGraphicsCardEnabled(boolean isGraphicsCardEnabled) {
            this.isGraphicsCardEnabled = isGraphicsCardEnabled;
            return this;
        }
        public Computer build(){
            return new Computer(this);
        }
    }
}</div>
`;

let javaDPPrototypeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to use cloning instead of object initialization which is resource heavy ?
</div>
<b>Prototype Design Pattern </b> <br/>
It is used when the Object creation is a costly affair and requires <br/>
a lot of time and resources, and you have a similar object already existing. <br/> 
It provides a mechanism to copy the original object to a new object and then modify it according to our needs. <br/> 
Prototype design pattern uses java cloning to copy the object. <br/>
<div class="sourceCode">public class Employees implements Cloneable{
    private List<String> empList;
    @Override
    public Object clone() throws CloneNotSupportedException{
        List<String> temp = new ArrayList<String>();
        for(String s : this.getEmpList()){
        temp.add(s);
    }
    return new Employees(temp);
}</div>
`;

let javaDPAdapterHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to combine the functionality of two independent interfaces ?
</div>
<b>Adapter Design Pattern </b> <br/>
It's used so that two unrelated interfaces can work together.<br/>
The object that joins these unrelated interface is called an Adapter. <br/>
<div class="sourceCode">public interface MediaPlayer {
   public void play(String audioType, String fileName);
}
public interface AdvancedMediaPlayer {
   public void playVlc(String fileName);
   public void playMp4(String fileName);
}
public class MediaAdapter implements MediaPlayer {
   AdvancedMediaPlayer advancedMusicPlayer;
   public MediaAdapter(String audioType){
      if(audioType.equalsIgnoreCase("vlc") ){
         advancedMusicPlayer = new VlcPlayer();
      }else if (audioType.equalsIgnoreCase("mp4")){
         advancedMusicPlayer = new Mp4Player();
      }
   }
   @Override
   public void play(String audioType, String fileName) {
      if(audioType.equalsIgnoreCase("vlc")){
         advancedMusicPlayer.playVlc(fileName);
      }
      else if(audioType.equalsIgnoreCase("mp4")){
         advancedMusicPlayer.playMp4(fileName);
      }
   }
}
}</div>
`;

let javaDPStrategyHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to apply behavior at runtime ?
</div>
<b>Strategy Design Pattern </b> <br/>
It is used when we have multiple algorithm for a specific task <br/>
and client decides the actual implementation to be used at runtime. <br/>
<div class="sourceCode">public interface PaymentStrategy {
    public void pay(int amount);
}    
public class CreditCardStrategy implements PaymentStrategy {    
    @Override
    public void pay(int amount) {
        System.out.println(amount +" paid with credit/debit card");
    }
}
public class ShoppingCart {
    public void pay(PaymentStrategy paymentMethod){
        int amount = calculateTotal();
        paymentMethod.pay(amount);
    }
}</div>
`;

let javaDPCompositeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to group same type of objects and treat as single object ?
</div>
<b>Composite Design Pattern </b> <br/>
Composite pattern is used where we need to treat a group of objects in similar way as a single object. <br/>
<div class="sourceCode">public class Drawing implements Shape {
    private List&lt;Shape&gt; shapes = new ArrayList&lt;Shape&gt;();
    @Override
    public void draw(String fillColor) {
        for (Shape sh : shapes) {
            sh.draw(fillColor);
        }
    }
}</div>
`;

let javaDPProxyHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to add layer of security/control to the existing functionality <br/>
</div>
<b>Proxy Design Pattern </b> <br/>
Provide a surrogate or placeholder for another object to control access to it<br/>
<div class="sourceCode">public class CommandExecutorProxy implements CommandExecutor {
    private boolean isAdmin;
    private CommandExecutor executor;
    public CommandExecutorProxy(String user, String pwd){
        if("test".equals(user) && "test123".equals(pwd)) isAdmin=true;
        executor = new CommandExecutorImpl();
    }
    @Override
    public void runCommand(String cmd) throws Exception {
        if(isAdmin){
            executor.runCommand(cmd);
        }else{
            if(cmd.trim().startsWith("rm")){
                throw new Exception("rm command is not allowed for non-admin users.");
            }else{
                executor.runCommand(cmd);
            }
        }
    }
}</div>
`;

let javaDPFlyWeightHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to implement a cache of objects to optimize memory ?
</div>
<b>FlyWeight Design Pattern </b> <br/>
It is used when we need to create a lot of Objects of a class. <br/>
Since every object consumes memory space that can be crucial for low memory devices, <br/>
it can be applied to reduce the load on memory by sharing objects. <br/>
Note : We use pooling mechanism to optimize time while creating an object <br/>
<div class="sourceCode">public class ShapeFactory {
    private static final HashMap&lt;ShapeType, Shape&gt; shapes = new HashMap&lt;ShapeType, Shape&gt;();
    public static Shape getShape(ShapeType type) {
        Shape shapeImpl = shapes.get(type);
        if (shapeImpl == null) {
            if (type.equals(ShapeType.OVAL_FILL)) {
                shapeImpl = new Oval(true);
            } else if (type.equals(ShapeType.OVAL_NOFILL)) {
                shapeImpl = new Oval(false);
            } else if (type.equals(ShapeType.LINE)) {
                shapeImpl = new Line();
            }
        }
        shapes.put(type, shapeImpl);
    }
    return shapeImpl;
}</div>
`;

let javaDPFacadeHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to add simple layer/interface to hide complex functionality ?
</div>
<b>Facade Design Pattern </b> <br/>
It is used to help client applications easily interact with the system.<br/>
<div class="sourceCode">public class CarEngineFacade {
    private static int DEFAULT_COOLING_TEMP = 90;
    private static int MAX_ALLOWED_TEMP = 50;
    private FuelInjector fuelInjector = new FuelInjector();
    private AirFlowController airFlowController = new AirFlowController();
    private Starter starter = new Starter();
    private CoolingController coolingController = new CoolingController();
    private CatalyticConverter catalyticConverter = new CatalyticConverter();

    public void startEngine() {
        fuelInjector.on();
        airFlowController.takeAir();
        fuelInjector.on();
        fuelInjector.inject();
        starter.start();
        coolingController.setTemperatureUpperLimit(DEFAULT_COOLING_TEMP);
        coolingController.run();
        catalyticConverter.on();
    }
}
</div>
`;

let javaDPDecoratorHTML = `
<div class="reqBanner"><img class="reqBannerImg"/>
How to modify the functionality of an object dynamically ?
</div>
<b>Decorator Design Pattern </b> <br/>
It is used to modify the functionality of an object dynamically. <br/>
<div class="sourceCode">public abstract class TreeDecorator implements ChristmasTree {
    private ChristmasTree tree;
    @Override
    public String decorate() {
        return tree.decorate();
    }
}
ChristmasTree tree2 = new BubbleLights(
      new Garland(new Garland(new ChristmasTreeImpl())));
</div>`;

let javaNodeDataArray = [

    {key: "Presentation", desc: "Presentation", isGroup: true, category: "treeHL", img: "img/system.svg", expand: true},
    {key: "System", desc: "System", group: "Presentation", isGroup: true, category: "treeSolid", img: "img/system.svg", expand: true},

    {key: "Storage", desc: "Storage", isGroup: true, group: "System", category: "treeSolid", img: "img/harddisk.svg", expand: true},

    {key: "CPU", desc: "CPU", isGroup: true, group: "System", category: "tree90", img: "img/pc.svg", expand: true},
    {key: "IO", desc: "Input/Output", group: "System", category: "picTemplate", img: "img/terminal.svg", expand: false},

    {key: "Memory", desc: "Memory", isGroup: true, group: "CPU", category: "grid", img: "img/memory.svg", expand: true},
    {key: "Processor", desc: "Processor", group: "CPU", category: "simplePic", img: "img/processor.svg", expand: false},


    {key: "Application", desc: "Application", isGroup: true, group: "Storage", category: "tree", toolTipHTML: javaProgrammingHTML, expand: true, img: "img/application.svg",},

    {key: "Sourcecode", desc: "Sourcecode", group: "Application", isGroup: true, category: "tree", toolTipHTML: javaSourceCodeHTML, expand: true, img: "img/sourceFolder.svg",},
    {key: "Package", desc: "Package", group: "Sourcecode", isGroup: true, category: "tree",expand: true, img: "img/package.svg",},
    {key: "File", desc: "File", group: "Package", isGroup: true, category: "tree",expand: true, img: "img/byteFile.svg",},

    {key: "Class", desc: "class Product", group: "File", isGroup: true, category: "tree", toolTipHTML: javaClassHTML, expand: false, img: "img/class.svg",},
    {key: "Property", desc: " String name;", group: "Class", category: "simpleText", toolTipHTML: javaPropertyHTML, img: "img/private.svg"},
    {key: "Property1", desc: " float price;", group: "Class", category: "simpleText", toolTipHTML: javaPropertyHTML, img: "img/private.svg"},
    {key: "Method", desc: " double calculateTotal(flat tax)", group: "Class", isGroup: true, category: "tree250", toolTipHTML: javaMethodHTML, img: "img/public.svg", expand: true},

    {key: "Statement1", desc: "Integer amount = 195;", group: "Method", category: "simpleText", toolTipHTML: javaStatementHTML, img: "img/null.svg"},
    {key: "Statement2", desc: "if(rate !=0) { //stmts; }", group: "Method", category: "simpleText", toolTipHTML: javaFlowControlsHTML, img: "img/null.svg"},
    {key: "Statement3", desc: "for(int i=0; i<10; i++) { //stmts; }", group: "Method", category: "simpleText", toolTipHTML: javaLoopsHTML, img: "img/null.svg"},
    {key: "Statement4", desc: "try{ //stmts; } catch(Exceptin e) {}", group: "Method", category: "simpleText", toolTipHTML: javaExceptionsHTML, img: "img/null.svg"},

    {key: "Interface", desc: "Interface", group: "File", category: "simplePic", toolTipHTML: javaInterfaceHTML, expand: false, img: "img/interface.svg",},
    {key: "Enum", desc: "Enum", group: "File", category: "simplePic", expand: false,},
    {key: "Record", desc: "Record", group: "File", category: "simplePic", expand: false,},

    {key: "Bytecode", desc: "Bytecode", group: "Application", category: "picTemplate", toolTipHTML: javaProgrammingHTML, expand: false, img: "img/byteFile.svg",},
    {key: "Java", desc: "Java", isGroup: true, group: "Storage", category: "grid", img: "assets/img/java/java.svg", toolTipHTML: javaHTML, expand: true},
    {key: "JDK", desc: "JDK", isGroup: true, group: "Java", category: "grid", toolTipHTML: jdkHTML, expand: true},

    {key: "Java-WrapperClass", desc: "Wrapper Classes", group:"Java API", category: "simple", toolTipHTML: javaWrapperClassHTML},
    {key: "Java-Collections", desc: "Collections", group:"Java API", category: "simple", toolTipHTML: javaCollectionsHTML},
    {key: "Java-Generics", desc: "Generics", group:"Package", category: "simple", toolTipHTML: javaGenericsHTML},
    {key: "Java-Iterators", desc: "Iterators", group:"Java API", category: "simple", toolTipHTML: javaIteratorsHTML},
    {key: "Java-Spliterators", desc: "Spliterators", group:"Java API", category: "simple", toolTipHTML: javaSpliteratorsHTML},
    {key: "Java-Streams", desc: "Streams", group:"Java API", category: "simple", toolTipHTML: javaStreamsHTML},

    {key: "Java-Semantics", desc: "Semantics", isGroup: true, group: "Sourcecode", expand: false, category: "grid"},

    {key: "Java-Design-Patterns", desc: "Design Patterns", isGroup: true, group: "Java-Semantics", category: "tree", expand: true},

    {key: "Java-DP-Creational", desc: "Creational", isGroup: true, group: "Java-Design-Patterns", category: "grid", expand: true},
    {key: "Java-DP-Singleton", desc: "Singleton", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPSingletonHTML},
    {key: "Java-DP-Factory", desc: "Factory", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPFactoryHTML},
    {key: "Java-DP-AbstractFactory", desc: "Abstract Factory", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPAbstractFactoryHTML},
    {key: "Java-DP-Builder", desc: "Builder", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPBuilderHTML},
    {key: "Java-DP-Prototype", desc: "Prototype", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPPrototypeHTML},

    {key: "Java-DP-Structural", desc: "Structural", isGroup: true, group: "Java-Design-Patterns", category: "grid", expand: true},
    {key: "Java-DP-Adapter", desc: "Adapter", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPAdapterHTML},
    {key: "Java-DP-Composite", desc: "Composite", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPCompositeHTML},
    {key: "Java-DP-Proxy", desc: "Proxy", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPProxyHTML},
    {key: "Java-DP-FlyWeight", desc: "FlyWeight", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPFlyWeightHTML},
    {key: "Java-DP-Facade", desc: "Facade", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPFacadeHTML},
    {key: "Java-DP-Decorator", desc: "Decorator", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPDecoratorHTML},

    {key: "Java-DP-Behavioral", desc: "Behavioral", isGroup: true, group: "Java-Design-Patterns", category: "grid", expand: false},
    {key: "Java-DP-Strategy", desc: "Strategy", group:"Java-DP-Behavioral", category: "simple", toolTipHTML: javaDPStrategyHTML},

    {key: "Java-Solid", desc: "Solid Principles", isGroup: true, group: "Java-Semantics", category: "tree", expand: true},
    {key: "Java-SP-singleResp", desc: "Single Responsibility", group:"Java-Solid", category: "simple", toolTipHTML: javaSPSingleRespHTML},
    {key: "Java-SP-OpenClose", desc: "Open Close", group:"Java-Solid", category: "simple", toolTipHTML: javaSPOpenCloseHTML},
    {key: "Java-SP-LiskovSubs", desc: "Liskov Substitution", group:"Java-Solid", category: "simple", toolTipHTML: javaSPLiskovSubHTML},
    {key: "Java-SP-Interface-Segregation", desc: "Interface Segregation", group:"Java-Solid", category: "simple", toolTipHTML: javaSPInterfaceSegregationHTML},
    {key: "Java-SP-DI", desc: "Dependency Inversion", group:"Java-Solid", category: "simple", toolTipHTML: javaSPDIHTML},

    {key: "Java Compiler", desc: "Compiler", category: "simplePic", group: "JDK", img: "img/tools.svg", toolTipHTML: compilerHTML},
    {key: "Java API", desc: "API", category: "grid", isGroup: true, group: "JDK", img: "img/plugin.svg", expand: false},

    {key: "Meta", desc: "Meta", category: "simple", group: "Memory"},
    {key: "Heap", desc: "Heap", category: "simple", group: "Memory"},
    {key: "Stack", desc: "Stack", category: "simple", group: "Memory"},

    {key: "Java VM", desc: "Java VM", isGroup: true, expand: false, category: "tree90", group: "JDK", toolTipHTML: jvmHTML},

    {key: "Java Class Loader", desc: "Class Loader", isGroup: true, expand: true, category: "tree", group: "Java VM"},
    {key: "Java Loading", desc: "Loading", isGroup: true, expand: false, category: "tree90", group: "Java Class Loader"},
    {key: "Java Bootstrap Loader", desc: "Bootstrap Loader", category: "simple", group: "Java Loading"},
    {key: "Java Extension Loader", desc: "Extension Loader", category: "simple", group: "Java Loading"},
    {key: "Java Application Loader", desc: "Application Loader", category: "simple", group: "Java Loading"},

    {key: "Java Linking", desc: "Linking", isGroup: true, expand: false, category: "tree90", group: "Java Class Loader"},
    {key: "Java Verify", desc: "Verify", category: "simple",  group: "Java Linking"},
    {key: "Java Prepare", desc: "Prepare", category: "simple",  group: "Java Linking"},
    {key: "Java Resolve", desc: "Resolve", category: "simple",  group: "Java Linking"},

    {key: "Java Initialization", desc: "Initialization", category: "simple", group: "Java Class Loader"},

    {key: "Execution Engine", desc: "Exec Engine", isGroup: true, expand: true, category: "grid", group: "Java VM"},
    {key: "Interpreter", desc: "Interpreter", category: "simple",  group: "Execution Engine"},
    {key: "JIT Compiler", desc: "JIT Compiler", category: "simple",  group: "Execution Engine"},
    {key: "Garbage collector", desc: "Garbage Collector", category: "simple",  group: "Execution Engine"},

    {key: "Title", desc: "Title", category: "simplePic", group: "Presentation", toolTipHTML: titleHTML},
    {key: "About Me", desc: "About Me", category: "simplePic", img: "img/PP.jpg", group: "Presentation", toolTipHTML: aboutMeHTML},
    {key: "Features", desc: "Content", category: "simplePic", group: "Presentation", toolTipHTML: featuresHTML},

];

let javaLinkDataArray = [

    {from:"Storage", to: "CPU", category: "byDirLink"},
    {from:"Memory", to: "Processor", category: "byDirLink"},
    {from:"CPU", to: "IO", category: "byDirLink"},
    {from:"About Me", to: "Features", category: "invisibleLink"},
    {from:"Title", to: "About Me", category: "invisibleLink"},
    {from:"Features", to: "eCommerce", category: "invisibleLink"},


    { from: "Add1", fromPort: "Out", to: "Subtract1", toPort: "A" },


    {from:"Java-Install", to: "Java-Syntax", category: "simplelink"},
    {from:"Java-Input", to: "Java-Process", category: "simplelink"},
    {from:"Java-Process", to: "Java-Output", category: "simplelink"},
    {from:"Package", to: "Java-Semantics", category: "invisibleLink"},
    {from:"Initialization", to: "Process", category: "invisibleLink"},
//    {from:"Java-Semantics", to: "Java-Solid", category: "simplelink"},
{key: "scToCompiler", from: "Java Source Code", to: "Java Compiler", category: "simplelink"},
    {key: "compilerToBC", from: "Java Compiler", to: "Java Byte Code", category: "simplelink"},
    {key: "bcTojre", from: "Java Byte Code", to: "Java RE", category: "simplelink"},
    {key: "jlTolinking", from: "Java Loading", to: "Java Linking", category: "simplelink"},
    {key: "linkingToInit", from: "Java Linking", to: "Java Initialization", category: "simplelink"},
    {key: "bootstrapToextension", from: "Java Bootstrap Loader", to: "Java Extension Loader", category: "simplelink"},
    {key: "extensionToApplication", from: "Java Extension Loader", to: "Java Application Loader", category: "simplelink"},
    {key: "verifyToPrepare", from: "Java Verify", to: "Java Prepare", category: "simplelink"},
    {key: "prepareToResolve", from: "Java Prepare", to: "Java Resolve", category: "simplelink"},
];

nodeDataArray = nodeDataArray.concat(javaNodeDataArray);
linkDataArray = linkDataArray.concat(javaLinkDataArray);