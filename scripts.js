var hexNum = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function getRandNum(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getHex() {
  var color = '';
  for (var i = 0; i < 6; i++) {
    color += getRandNum(hexNum)
  }
  return color;
}

class Color {
  constructor() {
    this.hex = undefined;
    this.locked = false;
  }
}

class Palette {

}