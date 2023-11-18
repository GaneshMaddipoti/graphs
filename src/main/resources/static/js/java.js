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
let javaNodeDataArray = [
    {key: "Java", desc: "Java", color: "LightSteelBlue", isGroup: true, group: "Languages", category: "tree", img: "assets/img/java/java.png", expand: false},

    {key: "Java Introduction", desc: "Introduction", isGroup: true, category: "treeBL", group: "Java", expand: false},

    {key: "Language Evolution", desc: "Language Evolution", category: "simpleBL", group: "Java Introduction", toolTipHTML: languageEvolutionHTML},
    {key: "CBeforeJava", desc: "Birth of modern programming C", category: "simpleBL", group: "Java Introduction", toolTipHTML: cBeforeJavaHTML},
    {key: "CPPBeforeJava", desc: "The need for c++", category: "simpleBL", group: "Java Introduction", toolTipHTML: cppBeforeJavaHTML},
    {key: "Java Creation", desc: "The creation of java", category: "simpleBL", group: "Java Introduction", toolTipHTML: creationOfJavaHTML},

    {key: "Java Buzzwords", desc: "Java Buzzwords", color: "WhiteSmoke", isGroup: true, category: "treeBL", group: "Java Introduction", expand: false},

    {key: "Java Simple", desc: "Simple", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Object Oriented", desc: "Object Oriented", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Robust", desc: "Robust", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Multi Threaded", desc: "Multi Threaded", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Portable", desc: "Portable", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Architecture Neutral", desc: "Architecture Neutral", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Interpreted", desc: "Interpreted", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Distributed", desc: "Distributed", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Secured", desc: "Secured", category: "simpleBL", group: "Java Buzzwords"},
    {key: "Java Dynamic", desc: "Dynamic", category: "simpleBL", group: "Java Buzzwords"},

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