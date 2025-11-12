function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background('white');
  textAlign(CENTER);
  textSize(20);
  text('"experiment 3 - mouse to reveal"', window.innerWidth/2 + window.innerWidth/3, window.innerHeight/2);
}

function draw() {
  noStroke();
  fill(180,0,0);
  
  let n = int(random(3, 6));   // number of sides (3–8)
  let r = random(20, 60);      // approximate radius

  beginShape();
  for (let i = 0; i < n; i++) {
    let angle = map(i, 0, n, 0, TWO_PI);
    let x = mouseX + cos(angle) * r * random(0.5, 1.5);
    let y = mouseY + sin(angle) * r * random(0.5, 1.5);
    vertex(x, y);
  }
  endShape(CLOSE);
}
