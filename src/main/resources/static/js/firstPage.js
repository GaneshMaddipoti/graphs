function getSVGElement() {
    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute("width", 700);
    svgElement.setAttribute("height", 700);
    svgElement.setAttribute("id", "svgId");
    svgElement.setAttribute("style", "border:1px solid black");
    return svgElement;
}
    

function addGrid() {
    let gridElement = `
    <defs>
        <pattern id="smallGrid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="gray" stroke-width="0.1"/>
        </pattern>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="url(#smallGrid)"/>
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="gray" stroke-width="0.2"/>
        </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    `;
    document.getElementById("svgId").innerHTML += gridElement;
}

function getRectangle() {
    let rectangleElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectangleElement.setAttribute("width", 100);
    rectangleElement.setAttribute("height", 100);
    rectangleElement.setAttribute("style", "fill:red;stroke:black;stroke-width:2;opacity:0.5;z-index:1000");
    return rectangleElement;
}

document.body.appendChild(getSVGElement());
document.getElementById("svgId").appendChild(getRectangle());
