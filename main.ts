
/*
Interface:

I define the shape of a `Point` object
*/

interface Point {
  x: number,
  y: number
}

// And I use it like a type
let drawPoint = (point: Point) => {
  // ...
}
