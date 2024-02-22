const MAX_GRID_SIZE = 100 * 100;
console.log(MAX_GRID_SIZE);
let darkness = 0.1;

//console.log(`hsla(198.82, 76.12%, 73.73%, ${darkness})`);

const container = document.querySelector(".container");


//grid needs to have appropriate class and be dynamically created
function drawFullGrid() {
  for (let i = 0; i < MAX_GRID_SIZE; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "sketchUnit");
    div.style.setProperty("background", "rgb(255, 255, 255)");
    container.appendChild(div);
  }
}

//need hover background changes to be permanent and applied to all sketch units
function addMouseListenerFullGrid() {
  let sketchUnit = document.querySelector(".sketchUnit");
  let allSketchUnits = document.querySelectorAll(".sketchUnit");

  allSketchUnits.forEach((unit) => {
    unit.addEventListener("mouseenter", () => {
      if (unit.style.background == "rgb(255, 255, 255)") {
        unit.style.background = `hsla(198.82, 76.12%, 73.73%, ${darkness})`;
      } else {
        unit.style.background = `hsla(198.82, 76.12%, 73.73%, ${(darkness += 0.1)})`;
        console.log(darkness);
      }
    });
  });
}


function clearFullGrid() {
  let sketchUnit = document.querySelector(".sketchUnit");
  let allSketchUnits = document.querySelectorAll(".sketchUnit");
  allSketchUnits.forEach((unit) => {
    unit.style.background = "rgb(255, 255, 255)";
    darkness = 0.1;
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
