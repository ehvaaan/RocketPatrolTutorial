class Menu extends Phaser.Scene { 
    constructor() {
        super("menuScene");
    }
    
    preload() {
    // load audio
    this.load.audio('sfx_select', './assets/blip_select12.wav');
    this.load.audio('sfx_0', './assets/crash1.wav' );
    this.load.audio('sfx_1', './assets/crash2.wav' );
    this.load.audio('sfx_2', './assets/crash3.wav' );
    this.load.audio('sfx_3', './assets/crash4.wav' );
    this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    this.load.image('spaceship', './assets/spaceship.png');
    this.load.audio('background', './assets/synth.wav')
}
    
    

    create() {
    var music = this.sound.add('background');
    music.setLoop(true);
    music.play();
    //this.synth = this.sound.play('background');

    // menu display
    if(window.localStorage) {
        console.log('Local storage supported');
    } else {
        console.log('Local storage not supported');
    }

    let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '26px',
        backgroundColor: '#F3B141',
        color: '#843605',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }
    // menu text 
    let centerX = game.config.width/2;
    let centerY = game.config.height/2;
    let textSpacer = 64;

    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY - textSpacer*2, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#F3B141';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY, 'Use the ← → arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#93C47D';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer, 'Press ← for Easy', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#E06666';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer*2, 'Press → for Hard', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#F3B141';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer*3, 'SPEED INCREASES AFTER 30 SECONDS', menuConfig).setOrigin(0.5);
    
    
    this.icon = this.add.image(69, 54, 'spaceship', menuConfig);
    this.icon = this.add.image(640, 154, 'spaceship', menuConfig);
    this.icon = this.add.image(529, 359, 'spaceship', menuConfig);
    this.icon = this.add.image(640, 154, 'spaceship', menuConfig);

    // debug: move to next scene
    // this.scene.start("playScene");

    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
                
        this.sound.play('sfx_select');
        this.scene.start("playScene");

        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 5, 
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
            
            
        
        

    }
    }
}
