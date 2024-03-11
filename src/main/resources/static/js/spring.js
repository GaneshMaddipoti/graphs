let springHTML = `Spring is open source framework for enterprise java applications <br/>
Aims to simplify the complexity of enterprise java applications <br/>
Spring is lightweight and module based framework <br/>
Features <br/>
1) DI/IoC - Dependency Injection/Inversion of control<br/>
Dependency Injection - injecting dependencies at runtime <br/>
Inversion of control - taking control of creating and managing beans from class to framework <br/>
Container - is responsible for managing lifecycle of beans <br/>
2)Aspect Oriented Programming (AOP) <br/>
Used to separate cross cutting concerns and re-use them at places <br/>
Ex: Logging, Caching, Transactions, Authentication, etc... <br/>
3) DAO - Data access objects <br/>
It simplifies database communication process by integrating frameworks <br/>
Ex: SpringDAO, SpringJDBC, hibernate, JPA, etc... <br/>
4) MVC - Model view controller <br/>
Its the implementation of MVC design pattern <br/>
`;

let springInitializerHTML = `
It is a simple web UI to configure the project, and generate template <br/>
&lt;scope&gt;test&lt;/scope&gt; this dependency only available during the test <br/>

`;

let springBootHTML = `
Its an approach to develop spring applications with less/no configuration <br/>
It provides set of starters, which are build modules, to add required dependencies <br/>
It will automatically configure based on the classes in classpath <br/>
It will come with embedded server <br/>
It will provide metrics/health checks, and external configuration <br/>
No more requirement for XML Configuration <br/>
It will manage version in pom.xml by automatically using parent module <br/>
`;

let configurationHTML = `@Configuration - classes will be scanned at startup <br/>
Beans can be configured by XML, Annotations or Java code <br/>
Configuration files can be split, to avoid large configuration file and to make modular configuration <br/>
Configuration classes can import each other <br/>
ApplicationContext can declare multiple configuration classes <br/>
<div class="sourceCode">
@Configuration
@Import({ServiceConfig.class, RepositoryConfig.class})
public class AppConfig {
    @Bean
    public DataSource dataSource() {
    }
}
</div>
`;

let propertiesHTML = `
Spring will automatically load application.properties/application.yml files <br/>
If we need additional files to load use <br/>
<div class="sourceCode">@PropertySource("classpath:database.properties")
@PropertySources({
		@PropertySource("classpath:custom.properties"),
		@PropertySource("classpath:custom1.properties")
})
</div>
`;

let environmentHTML = `It is special bean created by Spring framework <br/>
Spring provides an environment abstraction <br/>
Ex: local, dev, test, stage, prod, cloud <br/>
Also, it separate properties for environments <br/>
It can get property from system/application <br/>
cxt.getEnvironment().getProperty("java.version") - will give java version <br/>

`;

let profileHTML = `
Profile can segregate configuration and beans and make it available for certain environments <br/>
To make property files, profile specific - application-**profile**.properties/yml <br/>
First, when application starts, it will load all props from application.properties <br/>
then, if any profile is active, those props will override the default props <br/>
To make beans, profile specific - @Profile("cloud") <br/>
It can be specified at component/configuration/configuration method <br/>
How to set profile <br/>
1) Using command line/IDE <br/>
2) application.properties -> spring.profiles.active=dev,test,custom <br/>
3) appCxt.setDefaultProperties(Collections.singletonMap("spring.profiles.active", "test"));
appCxt.getEnvironment().setActiveProfiles("cloud"); <br/>
Use cases <br/>
1) To separate configuration for environments <br/>
2) To separate beans for configuration <br/>
3) Use cases like h2 DB in Dev environment, and Oracle in Prod <br/>
4) Feature toggling, new feature beans can be tagged with different profile <br/>
`;

let applicationContextHTML = `
It is the IoC container <br/>

`;

let springBeanHTML = `It is an object created and managed by Spring framework <br/>
@Bean("name")  - we can name the bean <br/>
@Scope("singleton") <br/>
@Qualifier("primary") <br/>
It is a method-level annotation that is used to explicitly declare a bean definition in a configuration class. <br/>
In this case the bean name will be method name by default <br/>
It is typically used when a class does not have the @Component annotation, or when you want more fine-grained control over the configuration of the bean. <br/>
Configuration class must be non-final and public <br/>
Because CGLIB creates subclasses for proxy <br/>
Method must be non-final and non-private <br/>
@Qualifier will qualify with name to resolve duplicate beans <br/>
@Primary - the bean is prioritized over duplicate bean definitions <br/>
<br/>
Scope will declare how the bean is created and managed in its life cycle <br/>
Dependent objects share dependencies, so dependencies should be thread safe <br/>
<b>singleton </b>- (Default) a single object instance for each Spring IoC container/ApplicationContext. <br/>
Its useful where there is no state or same state that will be shared by all dependents <br/>
<b>prototype </b>- all dependent objects get their own dependency bean/object <br/>
Its useful to maintain state for that user and thread, and cant be shared to others <br/>
<b>request </b>- to the lifecycle of an HTTP Request. (in web-aware Spring ApplicationContext) <br/>
<b>session </b>- to the lifecycle of an HTTP Session. (in web-aware Spring ApplicationContext) <br/>
<b>application </b>- to the lifecycle of a ServletContext. (in web-aware Spring ApplicationContext) <br/>
<b>websocket </b>- to the lifecycle of a WebSocket. (in web-aware Spring ApplicationContext) <br/>
Getting Bean instance programmatically <br/>
1) cxt.getBean(Class&lt;T&gt; type) - by type <br/>
2) cxt.getBean(String name, Class&lt;T&gt; type) - by name and type <br/>
3) cxt.getBean(String name) - by name (returns object so need to cast)<br/>
4) cxt.getBean(Class&lt;T&gt; type, Obj... args) - type with args <br/>
5) cxt.getBean(String name, Obj... args) - by name with args(returns object needs casting) <br/>
`;

let autoWiringHTML = `

`;

let springComponentHTML = `@Component <br/>
It is a class-level annotation that is used to mark a class as a Spring component, <br/>
indicating that it should be automatically detected and registered as a bean in the Spring application context. <br/>
The @Component annotation is a generic stereotype annotation that can be used to annotate any class. <br/>
@Repository, @Service, @Controller are meta annotation/sub types to @Component, for further refine components<br/>
`;

let DIHTML = `
There are types of injecting beans <br/>
Constructor Injection - Injecting dependencies via constructor<br/>
Constructor injection is automatically done using @Autowired annotation <br/>
@Autowired annotation is optional if only one constructor <br/>
<br/>
Field Injection - Injecting dependencies using field definition <br/>
It allows direct injection into field, without constructor or method <br/>
Spring will use reflection access to do this job <br/>
<br/>
Method injection - Injecting dependencies using a method <br/>
It allows setting one or more dependencies, and if any initialization work needed <br/>
<br/>
Setter Injection - Injecting dependencies through setter method <br/>
@Autowired is placed above setter method <br/>
<br/>
Configuration methods - We use @Configuration class and @Bean defined methods <br/>
<br/>
Recommendation <br/>
Use constructor for mandatory dependencies and setter methods/configuration methods for optional dependencies <br/>
Spring team generally advocates constructor injection <br/>
`;

let entityHTML = `
Entities are designed to be pure data structures that are independent of the application’s use cases and infrastructure. <br/>

`;

let modelHTML = `
Models, are data structures that represent the state of the system at a particular point in time. <br/>
Models are often created by mapping the data from the domain entities to a specific format that can be used to communicate with external systems. <br/>

`;

let valueHTML = `
@Value is declared at field level or method/constructor parameter level <br/>
It is for expression level DI <br/>
The values can be of primitives, strings, or complex types <br/>
They will be assigned from properties files/system properties/hard coded <br/>
It will also resolve dynamic expression to access other beans/well known beans <br/>
<div class="sourceCode">@Configuration
@PropertySource("classpath:database.properties")
public class AppConfig {
        @Value("\$\{jdbc.url\}")
        private String url;
        @Value("#{systemProperties['user.region']}")
        private String region;
}
</div>
`;

let commonExceptionsHTML = `
If bean configuration not found - NoSuchBeanDefinitionException <br/>
If more than 1 bean configuration found - it will give error - required 1 but found n <br/>
If property not found in properties file - it will throw could not resolve place holder <br/>
If property type mismatch - it will through NumberFormatException <br/>

`;

// **********************Spring Rest ***************************************//
let springRestHTML = `
REST - Representational state transfer <br/>
Its a architecture style and protocol set of rules to create web services <br/>
Main idea is treat network resources as objects and use HTTP methods GET, PUT, POST, DELETE to manage them <br/>

`;


let springNodeDataArray = [
    {key: "Spring", desc: "Spring", color: "WhiteSmoke", isGroup: true, category: "tree", img: "assets/img/spring.png", toolTipHTML: springHTML},
    {key: "Spring-Initializer", desc: "Spring Initializer", color: "WhiteSmoke", isGroup: true, group: "Spring", category: "grid-congested", toolTipHTML: springInitializerHTML},
    {key: "Spring-Boot", desc: "Spring Boot", color: "WhiteSmoke", isGroup: true, group: "Spring", category: "grid-congested", toolTipHTML: springBootHTML},

    {key: "Spring-Core", desc: "Spring Core", color: "WhiteSmoke", isGroup: true, group: "Spring", category: "grid-congested"},
    {key: "Spring-DI", desc: "DI", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: DIHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Spring-Properties", desc: "Properties", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: propertiesHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Spring-Environment", desc: "Environment", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: environmentHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Spring-Profile", desc: "Profile", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: profileHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Spring-Configuration", desc: "@Configuration", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: configurationHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Spring-Bean", desc: "@Bean", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: springBeanHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Spring-Component", desc: "@Component", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: springComponentHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Spring-Value", desc: "@Value", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: valueHTML, img: "assets/img/terraform/tf-hcl.svg"},

    {key: "Spring-Rest", desc: "Spring Rest", color: "WhiteSmoke", isGroup: true, group: "Spring", category: "grid-congested"},
//    {key: "Spring-DI", desc: "DI", color: "WhiteSmoke", group:"Spring-Core", category: "picTemplate", toolTipHTML: DIHTML, img: "assets/img/terraform/tf-hcl.svg"},
//
//    {key: "Java-Solid", desc: "Solid Principles", color: "WhiteSmoke", isGroup: true, group: "Java", category: "tree"},
//    {key: "Java-SP-singleResp", desc: "Single Responsibility", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPSingleRespHTML, img: "assets/img/terraform/tf-hcl.svg"},
//    {key: "Java-SP-OpenClose", desc: "Open Close", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPOpenCloseHTML, img: "assets/img/terraform/tf-hcl.svg"},
//    {key: "Java-SP-LiskovSubs", desc: "Liskov Substitution", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPLiskovSubHTML, img: "assets/img/terraform/tf-hcl.svg"},
//    {key: "Java-SP-Interface-Segregation", desc: "Interface Segregation", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPInterfaceSegregationHTML, img: "assets/img/terraform/tf-hcl.svg"},
//    {key: "Java-SP-DI", desc: "Dependency Inversion", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPDIHTML, img: "assets/img/terraform/tf-hcl.svg"},

];

let springLinkDataArray = [
    {from:"Spring-Initializer", to: "Spring-Boot", category: "simplelink"},
    {from:"Spring-Boot", to: "Spring-Rest", category: "simplelink"},
    {from:"Spring-Boot", to: "Spring-Core", category: "simplelink"},

];

nodeDataArray = nodeDataArray.concat(springNodeDataArray);
linkDataArray = linkDataArray.concat(springLinkDataArray);