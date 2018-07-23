import { GamePiece } from "./GamePiece";
import { MeanBeanConfig } from "../game";

enum FormationEnum {
    Horizontal,        // Secondary to the right of primary
    Vertical,          // Secondary below primary
    HorizontalInvert,  // Secondary to the left of primary
    VerticalInvert     // Secondary above primary
}

export class GamePieceFormation extends Phaser.GameObjects.Container {
    public tileX: number;
    public tileY: number;

    private primaryPiece: GamePiece;
    private secondaryPiece: GamePiece;

    private _formation: FormationEnum;
    private get formation(): FormationEnum {
        return this._formation;
    }
    private set formation(value: FormationEnum) {
        this._formation = value;
        switch (value) {
            case FormationEnum.Horizontal:
                this.primaryPiece.x   = 0  * MeanBeanConfig.tileSize;
                this.primaryPiece.y   = 0  * MeanBeanConfig.tileSize;
                this.secondaryPiece.x = 1  * MeanBeanConfig.tileSize;
                this.secondaryPiece.y = 0  * MeanBeanConfig.tileSize;
                break;
        }
    }

    constructor(
        scene: Phaser.Scene,
        tileX: number,
        tileY: number,
        primaryPiece: GamePiece,
        secondaryPiece: GamePiece,
        formation: FormationEnum = FormationEnum.Horizontal
    ) {
        super(
            scene,
            MeanBeanConfig.tileSize * tileX,
            MeanBeanConfig.tileSize * tileY,
            [ primaryPiece, secondaryPiece ]
        );

        this.tileX = tileX;
        this.tileY = tileY;
        this.primaryPiece = primaryPiece;
        this.secondaryPiece = secondaryPiece;
        this.formation = formation;

        this.scene.add.existing(this);
    }

    public update(): void {
        this.x = this.tileX * MeanBeanConfig.tileSize;
        this.y = this.tileY * MeanBeanConfig.tileSize;
    }
}
