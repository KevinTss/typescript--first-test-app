var a;
var b;
var c;
var d; // Any types
var e = [1, 2, 3]; // Decalre a array of numbers
var f = ["a", true, 1]; // Decalre an array of any ==> NOT RECOMMENDED
// ENUM
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// this can be done using enum type from typescript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
console.log(backgroundColor)
