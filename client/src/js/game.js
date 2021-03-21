const Ball = require("./ball.js");
const Paddle = require("./paddle.js");
const Score = require("./score.js");

function Game(r) {
  const UNIT = r/50;
  const PADDLE_WIDTH = 2*UNIT;
  const PADDLE_HEIGHT = 5*UNIT;

  this.r = r;
  this.ball = new Ball(UNIT, r, r, 2, 2);
  this.leftPaddle = new Paddle(PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_WIDTH, r, 87, 83);
  this.rightPaddle = new Paddle(PADDLE_WIDTH, PADDLE_HEIGHT, 2*r - PADDLE_WIDTH, r, 73, 75);
  this.leftScore = new Score();
  this.rightScore = new Score();

}

Game.prototype.update = function(ctx) {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 1000, 1000);

  this.ball.update(ctx);
  this.leftPaddle.update(ctx);
  this.rightPaddle.update(ctx);
  
  if((this.ball.y - this.ball.r) <= 0 || (this.ball.y + this.ball.r) >= 2*this.r) {
    this.ball.vy *= -1;
  }

  if(isBallInPaddle(this.ball, this.leftPaddle) || isBallInPaddle(this.ball, this.rightPaddle)) {
    this.ball.vx *= -1;
  }
}

function isPointInPaddle(x, y, paddle) {
  let xmin = paddle.x - paddle.w/2;
  let xmax = paddle.x + paddle.w/2;
  let ymin = paddle.y - paddle.h/2;
  let ymax = paddle.y + paddle.h/2;

  return x >= xmin && x <= xmax && y >= ymin && y <= ymax;
}

function isBallInPaddle(ball, paddle) {
  return isPointInPaddle(ball.x - ball.r, ball.y - ball.r, paddle) ||
         isPointInPaddle(ball.x - ball.r, ball.y + ball.r, paddle) ||
         isPointInPaddle(ball.x + ball.r, ball.y - ball.r, paddle) ||
         isPointInPaddle(ball.x + ball.r, ball.y + ball.r, paddle);
}

module.exports = Game;

