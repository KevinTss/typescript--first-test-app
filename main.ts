
/*
Problem:

I you have a function who receive a object as parameter, this object should be formatted as the function needed

Example:

let drawPoint = (point) => {
  // ...
}

Here we are attenting for this:

drawPoint({
  x: 1,
  y: 2
})

But we cann pass this:

drawPoint({
  name: "Kevin"
})

End the function will not work...

Solution:
*/

let drawPoint = (point: { x: number, y: number}) => {
  // ...
}

// We just specify the format of the object that the function is waiting for

// But... Is verbose...
// The solution is use interface