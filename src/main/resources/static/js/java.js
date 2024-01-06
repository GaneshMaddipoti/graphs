let languageEvolutionHTML = `Computer language innovation and development occurs for 2 fundamental reasons
1). To adapt to changing environments.
2). To implement refinements and improvements in the art of programming.
`;
let cBeforeJavaHTML = `The ‘c ’ language fundamentally changed the way programming was approached.
The creation of ‘c’ was direct result of the need for structured, efficient, high level language that could replace assembly code.
C was invented and implemented by Dennis Ritchie, on DEC PDP 11 running Unix-OS,in 1970’s.
‘C’ formally standardized in 1989 by ANSI`;
let cppBeforeJavaHTML = `With ‘c’ programming language, once a project reaches a certain size, its complexity increases and exceeds what a programmer can manage.
 To solve this problem, a new way to program was invented, called object oriented programming(oop).
 Oop is a methodology that helps organize complex programs through the use of inheritance, encapsulation and polymorphism.
 ‘C++’ was invented by bjarne stroustop in 1979, at Bell Labs, newjersey,
 stroustrup initially called the language ‘c-with classes’, in 1983 the name changed to ‘C++’.
 C++ extends ‘C’ by adding object oriented features.
`;

// let creationOfJavaHTML = `<span class="accordion">Section 1</span><div class="panel"><span>test1</span></div>
// <span class="accordion" onclick="expandPanel(this)">Section 2</span><div class="panel"><span>test2</span></div>
// <span class="accordion">Section 3</span><div class="panel"><span>test3</span></div>`;


// let creationOfJavaHTML = `Prior to java, languages are platform dependent, that means
// Programs, that run on windows may not run on other platforms(linux,mac,solaris, etc..)
// In an attempt to find such a solution, Gosling and other colleagues began work on a portable,
// platform-independent language that could be used to produce code that would run on variety of cpu’s.
// At the same time, java was being implemented , www (or) Internet has taken a shape. The web or internet too demanded portable programs.’
// Java achieves platform independency through,  generating an intermediate code
// All the devices which are having interpreter(JVM) can run the same byte code.
// Java was conceived by james gosling and his team at sun micro systems in 1991.
// This language was initially called “OAK” , but was renamed to “JAVA” in 1995.
// Java derives much of the syntax from ‘C’ and ‘C++’.
// `;

// let creationOfJavaHTML = `<span class="accordion">Section 1</span><div class="panel"><span>test1</span></div>
// <span class="accordion" onclick="expandPanel(this)">Section 2</span><div class="panel"><span>test2</span></div>
// <span class="accordion">Section 3</span><div class="panel"><span>test3</span></div>`;


let creationOfJavaHTML = `Prior to java, languages are platform dependent, that means                               <br/>
Programs, that run on windows may not run on other platforms(linux,mac,solaris, etc..)                                  <br/>
In an attempt to find such a solution, Gosling and other colleagues began work on a portable,                           <br/>    
platform-independent language that could be used to produce code that would run on variety of cpu’s.                    <br/>
At the same time, java was being implemented , www (or) Internet has taken a shape.                                     <br/>        
The web or internet too demanded portable programs.’                                                                    <br/>
Java achieves platform independency through,  generating an intermediate code                                           <br/>
All the devices which are having interpreter(JVM) can run the same byte code.                                           <br/>
Java was conceived by james gosling and his team at sun micro systems in 1991.                                          <br/>
This language was initially called “OAK” , but was renamed to “JAVA” in 1995.                                           <br/>
Java derives much of the syntax from ‘C’ and ‘C++’.
`;

let javaFeaturesHTML = `
<div class="accordion" onclick="expandPanel(this)">1) Simple</div>
<div class="panel">
    Beyond its similarities with c/c++, java was designed to be easy to learn and use.                                  <br/>
    It inherits the c/c++ syntax, left out confusing concepts or implemented in a cleaner, more approachable manner.    <br/>                                                               
    It's not having surprising features and have small number of clearly defined ways to accomplish a given task.       <br/>
</div>
<div class="accordion" onclick="expandPanel(this)">2) Object Oriented</div>
<div class="panel">
    Java was not designed to be source code compatible with any other language.                                         <br/>
    So , the java team designed the language a clean , usable , programmatic approach to objects.                       <br/>    
    The outcome is “Everything is an object” paradigm.                                                                  <br/>
</div>
<div class="accordion" onclick="expandPanel(this)">3) Robust</div>
<div class="panel">
    The multi-platform of web demands robust programs because program must execute reliably in a variety of systems.    <br/>
    Java tries to find errors at compile time and run time also.                                                        <br/>
    Two of the main reasons for program failure are                                                                     <br/>
    1) Memory management. 2) Exceptions at run time.                                                                    <br/>
    Java eliminates problem by garbage collection.                                                                      <br/>
    Java helps to eliminate exceptions by providing object-oriented exception handling.                                 
</div>
<div class="accordion" onclick="expandPanel(this)">4) Multithreaded</div>
<div class="panel">
    Java is designed to meet the real world requirement of creating interactive, networked programs.                    <br/> 
    java supports multi-threading, which allows you to write programs that do many things simultaneously.               
</div>
<div class="accordion" onclick="expandPanel(this)">5) Portable</div>
<div class="panel">
    By using byte code mechanism, 
    java gives you write programs that can be downloaded to all the various types of platforms and can be executed.     <br/>
</div>
<div class="accordion" onclick="expandPanel(this)">6) Architecture Neutral</div>
<div class="panel">
    Java designers made several hard decisions in the language creation and JVM creation,                               <br/>
    in order to create and execute programs, those can executed instead of os updates,processor updates, and changes in core system resources.
    “write once, run anywhere, any time, forever”. 
</div>
<div class="accordion" onclick="expandPanel(this)">7) Interpreted</div>
<div class="panel">
    Java programs are created to be interpreted through this only java achieves platform independency.                  <br/>
    Java eliminates the performance concerns of interpretation by introducing(JIT) just in time compiler.               <br/>
    When(JIT) is part of JVM, it compiles the byte code into executable code, piece-by-piece on demand basis.
</div>
<div class="accordion" onclick="expandPanel(this)">8) Distributed</div>
<div class="panel">
    Java designed for the distributed environment of the internet,                                                      <br/>
    because it handles tcp/ip protocols. By using(RMI) we can do client-server programming also.        
</div>
<div class="accordion" onclick="expandPanel(this)">9) Secured</div>
<div class="panel">
    When you use a java compatible web browser, you can safely download java applets without fear of viral infections.  <br/>
    Java achieves this protection by confining a java program to the (JVM) and not allowing any applet to access other parts of the computer.
</div>
<div class="accordion" onclick="expandPanel(this)">10) Dynamic</div>
<div class="panel">
    Java programs carry with them substantial amount of run-time information that is used to verify and resolve access to objects at run-time. 
</div>`;

let oopsHTML = `
<div class="accordion" onclick="expandPanel(this)">1) Abstraction</div>
<div class="panel">
    Abstraction means giving the user essential and salient features which represents unique behavior of that entity and ignoring non essential things. <br/>
    The powerful way to manage abstraction is through the use of hierarchical classification.
</div>
<div class="accordion" onclick="expandPanel(this)">2) Encapsulation</div>
<div class="panel">
    Encapsulation is a mechanism which puts attributes and behavior together,                                           <br/>
    and hides the information and implementation to the real world by providing interface.                              <br/>
    Through encapsulation, we will get maintainability, flexibility, and extensibility,                                 <br/>
    ability to make changes in your implementation code without breaking the code of the others.                        <br/>
    We will hide data by using private access modifiers and gives to others public accessor methods.                    <br/>
</div>
<div class="accordion" onclick="expandPanel(this)">3) Inheritance</div>
<div class="panel">
    It is the process by which one object acquires properties of other object.                                          <br/>
    The most common reasons to use inheritance are                                                                      <br/>
    1). To promote code reuse                                                                                           <br/>
        methods with generic functionality, put them in super class                                                     <br/>
        and extend that super class in subclasses without re implementing those generic methods.                      <br/>
    2). To use polymorphism                                                                                             <br/>
        you can declare super class type, and you can pass any subclass types to that.                                 <br/>
        It is used when objects satisfy [is-a] relationship.                                                            
</div>
<div class="accordion" onclick="expandPanel(this)">4) Polymorphism</div>
<div class="panel">
    It is a feature that allows one interface to be used for a general class of actions.                                <br/>
    1). Compile time polymorphism:                                                                                      <br/>
    In this linking between the object reference and the method it invokes will happen at compile time                  <br/>
    Ex: overloading.                                                                                                    <br/>
    2). Run time polymorphism:                                                                                          <br/>
    In this linking between the object reference and the method it invokes will happen at run time.                     <br/>
    Ex:overriding 
</div>

<div class="accordion" onclick="expandPanel(this)">Composition</div>
<div class="panel">
    It is a feature that defines one object to be attributed of another object                                          <br/>
    It is used when objects satisfy has –a relationship.                                                                <br/>
    Ex:man has a heart.                                                                                                 <br/>
    The object only exists, or only makes sense inside other, as part of the other.                                     <br/>
    You can’t create a heart and pass that to person.                                                                   <br/>
</div>
<div class="accordion" onclick="expandPanel(this)">Aggregation</div>
<div class="panel">
    It is also like composition, but the object exists outside the other also,                                          <br/>
    and we can create and pass it as an argument to the constructor.                                                    <br/>
    Ex: car has an engine.
</div>
<div class="accordion" onclick="expandPanel(this)">Association</div>
<div class="panel">
    Any relation between two objects. Ex: composition, aggregation, etc..
</div>
`;

let syntaxHTML = `
<pre>
    package org.example;

    import java.io.File;
    import java.io.FileReader;
    import java.io.IOException;
    import java.util.*;
    import java.util.stream.Collectors;
    /*
    Multi line comment
     */
    public class Main {

        enum COFFEE {Mocha, Cappuccino};                //Enumaration
        public static void main(String[] args) throws IOException {
            System.out.println("Hello and welcome!");
            //Variables(data types)
            {
                int x = 23;                                 //Datatype name = value;
                String hello = new String("abc");    //for objects

                //Data Types
                boolean flag = true;                        //1 bit, 0 or 1

                byte b = 127;                               //1 byte, -128 to 127
                short s = 32767;                            //2 bytes, -32,768 to 32,767
                int i = 2147483647;                         //4 bytes, -2,147,483,648 to 2,147,483,647
                long l = 9223372036854775807L;              //8 bytes, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

                float f = 33.99999F;                        //4 bytes, 6 to 7 decimal digits
                double d = 23.999999;                       //8 bytes, 15 decimal digits

                char c = 'g';                               //2 bytes, character/ASCII value

                String string = "This is to represent a string object";

                int[] arr = new int[]{1, 2, 3};             //homogeneous collection of data
            }

            //Operators
            {
                //Arithmetic Operators
                int result = 10 + 20;           //addition, concatenation of strings.
                String str = "abc" + "def";

                int result1 = 10 - 20;          //subtraction
                int result2 = 10 * 20;          //multiplication
                int result3 = 10 / 20;          //division
                int result4 = 10 % 20;          //modulus gives the reminder

                //Comparison Operators
                boolean res = 10 > 20;          //Greater than ?
                boolean res1 = 10 < 20;         //less than ?
                boolean res2 = 10 >= 20;        //Greater than or equal to ?
                boolean res3 = 10 <= 20;        //less than or equal to ?
                boolean res4 = 10 == 20;        //equal to ?
                boolean res5 = 10 != 20;        //not equal to ?

                //Bitwise Logical Operators
                boolean resp = true & true;    //and
                boolean resp1 = true | false;   //or
                boolean resp2 = true ^ false;   //exclusive or (only one of them is true)

                //Logical Operators
                boolean resu = true && true;    //compute both when left is true
                boolean resu1 = true || false;  //don't compute on right if left is true

                boolean result12 = !false;      //negation

                int result11 = (true) ? 23 : 32; //ternary operator
            }

            //Constructs
            {
                //Sequence
                int i=0;
                i = i+1;

                //Selective or conditional
                if(i > 0) {
                    System.out.println(true);
                } else {
                    System.out.println(false);
                }

                //Iterative
                for(int p=0; p< 100; p++) {
                    System.out.println(p);
                }
                while(true) {
                    System.out.println(true);
                    break;
                }
                do{
                    System.out.println(true);
                } while (i < 99);
            }

            //Collections, Objects
            {
                //Wrapper classes
                Integer i; Float f;                             //wrappers for all primitives

                List&lt;String> sample = new ArrayList<>();        //indexed
                Set&lt;String> sample1 = new HashSet<>();          //uniqueness
                Map&lt;String>, String> sample2 = new HashMap<>();  //key, value pairs

                class Sample {                                  //Object, heterogeneous data,
                    Integer id;                                 //properties
                    String name;
                    public void print() {                       //behavior
                        System.out.println(id + "" + name);
                    }
                }
                Sample sample3 = new Sample();
                System.out.println(sample3.name);
            }

            //Features
            {
                try{                                        //Exception Handling
                    int i = 99/0;
                } catch(Exception e) {
                    e.printStackTrace();
                }

                Runnable runnable = new Runnable() {        //multi-threading
                    @Override
                    public void run() {
                        System.out.println(true);
                    }
                };
                Thread thread = new Thread(runnable);
                thread.start();

                FileReader fileReader = new FileReader(new File(""));               //File IO API
                fileReader.read();
            }

            //Paradigms
            {
                //OOP, inheritance, polymorphism, abstraction, encapsulation

                //functional programming
                List&lt;String> list = new ArrayList<>();
                list.stream().filter(x -> x.contains("a")).collect(Collectors.toList());
            }

        }
    }
</pre>
`;

let javaNodeDataArray = [
    {key: "Java", desc: "Java", color: "LightSteelBlue", isGroup: true, group: "Languages", category: "grid", img: "assets/img/java/java.png", expand: false},

    {key: "Java Introduction", desc: "Introduction", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Java", toolTipHTML: creationOfJavaHTML},
    {key: "Java Features", desc: "Features", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Java", toolTipHTML: javaFeaturesHTML},
    {key: "Java OOPS", desc: "OOPS", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Java", toolTipHTML: oopsHTML},
    {key: "Java Syntax", desc: "Syntax", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Java", toolTipHTML: syntaxHTML},

    {key: "Java Execution", desc: "Execution", color: "LightSteelBlue", isGroup: true, expand: false, category: "tree90", group: "Java"},
    {key: "Java Source Code", desc: "Source Code", color: "LightSteelBlue", isGroup: true, expand: false, category: "tree90", group: "Java Execution"},
    {key: "Java Compiler", desc: "Compiler (javac)", color: "LightSteelBlue", category: "simple", group: "Java Execution"},
    {key: "Java Byte Code", desc: "Byte Code", color: "LightSteelBlue", category: "simple", group: "Java Execution"},
    {key: "Java RE", desc: "JRE", color: "LightSteelBlue", isGroup: true, expand: false, category: "grid", group: "Java Execution"},

    {key: "Java API", desc: "API", color: "LightSteelBlue", isGroup: true, expand: false, category: "grid", group: "Java RE"},
    {key: "Java VM", desc: "JVM", color: "LightSteelBlue", isGroup: true, expand: false, category: "tree90", group: "Java RE"},

    {key: "Java Class Loader", desc: "Class Loader", color: "LightSteelBlue", isGroup: true, expand: false, category: "tree", group: "Java VM"},
    {key: "Java Loading", desc: "Loading", color: "LightSteelBlue", isGroup: true, expand: false, category: "tree90", group: "Java Class Loader"},
    {key: "Java Bootstrap Loader", desc: "Bootstrap Loader", color: "LightSteelBlue", category: "simple", group: "Java Loading"},
    {key: "Java Extension Loader", desc: "Extension Loader", color: "LightSteelBlue", category: "simple", group: "Java Loading"},
    {key: "Java Application Loader", desc: "Application Loader", color: "LightSteelBlue", category: "simple", group: "Java Loading"},

    {key: "Java Linking", desc: "Linking", color: "LightSteelBlue", isGroup: true, expand: false, category: "tree90", group: "Java Class Loader"},
    {key: "Java Verify", desc: "Verify", color: "LightSteelBlue", category: "simple",  group: "Java Linking"},
    {key: "Java Prepare", desc: "Prepare", color: "LightSteelBlue", category: "simple",  group: "Java Linking"},
    {key: "Java Resolve", desc: "Resolve", color: "LightSteelBlue", category: "simple",  group: "Java Linking"},

    {key: "Java Initialization", desc: "Initialization", color: "LightSteelBlue", category: "simple", group: "Java Class Loader"},

    {key: "Java Runtime Area", desc: "Runtime Area", color: "LightSteelBlue", isGroup: true, expand: false, category: "tree", group: "Java VM"},


];

let javaLinkDataArray = [
    {key: "scToCompiler", from: "Java Source Code", to: "Java Compiler", category: "simplelink"},
    {key: "compilerToBC", from: "Java Compiler", to: "Java Byte Code", category: "simplelink"},
    {key: "bcTojre", from: "Java Byte Code", to: "Java RE", category: "simplelink"},
    {key: "jlTolinking", from: "Java Loading", to: "Java Linking", category: "simplelink"},
    {key: "linkingToInit", from: "Java Linking", to: "Java Initialization", category: "simplelink"},
    {key: "bootstrapToextension", from: "Java Bootstrap Loader", to: "Java Extension Loader", category: "simplelink"},
    {key: "extensionToApplication", from: "Java Extension Loader", to: "Java Application Loader", category: "simplelink"},
    {key: "verifyToPrepare", from: "Java Verify", to: "Java Prepare", category: "simplelink"},
    {key: "prepareToResolve", from: "Java Prepare", to: "Java Resolve", category: "simplelink"},
    {key: "classLoaderToRuntimeArea", from: "Java Class Loader", to: "Java Runtime Area", category: "simplelink"},
];

function javaInto() {
    //var diagram = javaContainer();
    var data = diagram.model.findNodeDataForKey("Java Introduction");

    if (data) {
        diagram.model.startTransaction("modified property");
        diagram.model.set(data, "expand", ((data.expand)? false: true));
        diagram.model.commitTransaction("modified property");
    }
}