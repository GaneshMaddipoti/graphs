let uiContainer = {key: "UI", desc:"UI Container", color: "WhiteSmoke", isGroup: true, group:"Orchestration", category: "tree90", expand: true, img: "assets/img/docker.png",};
let uiAppContainer = {key: "UIApp", desc:"Application", color: "WhiteSmoke", isGroup: true, group:"UI", category: "grid", expand: true};
let uiFrameworksContainer = {key: "UIFrameworks", desc:"Frameworks", color: "WhiteSmoke", isGroup: true, group:"UI", category: "grid", expand: true};
let uiLanguagesContainer = {key: "UILanguages", desc:"Languages", color: "WhiteSmoke", isGroup: true, group:"UI", category: "grid", expand: true};
let angularContainer = {key: "Angular", desc:"Angular", color: "WhiteSmoke", isGroup: true, group:"UIFrameworks", category: "tree", expand: false,};
let reactContainer = {key: "React", desc:"React", color: "WhiteSmoke", isGroup: true, group:"UIFrameworks", category: "tree", expand: false,};
let htmlContainer = {key: "HTML", desc:"HTML", color: "WhiteSmoke", isGroup: true, group:"UILanguages", category: "tree", expand: false,};
let jsContainer = {key: "Javascript", desc:"Javascript", color: "WhiteSmoke", isGroup: true, group:"UILanguages", category: "tree", expand: false,};

nodeDataArray = nodeDataArray.concat(uiAppContainer);
nodeDataArray = nodeDataArray.concat(uiContainer);
nodeDataArray = nodeDataArray.concat(uiFrameworksContainer);
nodeDataArray = nodeDataArray.concat(angularContainer);
nodeDataArray = nodeDataArray.concat(reactContainer);
nodeDataArray = nodeDataArray.concat(uiLanguagesContainer);
nodeDataArray = nodeDataArray.concat(htmlContainer);
nodeDataArray = nodeDataArray.concat(jsContainer);