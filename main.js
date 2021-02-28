//import scene1 from './game.js'

// configuration jeu phaser //////////////////////////////////////
const config = {
    //constructor (){super('game')}
    width: 1035,
    height: 870,
    "resolution": window.devicePixelRatio,
    type: Phaser.AUTO,

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
