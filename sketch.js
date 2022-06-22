let r = 1;
let n = 3;

let pi;

let nSlider;

let rDash = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  nSlider = createSlider(3, 10000, 0, 0.1);
  nSlider.position(10, 10);
  nSlider.style('width', `${width / 4 * 3}px`);
}
function draw() {
  background(0);
  translate(width / 2, height / 2);
  n = nSlider.value();
  innerPI = n * sin(180 / n);
  outerPI = n * tan(180 / n);
  // n += n / 100;
  noFill();
  stroke("white");
  circle(0, 0, rDash * 2);

  // stroke("green")
  takakkei(n, rDash);
  takakkei(n, rDash / cos(180 / n));

  noStroke();
  // stroke("white");
  fill("white");

  textSize(20);
  text(n + "角形", 0, height / 2 - 200);
  text(innerPI, 0, height / 2 - 150);
  text(outerPI, 0, height / 2 - 100);
}

function takakkei(n, r, angle) {
  push();
  beginShape();
  for (let theta = 0; theta < 360; theta += 360 / n) {
    rotate(angle)
    let x = cos(theta) * r;
    let y = sin(theta) * r;
    strokeWeight(2);
    stroke(0, 255, 125);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}