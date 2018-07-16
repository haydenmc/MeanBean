import { GameScene } from "./scenes/GameScene";

const config: GameConfig = {
    title: "MeanBean",
    version: "0.0.1-alpha0",
    width: 600,
    height: 800,
    type: Phaser.AUTO,
    parent: "game",
    input: {
        keyboard: true,
        mouse: false,
        touch: false,
        gamepad: false
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#000000",
    "render.antialias": true,
    "render.pixelArt": false,
    scene: [GameScene]
};

class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.addEventListener("load", () => {
    var game = new Game(config);
});
