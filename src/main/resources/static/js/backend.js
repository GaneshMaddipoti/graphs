let backendContainer = {key: "Backend", desc:"Backend Container", color: "WhiteSmoke", isGroup: true, group:"Orchestration", category: "tree90", expand: true, img: "assets/img/docker.png",};
let backendAppContainer = {key: "BackendApp", desc:"Application", color: "WhiteSmoke", isGroup: true, group:"Backend", category: "grid", expand: true};
let frameworksContainer = {key: "Frameworks", desc:"Frameworks", color: "WhiteSmoke", isGroup: true, group:"Backend", category: "grid", expand: true};
let springContainer = {key: "Spring", desc:"Spring", color: "WhiteSmoke", isGroup: true, group:"Frameworks", category: "tree", expand: false,};
let languagesContainer = {key: "Languages", desc:"Languages", color: "WhiteSmoke", isGroup: true, group:"Backend", category: "grid", expand: true};
let pythonContainer = {key: "Python", desc:"Python", color: "WhiteSmoke", isGroup: true, group:"Languages", category: "tree", expand: false, img: "assets/img/python.png",};


nodeDataArray = nodeDataArray.concat(kafkaNodeDataArray);
nodeDataArray = nodeDataArray.concat(backendAppContainer);
nodeDataArray = nodeDataArray.concat(backendContainer);
nodeDataArray = nodeDataArray.concat(frameworksContainer);
nodeDataArray = nodeDataArray.concat(springContainer);
nodeDataArray = nodeDataArray.concat(languagesContainer);
nodeDataArray = nodeDataArray.concat(javaNodeDataArray);
nodeDataArray = nodeDataArray.concat(pythonContainer);