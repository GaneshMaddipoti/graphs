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
<b>Content Features</b>
<ul>
<li>Starting with system architecture</li>
<li>Program execution with internals </li>
<li>Learning along by coding an application</li>
<li>Language fundamentals to advanced features</li>
</ul>
<b>Content Presentation</b><br/>
<ul>
<li>Simple enough to understand</li>
<li>Block diagram with flow</li>
<li>Coding in Intellij IDE</li>
<li>One flow without any deviations</li>
</ul>
<b>Users</b>
<ul><li>Anyone who wants to learn Java language from zero to advanced</li></ul>
`;

let systemHTML = `
A system is collection of components, serves set of users with set of requirements <br/>
`;

let javaHTML = `
<b>Programming Language</b><br/>
A programming language is a set of instructions written by a programmer to deliver instructions to the computer to perform and accomplish a task<br/>
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

let javaSyntaxHTML = `
Java is case sensitive, while declaring variables, methods, classes, literals <br/>
(/ /) used for comments <br/>
<br/>
<b>Keyword</b></br/>
Its a reserved word, have predefined meaning in java language <br/>
Ex: int, byte, for, which, try, catch, etc...<br/>
<b>Casting</b><br/>
We can change the data type from one to another using casting <br/>
Ex: byte value = (byte) 1000;
`;

let javaLiteralHTML = `
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

let javaDataTypeHTML = `
<b>Data Types </b>
<ul>
<li>Java is statically typed language</li>
<li>Data type is either primitive or object <br/>
<li>There are 8 primitive data types <br/>
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
</li>
<li>Integer literals are int by default, we can put l or L as suffix to treat it as long</li>
<li>Float literals are double by default, f or F as suffix to treat it as float</li>
<li>For precise calculations use BigDecimal, because float, double will behave inconsistently</li>
</ul>
`;

let javaVariableHTML = `
<b>Variables</b><br/>
<ul>
<li>Variables with given name, used to store and retrieve information in memory <br/>
Ex: length = 120;
</li>
<li>A variable is statically typed to a primitive or object <br/>
Ex: int length = 120;
</li>
</ul>
<b>Rules</b><br/>
There are rules for legal variable names/identifiers.
<ol>
<li>Identifiers must start with a letter($),(_)</li>
<li>After first character, they can contain numbers also.</li>
<li>There is no limit on number of characters</li>
<li>You can’t use java keyword as an identifier</li>
<li>Identifiers are case sensitive.</li>
</ol>
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
It's a complete command to be executed <br/>
It can include one or more expressions <br/>
Ex : total = orderValue + tax;
`;

let javaArraysHTML = `
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
<b>Strings</b><br/>
<ul>
<li>A string is an object that contains a sequence of characters. <br/>
    Ex: String name = "Sample sentence."; <br/></li>
<li>Strings are immutable</li>
</ul>
`;

let javaClassHTML = `
<b>Class</b><br/>
<ul>
<li>It's a template to create objects, and we use it to create custom data types</li>
<li>Class contain properties and methods which operate on properties</li>
</ul>
<b>Access Modifiers </b><br/>
We can modify class/members access using public, protected, default, private <br/>
public - access to all classes in application <br/>
protected - access to all classes in that package and sub classes of other packages <br/>
default - access to all classes in that package <br/>
private - access to that class only<br/>
<br/>
<b>Non access modifiers </b> <br/>
final - if applied to class, it can't be subclassed <br/>
&emsp;&emsp;&emsp; - if applied to method, it can't be override <br/>
&emsp;&emsp;&emsp; - if applied to property, it can't be re-assigned <br/>
abstract - if applied to class, it cant be initialized <br/>
&emsp;&emsp;&emsp; - if applied to methods, no need to implement it<br/>
strictfp - if applied to class, all methods are complied to IEEE standard for FP. <br/>
&emsp;&emsp;&emsp; - if applied to method, only that method is complied to IEEE FP.
`;

let javaFlowControlsHTML = `<div class="sourceCode">if (condition) {
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

let javaLoopsHTML = `<div class="sourceCode">while(condition) {
    //Statements to execute while true            
}

do {
    //Statements to execute once, and while true
} while(condition);

for(int i=0; i<5; i++) {
   //Statements to execute for condition met times
}</div>
Break : Execution jumps immediately to the first statement after the loop.<br/>
Continue : Execution jumps immediately to the next iteration by skipping below code. <br/>
Return : execution jumps back to the calling method. <br/>
System.exit() : All program execution stops. JVM shutdown. <br/>    
Many statements in java program can be labeled, but mostly used with break, continue <br/>
`;

let javaExceptionsHTML = `Probable block of code which will raise exception will be placed in try <br/>
We can catch multiple exceptions, with specific to generic order <br/>
finally block if present, will always be executed irrespective of exception <br/>
Checked exceptions: the compiler checks to make sure that they have handled or declared <br/>
Runtime exceptions: are unchecked exceptions, which no need to handle or declare <br/>

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
We can create custom exceptions by extending Exception class <br/>
<div class="sourceCode">Class MyException extends Exception{
    //code
}
</div>
`;

let javaMultiThreadsHTML = `A thread is a light weight process that has its own call stack          <br/>
The main() method, that starts the whole ball rolling runs in one thread called main thread                 <br/>
When we create a new thread, a new stack materializes and method called from that thread run in a call that separate from the main <br/>
Every new call stack, run concurrently with other                                                            <br/>
The jvm like mini os, schedules its own threads  regardless of the underlying us                             <br/>   
In some jvm’s the java threads are actually mapped to native os threads.                                     <br/>   
Different jvm’s acts differently while scheduling the threads                                                   <br/>
We can create thread by extending Thread class, or implementing Runnable interface <br/>
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
</div>
Sleep() // static method, which to sleep the thread for some time <br/>
Yield () //static method, It make the currently running thread to back to runnable state to allow other threads of equal priority to get their turn. <br/>
Join() //The non-static method of class thread lets one thread “ join onto the end” of other thread main.join() <br/>
To prevent race condition, synchronization issues we use synchronized keyword <br/>
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

let javaCollectionsHTML = `
 It is framework to maintain your larger collections of data. <br/>
Basic operations are <br/>
1). Add objects to it. <br/> 
2). Remove objects from the collection <br/>
3). Searching for an object. <br/>
4). Retrieving an object from the collection <br/>
5). Iterating through the collection  <br/>
<br/>
List Interface : An ordered, indexed collection of objects <br/>
1). ArrayList : Think of this as a growable array. It gives you fast iteration and fast random access. <br/>
2). Vector : Vector is basically the same as arrayList, but vendor methods are synchronized <br/>
3). Linked List: The elements are doubly-linked to one another. Iteration is slow, but its good for fast insertion and deletion. <br/>
<br/>
Set Interface : Unordered collection of unique objects <br/>
1). Hash Set : A Hash set in unsorted, unordered set <br/>
2). LinkedHashSet : Its an ordered version of HashSet. That maintains a doubly-linked list across all elements <br/>
3). TreeSet : It’s a sorted collection, means all elements will be in ascending order. <br/>
<br/>
Map Interface : Unordered collection of key,value pairs <br/> 
A Map cares about unique identities, a unique key and the value. <br/>
1). HashMap : HashMap gives you an unsorted, unordered map. <br/>
HashMap allows one null key and multiple null values. <br/>
2). HashTable : Its like HashMap but the methods are synchronized. <br/>
HashTable doesn't allow any null values or null key. <br/>
3). LinkedHashMap : It’s a ordered version of HashMap. It's slower than HashMap but, you can expect faster iterations. <br/>
4). TreeMap : It’s a sorted map. <br/>
<br/>
<b>Comparable vs. Comparator </b> <br/>
Class must be implementing comparable interface. <br/>
CompareTo() method returns an int    <br/>
1). Negative if x is less than y                 <br/>
2). Zero if x==y                        <br/>
3). Positive x is greater than y                        <br/>
Collections.sort(collection) - will use compareTo method to sort the elements <br/>
By implementing comparator also we can do sort. <br/>
The Comparator interface defines a compare(arg1, arg2) method <br/>
Collections.sort(collection, myComparator) - will use compare method to sort the elements <br/>
`;

let javaGenericsHTML = `<b>Generic Classes </b> <br/>
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

let javaStreamsHTML = ` Stream API is used to process collections of objects <br/>
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
6) Can be created from collections, arrays, Files Lines, Methods in Stream, IntStream etc. <br/>


`;

let javaLambdasHTML = `
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

let javaSPSingleRespHTML = `a class should only have one responsibility <br/>`;
let javaSPOpenCloseHTML = `classes should be open for extension but closed for modification <br/>`;
let javaSPLiskovSubHTML = `Objects of a superclass should be replaceable with objects of its subclasses without breaking the system.<br/>`;
let javaSPInterfaceSegregationHTML = `No client should be forced to depend on methods that it does not use.<br/>`;
let javaSPDIHTML = `High-level modules should not depend on low-level modules, both should depend on abstractions. <br/>`;


let javaDPSingletonHTML = `The singleton pattern restricts the instantiation of a Class and ensures that 
only one instance of the class exists in the Java Virtual Machine. <br/>
<div class="sourceCode">class Singleton {    
    private static Singleton single_instance = null;     
    public static Singleton Singleton() { 
        if (single_instance == null) {
            single_instance = new Singleton();
        }
        return single_instance;
    }
</div>
`;

let javaDPFactoryHTML = `Its used when we have a superclass with multiple subclasses and based on input, 
we need to return one of the subclass. <br/>
<div class="sourceCode">public class ComputerFactory {
        public static Computer getComputer(String type, String ram, String hdd, String cpu){
        if("PC".equalsIgnoreCase(type)) return new PC(ram, hdd, cpu);
        else if("Server".equalsIgnoreCase(type)) return new Server(ram, hdd, cpu);
        return null;
    }
}</div>`;

let javaDPAbstractFactoryHTML = `It is a factory of factory design pattern. <br/>`;

let javaDPBuilderHTML = `By providing a constructor with required parameters 
and then different setter methods to set the optional parameters. <br/>
<div class="sourceCode">public static class ComputerBuilder{
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
}</div>
`;

let javaDPPrototypeHTML = `It is used when the Object creation is a costly affair and requires <br/> 
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

let javaDPAdapterHTML = `It's used so that two unrelated interfaces can work together.<br/> 
The object that joins these unrelated interface is called an Adapter. <br/>
<div class="sourceCode">public class Iphone4sTo6sAdapter implements Charger{
    Iphone4sCharger iphone4sCharger;
    Iphone4sTo6sAdapter()    {
        iphone4sCharger = new Iphone4sCharger();
    }
    @Override
    public void charge()    {
        iphone4sCharger.charge();
    }
}</div>
`;

let javaDPStrategyHTML = `It is used when we have multiple algorithm for a specific task and client decides the actual implementation to be used at runtime. <br/>
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

let javaDPCompositeHTML = `When we need to create a structure in a way that the objects in the structure has to be treated the same way <br/>
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

let javaDPProxyHTML = `Provide a surrogate or placeholder for another object to control access to it<br/>
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

let javaDPFlyWeightHTML = `It is used when we need to create a lot of Objects of a class. <br/>
Since every object consumes memory space that can be crucial for low memory devices, <br/>
it can be applied to reduce the load on memory by sharing objects. <br/>
<div class="sourceCode">public class ShapeFactory {
    private static final HashMap&lt;ShapeType, Shape&gt; shapes = new HashMap&lt;ShapeType, Shape&gt;();
    public static Shape getShape(ShapeType type) {
        Shape shapeImpl = shapes.get(type);
        if (type.equals(ShapeType.OVAL_FILL)) {
            shapeImpl = new Oval(true);
        } else if (type.equals(ShapeType.OVAL_NOFILL)) {
            shapeImpl = new Oval(false);
        } else if (type.equals(ShapeType.LINE)) {
            shapeImpl = new Line();
        }
        shapes.put(type, shapeImpl);
    }
    return shapeImpl;
}</div>
`;

let javaDPFacadeHTML = `It is used to help client applications easily interact with the system.<br/>`;

let javaDPDecoratorHTML = `It is used to modify the functionality of an object at runtime. <br/>
<div class="sourceCode">public abstract class TreeDecorator implements ChristmasTree {
    private ChristmasTree tree;    
    @Override
    public String decorate() {
        return tree.decorate();
    }
}
public class BubbleLights extends TreeDecorator {
    public BubbleLights(ChristmasTree tree) {
        super(tree);
    }
    public String decorate() {
        return super.decorate() + decorateWithBubbleLights();
    }
    private String decorateWithBubbleLights() {
        return " with Bubble Lights";
    }
}</div>`;

let javaPropertyHTML = `

`;

let javaNodeDataArray = [

    {key: "Presentation", desc: "Presentation", isGroup: true, category: "treeHL", img: "img/system.svg", expand: true},
    {key: "System", desc: "System", group: "Presentation", isGroup: true, category: "treeSolid", img: "img/system.svg", expand: true},

    {key: "Storage", desc: "Storage", isGroup: true, group: "System", category: "treeSolid", img: "img/harddisk.svg", expand: true},

    {key: "CPU", desc: "CPU", isGroup: true, group: "System", category: "tree90", img: "img/pc.svg", expand: true},
    {key: "IO", desc: "Input/Output", group: "System", category: "picTemplate", img: "img/terminal.svg", expand: false},

    {key: "Memory", desc: "Memory", isGroup: true, group: "CPU", category: "grid", img: "img/memory.svg", expand: true},
    {key: "Processor", desc: "Processor", group: "CPU", category: "simplePic", img: "img/processor.svg", expand: false},


    {key: "Application", desc: "Application", isGroup: true, group: "Storage", category: "tree", toolTipHTML: javaProgrammingHTML, expand: true, img: "img/javaFile.svg",},

    {key: "Sourcecode", desc: "Sourcecode", group: "Application", category: "picTemplate", toolTipHTML: javaProgrammingHTML, expand: false, img: "img/byteFile.svg",},
    {key: "Bytecode", desc: "Bytecode", group: "Application", category: "picTemplate", toolTipHTML: javaProgrammingHTML, expand: false, img: "img/byteFile.svg",},
    {key: "Java", desc: "JDK", isGroup: true, group: "Storage", category: "grid", img: "assets/img/java/java.svg", toolTipHTML: javaHTML, expand: true},

    {key: "Java Language", desc: "Language", isGroup: true, group: "Application", category: "tree", toolTipHTML: javaHTML, expand: true},

    {key: "Java-Syntax", desc: "Syntax", isGroup: true, group: "Java Language", category: "tree", expand: true, toolTipHTML: javaSyntaxHTML},

    {key: "Initialization", desc: "Initialize", isGroup: true, group: "Java-Syntax", category: "grid", expand: true, toolTipHTML: javaSyntaxHTML},
    {key: "Java-Literals", desc: "Literals", group:"Initialization", category: "simple", toolTipHTML: javaLiteralHTML},
    {key: "Java-Variables", desc: "Variables", group:"Initialization", category: "simple", toolTipHTML: javaVariableHTML},
    {key: "Java-Datatypes", desc: "Datatypes", group:"Initialization", category: "simple", expand: false, toolTipHTML: javaDataTypeHTML},
    {key: "Java-Arrays", desc: "Arrays", group:"Initialization", category: "simple", toolTipHTML: javaArraysHTML},
    {key: "Java-String", desc: "String", group:"Initialization", category: "simple", toolTipHTML: javaStringHTML},
    {key: "Class", desc: "Class", group:"Initialization", category: "simple", toolTipHTML: javaClassHTML},

    {key: "Process", desc: "Process", isGroup: true, group: "Java-Syntax", category: "grid", expand: false, toolTipHTML: javaSyntaxHTML},
    {key: "Java-Operators", desc: "Operators", group:"Process", category: "simple", toolTipHTML: javaOperatorHTML},
    {key: "Java-Expressions", desc: "Expressions", group:"Process", category: "simple", toolTipHTML: javaExpressionHTML},
    {key: "Java-Statements", desc: "Statements", group:"Process", category: "simple",toolTipHTML: javaStatementHTML},
    {key: "Java-FlowControls", desc: "FlowControls", group:"Process", category: "simple", toolTipHTML: javaFlowControlsHTML},
    {key: "Java-Loops", desc: "Loops", group:"Process", category: "simple", toolTipHTML: javaLoopsHTML},
    {key: "Java-Exceptions", desc: "Exceptions", group:"Process", category: "simple", toolTipHTML: javaExceptionsHTML},
    {key: "Java-Threads", desc: "Multi Threading", group:"Process", category: "simple", toolTipHTML: javaMultiThreadsHTML},

    {key: "Java-OOP", desc: "OOP", isGroup: true, group: "Java-Syntax", category: "grid", expand: false},

    {key: "Java-WrapperClass", desc: "Wrapper Classes", group:"Java-OOP", category: "simple", toolTipHTML: javaWrapperClassHTML},
    {key: "Java-Collections", desc: "Collections", group:"Java-OOP", category: "simple", toolTipHTML: javaCollectionsHTML},
    {key: "Java-Generics", desc: "Generics", group:"Java-OOP", category: "simple", toolTipHTML: javaGenericsHTML},
    {key: "Java-Iterators", desc: "Iterators", group:"Java-OOP", category: "simple", toolTipHTML: javaIteratorsHTML},
    {key: "Java-Spliterators", desc: "Spliterators", group:"Java-OOP", category: "simple", toolTipHTML: javaSpliteratorsHTML},
    {key: "Java-Lambdas", desc: "Lambdas", group:"Java-OOP", category: "simple", toolTipHTML: javaLambdasHTML},
    {key: "Java-Streams", desc: "Streams", group:"Java-OOP", category: "simple", toolTipHTML: javaStreamsHTML},

    {key: "Java-Semantics", desc: "Semantics", isGroup: true, group: "Java Language", expand: false, category: "grid"},

    {key: "Java-Design-Patterns", desc: "Design Patterns", isGroup: true, group: "Java-Semantics", category: "tree", expand: false},

    {key: "Java-DP-Creational", desc: "Creational", isGroup: true, group: "Java-Design-Patterns", category: "grid", expand: false},
    {key: "Java-DP-Singleton", desc: "Singleton", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPSingletonHTML},
    {key: "Java-DP-Factory", desc: "Factory", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPFactoryHTML},
    {key: "Java-DP-AbstractFactory", desc: "Abstract Factory", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPAbstractFactoryHTML},
    {key: "Java-DP-Builder", desc: "Builder", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPBuilderHTML},
    {key: "Java-DP-Prototype", desc: "Prototype", group:"Java-DP-Creational", category: "simple", toolTipHTML: javaDPPrototypeHTML},

    {key: "Java-DP-Structural", desc: "Structural", isGroup: true, group: "Java-Design-Patterns", category: "grid", expand: false},
    {key: "Java-DP-Adapter", desc: "Adapter", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPAdapterHTML},
    {key: "Java-DP-Composite", desc: "Composite", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPCompositeHTML},
    {key: "Java-DP-Proxy", desc: "Proxy", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPProxyHTML},
    {key: "Java-DP-FlyWeight", desc: "FlyWeight", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPFlyWeightHTML},
    {key: "Java-DP-Facade", desc: "Facade", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPFacadeHTML},
    {key: "Java-DP-Decorator", desc: "Decorator", group:"Java-DP-Structural", category: "simple", toolTipHTML: javaDPDecoratorHTML},

    {key: "Java-DP-Behavioral", desc: "Behavioral", isGroup: true, group: "Java-Design-Patterns", category: "grid", expand: false},
    {key: "Java-DP-Strategy", desc: "Strategy", group:"Java-DP-Behavioral", category: "simple", toolTipHTML: javaDPStrategyHTML},

    {key: "Java-Solid", desc: "Solid Principles", isGroup: true, group: "Java-Semantics", category: "tree", expand: false},
    {key: "Java-SP-singleResp", desc: "Single Responsibility", group:"Java-Solid", category: "simple", toolTipHTML: javaSPSingleRespHTML},
    {key: "Java-SP-OpenClose", desc: "Open Close", group:"Java-Solid", category: "simple", toolTipHTML: javaSPOpenCloseHTML},
    {key: "Java-SP-LiskovSubs", desc: "Liskov Substitution", group:"Java-Solid", category: "simple", toolTipHTML: javaSPLiskovSubHTML},
    {key: "Java-SP-Interface-Segregation", desc: "Interface Segregation", group:"Java-Solid", category: "simple", toolTipHTML: javaSPInterfaceSegregationHTML},
    {key: "Java-SP-DI", desc: "Dependency Inversion", group:"Java-Solid", category: "simple", toolTipHTML: javaSPDIHTML},

    {key: "Java Compiler", desc: "Compiler", category: "simplePic", group: "Java", img: "img/tools.svg"},
    {key: "Java RE", desc: "JRE", isGroup: true, expand: false, category: "grid", group: "Java"},

    {key: "Java API", desc: "API", category: "simplePic", group: "Java RE", img: "img/plugin.svg"},

    {key: "Meta", desc: "Meta", category: "simple", group: "Memory"},
    {key: "Heap", desc: "Heap", category: "simple", group: "Memory"},
    {key: "Stack", desc: "Stack", category: "simple", group: "Memory"},

    {key: "Java VM", desc: "Java VM", isGroup: true, expand: true, category: "tree90", group: "Java RE"},

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
    {key: "Features", desc: "Features", category: "simplePic", group: "Presentation", toolTipHTML: featuresHTML},


];

let javaLinkDataArray = [

    {from:"Storage", to: "CPU", category: "byDirLink"},
    {from:"Memory", to: "Processor", category: "byDirLink"},
    {from:"CPU", to: "IO", category: "byDirLink"},
    {from:"About Me", to: "Features", category: "invisibleLink"},
    {from:"Title", to: "About Me", category: "invisibleLink"},


    { from: "Add1", fromPort: "Out", to: "Subtract1", toPort: "A" },


    {from:"Java-Install", to: "Java-Syntax", category: "simplelink"},
    {from:"Java-Input", to: "Java-Process", category: "simplelink"},
    {from:"Java-Process", to: "Java-Output", category: "simplelink"},
    {from:"Java-Syntax", to: "Java-Semantics", category: "simplelink"},
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