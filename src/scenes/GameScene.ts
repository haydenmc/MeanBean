import { GamePiece } from "../objects/GamePiece";

export class GameScene extends Phaser.Scene {
    private activePiece: GamePiece;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    public create(): void {
        this.activePiece = new GamePiece(this, { x: 64, y: 64 });
    }

    public update(): void {
        if (this.activePiece) {
            this.activePiece.update();
        }
    }
}
