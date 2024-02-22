const MAX_GRID_SIZE = 100 * 100;
console.log(MAX_GRID_SIZE);
let darkness = .9;
//let color = Math.floor(Math.random()*16777215).toString(16);
//console.log(color);

//console.log(`hsla(198.82, 76.12%, 73.73%, ${darkness})`);

const container = document.querySelector(".container");


//grid needs to have appropriate class and be dynamically created
function drawFullGrid() {
  for (let i = 0; i < MAX_GRID_SIZE; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "sketchUnit");
    div.style.setProperty("background", "#FFFFFF");
    //div.style.setProperty("opacity", "0.1");
    container.appendChild(div);
  }
}

//need hover background changes to be permanent and applied to all sketch units
function addMouseListenerFullGrid() {
  let sketchUnit = document.querySelector(".sketchUnit");
  let allSketchUnits = document.querySelectorAll(".sketchUnit");

  allSketchUnits.forEach((unit) => {
    unit.addEventListener("mouseenter", function (){
      if (unit.style.background == "rgb(255, 255, 255)") {
        //unit.style.background = `#89cfef`;
        unit.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      } else {
        //unit.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        darkness -= 0.1;
        unit.style.filter = `brightness(${Math.max(darkness,0.2)})`;
        console.log(darkness);
        //background-color: darken(#eee, 10%);
      }
    });
  });
}


function clearFullGrid() {
  let sketchUnit = document.querySelector(".sketchUnit");
  let allSketchUnits = document.querySelectorAll(".sketchUnit");
  allSketchUnits.forEach((unit) => {
    unit.style.background = "#FFFFFF";
    //darkness = 0.1;
  });
}

//grid size needs to change based on user prompt
const gridSizeSelector = document.querySelector("#resize-button");
gridSizeSelector.addEventListener("click", () => {
  let gridSize = prompt("Enter Grid size (Maximum size 100)");
  document.documentElement.style.setProperty("--input-size", gridSize);
  drawFullGrid();
  clearFullGrid();
});

drawFullGrid();
addMouseListenerFullGrid();
