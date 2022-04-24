// Select color input
let colorPicker = document.getElementById("colorPicker");

// Select size input
const sizePicker = document.getElementById("sizePicker");
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas");

// Creating function that clears grid
function clearGrid() {
  const allRows = document.querySelectorAll("tr");
  allRows.forEach((row) => {
    row.remove();
  });
}

// Creating function that makes grid
function makeGrid(event) {
  // Prevents the submit behavior
  event.preventDefault();

  // Clear the grid everytime
  clearGrid();

  // Define size variables 
  const height = inputHeight.value;
  const width = inputWidth.value;
  // Loop
  for (let a = 1; a <= height; a++) {
    // Creating row element
    const row = document.createElement("tr");
    for (let b = 1; b <= width; b++) {
      // Creating column element
      const cell = document.createElement("td");
      // Appending to row element
      row.appendChild(cell);
    }
    // Appending to table
    table.appendChild(row);
  }
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", makeGrid);

table.addEventListener("click", function (event) {
  event.target.style.backgroundColor = colorPicker.value;
});
