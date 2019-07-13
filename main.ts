

class Point {
  x: number;
  y: number;

  // ? >> is the make parameter optionnal
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ',Y: ' + this.y);
  }

  getDistance(another: Point) {
    // ...
  }
}

let a = new Point(1, 2);
a.draw();