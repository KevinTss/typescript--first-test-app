var Point = /** @class */ (function () {
    // ? >> is the make parameter optionnal
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var a = new Point(1, 2);
a.draw();
