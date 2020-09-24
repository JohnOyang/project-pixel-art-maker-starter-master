// Select color input
const inputColor = document.querySelector('#colorPicker');

// Select size input
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');

// select button for submission
const form = document.querySelector('form');

// updated color for filling the pixel
var color = inputColor.value;
// canvas height
var height = inputHeight.value;
// canvas width
var width = inputWidth.value;

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
// Your code goes here!
    event.preventDefault();
    height = inputHeight.value;
    width = inputWidth.value;
    const table = document.querySelector('#pixelCanvas');

    // remove old grid
    table.innerHTML = "";

    // create new grid
    for (var row = 0; row < height; row ++)
    {
        const newRow = document.createElement('tr');

        for (var column = 0; column < width; column++)
        {
            const newCell = document.createElement('td');
            // add event listener for each cell
            newCell.addEventListener('click', function paintBlock(){
                newCell.style.backgroundColor = color;
            });
            newRow.appendChild(newCell);
        }

        table.appendChild(newRow);
    }
}

// update the pixel color
function specifyColor() {
    color = inputColor.value;
}


// respond to clicking the submit button
form.addEventListener('submit',makeGrid);
// update color selection
inputColor.addEventListener('input',specifyColor)
