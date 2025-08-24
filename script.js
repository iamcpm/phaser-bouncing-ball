let WIDTH = 800;
let HEIGHT = 600;

const config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let ball;
let ballSize = 80;
let yspeed = 0.5;
let xspeed = 1.0;

function preload() {
    this.load.image("ball", "assets/ball.png"); // watch out for case sensitivity
}

/*function create() {
    ball = this.add.sprite(WIDTH / 2, HEIGHT / 2, "ball"); // x, y, and the ball "key"
    ball.setDisplaySize(ballSize, ballSize); // width, height*/

        // ...existing code...
    
        function create() {
        ball = this.add.sprite(WIDTH / 2, HEIGHT / 2, "ball");
        ball.setDisplaySize(ballSize, ballSize);

        // Make the ball interactive
        ball.setInteractive();

        // On pointerdown (click), shrink and speed up
        ball.on('pointerdown', () => {
            // Reduce size by 10%
            ballSize *= 0.9;
            ball.setDisplaySize(ballSize, ballSize);

            // Speed up by 10%
            xspeed *= 1.1;
            yspeed *= 1.1;
        });
    }
    // ...existing code...


function update() {
    ball.y += yspeed;
    ball.x += xspeed;

    // The || sign means "or"
    if (ball.y >= HEIGHT - ballSize / 2 || ball.y <= ballSize / 2) {
        // Multiplying by -1 will "flip" the direction
        yspeed *= -1;
    }

    if (ball.x >= WIDTH - ballSize / 2 || ball.x <= ballSize / 2) {
        xspeed *= -1;
    }
}
