//import scene1 from './game.js'

// configuration jeu phaser //////////////////////////////////////
const config = {
    //constructor (){super('game')}
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.DOM.FIT ,
        parent: "phaser-game",
        width: window.innerWidth,
        height: window.innerHeight,
      },
    //"resolution": window.devicePixelRatio,
    //type: Phaser.AUTO,

    physics: {
        default: 'arcade',
        arcade: {
            //debug : true,
        }  
    },

    fps: {
       target: 60,
        //forceSetTimeOut: true
    },

    //scene: {preload: preload, create: create, update: update}
    scene: [scene_menu, scene1, scene_demo]
}


var game = new Phaser.Game(config)

