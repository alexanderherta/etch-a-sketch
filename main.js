let container = document.querySelector(".container");

function createGrid(gridDimensions) {
  let gridPixelSize = 800 / gridDimensions;

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
}
createGrid(22);

let squares = document.querySelectorAll(".squares");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
});