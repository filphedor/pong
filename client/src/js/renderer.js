const Ball = require('./ball.js');

let Renderer = function(context) {
    this._context = context;
};

Renderer.prototype.renderWorld = function(world) {
    let items = world.getItems();

    this._context.fillStyle = "#000000";
    this._context.fillRect(0, 0, world.getWidth(), world.getHeight());

    let self = this;

    items.forEach(function(item) {
        self.renderItem(item);
    });
};

Renderer.prototype.renderItem = function(item) {
    if (item instanceof Ball) {
        this._context.beginPath();
        this._context.arc(item.getX(), item.getY(), item.getSize() / 2, 0, Math.PI * 2);
        this._context.fillStyle = "red";
        this._context.fill();
    }
};

module.exports = Renderer;
