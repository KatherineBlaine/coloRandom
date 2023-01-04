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

var unlockIcons = document.querySelectorAll('.unlock-icon');

var savedPalettesSection = document.getElementById('saved-palettes');
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
  toggleLock(event);
});

// Functions 👇

function toggleLock(event) {
  var boxId = event.target.id;
  var palVals = Object.values(currentPalette);
  var palKeys = Object.keys(currentPalette);
  var targetLock = event.target.nextElementSibling.children[1];
  for (var i = 1; i < palVals.length; i++) {
    if (palKeys[i] === boxId && !palVals[i].locked) {
      changeIcon(targetLock);
      currentPalette.lockColor(palKeys[i]);
      break;
    } else if (palKeys[i] === boxId && palVals[i].locked) {
      changeIcon(targetLock);
      currentPalette.unlockColor(palKeys[i]);
      break;
    }
  }
}

function changeIcon(icon) {
  if (icon.innerText === 'lock_open') {
    icon.innerText = `lock`;
  } else {
    icon.innerText = 'lock_open';
  }
}


function generateColors() {
  currentPalette.changeColor();
  displayColors();
}

function loadPalette() {
  currentPalette = new Palette;
  displayColors();
  for (var i = 0; i < unlockIcons.length; i++) {
    unlockIcons[i].innerText = 'lock_open';
  }
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
  `;
  `;
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
  hex1.innerText = `${currentPalette.color1.hex}`;
  hex2.innerText = `${currentPalette.color2.hex}`;
  hex3.innerText = `${currentPalette.color3.hex}`;
  hex4.innerText = `${currentPalette.color4.hex}`;
  hex5.innerText = `${currentPalette.color5.hex}`;
}

function getHex() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += getRandNum(hexNum);
    color += getRandNum(hexNum);
  }
  return color;
}

function getRandNum(array) {
  return array[Math.floor(Math.random() * array.length)];
}