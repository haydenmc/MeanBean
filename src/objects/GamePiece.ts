export class GamePiece extends Phaser.GameObjects.Graphics {
    constructor(scene: Phaser.Scene, options: GraphicsOptions) {
        super(scene, options);

        this.fillStyle(0xffffff, 1);
        this.fillCircle(0, 0, 16);

        this.scene.add.existing(this);
    }

    public update(): void {
        this.x++;
        this.y++;
    }
}
