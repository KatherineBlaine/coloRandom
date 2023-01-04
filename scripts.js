// Data Model 👇
var hexNum = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var currentPalette;
var savedPalettes = [];

// Global DOM variables 👇
var square1 = document.getElementById('color1');
var square2 = document.getElementById('color2');
var square3 = document.getElementById('color3');
var square4 = document.getElementById('color4');
var square5 = document.getElementById('color5');

var hex1 = document.getElementById('hex1');
var hex2 = document.getElementById('hex2');
var hex3 = document.getElementById('hex3');
var hex4 = document.getElementById('hex4');
var hex5 = document.getElementById('hex5');

var savedPalettesSection = document.getElementById('saved-palettes')
var paletteSection = document.getElementById('palette');

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
  unlockColor(color) {
    this[color].locked = false;
  }
}

// Event Listeners 👇
window.addEventListener('load', loadPalette);
newBtn.addEventListener('click', function() {
  generateColors();
  displayColors();
});
saveBtn.addEventListener('click', savePalette);
paletteSection.addEventListener('click', function() {
  lockColor(event)
})

// Functions 👇
function lockColor(event) {
  var boxId = event.target.id;
  var palKeys = Object.keys(currentPalette);
  var palVals = Object.values(currentPalette);
  for (var i = 1; i < palKeys.length; i++) {
    if (palKeys[i] === boxId && !palVals[i].locked) {
      var hexVal = palVals[i].hex;
      currentPalette.lockColor(`color${i}`);
      event.target.nextElementSibling.innerHTML = `${hexVal}<span class="material-symbols-outlined">lock</span>`;
      return;
    } else if (palKeys[i] === boxId && palVals[i].locked) {
      var hexVal = palVals[i].hex;
      currentPalette.unlockColor(`color${i}`);
      event.target.nextElementSibling.innerHTML = `${hexVal}<span class="material-symbols-outlined">lock_open</span>`;
      return;
    }
  }
}

function generateColors() {
  currentPalette.changeColor();
  displayColors();
}


function loadPalette() {
  currentPalette = new Palette;
  displayColors();
}

function createMiniPalette() {
  savedPalettesSection.innerHTML += `
  <section class="saved-mini-palette">
    <section style="background-color: ${currentPalette.color1.hex};" class="mini-square" id="mini-square1"></section>
    <section style="background-color: ${currentPalette.color2.hex};" class="mini-square" id="mini-square2"></section>
    <section style="background-color: ${currentPalette.color3.hex};" class="mini-square" id="mini-square3"></section>
    <section style="background-color: ${currentPalette.color4.hex};" class="mini-square" id="mini-square4"></section>
    <section style="background-color: ${currentPalette.color5.hex};" class="mini-square" id="mini-square5"></section>
    <span class="material-symbols-outlined trash">delete</span>
  </section>
  `
}

function savePalette() {
  savedPalettes.push(currentPalette);
  createMiniPalette();
  loadPalette();
}

function displayColors() {
  square1.style.backgroundColor = currentPalette.color1.hex;
  square2.style.backgroundColor = currentPalette.color2.hex;
  square3.style.backgroundColor = currentPalette.color3.hex;
  square4.style.backgroundColor = currentPalette.color4.hex;
  square5.style.backgroundColor = currentPalette.color5.hex;
  hex1.innerHTML = `${currentPalette.color1.hex} <span class="material-symbols-outlined">lock_open</span>`;
  hex2.innerHTML = `${currentPalette.color2.hex} <span class="material-symbols-outlined">lock_open</span>`;
  hex3.innerHTML = `${currentPalette.color3.hex} <span class="material-symbols-outlined">lock_open</span>`;
  hex4.innerHTML = `${currentPalette.color4.hex} <span class="material-symbols-outlined">lock_open</span>`;
  hex5.innerHTML = `${currentPalette.color5.hex} <span class="material-symbols-outlined">lock_open</span>`;
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