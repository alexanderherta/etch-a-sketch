let container = document.querySelector(".container");

createGrid(16);

function createGrid(gridDimensions) {  
  let gridSize = 800;
  let gridPixelSize = Math.round(gridSize / gridDimensions);
  let containerSize = gridDimensions * gridPixelSize;

  for(let row = 1; row < (gridDimensions + 1); row++) {
    for(let column = 1; column < (gridDimensions + 1); column++) {
      let square = document.createElement("div");
      square.id = "square-" + row + "-" + column;
      square.className = "squares";
      square.style.height = `${gridPixelSize}px`;
      square.style.width = `${gridPixelSize}px`;
      container.appendChild(square);
    }
  }
  container.style.height = `${containerSize}px`;
  container.style.width = `${containerSize}px`;

  drawOnGrid(gridPixelSize);
}

function drawOnGrid(gridPixelSize) {
  
  let squares = document.querySelectorAll(".squares");

  squares.forEach((square) => {
    let squareDark = document.createElement("div");
    squareDark.style.height = `${gridPixelSize}px`;
    squareDark.style.width = `${gridPixelSize}px`;
    squareDark.style.backgroundColor = "black";
    let squareDarkOpacity = 0;
    squareDark.style.opacity = `${squareDarkOpacity}`;
    square.appendChild(squareDark);

    square.addEventListener("mouseover", (e) => {
      if(!hasColorBeenSet.includes(square)) {
        hasColorBeenSet.push(square);
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        square.style.backgroundColor = `#${randomColor}`;
      }

      squareDarkOpacity += 0.1;
      squareDark.style.opacity = `${squareDarkOpacity}`;
    });
  });
  let hasColorBeenSet = [];
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