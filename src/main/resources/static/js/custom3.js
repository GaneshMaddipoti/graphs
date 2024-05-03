function showDetails(e, obj) {
    const node = obj.part;
    if(node) {
        const diagram = node.diagram;
        let details = node.data;
        showToolTip(node, diagram, null);
    }
}

function textStyle() {
    return [
        { margin: 10, width: 150, textAlign: "center", font: '500 20px Cursive, sans-serif', stroke: "#cccccc"}
    ];
}
function textStyle50() {
    return [
        { margin: 10, textAlign: "left", font: '500 20px Cursive, sans-serif', stroke: "#cccccc"}
    ];
}

function textStyle150() {
    return [
        { margin: 0, width: 150, textAlign: "center", font: '500 20px Cursive, sans-serif', stroke: "#cccccc"}
    ];
}
function textStyle250() {
    return [
        { margin: 10, width: 300, textAlign: "left", font: '500 20px Cursive, sans-serif', stroke: "#cccccc"}
    ];
}

function textStyleLong() {
    return [
        { margin: 0, textAlign: "center", font: '500 16px Cursive, sans-serif', stroke: "#999999"}
    ];
}

function itemStyle() {
    return [
        { textAlign: "center", font: '16px Cursive, sans-serif'}
    ];
}

function subGraphExpanderButtonStyle() {
    return [
        {
            width: 10, height: 10, margin: 0,
            "_subGraphExpandedFigure": "MinusLine",
            "_subGraphCollapsedFigure": "PlusLine",
            "_buttonFillNormal": "#cccccc",
            "_buttonStrokeNormal": "#cccccc",
            "_buttonFillOver": "#cccccc",
            "_buttonStrokeOver": "#cccccc ",
            "ButtonBorder.fill": "#cccccc",
            "ButtonBorder.stroke": "#cccccc",
        }
    ];
}

//Diagram
var $ = go.GraphObject.make;
let diagram = new go.Diagram("myDiagramDiv",{layout: $(go.TreeLayout,{ isInitial: false, isOngoing: false },
        { angle: 0, nodeSpacing: 50, layerSpacing: 50}), "undoManager.isEnabled": true, "linkReshapingTool": new OrthogonalLinkReshapingTool(),
});

//Nodes
const itemtemplates = new go.Map();
itemtemplates.add("text",$(go.Panel, $(go.TextBlock, new go.Binding("text"))));


function showToolTip(obj, diagram, tool) {
    var pt = diagram.lastInput.viewPoint;
    let toolTipDIV = document.getElementById("toolTipDIV");
    let closeButtonHTML = '<button id="tooltipClose" onclick="hideToolTip()">X</button>';
    let footerHTML = '<p class="tooltipFooter">Footer</p>';
    if(toolTipDIV && obj.data.toolTipHTML) {
//        toolTipDIV.style.left = (window.innerWidth - 600)/2 + "px";
//        toolTipDIV.style.top = (window.innerHeight - 600)/2 + "px";
        toolTipDIV.innerHTML = closeButtonHTML +
            "<div class='tooltipBody'>" + obj.data.toolTipHTML + "</div>";
        toolTipDIV.style.opacity = "1";
        toolTipDIV.style.display = "block";
        toolTipFlag = true;
    }
}

function showToolTip1(toolTipHTML) {

    let toolTipDIV = document.getElementById("toolTipDIV1");
    let closeButtonHTML = '<button id="tooltipClose" onclick="hideToolTip1()">X</button>';
    let footerHTML = '<p class="tooltipFooter">Footer</p>';
    if(toolTipDIV && toolTipHTML) {
        toolTipDIV.innerHTML = closeButtonHTML +
            "<div class='tooltipBody'>" + toolTipHTML + "</div>";
        toolTipDIV.style.opacity = "1";
        toolTipDIV.style.display = "block";
        toolTip1Flag = true;
    }
}

function hideToolTip() {
    var toolTipDIV = document.getElementById('toolTipDIV');
    if(toolTipDIV) {
        toolTipDIV.style.opacity = "0";
        toolTipDIV.style.display = "none";
        toolTipFlag = false;
    }
}

function hideToolTip1() {
    var toolTipDIV = document.getElementById('toolTipDIV1');
    if(toolTipDIV) {
        toolTipDIV.style.opacity = "0";
        toolTipDIV.style.display = "none";
        toolTip1Flag = false;
    }
}

var myToolTip = $(go.HTMLInfo, {
    show: showToolTip,
});

const picTemplate =
    $(go.Node, "Vertical", { selectionAdorned: false },{padding: 0, margin: new go.Margin(0, 0, 0, 0),},
        $(go.Picture,
            { maxSize: new go.Size(30, 30), },
            new go.Binding("source", "img")),
        $(go.TextBlock, textStyle(),
            { margin: new go.Margin(0, 0, 0, 0),
                maxSize: new go.Size(50, 50),
                isMultiline: false },
            new go.Binding("text", "desc")),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simplePicTemplate =
    $(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.LeftSide,  toSpot: go.Spot.RightSide, isShadowed: false, shadowOffset: new go.Point(3, 3) },
            $(go.Shape, "RoundedRectangle", new go.Binding("height", "height"), {width: 220}, new go.Binding("width", "width"),
                new go.Binding("figure", "shape"), { strokeWidth: .3, stroke: "#eeeeee", fill:"Transparent" }, new go.Binding("stroke", "color")),
            $(go.Panel, "Horizontal",  // the header
//                $(go.TextBlock, "'  '"),
                $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
                $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),

            ),
            { click: (e, obj) => showDetails(e, obj) }
        );

const simpleTemplate =
    $(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, {height: 50}, new go.Binding("height", "height"), {width: 150}, new go.Binding("width", "width"),
            new go.Binding("figure", "shape"), { strokeWidth: .3, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        $(go.TextBlock, textStyle150(), new go.Binding("text", "desc")),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simpleTextTemplate =
    $(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, {height: 30}, new go.Binding("height", "height"), new go.Binding("width", "width"),
            new go.Binding("figure", "shape"), { strokeWidth: 0, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        $(go.Panel, "Horizontal", // the header
            {padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle250(), new go.Binding("text", "desc"),),
        ),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simpleText50Template =
    $(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, {height: 30}, new go.Binding("height", "height"), new go.Binding("width", "width"),
            new go.Binding("figure", "shape"), { strokeWidth: 0, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        $(go.Panel, "Horizontal", // the header
            {padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle50(), new go.Binding("text", "desc"),),
        ),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simpleBorderLessTemplate =
    $(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 0, fill:"Transparent" }, new go.Binding("stroke", "color")),
        $(go.TextBlock, textStyleLong(), new go.Binding("text", "desc")),
        { click: (e, obj) => showDetails(e, obj) }
    );

const simpleWithTooltipTemplate =
    $(go.Node, "Auto",{ selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 1, stroke: "#555", fill:"Transparent" }, new go.Binding("stroke", "color")),
        $(go.TextBlock,textStyle(), new go.Binding("text", "desc")),
        {toolTip: $("ToolTip", $(go.TextBlock, { margin: 4 }, new go.Binding("text", "desc")))},
        { click: (e, obj) => showDetails(e, obj) }
    );

// the "detailed" template shows all of the information in a Table Panel
const detailTemplate =
    $(go.Node, "Auto", { selectionAdorned: false },{ fromSpot: go.Spot.AllSides,  toSpot: go.Spot.AllSides, isShadowed: false, shadowOffset: new go.Point(3, 3) },
        $(go.Shape, new go.Binding("desiredSize", "size"),
            new go.Binding("figure", "shape"), { strokeWidth: 1, stroke: "#555" }, new go.Binding("fill", "color")),
        $(go.Panel, "Vertical",
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc")),
            $(go.Panel, "Vertical", {defaultAlignment: go.Spot.Left, margin: 0,},
                new go.Binding("itemArray", "items"),{
                    itemTemplate:
                        $(go.Panel, "Auto", {margin: 2 }, $(go.Shape, "RoundedRectangle", new go.Binding("fill", "color")),
                            $(go.TextBlock, itemStyle(), new go.Binding("text", "text"))
                        )
                })),
        { click: (e, obj) => showDetails(e, obj) }
    );

const templateMap = new go.Map();
templateMap.add("simplePic", simplePicTemplate);
templateMap.add("simple", simpleTemplate);
templateMap.add("simpleText", simpleTextTemplate);
templateMap.add("simpleText50", simpleText50Template);
templateMap.add("simpleBL", simpleBorderLessTemplate);
templateMap.add("simpleTooltip", simpleWithTooltipTemplate)
templateMap.add("detailed", detailTemplate);
templateMap.add("picTemplate", picTemplate);
templateMap.add("", diagram.nodeTemplate);
diagram.nodeTemplateMap = templateMap;

//Links
const simplelinktemplate =
    $(go.Link, {routing: go.Link.AvoidsNodes, reshapable: true, resegmentable: true, corner: 5},
        $(go.Shape, { strokeWidth: 1, stroke: "WhiteSmoke" }),
        $(go.Shape, { toArrow: "Standard" }, {stroke: "WhiteSmoke", fill: "WhiteSmoke"}),
    );

const invisibleLinkTemplate =
    $(go.Link, {routing: go.Link.AvoidsNodes, reshapable: true, resegmentable: true, corner: 5},
        $(go.Shape, { strokeWidth: 0, stroke: "WhiteSmoke" }),
    );

const reverselinktemplate =
    $(go.Link, {routing: go.Link.AvoidsNodes, reshapable: true, resegmentable: true, corner: 5},
        $(go.Shape, { strokeWidth: 1, stroke: "WhiteSmoke" }),
        $(go.Shape, { fromArrow: "Backward" }, {stroke: "WhiteSmoke", fill: "WhiteSmoke"}),
    );

const byDirLinkTemplate =
    $(go.Link, {routing: go.Link.AvoidsNodes, reshapable: true, resegmentable: true, corner: 5},
        $(go.Shape, { strokeWidth: 1, stroke: "WhiteSmoke" }),
        $(go.Shape, { fromArrow: "Backward" }, {stroke: "WhiteSmoke", fill: "WhiteSmoke"}),
        $(go.Shape, { toArrow: "Standard" }, {stroke: "WhiteSmoke", fill: "WhiteSmoke"}),
    );

const thickLinkTemplate =
    $(go.Link, {routing: go.Link.AvoidsNodes, reshapable: true, resegmentable: true, corner: 5},
        $(go.Shape, { strokeWidth: 8, stroke: "WhiteSmoke" }),
        $(go.Panel, "Auto",
            $(go.Shape, "Rectangle", { fill: "lightgrey", stroke: "gray" }, new go.Binding("fill", "color")),
            $(go.TextBlock, { margin: 3 }, new go.Binding("text", "channel"))),
        {toolTip: $("ToolTip", $(go.TextBlock, { margin: 4 }, new go.Binding("text", "desc")))}
    );

const simplelinklabletemplate =
    $(go.Link, {routing: go.Link.AvoidsNodes, reshapable: true, resegmentable: true, corner: 5},
        $(go.Shape, { strokeWidth: 1, stroke: "WhiteSmoke" }),
        $(go.Shape, { toArrow: "Standard" }, {fill: "WhiteSmoke"}),
        $(go.Panel, "Auto",
            $(go.Shape, "Rectangle", { fill: "lightgrey", stroke: "gray" }, new go.Binding("fill", "color")),
            $(go.TextBlock, { margin: 3 }, new go.Binding("text", "channel"))),
        {toolTip: $("ToolTip", $(go.TextBlock, { margin: 4 }, new go.Binding("text", "desc")))}
    );
const animatedLinkTemplate =
    $(go.Link,
        { routing: go.Link.AvoidsNodes, curve: go.Link.JumpGap, corner: 10, reshapable: true, toShortLength: 7 },
        new go.Binding("points").makeTwoWay(),
        // mark each Shape to get the link geometry with isPanelMain: true
        $(go.Shape, { isPanelMain: true, stroke: "black", strokeWidth: 7 }),
        $(go.Shape, { isPanelMain: true, stroke: "SteelBlue", strokeWidth: 5 }),
        $(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [10, 10] }),
        $(go.Shape, { toArrow: "Triangle", scale: 1.3, fill: "gray", stroke: null })
    );

const linktemplmap = new go.Map();
linktemplmap.add("simplelink", simplelinktemplate);
linktemplmap.add("reverselink", reverselinktemplate);
linktemplmap.add("byDirLink", byDirLinkTemplate);
linktemplmap.add("thickLink", thickLinkTemplate);
linktemplmap.add("simplelinklabel", simplelinklabletemplate);
linktemplmap.add("animatedLink", animatedLinkTemplate);
linktemplmap.add("invisibleLink", invisibleLinkTemplate);
linktemplmap.add("", diagram.linkTemplate);
diagram.linkTemplateMap = linktemplmap;

diagram.groupTemplateMap.add("treeSolid", $(go.Group, "Auto",
    { fromSpot: go.Spot.RightSide,  // coming out from right side
          toSpot: go.Spot.LeftSide },
    { selectionAdorned: false }, {layout: $(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 10, strokeWidth: 0.2, stroke: "WhiteSmoke", fill: "Transparent" }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right }, {padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("treeHL", $(go.Group, "Auto",
    { fromSpot: go.Spot.RightSide,  // coming out from right side
          toSpot: go.Spot.LeftSide },
    { selectionAdorned: false }, {layout: $(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 10, strokeWidth: 0, stroke: "WhiteSmoke", fill: "Transparent" }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left }, {padding: new go.Margin(0, 10)},
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right },
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("tree", $(go.Group, "Auto", { selectionAdorned: false }, {layout: $(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 10, strokeWidth: 0.2, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right }, {padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(25, 25) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("tree250", $(go.Group, "Auto", { selectionAdorned: false }, {layout: $(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 0, strokeWidth: 0, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right }, {padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle250(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("treeBL", $(go.Group, "Auto", { selectionAdorned: false }, {layout: $(go.TreeLayout,
            { angle: 0, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 10, strokeWidth: 0, stroke: "WhiteSmoke", fill: "Transparent" }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right },
            $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyleLong(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
             { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "Transparent" }),
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("tree90", $(go.Group, "Auto", { selectionAdorned: false }, {layout: $(go.TreeLayout,
            { angle: 90, nodeSpacing: 30, layerSpacing: 50 }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 10, strokeWidth: .2, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Right },{padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));
diagram.groupTemplateMap.add("grid", $(go.Group, "Auto", { selectionAdorned: false }, {layout: $(go.GridLayout, {
            wrappingColumn: 3, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(5,5)
        }), isShadowed: false, shadowOffset: new go.Point(0, 0)},
    $(go.Shape, "RoundedRectangle",
        { parameter1: 10, strokeWidth: .2, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left },{padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("grid250", $(go.Group, "Auto", { selectionAdorned: false }, {layout: $(go.GridLayout, {
            wrappingColumn: 3, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(5,5)
        }), isShadowed: false, shadowOffset: new go.Point(0, 0)},
    $(go.Shape, "RoundedRectangle",
        { parameter1: 0, strokeWidth: .2, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left },{padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(20, 20) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle250(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: new go.Margin(10, 10), background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("grid2", $(go.Group, "Auto",{ selectionAdorned: false },  {layout: $(go.GridLayout, {
            wrappingColumn: 2, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(20,0)
        }), isShadowed: false, shadowOffset: new go.Point(0, 0)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 0, strokeWidth: .2, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left }, {margin: 10},
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left },
            $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("grid5", $(go.Group, "Auto",{ selectionAdorned: false },  {layout: $(go.GridLayout, {
            wrappingColumn: 5, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(20,0)
        }), isShadowed: false, shadowOffset: new go.Point(0, 0)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 0, strokeWidth: .2, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left }, {margin: 10},
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left },
            $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));

diagram.groupTemplateMap.add("grid10", $(go.Group, "Auto", { selectionAdorned: false }, {layout: $(go.GridLayout, {
            wrappingColumn: 10, alignment: go.GridLayout.Position,cellSize: new go.Size(1, 1), spacing: new go.Size(20,0)
        }), isShadowed: false, shadowOffset: new go.Point(0, 0)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 0, strokeWidth: .2, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left }, {margin: 10},
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left },
            $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));
diagram.groupTemplateMap.add("grid-congested", $(go.Group, "Auto", { selectionAdorned: false }, {layout: $(go.GridLayout, {
            wrappingColumn: 3, alignment: go.GridLayout.Position, cellSize: new go.Size(0, 0), spacing: new go.Size(0,0)
        }), isShadowed: false, shadowOffset: new go.Point(3, 3)},
    $(go.Shape, "RoundedRectangle", // surrounds everything
        { parameter1: 5, strokeWidth: .2, stroke: "WhiteSmoke", fill: "Transparent", strokeDashArray: [4, 2] }, new go.Binding("stroke", "color")),
    $(go.Panel, "Vertical",  // position header above the subgraph
        { defaultAlignment: go.Spot.Left },
        $(go.Panel, "Horizontal",  // the header
            { defaultAlignment: go.Spot.Left },{padding: new go.Margin(0, 10)},
            $(go.Picture,{ maxSize: new go.Size(30, 30) }, new go.Binding("source", "img")),
            $(go.TextBlock, textStyle(), new go.Binding("text", "desc"),),
            $("SubGraphExpanderButton", subGraphExpanderButtonStyle()),
            { click: (e, obj) => showDetails(e, obj) }
        ),
        $(go.Placeholder,     // represents area for all member parts
            { padding: 10, background: "Transparent" })
    ), new go.Binding("isSubGraphExpanded", "expand"),
));
diagram.scrollMode = go.Diagram.InfiniteScroll;
var myAnimation = null;

function updateAnimation(arg) {
    var harray = [];
    if(arg === "impala"){
        harray = ["dstoi", "itoe", "itohs", "etohs", "etocr", "crtoc", "ctoch", "chtochi", "hstoh", "htoi", "chtoh", "citoi", "htoci", "citoic", "itot", "ttoo"];
    } else if(arg === "dremio") {
        harray = ["dstoi", "itoe", "itohs", "etohs", "etocr", "crtoc", "ctoch", "hstoh", "htod", "chtoh", "htocdb", "dtot", "ttoo", "htomt", "cdbtodc", "cdbtod"];
    }
    var arr = diagram.model.linkDataArray;
    for (var i = 0; i < arr.length; i++) {
        let pivot = arr[i];
        if(harray.includes(pivot.name)) {
            pivot.category = "animatedLink";
        } else {
            pivot.category = "simplelink";
        }
    };
    diagram.model = new go.GraphLinksModel(nodeDataArray, arr);
    if (myAnimation) myAnimation.stop();
    // Animate the flow in the pipes
    myAnimation = new go.Animation();
    myAnimation.easing = go.Animation.EaseLinear;

    diagram.links.each(link => {
        if(link.category === "animatedLink")
            myAnimation.add(link.findObject("PIPE"), "strokeDashOffset", 20, 0)
    });
    // Run indefinitely
    myAnimation.runCount = Infinity;
    myAnimation.start();
    //diagram.commandHandler.zoomToFit();
}
function czoomTofFit() {
    diagram.commandHandler.zoomToFit();
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function expandPanel(element) {
    element.classList.toggle("active");
    var panel = element.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}