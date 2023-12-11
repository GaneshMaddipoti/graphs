let dataContainer = {key: "Data", desc:"Data Container", color: "WhiteSmoke", isGroup: true, group:"Orchestration", category: "tree90", expand: true, img: "assets/img/docker.png",};
let dataAppContainer = {key: "DataApp", desc:"Application", color: "WhiteSmoke", isGroup: true, group:"Data", category: "grid", expand: true};
let dbFrameworksContainer = {key: "DBFrameworks", desc:"Frameworks", color: "WhiteSmoke", isGroup: true, group:"Data", category: "grid", expand: true};
let hadoopContainer = {key: "Hadoop", desc:"Hadoop", color: "WhiteSmoke", isGroup: true, group:"DBFrameworks", category: "grid", expand: false, toolTipHTML: hadoopHTML};
let mapReduceContainer = {key: "MapReduce", desc:"MapReduce", color: "WhiteSmoke", isGroup: true, group:"Hadoop", category: "tree90", expand: false, toolTipHTML: mapReduceHTML};
let mrCode = {key: "MRCode", desc: "Code", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", value: "Overview",group: "MapReduce",
    toolTipHTML: mrCodeHTML};
let mrWorkflow = {key: "MRWorkflow", desc: "Workflow", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", value: "Overview",group: "MapReduce",
    toolTipHTML: workflowHTML};
let mrExecution = {key: "MRExecution", desc: "Execution", color: "WhiteSmoke", shape: "RoundedRectangle", category: "simple", value: "Overview",group: "MapReduce",
    toolTipHTML: mrExecutionHTML};
let resourceManager = {key: "ResourceManager", desc: "Resource Manager /Name Node", height: 50, width: 200, color: "WhiteSmoke", category: "simple",
    shape: "RoundedRectangle", group: "MapReduce", toolTipHTML: resourceManagerHTML};
let nodeManager1 = {key: "NodeManager1", desc: "Node Manager /Data Node", height: 50, width: 200, color: "WhiteSmoke", category: "simple",
    shape: "RoundedRectangle", group: "MapReduce", toolTipHTML: nodeManagerHTML};
let nodeManager2 = {key: "NodeManager2", desc: "Node Manager /Data Node", height: 50, width: 200, color: "WhiteSmoke", category: "simple",
    shape: "RoundedRectangle", group: "MapReduce", toolTipHTML: nodeManagerHTML};

let sparkContainer = {key: "Spark", desc:"Spark", color: "WhiteSmoke", isGroup: true, group:"Hadoop", category: "tree", expand: false,};

let storageContainer = {key: "DataStorage", desc:"Storage", color: "WhiteSmoke", isGroup: true, group:"Data", category: "grid", expand: true};

let database = {key: "Database", desc: "Database", color: "LightSteelBlue", isGroup: true, group: "DataStorage", category: "tree", expand: false};
let hdfs = {key: "HDFS", desc: "HDFS", color: "LightSteelBlue", isGroup: true, group: "DataStorage", category: "tree", expand: false};

nodeDataArray = nodeDataArray.concat(dataContainer);
nodeDataArray = nodeDataArray.concat(dataAppContainer);
nodeDataArray = nodeDataArray.concat(dbFrameworksContainer);
nodeDataArray = nodeDataArray.concat(hadoopContainer);

nodeDataArray = nodeDataArray.concat(mapReduceContainer);
nodeDataArray = nodeDataArray.concat(mrWorkflow);
nodeDataArray = nodeDataArray.concat(mrCode);
nodeDataArray = nodeDataArray.concat(mrExecution);
nodeDataArray = nodeDataArray.concat(resourceManager);
nodeDataArray = nodeDataArray.concat(nodeManager1);
nodeDataArray = nodeDataArray.concat(nodeManager2);

nodeDataArray = nodeDataArray.concat(sparkContainer);
nodeDataArray = nodeDataArray.concat(storageContainer);
nodeDataArray = nodeDataArray.concat(database);
nodeDataArray = nodeDataArray.concat(hdfs);

let rmToNM1 = {name: "rmToNM1", from: "ResourceManager", to: "NodeManager1", category: "simplelink"};
let rmToNM2 = {name: "rmToNM2", from: "ResourceManager", to: "NodeManager2", category: "simplelink"};
linkDataArray = linkDataArray.concat(rmToNM1);
linkDataArray = linkDataArray.concat(rmToNM2);