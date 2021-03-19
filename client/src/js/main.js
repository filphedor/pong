const Renderer = require('./renderer');
const World = require('./world');
const Ball = require('./ball');


let startApp = function() {
    let canvas = document.getElementById("canvas");

    let ctx = canvas.getContext("2d");

    let createRandomBall = function() {
        let minSize = 25;
        let maxSize = 75;

        let minLoc = 100;
        let maxLoc = 900;

        let minSpeed = -10;
        let maxSpeed = 10;

        let randomBetween = function(min, max) {
            let diff = max - min;

            let rand = Math.random() * diff;

            return min + rand;
        };

        return new Ball(
            randomBetween(minSize, maxSize),
            randomBetween(minLoc, maxLoc),
            randomBetween(minLoc, maxLoc),
            randomBetween(minSpeed, maxSpeed),
            randomBetween(minSpeed, maxSpeed)
        );
    };

    let world = new World(1000, 1000);
    let numBalls = 100;

    for (let i = 0; i < numBalls; i++) {
        world.addItem(createRandomBall());
    }

    let renderer = new Renderer(ctx);

    let update = function() {
        world.update()
        renderer.renderWorld(world);

        setTimeout(update, 15);
    }

    update();
};

module.exports = {
    'startApp': startApp
};
