import { MeanBeanConfig } from "../game";

export class GamePiece extends Phaser.GameObjects.Graphics {
    constructor(scene: Phaser.Scene, options: GraphicsOptions) {
        super(scene, options);

        this.fillStyle(0xffffff, 1);
        this.fillCircle(
            MeanBeanConfig.tileSize / 2,
            MeanBeanConfig.tileSize / 2,
            MeanBeanConfig.tileSize / 2 - 4
        );

        this.scene.add.existing(this);
    }
}
