let hadoopHTML = `BigData innovation started in the year 2004, With the publication of a paper Map-Reduce by Google researchers. <br/>
Driving forces for BigData are: Volume, Velocity, Variety, IoT, etc... <br/>

Hadoop <br/>
Hadoop is software implementation of BigData design. <br/>
Hadoop is a reliable, scalable, distributed platform for storing and analyzing vast amounts of data. <br/>
Hadoop can run on cheap commodity hardware (cluster of nodes). <br/>
Hadoop is open source. <br/>
Hadoop ecosystem contains : HDFS, MapReduce, Spark, Hive, Hbase, Zookeeper, etc...`;

let dataHTML = `Data is distinct pieces of information. <br/>
Data can exists in several formats, ex: numbers, text, bytes, images, videos, etc... <br/>
Data can be categorized into: structured, semi-structured, and unstructured.`;

let dbmsHTML = `Database management system used to create, maintain, and delete multiple databases. <br/>`

let databaseHTML = `A database is an organized and structured collection of data. <br/>
The structure and organization helps achieve efficient data retrieval. <br/>
There are 2 database types: Relational(SQL), Non-relational(NoSQL) <br/>

Relations databases store data into set of rows and columns called tables/relations. <br/>
The structure of all relations/tables together called database schema. <br/>
Example: Oracle, MySQL, DB2, Microsoft SQL server, PostgreSQL.`;

let noSQLHTML = `Non-relational databases doesnt have schema. <br/>
No-SQL databases come in different forms to address different use cases. <br/>
1) Key-value stores - Redis, Dynamo <br/>
2) Column stores - HBase, Cassandra <br/>
3) Document stores - MongoDB, Couchbase. <br/>
4) Graph databases - Neo4J`;

let dataWarehouseHTML = `A system that pulls data from different sources, transforms, and stores it for analysis and reporting purposes. <br/>
A data warehouse stores large quantities of historical data and enables fast, and complex queries. <br/>
Data warehouses use OLAP, optimized to handle a low number of complex queries on aggregated large historical data sets.`;

let clusterHTML = `A cluster is a set of loosely or tightly connected computers that work together to be viewed as a single system. <br/>
It represents storage, memory, compute and network bandwidth.`;

let yarnHTML = `Yet another resource negotiator. <br/>
It manages cluster resources compute, memory and network. <br/>
It schedules and monitor the jogs. <br/>
It manages using long-running daemons: Resource manager, Node Manager, they act as master-slave.`;

let resourceManagerHTML = `It manages resources among all the applications in the system. <br/>
The resource manger consists of: <br/>
Application manager: is responsible for accepting job submissions, and starts ApplicationMaster. <br/>
Scheduler: is responsible for allocating resources such as disk, cpu, and network.`;

let nodeManagerHTML = `It is an agent run on every machine in cluster. <br/>
It is responsible for launching containers and managing the resources.`;

let workflowHTML = `A client submits the job <br/>
Resource manager finds a node manager that can launch a container to host the application master <br/>
Application master either run the job itself or request additional resources from the RM <br/>
Nodes chosen to allow the computation as close to data sources (data locality). <br/>
Ideally, container allocated on data node, or same rack, or available node in cluster. <br/>
The jobs to application can happen: <br/>
1) One job per application <br/>
2) Several jobs per application <br/>
3) Perpetually running application`;

let mapReduceHTML = `MapReduce1 didnt have YARN, but limited only mapreduce jobs. <br/>
JobTracker: responsible for coordination execution of all jobs submitted to the cluster. <br/>
TaskTracker: run tasks and reports the status to jobtracker <br/>
MapReduce1 faltered if we run on 4000 nodes and 40,000 tasks. <br/>
YARN address this problem by using resource manager and application master. <br/>

Scheduling <br/>
YARN comes with a choice of schedulers and configuration knobs. <br/>
1) FIFO scheduler <br/>
2) Capacity scheduler <br/>
3) Fair scheduler <br/>

MapReduce <br/>
It is a programming model used to process large data sets on a cluster of commodity hardware by using distributed algorithm. <br/>
Its basically batch processing system, and is not suitable for interactive analysis. <br/>
So, its best use for offline process, queries will typically take minutes or more to complete. <br/>
The model consists of 2 phases. <br/>
Map : Users specify a map function to process key/value paris and produce intermediate key/value pairs. <br/>
Reduce: Merges all intermediate key/value pairs. <br/>
It requires both key/values pairs serializable, and must implement the Writable interface. <br/>
Reduce phase requires sorting, so key must implement the WritableComparable interface.`;

let mrCodeHTML = `Code
<pre style="color: black">public class CarMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
     @Override
     protected void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
        //code
     }
 }
 public class CarReducer extends Reducer<Text, IntWritable, Text, LongWritable> {
     @Override
     protected void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
        //code
     }
 }</pre>`;

let mrExecutionHTML = `Execution <br/>
1) Start hadoop by: startHadoop.sh <br/>
2) Check all 6 processes running by: jps<br/>
    Namenode <br/>
    Datanode  <br/>
    NodeManager<br/>
    ResourceManager  <br/>
    SecondaryNameNode <br/>
    JobHistoryServer <br/>
3) Load input data to HDFS: hdfs dfs -copyFromLocal /Sample/cars.data / <br/>
4) Verify HDFS data: hdfs dfs -ls / <br/>
5) Submit job: hadoop jar MapReduce-1.0-SNAPSHOT.jar Driver /cars.data /MyJobResult <br/>
6) Verify the outputs: hdfs dfs -ls /MyJobResult <br/>
7) Verify the output: hdfs dfs -text /MyJobResult/part-r-00000 <br/>
`;













