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
let creationOfJavaHTML = `Prior to java, languages are platform dependent, that means
Programs, that run on windows may not run on other platforms(linux,mac,solaris, etc..)
In an attempt to find such a solution, Gosling and other colleagues began work on a portable,
platform-independent language that could be used to produce code that would run on variety of cpu’s.
At the same time, java was being implemented , www (or) Internet has taken a shape. The web or internet too demanded portable programs.’
Java achieves platform independency through,  generating an intermediate code
All the devices which are having interpreter(JVM) can run the same byte code.
Java was conceived by james gosling and his team at sun micro systems in 1991.
This language was initially called “OAK” , but was renamed to “JAVA” in 1995.
Java derives much of the syntax from ‘C’ and ‘C++’.
`;

// let creationOfJavaHTML = `<span class="accordion">Section 1</span><div class="panel"><span>test1</span></div>
// <span class="accordion" onclick="expandPanel(this)">Section 2</span><div class="panel"><span>test2</span></div>
// <span class="accordion">Section 3</span><div class="panel"><span>test3</span></div>`;


let creationOfJavaHTML = `Prior to java, languages are platform dependent, that means
Programs, that run on windows may not run on other platforms(linux,mac,solaris, etc..)
In an attempt to find such a solution, Gosling and other colleagues began work on a portable,
platform-independent language that could be used to produce code that would run on variety of cpu’s.
At the same time, java was being implemented , www (or) Internet has taken a shape. 
The web or internet too demanded portable programs.’
Java achieves platform independency through,  generating an intermediate code
All the devices which are having interpreter(JVM) can run the same byte code.
Java was conceived by james gosling and his team at sun micro systems in 1991.
This language was initially called “OAK” , but was renamed to “JAVA” in 1995.
Java derives much of the syntax from ‘C’ and ‘C++’.
`;

let javaFeaturesHTML = `1) Simple
2) <span title="">Object Oriented</span>
3) Robust
4) Multithreaded
5) Portable
6) Architecture Neutral
7) Interpreted
8) Distributed
9) Secured
10) Dynamic
`;

let oopsHTML = `1) Abstraction
2) Encapsulation
3) Inheritance
4) Polymorphism`;

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