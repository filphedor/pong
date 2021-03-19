let World = function(width, height) {
    this._width = width;
    this._height = height;
    this._items = [];
};

World.prototype.getWidth = function() {
    return this._width;
};

World.prototype.getHeight = function() {
    return this._height;
};

World.prototype.addItem = function(item) {
    this._items.push(item);
};

World.prototype.getItems = function() {
    return this._items;
};

World.prototype.update = function() {
    let self = this;

    this._items.forEach(function(item) {
        item.update(self);
    });
};

module.exports = World;
