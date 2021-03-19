const $ = require('jquery');

console.log('asd')

let startApp = function() {
    let canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 1000, 1000);
};

module.exports = {
    'startApp': startApp
};
