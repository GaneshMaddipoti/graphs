let svgElement;

function getSVGElement() {
    svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute("width", 800);
    svgElement.setAttribute("height", "100vh");
    svgElement.setAttribute("id", "svgId");
    svgElement.setAttribute("style", "background-color:#2b2d30; margin-left: 0px");
    return svgElement;
}
    

function getGridElement() {
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
    return gridElement;
}

function getArrowElement(x1, y1, x2, y2, color) {
    let arrowElement = `
  <defs>
    <marker id="arrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
      <path d="M 0 0 L 5 2.5 L 0 5 z" fill="`+color+`" />
    </marker>
  </defs>
  <line x1="`+x1+`" y1="`+y1+`" x2="`+x2+`" y2="`+y2+`" stroke="`+color+`" 
  stroke-width="2" marker-start="url(#circle)" marker-end="url(#arrow)" style="opacity:0.5"/>`;
  return arrowElement;
}

function getXDotElement(x1, y1, x2, y2) {
    let dotElement = `<circle cx="`+x1+`" cy="`+y1+`" r="10" style="fill:LightGrey;" id="dotId">
    <animate
      attributeName="cx"
      begin="0s"
      dur="3s"
      from="`+x1+`"
      to="`+x2+`"
      repeatCount="indefinite" />
  </circle>`;
  return dotElement;
}


function getYDotElement(x1, y1, x2, y2) {
    let dotElement = `<circle cx="`+x1+`" cy="`+y1+`" r="10" style="fill:LightGrey;" id="dotId">
    <animate
      attributeName="cy"
      begin="0s"
      dur="3s"
      from="`+y1+`"
      to="`+y2+`"
      repeatCount="indefinite" />
  </circle>`;
  return dotElement;
}

function getRectangle(title, x, y, width, height, rx, ry, color, up) {
    let rectangleGroupElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    let rectangleElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectangleElement.setAttribute("x", x);
    rectangleElement.setAttribute("y", y);
    rectangleElement.setAttribute("width", width);
    rectangleElement.setAttribute("height", height);
    rectangleElement.setAttribute("rx", rx);
    rectangleElement.setAttribute("ry", ry);
    rectangleElement.setAttribute("style", "fill:"+color+";stroke:LightGrey;stroke-width:2;opacity:0.5;z-index:1000");

    rectangleGroupElement.appendChild(rectangleElement);
    rectangleGroupElement.appendChild(getTitleElement(title, x, y, width, height, up));
    return rectangleGroupElement;
}

function getTitleElement(title, x, y, width, height, up) {
    let titleElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    titleElement.setAttribute("x", x+width/2);
    titleElement.setAttribute("y", y+height/2);      
    titleElement.setAttribute("dominant-baseline", "middle");     
    titleElement.setAttribute("text-anchor", "middle");      
    titleElement.setAttribute("style", "fill:LightGrey; font-family:cursive; font-size:small");    
    titleElement.textContent = title;
    return titleElement;    
}

function getLinkElement() {
    let linkElement = `<a href="#" onclick="showAnimation()">
        <text x="50" y="500" fill="LightGrey" style="font-family:cursive">Animate</text>
    </a>`;
    return linkElement;
}

document.body.appendChild(getSVGElement()); 
svgElement.innerHTML += getGridElement();
svgElement.appendChild(getRectangle("Storage", 50, 50, 100, 400, 10, 10, "green", true));
svgElement.innerHTML += getArrowElement(150, 100, 245, 100, "LightGrey");

svgElement.appendChild(getRectangle("Memory", 250, 50, 350, 100, 10, 10, "red", true));
svgElement.innerHTML += getArrowElement(325, 150, 325, 295, "LightGrey");
svgElement.appendChild(getRectangle("Processor", 250, 300, 150, 150, 10, 10, "blue", true));
svgElement.innerHTML += getArrowElement(250, 375, 155, 375, "LightGrey");
svgElement.innerHTML += getArrowElement(400, 375, 495, 375, "LightGrey");
svgElement.appendChild(getRectangle("IO", 500, 250, 100, 200, 10, 10, "grey", true));


svgElement.appendChild(getRectangle("Meta", 250, 50, 50, 100, 10, 10, "grey", false));
svgElement.appendChild(getRectangle("Heap", 300, 50, 50, 100, 10, 10, "grey", false));
svgElement.appendChild(getRectangle("Stack", 350, 50, 50, 100, 10, 10, "grey", false));
svgElement.appendChild(getRectangle("Java", 500, 50, 50, 100, 10, 10, "grey", false));
svgElement.appendChild(getRectangle("Linux", 550, 50, 50, 100, 10, 10, "grey", false));

svgElement.innerHTML += getLinkElement();

async function showAnimation() {
    svgElement.innerHTML += getXDotElement(150, 100, 245, 100);
    await new Promise(r => setTimeout(r, 3000));
    document.getElementById("dotId").remove();

    svgElement.innerHTML += getYDotElement(325, 150, 325, 300);
    await new Promise(r => setTimeout(r, 4000));
    document.getElementById("dotId").remove();
}




