let Ball = function(size, x, y, vx, vy) {
    this._size = size;
    this._x = x;
    this._y = y;
    this._vx = vx;
    this._vy = vy;
};

Ball.prototype.getSize = function() {
    return this._size;
};

Ball.prototype.getX = function() {
    return this._x;
};

Ball.prototype.getY = function() {
    return this._y;
};

Ball.prototype.update = function(world) {
    this._x = this._x + this._vx;
    this._y = this._y + this._vy;

    if (this._x + (this._size / 2) > world.getWidth() || this._x - (this._size / 2) < 0) {
        this._vx = -1 * this._vx;
    }

    if (this._y + (this._size / 2) > world.getHeight() || this._y - (this._size / 2) < 0) {
        this._vy = -1 * this._vy;
    }
};

module.exports = Ball;
