

var start_game = false; launch_rules = false; launch_demo = false


// definition d'une classe pour créer la scene 1
class scene_menu extends Phaser.Scene{
    constructor(){
        super({key : 'scene_menu'})
    }
  

preload() {


//fond ///////////`
this.load.image('fond_space_menu', 'assets/fond_space.png')
this.load.image('fond_menu', 'assets/fond_menu.png') 

// logo du jeu ////////////////////
this.load.image('logo_menu', 'assets/logo.png')
this.load.image('point_i_menu', 'assets/point_i.png')

// boutons menu ////////////////////
this.load.image('button_start', 'assets/button_start.png')
this.load.image('button_rules', 'assets/button_rules.png')
this.load.image('button_demo', 'assets/button_demo.png')

this.load.image('button_start_on', 'assets/button_start_on.png')
this.load.image('button_rules_on', 'assets/button_rules_on.png')
this.load.image('button_demo_on', 'assets/button_demo_on.png')

// fleches gravité devant le menu ////////////////////
this.load.spritesheet('fleche_droite_bleu', 'assets/fleche_bleu_droite.png', {frameWidth: 50, frameHeight: 40});

}



create() {

// réinitialiser les variables /////////////
start_game = false; launch_rules = false; launch_demo = false

// fond autour du plateau //////////
this.fond_space = this.add.image(660, 350, 'fond_space_menu') 
this.fond_space.alpha = 1
this.fond_menu = this.add.image(510, 355, 'fond_menu') 


// logo du jeu ////////////////////
this.logo = this.add.image(508, 170, 'logo_menu') 
this.point_i = this.physics.add.sprite(552, 138, 'point_i_menu') 
this.point_i.setSize(18, 18, false)
this.point_i.body.bounce.setTo(0, 0);
this.point_i.setMass(0.01)

// fleches gravité devant le menu ////////////////////
this.fleche_bleu_1 = this.add.sprite(370, 300, 'fleche_droite_bleu', 0)
this.fleche_bleu_1 = this.add.sprite(370, 400, 'fleche_droite_bleu', 0)
this.fleche_bleu_1 = this.add.sprite(370, 500, 'fleche_droite_bleu', 0)


////////////////////////////////////////////////////
////////// action boutons menu ////////////////////
/////////////////////////////////////////////////

start_game = false; 

var start_on = this.add.image(515, 300, 'button_start_on'); start_on.alpha = 0
var rules_on = this.add.image(515, 400, 'button_rules_on'); rules_on.alpha = 0
var demo_on = this.add.image(515, 500, 'button_demo_on'); demo_on.alpha = 0

this.start = this.add.image(515, 300, 'button_start').setInteractive(); 
this.start.on('pointerover', function () {start_on.alpha = 1});
this.start.on('pointerout', function () {start_on.alpha = 0}); 
this.start.on('pointerdown', function () {    
   start_game = true
});

this.rules = this.add.image(515, 400, 'button_rules').setInteractive(); 
this.rules.on('pointerover', function () {rules_on.alpha = 1});
this.rules.on('pointerout', function () {rules_on.alpha = 0}); 
this.rules.on('pointerdown', function () {    
   launch_rules = true
});

this.demo = this.add.image(515, 500, 'button_demo').setInteractive(); 
this.demo.on('pointerover', function () {demo_on.alpha = 1});
this.demo.on('pointerout', function () {demo_on.alpha = 0}); 
this.demo.on('pointerdown', function () {    
   launch_demo = true
});

start_on = this.add.image(515, 300, 'button_start_on'); start_on.alpha = 0
rules_on = this.add.image(515, 400, 'button_rules_on'); rules_on.alpha = 0
demo_on = this.add.image(515, 500, 'button_demo_on'); demo_on.alpha = 0




}


update() {

// lancement de la partie
if(start_game == true){
    this.scene.start('scene1')
    //this.scene.switch('scene1');
    start_game = false
}

if(launch_rules == true){
    window.open("rules_gravity.pdf")
    launch_rules = false
}

if(launch_demo == true){
    this.scene.switch('scene_demo');
    launch_demo = false
}


}



}