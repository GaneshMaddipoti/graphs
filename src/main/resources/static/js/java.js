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
let javaNodeDataArray = [
    {key: "Java", desc: "Java", color: "LightSteelBlue", isGroup: true, group: "Languages", category: "grid", img: "assets/img/java/java.png", expand: false},

    {key: "Java Introduction", desc: "Introduction", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Java", toolTipHTML: creationOfJavaHTML},
    {key: "Java Features", desc: "Features", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Java", toolTipHTML: javaFeaturesHTML},
    {key: "Java OOPS", desc: "OOPS", color: "WhiteSmoke", category: "simple", shape: "RoundedRectangle", group: "Java"},

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