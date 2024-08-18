let container = document.querySelector(".container");

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