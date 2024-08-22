let container = document.querySelector(".container");

createGrid(16);

function createGrid(gridDimensions) {  
  let gridSize = 800;
  let gridPixelSize = gridSize / gridDimensions;
  console.log(gridPixelSize);

  for(row = 1; row < (gridDimensions + 1); row++) {
    let column = 1;
    let square = document.createElement("div");
    square.id = "square-" + row + "-" + column;
    square.className = "squares";
    square.style.height = `${gridPixelSize}px`;
    square.style.width = `${gridPixelSize}px`;
    container.appendChild(square);
    for(column = 2; column < (gridDimensions + 1); column++) {
      let square = document.createElement("div");
      square.id = "square-" + row + "-" + column;
      square.className = "squares";
      square.style.height = `${gridPixelSize}px`;
      square.style.width = `${gridPixelSize}px`;
      container.appendChild(square);
    }
  }
  drawOnGrid();
}

function drawOnGrid() {
  container.addEventListener("mousemove", (e) => {
    e.target.style.backgroundColor = "black";
  });
}

function changeGridSize() {
  let validAnswer = false;
  while(!validAnswer) {
    let userInput = prompt("How big should the grid be? Enter a number between 8 to 100.");
    userInput = Number(userInput);
    userInput = Math.round(userInput);

    if(userInput >= 8 && userInput <= 100) {
      validAnswer = true;
      container.innerHTML = "";
      createGrid(userInput);
    }
  }
}