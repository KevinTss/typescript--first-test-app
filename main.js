var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // by default it's public methods, you can specify it, but not necessary
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    return Point;
}());
var a = new Point(1, 2);
a.draw();
