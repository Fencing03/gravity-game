//import scene1 from './game.js'

// configuration jeu phaser //////////////////////////////////////
const config = {
    //constructor (){super('game')}
    width: 1035,
    height: 700,
  

    //"resolution": window.devicePixelRatio,
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

if (this.game.device.desktop){            
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;            
    this.scale.minWidth = gameWidth/2.5;            
    this.scale.minHeight = gameHeight/3;            
    this.scale.maxWidth = gameWidth;            
    this.scale.maxHeight = gameHeight;            
    this.scale.pageAlignHorizontally = true;            
    this.scale.pageAlignVertically = true;            
    this.scale.setScreenSize(true);        }        
    else       
     { this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;            
        this.scale.minWidth = gameWidth/2.5;            
        this.scale.minHeight = gameHeight/3;            
        this.scale.maxWidth = 1035; //You can change this to gameWidth*2.5 if needed
        this.scale.maxHeight = 700; //Make sure these values are proportional to the gameWidth and gameHeight            this.scale.pageAlignHorizontally = true;            this.scale.pageAlignVertically = true;            this.scale.forceOrientation(true, false);            this.scale.hasResized.add(this.gameResized, this);            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);            this.scale.setScreenSize(true);        }
     }
var ow = parseInt(this.game.Phaser.style.width,10);
var oh = parseInt(this.game.Phaser.style.height,10);
var r = Math.max(window.innerWidth/ow,window.innerHeight/oh);
var nw = ow*r;var nh = oh*r;this.game.Phaser.style.width = nw+"px";
this.game.Phaser.style.height= nh+"px";
this.game.Phaser.style.marginLeft = (window.innerWidth/2 - nw/2)+"px"; 
this.game.Phaser.style.marginTop = (window.innerHeight/2 - nh/2)+"px";document.getElementById("game").style.width = window.innerWidth+"px";document.getElementById("game").style.height = window.innerHeight-1+"px";//The css for body includes 1px top margin, I believe this is the cause for this -1document.getElementById("game").style.overflow = "hidden";
