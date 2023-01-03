// Data Model 👇
var hexNum = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var currentPalette;
var savedPalettes = [];

// Global DOM variables 👇
var square1 = document.getElementById('square1');
var square2 = document.getElementById('square2');
var square3 = document.getElementById('square3');
var square4 = document.getElementById('square4');
var square5 = document.getElementById('square5');

var hex1 = document.getElementById('hex1');
var hex2 = document.getElementById('hex2');
var hex3 = document.getElementById('hex3');
var hex4 = document.getElementById('hex4');
var hex5 = document.getElementById('hex5');

// Global DOM button variables 👇
var newBtn = document.getElementById('new-palette-btn');
var saveBtn = document.getElementById('save-palette-btn');

// Classes 👇
class Color {
  constructor() {
    this.hex = getHex();
    this.locked = false;
  }
}

class Palette {
  constructor() {
    this.id = Date.now();
    this.color1 = new Color;
    this.color2 = new Color;
    this.color3 = new Color;
    this.color4 = new Color;
    this.color5 = new Color;
  }
  
  changeColor() {
    for (var i = 1; i < 6; i++) {
      if (!this[`color${i}`].locked) {
        this[`color${i}`] = new Color;
      }
    }
  }
  
  lockColor(color) {
    this[color].locked = true;
  }
}

// Event Listeners 👇
window.addEventListener('load', loadPalette);
newBtn.addEventListener('click', function() {
  generateColors();
  displayColors();
})

// Functions 👇
function generateColors() {
  currentPalette.changeColor();
  displayColors();
}


function loadPalette() {
  currentPalette = new Palette;
  displayColors();
}

function displayColors() {
  square1.style.backgroundColor = currentPalette.color1.hex;
  square2.style.backgroundColor = currentPalette.color2.hex;
  square3.style.backgroundColor = currentPalette.color3.hex;
  square4.style.backgroundColor = currentPalette.color4.hex;
  square5.style.backgroundColor = currentPalette.color5.hex;
  hex1.innerHTML = `${currentPalette.color1.hex} <span class="material-symbols-outlined">
  lock_open
  </span>`;
  hex2.innerHTML = `${currentPalette.color2.hex} <span class="material-symbols-outlined">
  lock_open
  </span>`;
  hex3.innerHTML = `${currentPalette.color3.hex} <span class="material-symbols-outlined">
  lock_open
  </span>`;
  hex4.innerHTML = `${currentPalette.color4.hex} <span class="material-symbols-outlined">
  lock_open
  </span>`;
  hex5.innerHTML = `${currentPalette.color5.hex} <span class="material-symbols-outlined">
  lock_open
  </span>`;
}

function getHex() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += getRandNum(hexNum)
  }
  return color;
}

function getRandNum(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/* 
LOCKED Icon 👇

<span class="material-symbols-outlined">
lock
</span> 

*/