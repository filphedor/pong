function Score(x, y) {
  this.x = x;
  this.y = y;
  this.score = 0;
}

Score.prototype.update = function(ctx) {
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px Georgia";
  ctx.fillText(this.score, this.x, this.y);
}

Score.prototype.increment = function() {
    this.score += 1;
}

Score.prototype.getScore = function() {
    return this.score;
}

Score.prototype.reset = function() {
    this.score = 0;
}

module.exports = Score;
