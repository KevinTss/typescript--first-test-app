

class Point {
  // access modifiers to avoid to modify the value out of the class
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  // by default it's public methods, you can specify it, but not necessary
  public draw() {
    console.log('X: ' + this.x + ',Y: ' + this.y);
  }

}

let a = new Point(1, 2);
a.draw();