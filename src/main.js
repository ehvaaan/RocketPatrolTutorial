//create game configuration object// 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
};

//create main game object//
let game = new Phaser.Game(config);

//reserve some keyboard
let keyF, keyLEFT, keyRIGHT;




//console.log("Hello whirled!");//