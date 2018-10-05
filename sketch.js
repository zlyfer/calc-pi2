var isize;
var pi;
var stats;
var img;
let nx, ny; // METHOD 2

function preload() {}

function setup() {
  reset();
}

function windowResized() {
  reset();
}

function reset() {
  isize = round(windowHeight * 0.95);
  if (isize % 2 != 0) {
    isize--;
  }
  img = createImage(isize, isize);
  stats = {
    "in": 0,
    "out": 0
  };
  nx = ny = -isize / 2; // METHOD 2
  resizeCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  background(220); // METHOD 1
  // for (let i = 0; i < 1000; i++) { // METHOD 2
  // nx++; // METHOD 2
  // if (nx == isize / 2) { // METHOD 2
  // if (ny == isize / 2) { // METHOD 2
  // drawDetails(); // METHOD 2
  // noLoop(); // METHOD 2
  // } // METHOD 2
  // nx = -isize / 2; // METHOD 2
  // ny++; // METHOD 2
  // } // METHOD 2
  // drawImage2(nx, ny); // METHOD 2
  // } // METHOD 2
  drawImage1(); // METHOD 1
  drawDetails(); // METHOD 1
}

function drawImage1() {
  img.loadPixels();
  for (let i = 0; i < (100); i++) {
    let v = createVector(round(random(-isize / 2, isize / 2)), round(random(-isize / 2, isize / 2)));
    let d = dist(abs(v.x), abs(v.y), 0, 0);
    let col;
    let cc = img.get(v.x + isize / 2, v.y + isize / 2);
    if (cc[0] == 0 && cc[1] == 0 && cc[2] == 0 && cc[3] == 0) {
      if (d < isize / 2) {
        col = color(233, 30, 99);
        img.set(v.x + isize / 2, v.y + isize / 2, col);
        stats.in++;
      } else {
        col = color(74, 168, 242);
        img.set(v.x + isize / 2, v.y + isize / 2, col);
        stats.out++;
      }
    }
    img.updatePixels();
  }
  image(img, 0, 0);
}

function drawImage2(nx, ny) { // METHOD 2
  push();
  translate(isize / 2, isize / 2);
  strokeWeight(1);

  let d = dist(nx, ny, 0, 0);
  if (d < isize / 2) {
    stroke('rgb(233, 30, 99)');
    stats.in++;
  } else {
    stroke('rgb(74, 168, 242)');
    stats.out++;
  }
  point(nx, ny);
  pop();
}

function drawDetails() {
  push();
  textSize(24);
  fill('rgb(74, 168, 242)');
  text(`Dots outside the range of r (${isize/2} dots): ${stats.out}`, isize * 1.1 + 10, isize / 4);
  fill('rgb(233, 30, 99)');
  text(`Dots within range of r (${isize/2} dots): ${stats.in}`, isize * 1.1 + 10, isize / 2);
  fill('rgb(56, 142, 60)');
  text(`${stats.in} + ${stats.out} = ${stats.in + stats.out}`, isize * 1.1 + 10, isize / 1.5);
  text(`4 * (${stats.in} / (${stats.out + stats.in})) = ${4 * (stats.in / (stats.out + stats.in))}`, isize * 1.1 + 10, isize / 1.25);
  stroke('rgb(37, 40, 48)');
  strokeWeight(2);
  line(isize / 10, isize / 10, isize * 1.1, isize / 4);
  line(isize * (9 / 10), isize / 10, isize * 1.1, isize / 4);
  line(isize / 10, isize * (9 / 10), isize * 1.1, isize / 4);
  line(isize * (9 / 10), isize * (9 / 10), isize * 1.1, isize / 4);
  line(isize / 2, isize / 2, isize * 1.1, isize / 2);
  pop();
}