import { GamePiece } from "../objects/GamePiece";
import { GamePieceFormation } from "../objects/GamePieceFormation";
import { MeanBeanConfig } from "../game";

export class GameScene extends Phaser.Scene {
    private activePieceFormation: GamePieceFormation;
    private leftInputKey: Phaser.Input.Keyboard.Key;
    private rightInputKey: Phaser.Input.Keyboard.Key;
    private downInputKey: Phaser.Input.Keyboard.Key;
    private rotateInputKey: Phaser.Input.Keyboard.Key;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    public create(): void {
        this.activePieceFormation = this.generatePieceFormation();
        this.leftInputKey =
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightInputKey =
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.downInputKey =
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.rotateInputKey =
            this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    public update(): void {
        // Check inputs and pass to active game piece formation
        // Left
        if (this.input.keyboard.checkDown(
            this.leftInputKey,
            MeanBeanConfig.movementKeyHeldDownRepeatMs
        )) {
            if (this.activePieceFormation) {
                this.activePieceFormation.tileX--;
            }
        }
        // Right
        if (this.input.keyboard.checkDown(
            this.rightInputKey,
            MeanBeanConfig.movementKeyHeldDownRepeatMs
        )) {
            if (this.activePieceFormation) {
                this.activePieceFormation.tileX++;
            }
        }
        // Down
        if (this.input.keyboard.checkDown(
            this.downInputKey,
            MeanBeanConfig.downKeyHeldDownRepeatMs
        )) {
            if (this.activePieceFormation) {
                this.activePieceFormation.tileY++;
            }
        }
        // Rotate
        if (this.input.keyboard.checkDown(
            this.rotateInputKey,
            MeanBeanConfig.movementKeyHeldDownRepeatMs
        )) {
            if (this.activePieceFormation) {
                this.activePieceFormation.rotateFormation();
            }
        }

        // Update scene objects
        if (this.activePieceFormation) {
            this.activePieceFormation.update();
        }
    }

    private generatePieceFormation(): GamePieceFormation {
        let primaryPiece = new GamePiece(this, { });
        let secondaryPiece = new GamePiece(this, { });
        let pieceFormation =
            new GamePieceFormation(this, 0, 0, primaryPiece, secondaryPiece);
        return pieceFormation;
    }
}
