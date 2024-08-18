let container = document.querySelector(".container");

function createGrid() {
  for(row = 1; row < 17; row++) {
    let column = 1;
    let square = document.createElement("div");
    square.id = "square-" + row + "-" + column;
    square.className = "squares";
    container.appendChild(square);
    for(column = 2; column < 17; column++) {
      let square = document.createElement("div");
      square.id = "square-" + row + "-" + column;
      square.className = "squares";
      container.appendChild(square);
    }
  }
}
createGrid();

let squares = document.querySelectorAll(".squares");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
});