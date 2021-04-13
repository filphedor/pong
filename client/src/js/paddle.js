function Paddle(w, h, x, y, vy, upKeyCode, downKeyCode) {
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.vy = vy;
  this.upKeyCode = upKeyCode;
  this.downKeyCode = downKeyCode;

  this.isUpPressed = false;
  this.isDownPressed = false;

  let self = this;
  window.addEventListener('keydown', (e) => {
    if(e.keyCode === upKeyCode) {
      self.isUpPressed = true;
    }

    if(e.keyCode === downKeyCode) {
      self.isDownPressed = true;
    }
  });

  window.addEventListener('keyup', (e) => {
    if(e.keyCode === upKeyCode) {
      self.isUpPressed = false;
    }

    if(e.keyCode === downKeyCode) {
      self.isDownPressed = false;
    }
  });
}

Paddle.prototype.update = function(ctx) {
  let dir = 0;
  if (this.isUpPressed && !this.isDownPressed) {
    dir = -1;
  } else if (!this.isUpPressed && this.isDownPressed) {
    dir = 1;
  }

  this.y += dir*this.vy;

  this.y = Math.min(Math.max(0 + this.h/2, this.y), 1000 - this.h/2);

  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);
}

module.exports = Paddle;
