let hadoopHTML = `BigData innovation started in the year 2004, With the publication of a paper Map-Reduce by Google researchers.
Driving forces for BigData are: Volume, Velocity, Variety, IoT, etc...

Hadoop
Hadoop is software implementation of BigData design.
Hadoop is a reliable, scalable, distributed platform for storing and analyzing vast amounts of data.
Hadoop can run on cheap commodity hardware (cluster of nodes).
Hadoop is open source.
Hadoop ecosystem contains : HDFS, MapReduce, Spark, Hive, Hbase, Zookeeper, etc...`;

let dataHTML = `Data is distinct pieces of information.
Data can exists in several formats, ex: numbers, text, bytes, images, videos, etc...
Data can be categorized into: structured, semi-structured, and unstructured.`;

let dbmsHTML = `Database management system used to create, maintain, and delete multiple databases.`

let databaseHTML = `A database is an organized and structured collection of data.
The structure and organization helps achieve efficient data retrieval.
There are 2 database types: Relational(SQL), Non-relational(NoSQL)

Relations databases store data into set of rows and columns called tables/relations.
The structure of all relations/tables together called database schema.
Example: Oracle, MySQL, DB2, Microsoft SQL server, PostgreSQL.`;

let noSQLHTML = `Non-relational databases doesnt have schema.
No-SQL databases come in different forms to address different use cases.
1) Key-value stores - Redis, Dynamo
2) Column stores - HBase, Cassandra
3) Document stores - MongoDB, Couchbase.
4) Graph databases - Neo4J`;

let dataWarehouseHTML = `A system that pulls data from different sources, transforms, and stores it for analysis and reporting purposes.
A data warehouse stores large quantities of historical data and enables fast, and complex queries.
Data warehouses use OLAP, optimized to handle a low number of complex queries on aggregated large historical data sets.`;

let clusterHTML = `A cluster is a set of loosely or tightly connected computers that work together to be viewed as a single system.
It represents storage, memory, compute and network bandwidth.`;

let yarnHTML = `Yet another resource negotiator.
It manages cluster resources compute, memory and network.
It schedules and monitor the jogs.
It manages using long-running daemons: Resource manager, Node Manager, they act as master-slave.`;

let resourceManagerHTML = `It manages resources among all the applications in the system.
The resource manger consists of:
Application manager: is responsible for accepting job submissions, and starts ApplicationMaster.
Scheduler: is responsible for allocating resources such as disk, cpu, and network.`;

let nodeManagerHTML = `It is an agent run on every machine in cluster.
It is responsible for launching containers and managing the resources.`;

let workflowHTML = `A client submits the job
Resource manager finds a node manager that can launch a container to host the application master
Application master either run the job itself or request additional resources from the RM
Nodes chosen to allow the computation as close to data sources (data locality).
Ideally, container allocated on data node, or same rack, or available node in cluster.
The jobs to application can happen:
1) One job per application
2) Several jobs per application
3) Perpetually running application`;

let mapReduceHTML = `MapReduce1 didnt have YARN, but limited only mapreduce jobs.
JobTracker: responsible for coordination execution of all jobs submitted to the cluster.
TaskTracker: run tasks and reports the status to jobtracker
MapReduce1 faltered if we run on 4000 nodes and 40,000 tasks.
YARN address this problem by using resource manager and application master.

Scheduling
YARN comes with a choice of schedulers and configuration knobs.
1) FIFO scheduler
2) Capacity scheduler
3) Fair scheduler

MapReduce
It is a programming model used to process large data sets on a cluster of commodity hardware by using distributed algorithm.
Its basically batch processing system, and is not suitable for interactive analysis.
So, its best use for offline process, queries will typically take minutes or more to complete.
The model consists of 2 phases.
Map : Users specify a map function to process key/value paris and produce intermediate key/value pairs.
Reduce: Merges all intermediate key/value pairs.
It requires both key/values pairs serializable, and must implement the Writable interface.
Reduce phase requires sorting, so key must implement the WritableComparable interface.`;

let mrCodeHTML = `Code
<pre>public class CarMapper extends Mapper<LongWritable, Text, Text, IntWritable> {
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

let mrExecutionHTML = `Execution
1) Start hadoop by: startHadoop.sh
2) Check all 6 processes running by: jps
    Namenode
    Datanode
    NodeManager
    ResourceManager
    SecondaryNameNode
    JobHistoryServer
3) Load input data to HDFS: hdfs dfs -copyFromLocal /Sample/cars.data /
4) Verify HDFS data: hdfs dfs -ls /
5) Submit job: hadoop jar MapReduce-1.0-SNAPSHOT.jar Driver /cars.data /MyJobResult
6) Verify the outputs: hdfs dfs -ls /MyJobResult
7) Verify the output: hdfs dfs -text /MyJobResult/part-r-00000
`;













