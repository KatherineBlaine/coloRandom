var hexNum = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function getRandNum(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getHex() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += getRandNum(hexNum)
  }
  return color;
}

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
}