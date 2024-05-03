let jtechyContainer = {key: "Jtechy", desc: "Jtechy", color: "LightSteelBlue", isGroup: true, category: "tree", expand: true};
nodeDataArray = nodeDataArray.concat(jtechyContainer);
// nodeDataArray = nodeDataArray.concat(aboutMeNodeDataArray);
// nodeDataArray = nodeDataArray.concat(softSkillsNodeDataArray);

let techSkillsContainer = {key: "Tech Skills", desc:"Tech Skills", color: "WhiteSmoke", isGroup: true, group:"Jtechy", category: "tree90", expand: true};
nodeDataArray = nodeDataArray.concat(techSkillsContainer);
nodeDataArray = nodeDataArray.concat(kafkaNodeDataArray);
linkDataArray = linkDataArray.concat(kafkaLinkDataArray);