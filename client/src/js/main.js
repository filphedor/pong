const $ = require('jquery');
const Game = require("./game.js");

let startApp = function() {
    let canvas = document.getElementById("canvas");

    let ctx = canvas.getContext("2d");
    let game = new Game(500);

    let loop = function() {
      game.update(ctx);
      setTimeout(loop, 10);
    }

    loop();
};

module.exports = {
    'startApp': startApp
};
