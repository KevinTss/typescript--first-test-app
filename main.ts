
let a: string;

let b: number;

let c: boolean;

let d: any; // Any types

let e: number[] = [1, 2, 3]; // Decalre a array of numbers

let f: any[] = ["a", true, 1]; // Decalre an array of any ==> NOT RECOMMENDED

// ENUM
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
// this can be done using enum type from typescript

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;
