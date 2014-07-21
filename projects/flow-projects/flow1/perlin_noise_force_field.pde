PVector[] pos;
int[] age;

void setup() {
  size(600, 400);
  smooth();
  background(255);
  
  pos = new PVector[2000];
  age = new int[2000];
  for (int i=0; i < pos.length; i++) {
    pos[i] = new PVector(random(width), random(height));
    age[i] = 0;
  }
}

void draw() {
  noStroke();
  fill(255, 10);
  rect(0, 0, width, height);
  stroke(0);
  for (int i = 0; i < pos.length; i++) {
    point(pos[i].x, pos[i].y);
  }
  for (int i = 0; i < pos.length; i++) {
    pos[i].add(new PVector(2*noise(pos[i].x * 0.02, pos[i].y*0.016)-1, 2*noise(pos[i].x * 0.017, pos[i].y*0.011)-1));
    age[i]+=(int)random(3);
    if (pos[i].x < 0 || pos[i].x > width || pos[i].y < 0 || pos[i].y > width || age[i] > 100) {
      pos[i] = new PVector(random(width), random(height));
      age[i] = 0;
    }
  }
  
  if (random(1000) > 999) {
    noiseSeed((long)random(10000));
    for (int i = 0; i < pos.length; i++) {
      pos[i].add(new PVector(random(-2, 2), random(-2, 2)));
    }
  }
}

