let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
}

let game = new Phaser.Game(config);
let graphics;
let rect;

function preload(){
    console.log("preload");
}

function create(){
    console.log("create");
    graphics = this.add.graphics( {lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0xaa0000 }});
    rect = new Phaser.Geom.Rectangle(0, 0, 30, 30);

    $.getJSON("pieceConfigurations.json", (data)=>{
        let i = 0;
        for(let key in data){
            printPiece(data[key], 125 * i, 0);
            i++;
        }
    })
}

let printPiece = (piece, offsetX, offsetY) => {
    rects = piece.form;

    for(let pair of rects){
        graphics.fillRectShape(new Phaser.Geom.Rectangle(30 * pair[0] + offsetX, 30 * pair[1] + offsetY, 30, 30));
    }

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            graphics.strokeRectShape(new Phaser.Geom.Rectangle(30 * i + offsetX, 30 * j + offsetY, 30, 30));
        }
    }   
}