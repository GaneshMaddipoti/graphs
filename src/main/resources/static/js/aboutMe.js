function aboutMe() {
    nodeDataArray = [];
    let aboutMeContainer = {key: "About Me", desc: "About Me", color: "LightSteelBlue", isGroup: true, category: "tree", img: "assets/img/gen/user.svg"};

    let myselfGanesh = {key: "Myself Ganesh", desc: "Myself Ganesh", category: "simpleBL", group: "About Me"};
    let experience = {key: "experience", desc: "I have 14+ years of experience in IT field", category: "simpleBL", group: "About Me"};
    let role = {key: "role", desc: "Worked as Individual Contributor, Team lead, Full stack developer, solution architect roles", category: "simpleBL", group: "About Me"};

    let sdlc = {key: "SDLC", desc: "I have experience in all aspects SDLC, ", isGroup: true, category: "treeBL", group: "About Me"};
    let analysisAndDesign = {key: "Analysis and Design", desc: "Analysis and Design", category: "simpleBL", group: "SDLC"};
    let developmentAndTesting = {key: "Development and Testing", desc: "Development and Testing", category: "simpleBL", group: "SDLC"};
    let deploymentAndMaintenance = {key: "Deployment And Maintenance", desc: "Deployment And Maintenance", category: "simpleBL", group: "SDLC"};

    let technologies = {key: "Technologies I know", desc: "Technologies I know, ", isGroup: true, category: "treeBL", group: "About Me"};
    let backEnd = {key: "backEnd", desc: "Java, Scala, Python, Spring, Kafka", category: "simpleBL", group: "Technologies I know"};
    let dataSide = {key: "dataSide", desc: "SQL, PL/SQL, NoSQL, MapReduce, Spark, Databricks", category: "simpleBL", group: "Technologies I know"};
    let devOps = {key: "devOps", desc: "Maven, Jenkins, Terraform, Splunk, Grafana, Kubernetes", category: "simpleBL", group: "Technologies I know"};
    let frontEnd = {key: "frontEnd", desc: "HTML, CSS, Javascript, Angular", category: "simpleBL", group: "Technologies I know"};
    let cloudTech = {key: "cloudTech", desc: "I am a certified AWS solution architect", category: "simpleBL", group: "Technologies I know"};

    let agilePractices = {key: "agilePractices", desc: "Worked in agile practice,", isGroup: true, category: "treeBL", group: "About Me"};
    let planning = {key: "planning", desc: "Sprint Planning, Backlog grooming", category: "simpleBL", group: "agilePractices"};
    let storyPointing = {key: "storyPointing", desc: "Breaking down objectives into epics and stories, story pointing", category: "simpleBL", group: "agilePractices"};
    let retroAndDemos = {key: "retroAndDemos", desc: "Participated in retros and demos", category: "simpleBL", group: "agilePractices"};

    nodeDataArray = nodeDataArray.concat(aboutMeContainer);
    nodeDataArray = nodeDataArray.concat(myselfGanesh);
    nodeDataArray = nodeDataArray.concat(experience);
    nodeDataArray = nodeDataArray.concat(role);

    nodeDataArray = nodeDataArray.concat(sdlc);
    nodeDataArray = nodeDataArray.concat(analysisAndDesign);
    nodeDataArray = nodeDataArray.concat(developmentAndTesting);
    nodeDataArray = nodeDataArray.concat(deploymentAndMaintenance);

    nodeDataArray = nodeDataArray.concat(technologies);
    nodeDataArray = nodeDataArray.concat(backEnd);
    nodeDataArray = nodeDataArray.concat(dataSide);
    nodeDataArray = nodeDataArray.concat(devOps);
    nodeDataArray = nodeDataArray.concat(frontEnd);
    nodeDataArray = nodeDataArray.concat(cloudTech);

    nodeDataArray = nodeDataArray.concat(agilePractices);
    nodeDataArray = nodeDataArray.concat(planning);
    nodeDataArray = nodeDataArray.concat(storyPointing);
    nodeDataArray = nodeDataArray.concat(retroAndDemos);


    let glModel = new go.GraphLinksModel(nodeDataArray,linkDataArray);
    diagram.model = glModel;
}