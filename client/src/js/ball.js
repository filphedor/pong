function Ball(r, x, y, vx, vy) {
  this.r = r;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
}

Ball.prototype.update = function(ctx) {
  this.x += this.vx;
  this.y += this.vy;

  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(this.x - this.r, this.y - this.r, 2*this.r, 2*this.r);
}

module.exports = Ball;
