
///////////////////////////////////////////////////////////////////
//////////////// definfition variables ///////////////////////////
/////////////////////////////////////////////////////////////////


var pion1
var pion2
var GHaut;
var GBas;
var GGauche;
var GDroite;
var gravity_force = 0
var gravity1_x = 0 ; gravity1_y = 0;
var gravity2_x = 0; gravity2_y = 0;
var gravity_obj_x = 0; gravity_obj_y =0;
var velocity_speed = -60

var test_haut = false; test_haut2 = false; test1 = false; test2 = false; test3 = false; test4 =false; test5 = false;test6 =false; test7= false; test8 =false; 
var test_bas = false; test_bas2 = false; test12 = false; test22 = false; test32 = false; test42 =false; test52 = false;test62 =false; test72= false; test82 =false;
var test_droite = false ; test_droite2= false ; test11 = false; test21 = false; test31 = false; test41 =false; test51 = false;test61 =false; test71= false; test81 =false;
var test_gauche = false; test_gauche2 = false; test13 = false; test23 = false; test33 = false; test43 =false; test53 = false;test63 =false; test73= false; test83 =false;

var test14 = false; test24 = false; test34 = false; test44 =false; test54 = false;test64 =false; test74= false; test84 =false; 
var test15 = false; test25 = false; test35 = false; test45 =false; test55 = false;test65 =false; test75= false; test85 =false; 
var test16 = false; test26 = false; test36 = false; test46 =false; test56 = false;test66 =false; test76= false; test86 =false; 
var test17 = false; test27 = false; test37 = false; test47 =false; test57 = false;test67 =false; test77= false; test87 =false; 


var collision = false; contact1 = false; contact2 = false; 
var coeff = -2; coeff2 = -2; coeff3 = -2; coeff4 = -2; coeff5 = -2;  coeff6 = -2;  coeff7 = -2;  coeff8 = -2
var lim_flux_inf_vert = 0
var lim_flux_sup_vert = 0
var position_flux_vert = 149
var position_fleche_v = 145; position_fleche_h = 162
var position_flux_v = position_fleche_v + 4; position_flux_h = position_fleche_h - 10;
var velocity_x = 0; velocity_y =0;


// var test des pions dans les différent flux
var pion1_influx_bas = false; pion1_influx_haut =false; pion1_influx_droite =false; pion1_influx_gauche = false;
var pion2_influx_bas = false; pion2_influx_haut =false; pion2_influx_droite =false; pion2_influx_gauche = false;
var obj_influx_bas = false; obj_influx_haut =false; obj_influx_droite =false; obj_influx_gauche = false;

var pion1_wasinflux_bas = false; pion1_wasinflux_haut =false; pion1_wasinflux_droite =false; pion1_wasinflux_gauche = false;
var pion2_wasinflux_bas = false; pion2_wasinflux_haut =false; pion2_wasinflux_droite =false; pion2_wasinflux_gauche = false;
var obj_wasinflux_bas = false; obj_wasinflux_haut =false; obj_wasinflux_droite =false; obj_wasinflux_gauche = false;

var pion1_influx_bas2 = false; pion1_influx_haut2 =false; pion1_influx_droite2 =false; pion1_influx_gauche2 = false;
var pion2_influx_bas2 = false; pion2_influx_haut2 =false; pion2_influx_droite2 =false; pion2_influx_gauche2 = false;
var obj_influx_bas2 = false; obj_influx_haut2 =false; obj_influx_droite2 =false; obj_influx_gauche2 = false;

var pion1_wasinflux_bas2 = false; pion1_wasinflux_haut2 =false; pion1_wasinflux_droite2 =false; pion1_wasinflux_gauche2 = false;
var pion2_wasinflux_bas2 = false; pion2_wasinflux_haut2 =false; pion2_wasinflux_droite2 =false; pion2_wasinflux_gauche2 = false;
var obj_wasinflux_bas2 = false; obj_wasinflux_haut2 =false; obj_wasinflux_droite2 =false; obj_wasinflux_gauche2 = false;

var pion1_lastPos_x = 0 ; pion1_lastPos_y = 0 ;pion2_lastPos_x = 0; pion2_lastPos_y = 0; obj_lastPos_x = 0; obj_lastPos_y = 0;
var change_flux_obj_1  = false; change_flux_obj_2 = false; change_flux_pion1_1  = false; change_flux_pion1_2 = false; change_flux_pion2_1  = false; change_flux_pion2_2 = false; 
var val_tour_bleu = true; val_tour_vert = false; 
var tour_bleu = false; tour_vert = false; 
var no_tour = 0; no_tour_was = -1; no_change = -2
var test_up = false; test_down = false; test_right = false; test_left = false

var contact_lim_gauche = false; contact_lim_droite = false; contact_lim_haut = false; contact_lim_bas = false
var debug1 = false; debug2 = false; debug3 = false; debug4 = false; 
var pion1_flux_off = false; pion2_flux_off = false; pion1_flux2_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false


var pion1_x_init = 10000; pion1_y_init = 10000; pion2_x_init = 0; pion2_y_init = 10000; obj_x_init = 10000; obj_y_init = 10000;
var i=1; j= 1
var test_case_obj = false; test_case_pion1 = false; test_case_pion2 = false; 

var victoire_joueur_1 = false; victoire_joueur_2 = false

var mouvement = false
var test_was_right = false; test_was_left = false; test_was_up = false; test_was_down = false; test_demi_tour = false; test_regle = false; test_regle_2 = false; test_regle_2 = false; test_regle_4 = false

var restart_game = false; test_menu = false; test_rules = false ; test_demo = false
var test_fleche_clavier_gauche = false; test_fleche_clavier_droite = false; test_fleche_clavier_haut = false; test_fleche_clavier_bas = false;


// definition d'une classe pour créer la scene 1
class scene1 extends Phaser.Scene{
    constructor(){
        super({key : 'scene1'})
    }
  

preload() {

//fond ///////////`
    this.load.image('background', 'assets/background.png')
    this.load.image('fond_space', 'assets/fond_space.png')
    this.load.image('fond', 'assets/fond_sans_mur.png')
    this.load.image('fond_logo', 'assets/fond_logo.png')
    this.load.image('cadre1', 'assets/cadre1.png')

//logo /////////////
    this.load.image('logo', 'assets/logo.png')
    this.load.image('point_i', 'assets/point_i.png')

//pion //////////
    this.load.image('bleu', 'assets/pion_bleu.png')
    this.load.image('vert', 'assets/pion_vert.png')
    this.load.image('objectif', 'assets/pion_objectif.png')


//mur ///////////
    this.load.image('murh1', 'assets/mur1.png');
    this.load.image('murh2', 'assets/mur1.png');
    this.load.image('murh3', 'assets/mur1.png');
    this.load.image('murh4', 'assets/mur1.png');
    this.load.image('murv1', 'assets/mur2.png');
    this.load.image('murv2', 'assets/mur2.png');
    this.load.image('murv3', 'assets/mur2.png');
    this.load.image('murv4', 'assets/mur2.png');
    this.load.image('murh5', 'assets/mur1.png');
    this.load.image('murh6', 'assets/mur1.png');
    this.load.image('murh7', 'assets/mur1.png');
    this.load.image('murh8', 'assets/mur1.png');
    this.load.image('murh9', 'assets/mur1.png');
    this.load.image('murh10', 'assets/mur1.png');
    this.load.image('murh11', 'assets/mur1.png');
    this.load.image('murh110', 'assets/mur1.png');
    this.load.image('murh12', 'assets/mur1.png');
    this.load.image('murh12', 'assets/mur1.png');
    this.load.image('murh13', 'assets/mur1.png');
    this.load.image('murh14', 'assets/mur1.png');
    this.load.image('murh15', 'assets/mur1.png');
    this.load.image('murh16', 'assets/mur1.png');
    this.load.image('murh17', 'assets/mur1.png');
    this.load.image('murh18', 'assets/mur1.png');
    this.load.image('murh19', 'assets/mur1.png');
    this.load.image('murh20', 'assets/mur1.png');
    this.load.image('murh21', 'assets/mur1.png');
    this.load.image('murv5', 'assets/mur2.png');
    this.load.image('murv6', 'assets/mur2.png');
    this.load.image('murv7', 'assets/mur2.png');
    this.load.image('murv8', 'assets/mur2.png');
    this.load.image('murv9', 'assets/mur2.png');
    this.load.image('murv10', 'assets/mur2.png');
    this.load.image('murv11', 'assets/mur2.png');
    this.load.image('murv12', 'assets/mur2.png');
    this.load.image('murv13', 'assets/mur2.png');
    this.load.image('murv14', 'assets/mur2.png');
    this.load.image('murv15', 'assets/mur2.png');
    this.load.image('murv16', 'assets/mur2.png');
    this.load.image('murv17', 'assets/mur2.png');
    this.load.image('murv18', 'assets/mur2.png');
    this.load.image('murv19', 'assets/mur2.png');
    this.load.image('murv20', 'assets/mur2.png');

//bordure ////////////
    this.load.image('bord1', 'assets/bord1.png');
    this.load.image('bord2', 'assets/bord1.png');
    this.load.image('bord3', 'assets/bord2.png');
    this.load.image('bord4', 'assets/bord2.png');


//flux ///////////
this.load.image('fluxhautvert1', 'assets/flux_vert_haut.png')
this.load.image('fluxdroitevert1', 'assets/flux_vert_droite.png')
this.load.image('fluxbasvert1', 'assets/flux_vert_bas.png')
this.load.image('fluxgauchevert1', 'assets/flux_vert_gauche.png')

this.load.image('fluxhautbleu1', 'assets/flux_bleu_haut.png')
this.load.image('fluxbasbleu1', 'assets/flux_bleu_bas.png')
this.load.image('fluxdroitebleu1', 'assets/flux_bleu_droite.png')
this.load.image('fluxgauchebleu1', 'assets/flux_bleu_gauche.png')


//fleche flux gravity
this.load.spritesheet('fleche_haut_vert1', 'assets/fleche_haut_vert.png', {frameWidth: 40, frameHeight: 50});
this.load.spritesheet('fleche_bas_vert', 'assets/fleche_bas_vert.png', {frameWidth: 40, frameHeight: 50});
this.load.spritesheet('fleche_droite_vert', 'assets/fleche_droite_vert.png', {frameWidth: 50, frameHeight: 40});
this.load.spritesheet('fleche_gauche_vert', 'assets/fleche_gauche_vert.png', {frameWidth: 50, frameHeight: 40});

this.load.spritesheet('fleche_haut_bleu1', 'assets/fleche_bleu_haut.png', {frameWidth: 40, frameHeight: 50});
this.load.spritesheet('fleche_bas_bleu1', 'assets/fleche_bleu_bas.png', {frameWidth: 40, frameHeight: 50});
this.load.spritesheet('fleche_droite_bleu1', 'assets/fleche_bleu_droite.png', {frameWidth: 50, frameHeight: 40});
this.load.spritesheet('fleche_gauche_bleu1', 'assets/fleche_bleu_gauche.png', {frameWidth: 50, frameHeight: 40});

//flèche gravite /////
this.load.image('GravityG', 'assets/fleche_gravite_G.png');
this.load.image('GravityB', 'assets/fleche_gravite_B.png');
this.load.image('GravityD', 'assets/fleche_gravite_D.png');
this.load.image('GravityH', 'assets/fleche_gravite_H.png');

//cases
this.load.image('case1', 'assets/case_bleu.png', {frameWidth: 60, frameHeight: 60});
this.load.image('case2', 'assets/case_vert.png', {frameWidth: 60, frameHeight: 60});
this.load.image('case_obj', 'assets/case_obj.png', {frameWidth: 60, frameHeight: 60});

//flèche clavier /////
this.load.image('fleche_clavier', 'assets/fleche_clavier.png')
this.load.image('fleche_clavier_gauche', 'assets/fleche_clavier_gauche.png')
this.load.image('fleche_clavier_droite', 'assets/fleche_clavier_droite.png')
this.load.image('fleche_clavier_haut', 'assets/fleche_clavier_haut.png')
this.load.image('fleche_clavier_bas', 'assets/fleche_clavier_bas.png')

// resart button
this.load.image('restart', 'assets/restart.png')
this.load.image('restart_logo', 'assets/restart_logo.png')

// boutons menu ////////////////////
this.load.image('button_menu', 'assets/button_menu.png')
this.load.image('button_rules_2', 'assets/button_rules_2.png')
this.load.image('button_demo_2', 'assets/button_demo_2.png')

this.load.image('button_menu_on', 'assets/button_menu_on.png')
this.load.image('button_rules_on_2', 'assets/button_rules_on_2.png')
this.load.image('button_demo_on_2', 'assets/button_demo_on_2.png')

///////////////////////////////////////////////////////////////////
//////////////// remise à 0 des vairables ////////////////////////
/////////////////////////////////////////////////////////////////


gravity1_x = 0 ; gravity1_y = 0;
gravity2_x = 0; gravity2_y = 0;
gravity_obj_x = 0; gravity_obj_y =0;
velocity_speed = -60

test_haut = false; test_haut2 = false; test1 = false; test2 = false; test3 = false; test4 =false; test5 = false;test6 =false; test7= false; test8 =false; 
test_bas = false; test_bas2 = false; test12 = false; test22 = false; test32 = false; test42 =false; test52 = false;test62 =false; test72= false; test82 =false;
test_droite = false ; test_droite2= false ; test11 = false; test21 = false; test31 = false; test41 =false; test51 = false;test61 =false; test71= false; test81 =false;
test_gauche = false; test_gauche2 = false; test13 = false; test23 = false; test33 = false; test43 =false; test53 = false;test63 =false; test73= false; test83 =false;

test14 = false; test24 = false; test34 = false; test44 =false; test54 = false;test64 =false; test74= false; test84 =false; 
test15 = false; test25 = false; test35 = false; test45 =false; test55 = false;test65 =false; test75= false; test85 =false; 
test16 = false; test26 = false; test36 = false; test46 =false; test56 = false;test66 =false; test76= false; test86 =false; 
test17 = false; test27 = false; test37 = false; test47 =false; test57 = false;test67 =false; test77= false; test87 =false; 


collision = false; contact1 = false; contact2 = false; 
coeff = -2; coeff2 = -2; coeff3 = -2; coeff4 = -2; coeff5 = -2;  coeff6 = -2;  coeff7 = -2;  coeff8 = -2
lim_flux_inf_vert = 0; lim_flux_sup_vert = 0;
position_flux_vert = 149
position_fleche_v = 145; position_fleche_h = 162
position_flux_v = position_fleche_v + 4; position_flux_h = position_fleche_h - 10;
velocity_x = 0; velocity_y =0;


// var test des pions dans les différent flux
pion1_influx_bas = false; pion1_influx_haut =false; pion1_influx_droite =false; pion1_influx_gauche = false;
pion2_influx_bas = false; pion2_influx_haut =false; pion2_influx_droite =false; pion2_influx_gauche = false;
obj_influx_bas = false; obj_influx_haut =false; obj_influx_droite =false; obj_influx_gauche = false;

pion1_wasinflux_bas = false; pion1_wasinflux_haut =false; pion1_wasinflux_droite =false; pion1_wasinflux_gauche = false;
pion2_wasinflux_bas = false; pion2_wasinflux_haut =false; pion2_wasinflux_droite =false; pion2_wasinflux_gauche = false;
obj_wasinflux_bas = false; obj_wasinflux_haut =false; obj_wasinflux_droite =false; obj_wasinflux_gauche = false;

pion1_influx_bas2 = false; pion1_influx_haut2 =false; pion1_influx_droite2 =false; pion1_influx_gauche2 = false;
pion2_influx_bas2 = false; pion2_influx_haut2 =false; pion2_influx_droite2 =false; pion2_influx_gauche2 = false;
obj_influx_bas2 = false; obj_influx_haut2 =false; obj_influx_droite2 =false; obj_influx_gauche2 = false;

pion1_wasinflux_bas2 = false; pion1_wasinflux_haut2 =false; pion1_wasinflux_droite2 =false; pion1_wasinflux_gauche2 = false;
pion2_wasinflux_bas2 = false; pion2_wasinflux_haut2 =false; pion2_wasinflux_droite2 =false; pion2_wasinflux_gauche2 = false;
obj_wasinflux_bas2 = false; obj_wasinflux_haut2 =false; obj_wasinflux_droite2 =false; obj_wasinflux_gauche2 = false;

pion1_lastPos_x = 0 ; pion1_lastPos_y = 0 ;pion2_lastPos_x = 0; pion2_lastPos_y = 0; obj_lastPos_x = 0; obj_lastPos_y = 0;
change_flux_obj_1  = false; change_flux_obj_2 = false; change_flux_pion1_1  = false; change_flux_pion1_2 = false; change_flux_pion2_1  = false; change_flux_pion2_2 = false; 
val_tour_bleu = true; val_tour_vert = false; 
tour_bleu = false; tour_vert = false; 
no_tour = 0;
test_up = false; test_down = false; test_right = false; test_left = false

contact_lim_gauche = false; contact_lim_droite = false; contact_lim_haut = false; contact_lim_bas = false
debug1 = false; debug2 = false; debug3 = false; debug4 = false; 
pion1_flux_off = false; pion2_flux_off = false; pion1_flux2_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false


pion1_x_init = 11000; pion1_y_init = 12000; pion2_x_init = 0; pion2_y_init = 13000; obj_x_init = 10000; obj_y_init = 10000;
i=1; j= 1
test_case_obj = false; test_case_pion1 = false; test_case_pion2 = false; 

victoire_joueur_1 = false; victoire_joueur_2 = false

mouvement = false
test_was_right = false; test_was_left = false; test_was_up = false; test_was_down = false; test_demi_tour = false; test_regle = false; test_regle_2 = false; test_regle_2 = false; test_regle_4 = false
restart_game  = false; test_menu = false; test_rules = false ; test_demo = false
test_fleche_clavier_gauche = false; test_fleche_clavier_droite = false;test_fleche_clavier_haut = false;test_fleche_clavier_bas = false;


}
    



create() {
   
    
    //this.scene.start(scene1)

    this.physics.TILE_BIAS = 20; //regle des soucis de contacts peut-etre ??

    // fond autour du plateau //////////
    this.add.image(500, 500, 'background') 
    this.fond_space = this.add.image(660, 350, 'fond_space') 
    this.fond_space.alpha = 0.9
    this.fond_logo = this.add.image(850, 355, 'fond_logo') 
    this.cadre1 = this.add.image(850, 350, 'cadre1') 

    // image plateau de jeu ////////////
    this.fond = this.add.image(375, 375, 'fond') 

    // logo du jeu ////////////////////
    this.logo = this.add.image(848, 70, 'logo') 
    this.point_i = this.physics.add.sprite(892, 38, 'point_i') 
    this.point_i.setSize(18, 18, false)
    this.point_i.body.bounce.setTo(0, 0);
    this.point_i.setMass(0.01)

    // image fleche clavier ////////////////////
    this.fleche_clavier = this.add.image(850, 350, 'fleche_clavier') 
    this.fleche_clavier.alpha = 0

    this.fleche_clavier_gauche = this.add.image(802, 370, 'fleche_clavier_gauche').setInteractive();
    this.fleche_clavier_gauche.on('pointerdown', function () {test_fleche_clavier_gauche = true});
    this.fleche_clavier_gauche.alpha = 0

    this.fleche_clavier_droite = this.add.image(900, 368, 'fleche_clavier_droite').setInteractive();
    this.fleche_clavier_droite.on('pointerdown', function () {test_fleche_clavier_droite = true});
    this.fleche_clavier_droite.alpha = 0

    this.fleche_clavier_haut = this.add.image(852, 328, 'fleche_clavier_haut').setInteractive();
    this.fleche_clavier_haut.on('pointerdown', function () {test_fleche_clavier_haut = true});
    this.fleche_clavier_haut.alpha = 0

    this.fleche_clavier_bas = this.add.image(852, 370, 'fleche_clavier_bas').setInteractive();
    this.fleche_clavier_bas.on('pointerdown', function () {test_fleche_clavier_bas = true});
    this.fleche_clavier_bas.alpha = 0




    this.GravityG = this.add.image(850, 350, 'GravityG')
    this.GravityG.alpha = 0;
    this.GravityB = this.add.image(850, 350, 'GravityB')
    this.GravityB.alpha = 0;
    this.GravityD = this.add.image(850, 350, 'GravityD')
    this.GravityD.alpha = 0;
    this.GravityH = this.add.image(850, 350, 'GravityH')
    this.GravityH.alpha = 0;


////////////////////////////////////////////////////
///////////// boutons menu ///////////////////////
/////////////////////////////////////////////////

var menu_on = this.add.image(754, 655, 'button_menu_on'); menu_on.alpha = 0
var rules_on = this.add.image(851, 655, 'button_rules_on_2'); rules_on.alpha = 0
var demo_on = this.add.image(946, 655, 'button_demo_on_2'); demo_on.alpha = 0

this.menu = this.add.image(754, 655, 'button_menu').setInteractive(); 
this.menu.on('pointerover', function () {menu_on.alpha = 1});
this.menu.on('pointerout', function () {menu_on.alpha = 0}); 
this.menu.on('pointerdown', function () {    
   test_menu = true
});

this.rules = this.add.image(851, 655, 'button_rules_2').setInteractive(); 
this.rules.on('pointerover', function () {rules_on.alpha = 1});
this.rules.on('pointerout', function () {rules_on.alpha = 0}); 
this.rules.on('pointerdown', function () {    
   test_rules = true
});

this.demo = this.add.image(946, 655, 'button_demo_2').setInteractive(); 
this.demo.on('pointerover', function () {demo_on.alpha = 1});
this.demo.on('pointerout', function () {demo_on.alpha = 0}); 
this.demo.on('pointerdown', function () {    
   test_demo = true
});

menu_on = this.add.image(754, 655, 'button_menu_on'); menu_on.alpha = 0
rules_on = this.add.image(851, 655, 'button_rules_on_2'); rules_on.alpha = 0
demo_on = this.add.image(946, 655, 'button_demo_on_2'); demo_on.alpha = 0



//////////////////////////////////////////////////////////////////////////
///////////////// creation des textes intialisation /////////////////////
///////////////////////////////////////////////////////////////////////


////////////// texte pour mettre le sens de gravité ///////////////////////////////////
this.text_sens_gravite1 = this.add.text(740, 180, " joueur bleu : ", {
    font: "19px Arial",
    fill: "#5FBAE8",
    align: "center" 
})

this.text_sens_gravite2 = this.add.text(740, 205, " choisir le sens de gravité \n du plateau à l'aide \n des flèches du clavier", {
    font: "19px Arial",
    fill: "#FFFFFF",
        //align: "center" 
})
// pour ne pas l'afficher tout de suite
this.text_sens_gravite1.setVisible(false)
this.text_sens_gravite2.setVisible(false)


////////////// texte pour mettre placer le pion objectif ///////////////////////////////////
this.text_pos_obj1 = this.add.text(740, 180, " joueur vert : ", {
    font: "19px Arial",
    fill: "#44C673",
    align: "center" 
})
this.text_pos_obj2 = this.add.text(740, 205, " cliquer sur une case \n pour placer le pion objectif", {
    font: "19px Arial",
    fill: "#FFFFFF",
})
this.text_pos_obj1.setVisible(false)
this.text_pos_obj2.setVisible(false)



////////////// texte pour mettre placer le pion vert ///////////////////////////////////
this.text_pos_pion1_1 = this.add.text(740, 180, " joueur bleu : ", {
    font: "19px Arial",
    fill: "#5FBAE8",
    align: "center" 
})
this.text_pos_pion1_2 = this.add.text(740, 205, " cliquer sur une case \n pour placer le pion vert", {
    font: "19px Arial",
    fill: "#FFFFFF",
})
this.text_pos_pion1_1.setVisible(false)
this.text_pos_pion1_2.setVisible(false)


////////////// texte pour mettre placer le pion bleu ///////////////////////////////////
this.text_pos_pion2_1 = this.add.text(750, 180, " joueur vert : ", {
    font: "19px Arial",
    fill: "#44C673",
    align: "center" 
})
this.text_pos_pion2_2 = this.add.text(750, 205, " cliquer sur une case \n pour placer le pion bleu", {
    font: "19px Arial",
    fill: "#FFFFFF",
})
this.text_pos_pion2_1.setVisible(false)
this.text_pos_pion2_2.setVisible(false)


////////////// texte pour tour du bleu et vert ///////////////////////////////////
this.text_joueur_bleu = this.add.text(750, 180, " tour du joueur bleu ", {
    font: "20px Arial",
    fill: "#5FBAE8",
    align: "center" 
})
this.text_joueur_vert = this.add.text(750, 180, " tour du joueur vert ", {
    font: "20px Arial",
    fill: "#44C673",
    align: "center" 
})
this.text_joueur_bleu.setVisible(false)
this.text_joueur_vert.setVisible(false)

////////////// tour de jeu numéro 1 et 2 ///////////////////////////////////
this.text_consigne_1 = this.add.text(710, 440, " Actions : \n - changer le sens de gravité globale \n à l'aide des flèches du clavier \n \n - placer son flux de gravité individuel \n sur une ligne en cliquant sur les flèches \n apparaissant sur le bord du plateau", {
    font: "16px Arial",
    fill: "#FFFFFF",
    //align: "center" 
})
this.text_consigne_1.setVisible(false)


//////////////////////////////////////////////////////////////////////////
///////////////// creation des textes règles ///////////////////////////
//////////////////////////////////////////////////////////////////////

////////////// texte règle 1 ///////////////////////////////////
this.text_regle_1 = this.add.text(710, 440, " Règle 1 : \n Il n’est pas possible de modifier la \n gravité globale en la remettant dans le \n même sens que lors du tour précédent \n si la direction du tour précédant était \n dans le sens opposé. Autrement dit, \n les pions ne peuvent pas retourner \n dans l’état du tour précédent.", {
    font: "16px Arial",
    fill: "#FFFFFF",
    align: "center" 
})
this.text_regle_1.setVisible(false)

////////////// texte règle 2 ///////////////////////////////////
this.text_regle_2 = this.add.text(730, 440, " Règle 2 : \n On ne peut pas poser un flux \n individuel sur une ligne qui en \n possède déjà un. ", {
    font: "16px Arial",
    fill: "#FFFFFF",
    align: "center" 
})
this.text_regle_2.setVisible(false)

////////////// texte règle 4 ///////////////////////////////////
this.text_regle_4 = this.add.text(730, 440, " Règle 4 : \n Deux pions personnages ne \n peuvent pas se retrouver sur la \n même case.", {
    font: "16px Arial",
    fill: "#FFFFFF",
    align: "center" 
})
this.text_regle_4.setVisible(false)





////////////// sens gravité ///////////////////////////////////
var sens_gravite = this.add.text(790, 400, "sens gravité globale", {
    font: "14px Arial",
    fill: "#FFFFFF",
    align: "center" 
})
sens_gravite.setVisible(true)



////////////////////////////////////////////////////////////////////////////
//////////////////// texte message victoire //////////////////////////////
////////////////////////////////////////////////////////////////////////

this.text_vict_bleu = this.add.text(740, 180, " victoire du joueur bleu ! ", {
    font: "23px Comic Sans",
    fill: "#5FBAE8",
    align: "center"
});
this.text_vict_bleu.setShadow(2, 2, 'rgba(0,0,0,1)', 3);
this.text_vict_bleu.setVisible(false)

this.text_vict_vert = this.add.text(740, 180, " victoire du joueur vert ! ", {
    font: "23px Comic Sans",
    fill: "#44C673",
    align: "center" 
});
this.text_vict_vert.setShadow(2, 2, 'rgba(0,0,0,1)', 3);
this.text_vict_vert.setVisible(false)




//////////////////////////////////////////////////////////////////
/////////////// création image flux de gravité /////////////////
//////////////////////////////////////////////////////////////

////////////////////// flux de gravité bleu /////////////////////////////////////////////
this.fluxhaut_bleu1= this.add.image(position_flux_v, 375, 'fluxhautbleu1')
this.fluxhaut_bleu1.alpha = 0; 
this.fluxhaut_bleu2= this.add.image((position_flux_v + 1*64), 375, 'fluxhautbleu1')
this.fluxhaut_bleu2.alpha = 0; 
this.fluxhaut_bleu3= this.add.image((position_flux_v + 2*64), 375, 'fluxhautbleu1')
this.fluxhaut_bleu3.alpha = 0; 
this.fluxhaut_bleu4= this.add.image((position_flux_v + 3*64), 375, 'fluxhautbleu1')
this.fluxhaut_bleu4.alpha = 0; 
this.fluxhaut_bleu5= this.add.image((position_flux_v + 4*64), 375, 'fluxhautbleu1')
this.fluxhaut_bleu5.alpha = 0; 
this.fluxhaut_bleu6= this.add.image((position_flux_v + 5*64), 375, 'fluxhautbleu1')
this.fluxhaut_bleu6.alpha = 0; 
this.fluxhaut_bleu7= this.add.image((position_flux_v + 6*64), 375, 'fluxhautbleu1')
this.fluxhaut_bleu7.alpha = 0; 
this.fluxhaut_bleu8= this.add.image((position_flux_v + 7*64), 375, 'fluxhautbleu1')
this.fluxhaut_bleu8.alpha = 0; 

this.fluxbas_bleu1= this.add.image(position_flux_v, 375, 'fluxbasbleu1')
this.fluxbas_bleu1.alpha = 0; 
this.fluxbas_bleu2= this.add.image((position_flux_v + 1*64), 375, 'fluxbasbleu1')
this.fluxbas_bleu2.alpha = 0; 
this.fluxbas_bleu3= this.add.image((position_flux_v + 2*64), 375, 'fluxbasbleu1')
this.fluxbas_bleu3.alpha = 0; 
this.fluxbas_bleu4= this.add.image((position_flux_v + 3*64), 375, 'fluxbasbleu1')
this.fluxbas_bleu4.alpha = 0; 
this.fluxbas_bleu5= this.add.image((position_flux_v + 4*64), 375, 'fluxbasbleu1')
this.fluxbas_bleu5.alpha = 0; 
this.fluxbas_bleu6= this.add.image((position_flux_v + 5*64), 375, 'fluxbasbleu1')
this.fluxbas_bleu6.alpha = 0; 
this.fluxbas_bleu7= this.add.image((position_flux_v + 6*64), 375, 'fluxbasbleu1')
this.fluxbas_bleu7.alpha = 0; 
this.fluxbas_bleu8= this.add.image((position_flux_v + 7*64), 375, 'fluxbasbleu1')
this.fluxbas_bleu8.alpha = 0; 

this.fluxdroite_bleu1= this.add.image(372, position_flux_h, 'fluxdroitebleu1')
this.fluxdroite_bleu1.alpha = 0; 
this.fluxdroite_bleu2= this.add.image(372, position_flux_h + 1*64, 'fluxdroitebleu1')
this.fluxdroite_bleu2.alpha = 0; 
this.fluxdroite_bleu3= this.add.image(372, position_flux_h + 2*64, 'fluxdroitebleu1')
this.fluxdroite_bleu3.alpha = 0; 
this.fluxdroite_bleu4= this.add.image(372, position_flux_h + 3*64, 'fluxdroitebleu1')
this.fluxdroite_bleu4.alpha = 0; 
this.fluxdroite_bleu5= this.add.image(372, position_flux_h + 4*64, 'fluxdroitebleu1')
this.fluxdroite_bleu5.alpha = 0; 
this.fluxdroite_bleu6= this.add.image(372, position_flux_h + 5*64, 'fluxdroitebleu1')
this.fluxdroite_bleu6.alpha = 0; 
this.fluxdroite_bleu7= this.add.image(372, position_flux_h + 6*64, 'fluxdroitebleu1')
this.fluxdroite_bleu7.alpha = 0; 
this.fluxdroite_bleu8= this.add.image(372, position_flux_h + 7*64, 'fluxdroitebleu1')
this.fluxdroite_bleu8.alpha = 0; 

this.fluxgauche_bleu1= this.add.image(372, position_flux_h, 'fluxgauchebleu1')
this.fluxgauche_bleu1.alpha = 0; 
this.fluxgauche_bleu2= this.add.image(372, position_flux_h + 1*64, 'fluxgauchebleu1')
this.fluxgauche_bleu2.alpha = 0; 
this.fluxgauche_bleu3= this.add.image(372, position_flux_h + 2*64, 'fluxgauchebleu1')
this.fluxgauche_bleu3.alpha = 0; 
this.fluxgauche_bleu4= this.add.image(372, position_flux_h + 3*64, 'fluxgauchebleu1')
this.fluxgauche_bleu4.alpha = 0; 
this.fluxgauche_bleu5= this.add.image(372, position_flux_h + 4*64, 'fluxgauchebleu1')
this.fluxgauche_bleu5.alpha = 0; 
this.fluxgauche_bleu6= this.add.image(372, position_flux_h + 5*64, 'fluxgauchebleu1')
this.fluxgauche_bleu6.alpha = 0; 
this.fluxgauche_bleu7= this.add.image(372, position_flux_h + 6*64, 'fluxgauchebleu1')
this.fluxgauche_bleu7.alpha = 0; 
this.fluxgauche_bleu8= this.add.image(372, position_flux_h + 7*64, 'fluxgauchebleu1')
this.fluxgauche_bleu8.alpha = 0; 

////////////////////// flux de gravité bleu /////////////////////////////////////////////
    this.fluxhaut_vert1= this.add.image(position_flux_v, 375, 'fluxhautvert1')
    this.fluxhaut_vert1.alpha = 0; 
    this.fluxhaut_vert2= this.add.image((position_flux_v + 1*64), 375, 'fluxhautvert1')
    this.fluxhaut_vert2.alpha = 0; 
    this.fluxhaut_vert3= this.add.image((position_flux_v + 2*64), 375, 'fluxhautvert1')
    this.fluxhaut_vert3.alpha = 0; 
    this.fluxhaut_vert4= this.add.image((position_flux_v + 3*64), 375, 'fluxhautvert1')
    this.fluxhaut_vert4.alpha = 0; 
    this.fluxhaut_vert5= this.add.image((position_flux_v + 4*64), 375, 'fluxhautvert1')
    this.fluxhaut_vert5.alpha = 0; 
    this.fluxhaut_vert6= this.add.image((position_flux_v + 5*64), 375, 'fluxhautvert1')
    this.fluxhaut_vert6.alpha = 0; 
    this.fluxhaut_vert7= this.add.image((position_flux_v + 6*64), 375, 'fluxhautvert1')
    this.fluxhaut_vert7.alpha = 0; 
    this.fluxhaut_vert8= this.add.image((position_flux_v + 7*64), 375, 'fluxhautvert1')
    this.fluxhaut_vert8.alpha = 0; 

    this.fluxbas_vert1= this.add.image(position_flux_v, 375, 'fluxbasvert1')
    this.fluxbas_vert1.alpha = 0; 
    this.fluxbas_vert2= this.add.image((position_flux_v + 1*64), 375, 'fluxbasvert1')
    this.fluxbas_vert2.alpha = 0; 
    this.fluxbas_vert3= this.add.image((position_flux_v + 2*64), 375, 'fluxbasvert1')
    this.fluxbas_vert3.alpha = 0; 
    this.fluxbas_vert4= this.add.image((position_flux_v + 3*64), 375, 'fluxbasvert1')
    this.fluxbas_vert4.alpha = 0; 
    this.fluxbas_vert5= this.add.image((position_flux_v + 4*64), 375, 'fluxbasvert1')
    this.fluxbas_vert5.alpha = 0; 
    this.fluxbas_vert6= this.add.image((position_flux_v + 5*64), 375, 'fluxbasvert1')
    this.fluxbas_vert6.alpha = 0; 
    this.fluxbas_vert7= this.add.image((position_flux_v + 6*64), 375, 'fluxbasvert1')
    this.fluxbas_vert7.alpha = 0; 
    this.fluxbas_vert8= this.add.image((position_flux_v + 7*64), 375, 'fluxbasvert1')
    this.fluxbas_vert8.alpha = 0; 


    this.fluxdroite_vert1= this.add.image(372, position_flux_h, 'fluxdroitevert1')
    this.fluxdroite_vert1.alpha = 0; 
    this.fluxdroite_vert2= this.add.image(372, position_flux_h + 1*64, 'fluxdroitevert1')
    this.fluxdroite_vert2.alpha = 0; 
    this.fluxdroite_vert3= this.add.image(372, position_flux_h + 2*64, 'fluxdroitevert1')
    this.fluxdroite_vert3.alpha = 0; 
    this.fluxdroite_vert4= this.add.image(372, position_flux_h + 3*64, 'fluxdroitevert1')
    this.fluxdroite_vert4.alpha = 0; 
    this.fluxdroite_vert5= this.add.image(372, position_flux_h + 4*64, 'fluxdroitevert1')
    this.fluxdroite_vert5.alpha = 0; 
    this.fluxdroite_vert6= this.add.image(372, position_flux_h + 5*64, 'fluxdroitevert1')
    this.fluxdroite_vert6.alpha = 0; 
    this.fluxdroite_vert7= this.add.image(372, position_flux_h + 6*64, 'fluxdroitevert1')
    this.fluxdroite_vert7.alpha = 0; 
    this.fluxdroite_vert8= this.add.image(372, position_flux_h + 7*64, 'fluxdroitevert1')
    this.fluxdroite_vert8.alpha = 0; 

    this.fluxgauche_vert1= this.add.image(372, position_flux_h, 'fluxgauchevert1')
    this.fluxgauche_vert1.alpha = 0; 
    this.fluxgauche_vert2= this.add.image(372, position_flux_h + 1*64, 'fluxgauchevert1')
    this.fluxgauche_vert2.alpha = 0; 
    this.fluxgauche_vert3= this.add.image(372, position_flux_h + 2*64, 'fluxgauchevert1')
    this.fluxgauche_vert3.alpha = 0; 
    this.fluxgauche_vert4= this.add.image(372, position_flux_h + 3*64, 'fluxgauchevert1')
    this.fluxgauche_vert4.alpha = 0; 
    this.fluxgauche_vert5= this.add.image(372, position_flux_h + 4*64, 'fluxgauchevert1')
    this.fluxgauche_vert5.alpha = 0; 
    this.fluxgauche_vert6= this.add.image(372, position_flux_h + 5*64, 'fluxgauchevert1')
    this.fluxgauche_vert6.alpha = 0; 
    this.fluxgauche_vert7= this.add.image(372, position_flux_h + 6*64, 'fluxgauchevert1')
    this.fluxgauche_vert7.alpha = 0; 
    this.fluxgauche_vert8= this.add.image(372, position_flux_h + 7*64, 'fluxgauchevert1')
    this.fluxgauche_vert8.alpha = 0; 



/////////////////////////////////////////////////////////////////
////////////// création des murs + propriétés phys /////////////
//////////////////////////////////////////////////////////////

    //mur logo //////////////////
    this.mur_logo_1 = this.physics.add.sprite(861, 40, 'murv1');
    this.mur_logo_1.body.immovable = true
    this.mur_logo_1.alpha = 0

    this.mur_logo_2 = this.physics.add.sprite(958, 40, 'murv1');
    this.mur_logo_2.body.immovable = true
    this.mur_logo_2.alpha = 0


    //mur horizontal//////////////////
    this.murh1 = this.physics.add.sprite(215, 119, 'murh1');
    this.murh1.body.immovable = true
    //this.murh1.alpha = 1; 
    this.murh1.fricion = 0;
    this.murh1.body.setSize(50, 0, 8, 0)

    this.murh2 = this.physics.add.sprite(280, 119, 'murh2');
    this.murh2.body.immovable = true
    //this.murh2.alpha = 1; 
    this.murh2.fricion = 0;
    this.murh2.body.setSize(50, 0, 8, 0)

    this.murh3 = this.physics.add.sprite(405, 119, 'murh3');
    this.murh3.body.immovable = true
    //this.murh3.alpha = 0; 
    this.murh3.fricion = 0;
    this.murh3.body.setSize(50, 0, 8, 0)

    this.murh4 = this.physics.add.sprite(470, 183, 'murh4');
    this.murh4.body.immovable = true
    //this.murh4.alpha = 0; 
    this.murh4.fricion = 0;
    this.murh4.body.setSize(50, 0, 8, 0)

    this.murh5 = this.physics.add.sprite(150, 248, 'murh5');
    this.murh5.body.immovable = true
    //this.murh5.alpha = 1;
    this.murh5.fricion = 0;
    this.murh5.body.bounce.setTo(0, 0);
    this.murh5.body.setSize(50, 0, 8, 0)

    this.murh6 = this.physics.add.sprite(535, 248, 'murh6');
    this.murh6.body.immovable = true
    //this.murh6.alpha = 0; 
    this.murh6.fricion = 0;
    this.murh6.body.setSize(50, 0, 8, 0)

    this.murh7 = this.physics.add.sprite(280, 313, 'murh7');
    this.murh7.body.immovable = true
   // this.murh7.alpha = 0; 
    this.murh7.fricion = 0;
    this.murh7.body.setSize(50, 0, 8, 0)

    this.murh8 = this.physics.add.sprite(344, 313, 'murh8');
    this.murh8.body.immovable = true
    //this.murh8.alpha = 0; 
    this.murh8.body.setSize(50, 0, 8, 0)

    this.murh9 = this.physics.add.sprite(408, 313, 'murh9');
    this.murh9.body.immovable = true
    //this.murh9.alpha = 0; 
    this.murh9.body.setSize(50, 0, 8, 0)

    this.murh10 = this.physics.add.sprite(150, 375, 'murh10');
    this.murh10.body.immovable = true
    //this.murh10.alpha = 0; 
    this.murh10.body.setSize(50, 0, 8, 0)

    this.murh11 = this.physics.add.sprite(215, 375, 'murh11');
    this.murh11.body.immovable = true
    //this.murh11.alpha = 0; 
    this.murh11.body.setSize(50, 0, 8, 0)

    this.murh110 = this.physics.add.sprite(598, 375, 'murh110');
    this.murh110.body.immovable = true
    //this.murh110.alpha = 0; 
    this.murh110.body.setSize(50, 0, 8, 0)

    this.murh12 = this.physics.add.sprite(342, 439, 'murh12');
    this.murh12.body.immovable = true
    //this.murh12.alpha = 0; 
    this.murh12.body.setSize(50, 0, 8, 0)

    this.murh13 = this.physics.add.sprite(278, 502, 'murh13');
    this.murh13.body.immovable = true
    //this.murh13.alpha = 0; 
    this.murh13.body.setSize(50, 0, 8, 0)

    this.murh14 = this.physics.add.sprite(343, 502, 'murh14');
    this.murh14.body.immovable = true
    //this.murh14.alpha = 0; 
    this.murh14.body.setSize(50, 0, 8, 0)

    this.murh15 = this.physics.add.sprite(471, 502, 'murh15');
    this.murh15.body.immovable = true
    //this.murh15.alpha = 0; 
    this.murh15.body.setSize(50, 0, 8, 0)

    this.murh16 = this.physics.add.sprite(150, 567, 'murh16');
    this.murh16.body.immovable = true
    //this.murh16.alpha = 0; 
    this.murh16.body.setSize(50, 0, 8, 0)

    this.murh17 = this.physics.add.sprite(533, 567, 'murh17');
    this.murh17.body.immovable = true
    //this.murh17.alpha = 0; 
    this.murh17.body.setSize(50, 0, 8, 0)

    this.murh18 = this.physics.add.sprite(598, 567, 'murh18');
    this.murh18.body.immovable = true
   // this.murh18.alpha = 0; 
    this.murh18.body.setSize(50, 0, 8, 0)

    this.murh19 = this.physics.add.sprite(213, 630, 'murh19');
    this.murh19.body.immovable = true
    //this.murh19.alpha = 0; 
    this.murh19.body.setSize(50, 0, 8, 0)

    this.murh20 = this.physics.add.sprite(278, 630, 'murh20');
    this.murh20.body.immovable = true
    //this.murh20.alpha = 0; 
    this.murh20.body.setSize(50, 0, 8, 0)

    this.murh21 = this.physics.add.sprite(408, 630, 'murh21');
    this.murh21.body.immovable = true
    //this.murh21.alpha = 0;
    this.murh21.body.setSize(50, 0, 8, 0)

    
    // mur vertical /////////////////////
    this.murv1= this.physics.add.sprite(116, 153, 'murv1');
    this.murv1.body.immovable = true
    //this.murv1.alpha = 0; 
    this.murv1.body.setSize(0, 50, 8, 0)

    this.murv2= this.physics.add.sprite(245, 153, 'murv2');
    this.murv2.body.immovable = true
    //this.murv2.alpha = 0; 
    this.murv2.body.setSize(0, 50, 8, 0)

    this.murv3= this.physics.add.sprite(630, 153, 'murv3');
    this.murv3.body.immovable = true
    //this.murv3.alpha = 0; 
    this.murv3.body.setSize(0, 50, 8, 0)

    this.murv4= this.physics.add.sprite(245, 218, 'murv4');
    this.murv4.body.immovable = true
    //this.murv4.alpha = 0; 
    this.murv4.body.setSize(0, 50, 8, 0)

    this.murv5= this.physics.add.sprite(503, 218, 'murv5');
    this.murv5.body.immovable = true
    //this.murv5.alpha = 0; 
    this.murv5.body.setSize(0, 50, 8, 0)

    this.murv6= this.physics.add.sprite(373, 281, 'murv6');
    this.murv6.body.immovable = true
    //this.murv6.alpha = 0; 
    this.murv6.body.setSize(0, 50, 8, 0)

    this.murv7= this.physics.add.sprite(565, 281, 'murv7');
    this.murv7.body.immovable = true
    //this.murv7.alpha = 0; 
    this.murv7.body.setSize(0, 50, 8, 0)

    this.murv8= this.physics.add.sprite(373, 345, 'murv8');
    this.murv8.body.immovable = true
    //this.murv8.body.static = true;
    //this.murv8.alpha = 0;
    this.murv8.body.setSize(0, 50, 8, 0)

    this.murv9= this.physics.add.sprite(245, 345, 'murv9');
    this.murv9.body.immovable = true
    //this.murv9.body.static = true;
    //this.murv9.alpha = 0;
    this.murv9.body.setSize(0, 50, 8, 0)

    this.murv10= this.physics.add.sprite(310, 407, 'murv10');
    this.murv10.body.immovable = true
    //this.murv10.alpha = 0;
    this.murv10.body.setSize(0, 50, 8, 0)

    this.murv11= this.physics.add.sprite(503, 407, 'murv11');
    this.murv11.body.immovable = true
    //this.murv11.alpha = 0;
    this.murv11.body.setSize(0, 50, 8, 0)

    this.murv12= this.physics.add.sprite(181, 470, 'murv12');
    this.murv12.body.immovable = true
   //this.murv12.alpha = 0;
    this.murv12.body.setSize(0, 50, 8, 0)

    this.murv13= this.physics.add.sprite(503, 470, 'murv13');
    this.murv13.body.immovable = true
   // this.murv13.alpha = 0;
    this.murv13.body.setSize(0, 50, 8, 0)

    this.murv14= this.physics.add.sprite(181, 535, 'murv14');
    this.murv14.body.immovable = true
    //this.murv14.alpha = 0;
    this.murv14.body.setSize(0, 50, 8, 0)

    this.murv15= this.physics.add.sprite(503, 535, 'murv15');
    this.murv15.body.immovable = true
    //this.murv15.alpha = 0;
    this.murv15.body.setSize(0, 50, 8, 0)

    this.murv16= this.physics.add.sprite(373, 535, 'murv16');
    this.murv16.body.immovable = true
    //this.murv16.alpha = 0;
    this.murv16.body.setSize(0, 50, 8, 0)

    this.murv17= this.physics.add.sprite(373, 600, 'murv17');
    this.murv17.body.immovable = true
    //this.murv17.alpha = 0;
    this.murv17.body.setSize(0, 50, 8, 0)

    this.murv18= this.physics.add.sprite(565, 600, 'murv18');
    this.murv18.body.immovable = true
    //this.murv18.alpha = 0;
    this.murv18.body.setSize(0, 50, 8, 0)


    //this.events.on('start', function(){
       // this.pion3 = this.physics.add.sprite(100, 223, 'bleu')

    //});
    //this.start();

////////////////////////////////////////////////////////////////////////
////////////// creation des pions + propriétés physiques /////////////
/////////////////////////////////////////////////////////////////////

//this.pion1 = this.physics.add.sprite(pion1_x_init ,pion1_y_init , 'bleu')
this.pion1 = this.physics.add.sprite(pion1_x_init, pion1_y_init, 'bleu')
//this.pion1.body.setCircle(30, 0, -7)
this.pion1.setOffset(-1 , -8)
this.pion1.setSize(61, 61, false)
this.pion1.body.bounce.setTo(0, 0);
this.pion1.frictionX = 0 ;
this.pion1.frictionY = 0 ;
this.pion1.body.static = true;
this.pion1.setMass(0.01)
//this.pion1.body.allowGravity = true; 
//this.pion1.body.setSize(55, 55, 5, 70) --> problem avec set.size, carré pas centré..

//this.pion2 = this.physics.add.sprite(598, 160, 'vert')
this.pion2 = this.physics.add.sprite(pion2_x_init, pion2_y_init, 'vert')
//this.pion2.body.setCircle(30, 0, -7)
this.pion2.setOffset(-1 , -8)
this.pion2.setSize(61, 61, false)
this.pion2.body.bounce.setTo(0, 0);
this.pion2.frictionX = 0 ;
this.pion2.frictionY = 0 ;
this.pion2.body.static = true;
this.pion2.setMass(0.01)
//this.pion2.allowGravity = true; 
//this.pion2.body.setSize(55, 55, (5, -50));

this.obj = this.physics.add.sprite(obj_x_init, obj_y_init, 'objectif')
//this.obj.body.setCircle(30, -7.5, -8.5)
this.obj.setOffset(-8 , -8)
this.obj.setSize(61, 61, false)
this.obj.body.bounce.setTo(0, 0);
this.obj.frictionX = 0 ;
this.obj.frictionY = 0 ;

//this.pion1.body.setMaxSpeed(100)
//this.pion2.body.setMaxSpeed(100)
//this.obj.body.setMaxSpeed(100)

//////////////////////////////////////////////////////////////////
////////////////////////// groupes /////////////////////////////
//////////////////////////////////////////////////////////////

// création groupe murs horizontaux /////////////////
this.MurGrouph = this.add.group();
this.MurGrouph.add(this.murh1);
this.MurGrouph.add(this.murh2);
this.MurGrouph.add(this.murh3);
this.MurGrouph.add(this.murh4);
this.MurGrouph.add(this.murh5);
this.MurGrouph.add(this.murh6);
this.MurGrouph.add(this.murh7);
this.MurGrouph.add(this.murh8);
this.MurGrouph.add(this.murh9);
this.MurGrouph.add(this.murh10);
this.MurGrouph.add(this.murh11);
this.MurGrouph.add(this.murh110);
this.MurGrouph.add(this.murh12);
this.MurGrouph.add(this.murh13);
this.MurGrouph.add(this.murh14);
this.MurGrouph.add(this.murh15);
this.MurGrouph.add(this.murh16);
this.MurGrouph.add(this.murh17);
this.MurGrouph.add(this.murh18);
this.MurGrouph.add(this.murh19);
this.MurGrouph.add(this.murh20);
this.MurGrouph.add(this.murh21);

// création groupe murs verticaux /////////////////
this.MurGroupv = this.add.group();
this.MurGroupv.add(this.murv1);
this.MurGroupv.add(this.murv2);
this.MurGroupv.add(this.murv3);
this.MurGroupv.add(this.murv4);
this.MurGroupv.add(this.murv5);
this.MurGroupv.add(this.murv6);
this.MurGroupv.add(this.murv7);
this.MurGroupv.add(this.murv8);
this.MurGroupv.add(this.murv9);
this.MurGroupv.add(this.murv10);
this.MurGroupv.add(this.murv11);
this.MurGroupv.add(this.murv12);
this.MurGroupv.add(this.murv13);
this.MurGroupv.add(this.murv14);
this.MurGroupv.add(this.murv15);
this.MurGroupv.add(this.murv16);
this.MurGroupv.add(this.murv17);
this.MurGroupv.add(this.murv18);
//this.MurGroupv.add(this.murv19);

// création groupe bords ////////////////////
//this.BordGroup = this.add.group();
//this.BordGroup.add(this.bord1);
//this.BordGroup.add(this.bord2);
//this.BordGroup.add(this.bord3);
//this.BordGroup.add(this.bord4);   


//////////////////////////////////////////////////////////////////
/////////////////// commandes clavier gravitee /////////////////
//////////////////////////////////////////////////////////////

GHaut = this.input.keyboard.addKey('up');
GBas = this.input.keyboard.addKey('down');
GGauche = this.input.keyboard.addKey('left');
GDroite = this.input.keyboard.addKey('right');


//////////////////////////////////////////////////////////////////
/////// commandes bouton souris flux de gravité ////////////////
//////////////////////////////////////////////////////////////


//////////////////////// fleches haut bleu ///////////////////////////////////////////////////////////
var flux_button41 = this.add.sprite(position_fleche_v, 680, 'fleche_haut_bleu1', 0).setInteractive();  
flux_button41.alpha = 0.001;

var flux_button42 = this.add.sprite(position_fleche_v + 64, 680, 'fleche_haut_bleu1', 0).setInteractive();  
flux_button42.alpha = 0.001;

var flux_button43 = this.add.sprite(position_fleche_v + 2*64, 680, 'fleche_haut_bleu1', 0).setInteractive();  
flux_button43.alpha = 0.001;

var flux_button44 = this.add.sprite(position_fleche_v + 3*64, 680, 'fleche_haut_bleu1', 0).setInteractive();  
flux_button44.alpha = 0.001;

var flux_button45 = this.add.sprite(position_fleche_v + 4*64, 680, 'fleche_haut_bleu1', 0).setInteractive();  
flux_button45.alpha = 0.001;

var flux_button46 = this.add.sprite(position_fleche_v + 5*64, 680, 'fleche_haut_bleu1', 0).setInteractive();  
flux_button46.alpha = 0.001;

var flux_button47 = this.add.sprite(position_fleche_v + 6*64, 680, 'fleche_haut_bleu1', 0).setInteractive();  
flux_button47.alpha = 0.001;

var flux_button48 = this.add.sprite(position_fleche_v + 7*64, 680, 'fleche_haut_bleu1', 0).setInteractive();  
flux_button48.alpha = 0.001;

//////////////////////// fleches bas bleu ///////////////////////////////////////////////////////////
var flux_button49 = this.add.sprite(position_fleche_v, 80, 'fleche_bas_bleu1', 0).setInteractive();  
flux_button49.alpha = 0.001;

var flux_button50 = this.add.sprite(position_fleche_v + 1*64, 80, 'fleche_bas_bleu1', 0).setInteractive();  
flux_button50.alpha = 0.001;

var flux_button51 = this.add.sprite(position_fleche_v + 2*64, 80, 'fleche_bas_bleu1', 0).setInteractive();  
flux_button51.alpha = 0.001;

var flux_button52 = this.add.sprite(position_fleche_v + 3*64, 80, 'fleche_bas_bleu1', 0).setInteractive();  
flux_button52.alpha = 0.001;

var flux_button53 = this.add.sprite(position_fleche_v + 4*64, 80, 'fleche_bas_bleu1', 0).setInteractive();  
flux_button53.alpha = 0.001;

var flux_button54 = this.add.sprite(position_fleche_v + 5*64, 80, 'fleche_bas_bleu1', 0).setInteractive();  
flux_button54.alpha = 0.001;

var flux_button55 = this.add.sprite(position_fleche_v + 6*64, 80, 'fleche_bas_bleu1', 0).setInteractive();  
flux_button55.alpha = 0.001;

var flux_button56 = this.add.sprite(position_fleche_v + 7*64, 80, 'fleche_bas_bleu1', 0).setInteractive();  
flux_button56.alpha = 0.001;

//////////////////////// fleches droite bleu ///////////////////////////////////////////////////////////
var flux_button57 = this.add.image(60, position_fleche_h + 0*64, 'fleche_droite_bleu1', 0).setInteractive();  
flux_button57.alpha = 0.001;

var flux_button58 = this.add.sprite(60, position_fleche_h + 1*64, 'fleche_droite_bleu1', 0).setInteractive();  
flux_button58.alpha = 0.001;

var flux_button59 = this.add.sprite(60 ,position_fleche_h + 2*64, 'fleche_droite_bleu1', 0).setInteractive();  
flux_button59.alpha = 0.001;

var flux_button60 = this.add.sprite(60 ,position_fleche_h + 3*64, 'fleche_droite_bleu1', 0).setInteractive();  
flux_button60.alpha = 0.001;

var flux_button61 = this.add.sprite(60, position_fleche_h + 4*64, 'fleche_droite_bleu1', 0).setInteractive();  
flux_button61.alpha = 0.001;

var flux_button62 = this.add.sprite(60, position_fleche_h + 5*64, 'fleche_droite_bleu1', 0).setInteractive();  
flux_button62.alpha = 0.001;

var flux_button63 = this.add.sprite(60, position_fleche_h + 6*64, 'fleche_droite_bleu1', 0).setInteractive();  
flux_button63.alpha = 0.001;

var flux_button64 = this.add.sprite(60, position_fleche_h + 7*64, 'fleche_droite_bleu1', 0).setInteractive();  
flux_button64.alpha = 0.001;

//////////////////////// fleches gauche bleu ///////////////////////////////////////////////////////////
var flux_button65 = this.add.sprite(670, position_fleche_h + 0*64, 'fleche_gauche_bleu1', 0).setInteractive();  
flux_button65.alpha = 0.001;

var flux_button66 = this.add.sprite(670,position_fleche_h + 1*64, 'fleche_gauche_bleu1', 0).setInteractive();  
flux_button66.alpha = 0.001;

var flux_button67 = this.add.sprite(670, position_fleche_h + 2*64, 'fleche_gauche_bleu1', 0).setInteractive();  
flux_button67.alpha = 0.001;

var flux_button68 = this.add.sprite(670, position_fleche_h + 3*64, 'fleche_gauche_bleu1', 0).setInteractive();  
flux_button68.alpha = 0.001;

var flux_button69 = this.add.sprite(670, position_fleche_h + 4*64, 'fleche_gauche_bleu1', 0).setInteractive();  
flux_button69.alpha = 0.001;

var flux_button70 = this.add.sprite(670, position_fleche_h + 5*64, 'fleche_gauche_bleu1', 0).setInteractive();  
flux_button70.alpha = 0.001;

var flux_button71 = this.add.sprite(670, position_fleche_h + 6*64, 'fleche_gauche_bleu1', 0).setInteractive();  
flux_button71.alpha = 0.001;

var flux_button72 = this.add.sprite(670, position_fleche_h + 7*64, 'fleche_gauche_bleu1', 0).setInteractive();  
flux_button72.alpha = 0.001;

////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// fleches haut vert + bleu ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// bouton 1 et 41 ///////////////////////////////////////////////////
var flux_button1 = this.add.sprite(position_fleche_v + 0*64, 680, 'fleche_haut_vert1', 0).setInteractive(); flux_button1.alpha = 0.001;
flux_button1.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button1.alpha = 1; flux_button41.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button41.alpha = 1 ;flux_button1.alpha = 0.001}}); 
flux_button1.on('pointerout', function () {if(test1 == true){flux_button1.alpha = 1; flux_button41.alpha = 0.001 } 
                                           else if(test14 == true){flux_button41.alpha = 1 ;flux_button1.alpha = 0.001 } 
                                           else{flux_button1.alpha = 0.001; flux_button41.alpha = 0.001};});  
flux_button1.on('pointerdown', function () 
{if((test1 == true || test14 == true || (test12 == true && tour_bleu == true) || (test15 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 1; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = true;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = false;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 1; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = true;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});


//////////////////////////// bouton 2 et 42 ///////////////////////////////////////////////////
var flux_button2 = this.add.sprite(position_fleche_v + 64, 680, 'fleche_haut_vert1', 0).setInteractive();flux_button2.alpha = 0.001;
flux_button2.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button2.alpha = 1; flux_button42.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button42.alpha = 1 ;flux_button2.alpha = 0.001}}); 
flux_button2.on('pointerout', function () {if(test2 == true){flux_button2.alpha = 1; flux_button42.alpha = 0.001 } 
                                           else if(test24 == true){flux_button42.alpha = 1 ;flux_button2.alpha = 0.001 } 
                                           else{flux_button2.alpha = 0.001; flux_button42.alpha = 0.001};});  
flux_button2.on('pointerdown', function () 
{if((test2 == true || test24 == true || (test22 == true && tour_bleu == true) || (test25 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 1;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test2 = true;test1 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = false;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ;   pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 1; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test24 = true;test14 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});


//////////////////////////// bouton 3 et 43 ///////////////////////////////////////////////////
var flux_button3 = this.add.sprite(position_fleche_v + 2*64, 680, 'fleche_haut_vert1', 0).setInteractive();flux_button3.alpha = 0.001;
flux_button3.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button3.alpha = 1; flux_button43.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button43.alpha = 1 ;flux_button3.alpha = 0.001}}); 
flux_button3.on('pointerout', function () {if(test3 == true){flux_button3.alpha = 1; flux_button43.alpha = 0.001 } 
                                           else if(test34 == true){flux_button43.alpha = 1 ;flux_button3.alpha = 0.001 } 
                                           else{flux_button3.alpha = 0.001; flux_button43.alpha = 0.001};});  
flux_button3.on('pointerdown', function () 
{if((test3 == true || test34 == true || (test32 == true && tour_bleu == true) || (test35 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button3.alpha = 1; flux_button2.alpha = 0.001;flux_button1.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test3 = true;test2 = false;test1 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = false;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button43.alpha = 1; flux_button42.alpha = 0.001; flux_button41.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test34 = true;test24 = false;test14 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});


//////////////////////////// bouton 4 et 44 ///////////////////////////////////////////////////
var flux_button4 = this.add.sprite(position_fleche_v + 3*64, 680, 'fleche_haut_vert1', 0).setInteractive();flux_button4.alpha = 0.001;
flux_button4.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button4.alpha = 1; flux_button44.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button44.alpha = 1 ;flux_button4.alpha = 0.001}}); 
flux_button4.on('pointerout', function () {if(test4 == true){flux_button4.alpha = 1; flux_button44.alpha = 0.001 } 
                                           else if(test44 == true){flux_button44.alpha = 1 ;flux_button4.alpha = 0.001 } 
                                           else{flux_button44.alpha = 0.001; flux_button4.alpha = 0.001};});  
flux_button4.on('pointerdown', function () 
{if((test4 == true || test44 == true || (test42 == true && tour_bleu == true) || (test45 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button4.alpha = 1; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button1.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test4 = true;test2 = false;test3 = false;test1 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = false;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button44.alpha = 1; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button41.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test44 = true;test24 = false;test14 = false;test34 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});

//////////////////////////// bouton 5 et 45 ///////////////////////////////////////////////////
var flux_button5 = this.add.sprite(position_fleche_v + 4*64, 680, 'fleche_haut_vert1', 0).setInteractive();flux_button5.alpha = 0.001;
flux_button5.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button5.alpha = 1; flux_button45.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button45.alpha = 1 ;flux_button5.alpha = 0.001}}); 
flux_button5.on('pointerout', function () {if(test5 == true){flux_button5.alpha = 1; flux_button45.alpha = 0.001 } 
                                           else if(test54 == true){flux_button45.alpha = 1 ;flux_button5.alpha = 0.001 } 
                                           else{flux_button45.alpha = 0.001; flux_button5.alpha = 0.001};});  
flux_button5.on('pointerdown', function () 
{if((test5 == true || test54 == true || (test52 == true && tour_bleu == true) || (test55 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button5.alpha = 1; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button1.alpha = 0.001;flux_button4.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test5 = true;test2 = false;test3 = false;test1 = false;test4 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = false;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button45.alpha = 1; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button41.alpha = 0.001; flux_button44.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test54 = true;test24 = false;test14 = false;test34 = false;test44 = false;test64 = false;test74 = false;test84 = false;
    test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});


//////////////////////////// bouton 6 et 46 ///////////////////////////////////////////////////
var flux_button6 = this.add.sprite(position_fleche_v + 5*64, 680, 'fleche_haut_vert1', 0).setInteractive();flux_button6.alpha = 0.001;
flux_button6.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button6.alpha = 1; flux_button46.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button46.alpha = 1 ;flux_button6.alpha = 0.001}}); 
flux_button6.on('pointerout', function () {if(test6 == true){flux_button6.alpha = 1; flux_button46.alpha = 0.001 } 
                                           else if(test64 == true){flux_button46.alpha = 1 ;flux_button6.alpha = 0.001 } 
                                           else{flux_button46.alpha = 0.001; flux_button6.alpha = 0.001};});  
flux_button6.on('pointerdown', function () 
{if((test6 == true || test64 == true || (test62 == true && tour_bleu == true) || (test65 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button6.alpha = 1; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button1.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test6 = true;test2 = false;test3 = false;test1 = false;test4 = false;test5 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = false;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button46.alpha = 1; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button41.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test64 = true;test24 = false;test14 = false;test34 = false;test44 = false;test54 = false;test74 = false;test84 = false;
    test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});


//////////////////////////// bouton 7 et 47 ///////////////////////////////////////////////////
var flux_button7 = this.add.sprite(position_fleche_v + 6*64, 680, 'fleche_haut_vert1', 0).setInteractive();flux_button7.alpha = 0.001;
flux_button7.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button7.alpha = 1; flux_button47.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button47.alpha = 1 ;flux_button7.alpha = 0.001}}); 
flux_button7.on('pointerout', function () {if(test7 == true){flux_button7.alpha = 1; flux_button47.alpha = 0.001 } 
                                           else if(test74 == true){flux_button47.alpha = 1 ;flux_button7.alpha = 0.001 } 
                                           else{flux_button47.alpha = 0.001; flux_button7.alpha = 0.001};});  
flux_button7.on('pointerdown', function () 
{if((test7 == true || test74 == true || (test72 == true && tour_bleu == true) || (test75 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button7.alpha = 1; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button1.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test7 = true;test2 = false;test3 = false;test1 = false;test4 = false;test5 = false;test6 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = false;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button47.alpha = 1; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button41.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test74 = true;test24 = false;test14 = false;test34 = false;test44 = false;test54 = false;test64 = false;test84 = false;
    test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});


//////////////////////////// bouton 8 et 48 ///////////////////////////////////////////////////
var flux_button8 = this.add.sprite(position_fleche_v + 7*64, 680, 'fleche_haut_vert1', 0).setInteractive();flux_button8.alpha = 0.001;
flux_button8.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button8.alpha = 1; flux_button48.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button48.alpha = 1 ;flux_button8.alpha = 0.001}}); 
flux_button8.on('pointerout', function () {if(test8 == true){flux_button8.alpha = 1; flux_button48.alpha = 0.001 } 
                                           else if(test84 == true){flux_button48.alpha = 1 ;flux_button8.alpha = 0.001 } 
                                           else{flux_button48.alpha = 0.001; flux_button8.alpha = 0.001};});  
flux_button8.on('pointerdown', function () 
{if((test8 == true || test84 == true || (test82 == true && tour_bleu == true) || (test85 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button8.alpha = 1; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button1.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;
    flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test8 = true;test2 = false;test3 = false;test1 = false;test4 = false;test5 = false;test6 = false;test7 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = false;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button48.alpha = 1; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button41.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button49.alpha = 0.001; 
    flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test84 = true;test24 = false;test14 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;
    test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});



////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// fleches bas vert + bleu ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////// bouton 9 et 49 ///////////////////////////////////////////////////
var flux_button9 = this.add.sprite(position_fleche_v, 80, 'fleche_bas_vert', 0).setInteractive();flux_button9.alpha = 0.001;
flux_button9.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button9.alpha = 1; flux_button49.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button49.alpha = 1 ;flux_button9.alpha = 0.001}}); 
flux_button9.on('pointerout', function () {if(test12 == true){flux_button9.alpha = 1; flux_button49.alpha = 0.001 } 
                                           else if(test15 == true){flux_button49.alpha = 1 ;flux_button9.alpha = 0.001 } 
                                           else{flux_button9.alpha = 0.001; flux_button49.alpha = 0.001};});  
flux_button9.on('pointerdown', function () 
{if(((test1 == true && tour_bleu == true) || (test14 == true && tour_vert == true) || test12 == true || test15 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button9.alpha = 1;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test12 = true;test22 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button49.alpha = 1; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test15 = true;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 10 et 50 ///////////////////////////////////////////////////
var flux_button10 = this.add.sprite(position_fleche_v + 64, 80, 'fleche_bas_vert', 0).setInteractive(); flux_button10.alpha = 0.001;
flux_button10.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button10.alpha = 1; flux_button50.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button50.alpha = 1 ;flux_button10.alpha = 0.001}}); 
flux_button10.on('pointerout', function () {if(test22 == true){flux_button10.alpha = 1; flux_button50.alpha = 0.001 } 
                                           else if(test25 == true){flux_button50.alpha = 1 ;flux_button10.alpha = 0.001 } 
                                           else{flux_button10.alpha = 0.001; flux_button50.alpha = 0.001};});  
flux_button10.on('pointerdown', function () 
{if(((test2 == true && tour_bleu == true) || (test24 == true && tour_vert == true) || test22 == true || test25 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button10.alpha = 1;flux_button9.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test22 = true;test12 = false;test32 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button50.alpha = 1; flux_button49.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test25 = true;test15 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 11 et 51 ///////////////////////////////////////////////////
var flux_button11 = this.add.sprite(position_fleche_v + 2*64, 80, 'fleche_bas_vert', 0).setInteractive();flux_button11.alpha = 0.001;
flux_button11.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button11.alpha = 1; flux_button51.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button51.alpha = 1 ;flux_button11.alpha = 0.001}}); 
flux_button11.on('pointerout', function () {if(test32 == true){flux_button11.alpha = 1; flux_button51.alpha = 0.001 } 
                                           else if(test35 == true){flux_button51.alpha = 1 ;flux_button11.alpha = 0.001 } 
                                           else{flux_button11.alpha = 0.001; flux_button51.alpha = 0.001};});  
flux_button11.on('pointerdown', function () 
{if(((test3 == true && tour_bleu == true) || (test34 == true && tour_vert == true) || test32 == true || test35 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button11.alpha = 1;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test32 = true;test12 = false;test22 =false;test42 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button51.alpha = 1; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test35 = true;test15 = false;test25 = false;test45 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});

//////////////////////////// bouton 12 et 52 ///////////////////////////////////////////////////
var flux_button12 = this.add.sprite(position_fleche_v + 3*64, 80, 'fleche_bas_vert', 0).setInteractive();flux_button12.alpha = 0.001;
flux_button12.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button12.alpha = 1; flux_button52.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button52.alpha = 1 ;flux_button12.alpha = 0.001}}); 
flux_button12.on('pointerout', function () {if(test42 == true){flux_button12.alpha = 1; flux_button52.alpha = 0.001 } 
                                           else if(test45 == true){flux_button52.alpha = 1 ;flux_button12.alpha = 0.001 } 
                                           else{flux_button12.alpha = 0.001; flux_button52.alpha = 0.001};});  
flux_button12.on('pointerdown', function () 
{if(((test4 == true && tour_bleu == true) || (test44 == true && tour_vert == true) || test42 == true || test45 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button12.alpha = 1;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test42 = true;test12 = false;test22 =false;test32 = false;test52 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button52.alpha = 1; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test45 = true;test15 = false;test25 = false;test35 = false;test55 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 13 et 53 ///////////////////////////////////////////////////
var flux_button13 = this.add.sprite(position_fleche_v + 4*64, 80, 'fleche_bas_vert', 0).setInteractive(); flux_button13.alpha = 0.001;
flux_button13.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button13.alpha = 1; flux_button53.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button53.alpha = 1 ;flux_button13.alpha = 0.001}}); 
flux_button13.on('pointerout', function () {if(test52 == true){flux_button13.alpha = 1; flux_button53.alpha = 0.001 } 
                                           else if(test55 == true){flux_button53.alpha = 1 ;flux_button13.alpha = 0.001 } 
                                           else{flux_button13.alpha = 0.001; flux_button53.alpha = 0.001};});  
flux_button13.on('pointerdown', function () 
{if(((test5 == true && tour_bleu == true) || (test54 == true && tour_vert == true) || test52 == true || test55 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button13.alpha = 1;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test52 = true;test12 = false;test22 =false;test32 = false;test42 = false;test62 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button53.alpha = 1; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test55 = true;test15 = false;test25 = false;test35 = false;test45 = false;test65 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 14 et 54 ///////////////////////////////////////////////////
var flux_button14 = this.add.sprite(position_fleche_v + 5*64, 80, 'fleche_bas_vert', 0).setInteractive();flux_button14.alpha = 0.001;
flux_button14.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button14.alpha = 1; flux_button54.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button54.alpha = 1 ;flux_button14.alpha = 0.001}}); 
flux_button14.on('pointerout', function () {if(test62 == true){flux_button14.alpha = 1; flux_button54.alpha = 0.001 } 
                                           else if(test65 == true){flux_button54.alpha = 1 ;flux_button14.alpha = 0.001 } 
                                           else{flux_button14.alpha = 0.001; flux_button54.alpha = 0.001};});  
flux_button14.on('pointerdown', function () 
{if(((test6 == true && tour_bleu == true) || (test64 == true && tour_vert == true) || test62 == true || test65 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button14.alpha = 1;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button15.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test62 = true;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test72 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button54.alpha = 1; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button55.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test65 = true;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test75 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 15 et 55 ///////////////////////////////////////////////////
var flux_button15 = this.add.sprite(position_fleche_v + 6*64, 80, 'fleche_bas_vert', 0).setInteractive();flux_button15.alpha = 0.001;
flux_button15.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button15.alpha = 1; flux_button55.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button55.alpha = 1 ;flux_button15.alpha = 0.001}}); 
flux_button15.on('pointerout', function () {if(test72 == true){flux_button15.alpha = 1; flux_button55.alpha = 0.001 } 
                                           else if(test75 == true){flux_button55.alpha = 1 ;flux_button15.alpha = 0.001 } 
                                           else{flux_button15.alpha = 0.001; flux_button55.alpha = 0.001};});  
flux_button15.on('pointerdown', function () 
{if(((test7 == true && tour_bleu == true) || (test74 == true && tour_vert == true) || test72 == true || test75 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button15.alpha = 1;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button16.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test72 = true;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test82 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button55.alpha = 1; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button56.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test75 = true;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test85 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});

//////////////////////////// bouton 16 et 56 ///////////////////////////////////////////////////
var flux_button16 = this.add.sprite(position_fleche_v + 7*64, 80, 'fleche_bas_vert', 0).setInteractive();flux_button16.alpha = 0.001;
flux_button16.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button16.alpha = 1; flux_button56.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button56.alpha = 1 ;flux_button16.alpha = 0.001}}); 
flux_button16.on('pointerout', function () {if(test82 == true){flux_button16.alpha = 1; flux_button56.alpha = 0.001 } 
                                           else if(test85 == true){flux_button56.alpha = 1 ;flux_button16.alpha = 0.001 } 
                                           else{flux_button16.alpha = 0.001; flux_button56.alpha = 0.001};});  
flux_button16.on('pointerdown', function () 
{if(((test8 == true && tour_bleu == true) || (test84 == true && tour_vert == true) || test82 == true || test85 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 1;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test82 = true;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 1; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = true;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test16 = false;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});


////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// fleches droite vert + bleu ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// bouton 17 et 57 ///////////////////////////////////////////////////
var flux_button17 = this.add.sprite(60, position_fleche_h, 'fleche_droite_vert', 0).setInteractive(); flux_button17.alpha = 0.001;
flux_button17.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button17.alpha = 1; flux_button57.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button57.alpha = 1 ;flux_button17.alpha = 0.001}}); 
flux_button17.on('pointerout', function () {if(test11 == true){flux_button17.alpha = 1; flux_button57.alpha = 0.001 } 
                                           else if(test16 == true){flux_button57.alpha = 1 ;flux_button17.alpha = 0.001 } 
                                           else{flux_button17.alpha = 0.001; flux_button57.alpha = 0.001};});  
flux_button17.on('pointerdown', function () 
{if((test11 == true || test16 == true || (test13 == true && tour_bleu == true) || (test17 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button17.alpha = 1;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test11 = true;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button57.alpha = 1; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test16 = true;test26 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 18 et 58 ///////////////////////////////////////////////////
var flux_button18 = this.add.sprite(60, position_fleche_h + 64, 'fleche_droite_vert', 0).setInteractive();flux_button18.alpha = 0.001;
flux_button18.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button18.alpha = 1; flux_button58.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button58.alpha = 1 ;flux_button18.alpha = 0.001}}); 
flux_button18.on('pointerout', function () {if(test21 == true){flux_button18.alpha = 1; flux_button58.alpha = 0.001 } 
                                           else if(test26 == true){flux_button58.alpha = 1 ;flux_button18.alpha = 0.001 } 
                                           else{flux_button18.alpha = 0.001; flux_button58.alpha = 0.001};});  
flux_button18.on('pointerdown', function () 
{if((test21 == true || test26 == true || (test23 == true && tour_bleu == true) || (test27 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button18.alpha = 1;flux_button17.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test21 = true;test11 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button58.alpha = 1; flux_button57.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test26 = true;test16 = false;test36 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 19 et 59 ///////////////////////////////////////////////////
var flux_button19 = this.add.sprite(60, position_fleche_h + 2*64, 'fleche_droite_vert', 0).setInteractive();flux_button19.alpha = 0.001;
flux_button19.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button19.alpha = 1; flux_button59.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button59.alpha = 1 ;flux_button19.alpha = 0.001}}); 
flux_button19.on('pointerout', function () {if(test31 == true){flux_button19.alpha = 1; flux_button59.alpha = 0.001 } 
                                           else if(test36 == true){flux_button59.alpha = 1 ;flux_button19.alpha = 0.001 } 
                                           else{flux_button19.alpha = 0.001; flux_button59.alpha = 0.001};});  
flux_button19.on('pointerdown', function () 
{if((test31 == true || test36 == true || (test33 == true && tour_bleu == true) || (test37 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button19.alpha = 1;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test31 = true;test11 = false;test21 = false;test41 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button59.alpha = 1; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test36 = true;test16 = false;test26 =false;test46 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});


//////////////////////////// bouton 20 et 60 ///////////////////////////////////////////////////
var flux_button20 = this.add.sprite(60, position_fleche_h + 3*64, 'fleche_droite_vert', 0).setInteractive();flux_button20.alpha = 0.001; 
flux_button20.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button20.alpha = 1; flux_button60.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button60.alpha = 1 ;flux_button20.alpha = 0.001}}); 
flux_button20.on('pointerout', function () {if(test41 == true){flux_button20.alpha = 1; flux_button60.alpha = 0.001 } 
                                           else if(test46 == true){flux_button60.alpha = 1 ;flux_button20.alpha = 0.001 } 
                                           else{flux_button20.alpha = 0.001; flux_button60.alpha = 0.001};});  
flux_button20.on('pointerdown', function () 
{if((test41 == true || test46 == true || (test43 == true && tour_bleu == true) || (test47 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button20.alpha = 1;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test41 = true;test11 = false;test21 = false;test31 = false;test51 = false;test61 = false;test71 = false;test81 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button60.alpha = 1; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test46 = true;test16 = false;test26 =false;test36 = false;test56 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});


//////////////////////////// bouton 21 et 61 ///////////////////////////////////////////////////
var flux_button21 = this.add.sprite(60, position_fleche_h + 4*64, 'fleche_droite_vert', 0).setInteractive();flux_button21.alpha = 0.001; 
flux_button21.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button21.alpha = 1; flux_button61.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button61.alpha = 1 ;flux_button21.alpha = 0.001}}); 
flux_button21.on('pointerout', function () {if(test51 == true){flux_button21.alpha = 1; flux_button61.alpha = 0.001 } 
                                           else if(test56 == true){flux_button61.alpha = 1 ;flux_button21.alpha = 0.001 } 
                                           else{flux_button21.alpha = 0.001; flux_button61.alpha = 0.001};});  
flux_button21.on('pointerdown', function () 
{if((test51 == true || test56 == true || (test53 == true && tour_bleu == true) || (test57 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button21.alpha = 1;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test51 = true;test11 = false;test21 = false;test31 = false;test41 = false;test61 = false;test71 = false;test81 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button61.alpha = 1; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test56 = true;test16 = false;test26 =false;test36 = false;test46 = false;test66 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});


//////////////////////////// bouton 22 et 62 ///////////////////////////////////////////////////
var flux_button22 = this.add.sprite(60, position_fleche_h + 5*64, 'fleche_droite_vert', 0).setInteractive();flux_button22.alpha = 0.001; 
flux_button22.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button22.alpha = 1; flux_button62.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button62.alpha = 1 ;flux_button22.alpha = 0.001}}); 
flux_button22.on('pointerout', function () {if(test61 == true){flux_button22.alpha = 1; flux_button62.alpha = 0.001 } 
                                           else if(test66 == true){flux_button62.alpha = 1 ;flux_button22.alpha = 0.001 } 
                                           else{flux_button22.alpha = 0.001; flux_button62.alpha = 0.001};});  
flux_button22.on('pointerdown', function () 
{if((test61 == true || test66 == true || (test63 == true && tour_bleu == true) || (test67 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button22.alpha = 1;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button23.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test61 = true;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test71 = false;test81 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button61.alpha = 1; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test66 = true;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test76 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});


//////////////////////////// bouton 23 et 63 ///////////////////////////////////////////////////
var flux_button23 = this.add.sprite(60, position_fleche_h + 6*64, 'fleche_droite_vert', 0).setInteractive();flux_button23.alpha = 0.001; 
flux_button23.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button23.alpha = 1; flux_button63.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button63.alpha = 1 ;flux_button23.alpha = 0.001}}); 
flux_button23.on('pointerout', function () {if(test71 == true){flux_button23.alpha = 1; flux_button63.alpha = 0.001 } 
                                           else if(test76 == true){flux_button63.alpha = 1 ;flux_button23.alpha = 0.001 } 
                                           else{flux_button23.alpha = 0.001; flux_button63.alpha = 0.001};});  
flux_button23.on('pointerdown', function () 
{if((test71 == true || test76 == true || (test73 == true && tour_bleu == true) || (test77 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button23.alpha = 1;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button24.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test71 = true;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test81 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button63.alpha = 1; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button64.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test76 = true;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test86 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});


//////////////////////////// bouton 24 et 64 ///////////////////////////////////////////////////
var flux_button24 = this.add.sprite(60, position_fleche_h + 7*64, 'fleche_droite_vert', 0).setInteractive();flux_button24.alpha = 0.001; 
flux_button24.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button24.alpha = 1; flux_button64.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button64.alpha = 1 ;flux_button24.alpha = 0.001}}); 
flux_button24.on('pointerout', function () {if(test81 == true){flux_button24.alpha = 1; flux_button64.alpha = 0.001 } 
                                           else if(test86 == true){flux_button64.alpha = 1 ;flux_button24.alpha = 0.001 } 
                                           else{flux_button24.alpha = 0.001; flux_button64.alpha = 0.001};});  
flux_button24.on('pointerdown', function () 
{if((test81 == true || test86 == true || (test83 == true && tour_bleu == true) || (test87 == true && tour_vert == true)) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 1;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = true;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;test13 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 1; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = true;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});


////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// fleches gauche vert + bleu ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////// bouton 25 et 65 ///////////////////////////////////////////////////
var flux_button25 = this.add.sprite(670, position_fleche_h + 0*64, 'fleche_gauche_vert', 0).setInteractive();flux_button25.alpha = 0.001;  
flux_button25.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button25.alpha = 1; flux_button65.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button65.alpha = 1 ;flux_button25.alpha = 0.001}}); 
flux_button25.on('pointerout', function () {if(test13 == true){flux_button25.alpha = 1; flux_button65.alpha = 0.001 } 
                                           else if(test17 == true){flux_button65.alpha = 1 ;flux_button25.alpha = 0.001 } 
                                           else{flux_button25.alpha = 0.001; flux_button65.alpha = 0.001};});  
flux_button25.on('pointerdown', function () 
{if(((test11 == true && tour_bleu == true) || (test16 == true && tour_vert == true) || test13 == true || test17 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 0.001;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button25.alpha = 1;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = false;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test13 = true;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 0.001; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button65.alpha = 1; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = false;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test17 = true;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});


//////////////////////////// bouton 26 et 66 ///////////////////////////////////////////////////
var flux_button26 = this.add.sprite(670, position_fleche_h + 1*64, 'fleche_gauche_vert', 0).setInteractive();flux_button26.alpha = 0.001;  
flux_button26.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button26.alpha = 1; flux_button66.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button66.alpha = 1 ;flux_button26.alpha = 0.001}}); 
flux_button26.on('pointerout', function () {if(test23 == true){flux_button26.alpha = 1; flux_button66.alpha = 0.001 } 
                                           else if(test27 == true){flux_button66.alpha = 1 ;flux_button26.alpha = 0.001 } 
                                           else{flux_button26.alpha = 0.001; flux_button66.alpha = 0.001};});  
flux_button26.on('pointerdown', function () 
{if(((test21 == true && tour_bleu == true) || (test26 == true && tour_vert == true) || test23 == true || test27 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 0.001;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button26.alpha = 1;flux_button25.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = false;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test23 = true;test13 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 0.001; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button66.alpha = 1; flux_button65.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = false;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test27 = true;test17 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});


//////////////////////////// bouton 27 et 67 ///////////////////////////////////////////////////
var flux_button27 = this.add.sprite(670, position_fleche_h + 2*64, 'fleche_gauche_vert', 0).setInteractive();flux_button27.alpha = 0.001;  
flux_button27.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button27.alpha = 1; flux_button67.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button67.alpha = 1 ;flux_button27.alpha = 0.001}}); 
flux_button27.on('pointerout', function () {if(test33 == true){flux_button27.alpha = 1; flux_button67.alpha = 0.001 } 
                                           else if(test37 == true){flux_button67.alpha = 1 ;flux_button27.alpha = 0.001 } 
                                           else{flux_button27.alpha = 0.001; flux_button67.alpha = 0.001};});  
flux_button27.on('pointerdown', function () 
{if(((test31 == true && tour_bleu == true) || (test36 == true && tour_vert == true) || test33 == true || test37 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 0.001;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button27.alpha = 1;flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = false;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test33 = true;test13 = false;test23 = false;test43 = false;test53 = false;test63 = false;test73 = false;test83 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 0.001; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button67.alpha = 1; flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = false;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test37 = true;test17 = false;test27 = false;test47 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});

//////////////////////////// bouton 28 et 68 ///////////////////////////////////////////////////
var flux_button28 = this.add.sprite(670, position_fleche_h + 3*64, 'fleche_gauche_vert', 0).setInteractive();flux_button28.alpha = 0.001;  
flux_button28.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button28.alpha = 1; flux_button68.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button68.alpha = 1 ;flux_button28.alpha = 0.001}}); 
flux_button28.on('pointerout', function () {if(test43 == true){flux_button28.alpha = 1; flux_button68.alpha = 0.001 } 
                                           else if(test47 == true){flux_button68.alpha = 1 ;flux_button28.alpha = 0.001 } 
                                           else{flux_button28.alpha = 0.001; flux_button68.alpha = 0.001};});  
flux_button28.on('pointerdown', function () 
{if(((test41 == true && tour_bleu == true) || (test46 == true && tour_vert == true) || test43 == true || test47 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 0.001;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button28.alpha = 1;flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = false;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test43 = true;test13 = false;test23 = false;test33 = false;test53 = false;test63 = false;test73 = false;test83 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 0.001; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button68.alpha = 1; flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = false;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test47 = true;test17 = false;test27 = false;test37 = false;test57 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 29 et 69 ///////////////////////////////////////////////////
var flux_button29 = this.add.sprite(670, position_fleche_h + 4*64, 'fleche_gauche_vert', 0).setInteractive();flux_button29.alpha = 0.001;  
flux_button29.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button29.alpha = 1; flux_button69.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button69.alpha = 1 ;flux_button29.alpha = 0.001}}); 
flux_button29.on('pointerout', function () {if(test53 == true){flux_button29.alpha = 1; flux_button69.alpha = 0.001 } 
                                           else if(test57 == true){flux_button69.alpha = 1 ;flux_button29.alpha = 0.001 } 
                                           else{flux_button29.alpha = 0.001; flux_button69.alpha = 0.001};});  
flux_button29.on('pointerdown', function () 
{if(((test51 == true && tour_bleu == true) || (test56 == true && tour_vert == true) || test53 == true || test57 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 0.001;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button29.alpha = 1;flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = false;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test53 = true;test13 = false;test23 = false;test33 = false;test43 = false;test63 = false;test73 = false;test83 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 0.001; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button69.alpha = 1; flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = false;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test57 = true;test17 = false;test27 = false;test37 = false;test47 = false;test67 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});

//////////////////////////// bouton 30 et 70 ///////////////////////////////////////////////////
var flux_button30 = this.add.sprite(670, position_fleche_h + 5*64, 'fleche_gauche_vert', 0).setInteractive();flux_button30.alpha = 0.001;  
flux_button30.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button30.alpha = 1; flux_button70.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button70.alpha = 1 ;flux_button30.alpha = 0.001}}); 
flux_button30.on('pointerout', function () {if(test63 == true){flux_button30.alpha = 1; flux_button70.alpha = 0.001 } 
                                           else if(test67 == true){flux_button70.alpha = 1 ;flux_button30.alpha = 0.001 } 
                                           else{flux_button30.alpha = 0.001; flux_button70.alpha = 0.001};});  
flux_button30.on('pointerdown', function () 
{if(((test61 == true && tour_bleu == true) || (test66 == true && tour_vert == true) || test63 == true || test67 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 0.001;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button30.alpha = 1;flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button31.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = false;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test63 = true;test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test73 = false;test83 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 0.001; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button70.alpha = 1; flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button71.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = false;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test67 = true;test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test77 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});

//////////////////////////// bouton 31 et 71 ///////////////////////////////////////////////////
var flux_button31 = this.add.sprite(670, position_fleche_h + 6*64, 'fleche_gauche_vert', 0).setInteractive();flux_button31.alpha = 0.001;  
flux_button31.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button31.alpha = 1; flux_button71.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button71.alpha = 1 ;flux_button31.alpha = 0.001}}); 
flux_button31.on('pointerout', function () {if(test73 == true){flux_button31.alpha = 1; flux_button71.alpha = 0.001 } 
                                           else if(test77 == true){flux_button71.alpha = 1 ;flux_button31.alpha = 0.001 } 
                                           else{flux_button31.alpha = 0.001; flux_button71.alpha = 0.001};});  
flux_button31.on('pointerdown', function () 
{if(((test71 == true && tour_bleu == true) || (test76 == true && tour_vert == true) || test73 == true || test77 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 0.001;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button31.alpha = 1;flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button32.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = false;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test73 = true;test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test83 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false ;
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 0.001; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button71.alpha = 1; flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button72.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = false;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test77 = true;test17 = false;test27 = false;test37 = false;test57 = false;test67 = false;test67 = false;test87 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false }
});

//////////////////////////// bouton 32 et 72 ///////////////////////////////////////////////////
var flux_button32 = this.add.sprite(670, position_fleche_h + 7*64, 'fleche_gauche_vert', 0).setInteractive();flux_button32.alpha = 0.001;  
flux_button32.on('pointerover', function () {if(tour_vert == true  && mouvement == false){flux_button32.alpha = 1; flux_button72.alpha = 0.001 } else if(tour_bleu == true  && mouvement == false){flux_button72.alpha = 1 ;flux_button32.alpha = 0.001}}); 
flux_button32.on('pointerout', function () {if(test83 == true){flux_button32.alpha = 1; flux_button72.alpha = 0.001 } 
                                           else if(test87 == true){flux_button72.alpha = 1 ;flux_button32.alpha = 0.001 } 
                                           else{flux_button32.alpha = 0.001; flux_button72.alpha = 0.001};});  
flux_button32.on('pointerdown', function () 
{if(((test81 == true && tour_bleu == true) || (test86 == true && tour_vert == true) || test83 == true || test87 == true) && mouvement == false){
        test_regle_2 = true
}
else if(tour_vert == true  && mouvement == false){
    flux_button1.alpha = 0.001; flux_button2.alpha = 0.001;flux_button3.alpha = 0.001;flux_button4.alpha = 0.001;flux_button5.alpha = 0.001;flux_button6.alpha = 0.001;flux_button7.alpha = 0.001;flux_button8.alpha = 0.001;
    flux_button16.alpha = 0.001;flux_button9.alpha = 0.001;flux_button10.alpha = 0.001;flux_button11.alpha = 0.001;flux_button12.alpha = 0.001;flux_button13.alpha = 0.001;flux_button14.alpha = 0.001;flux_button15.alpha = 0.001;
    flux_button24.alpha = 0.001;flux_button17.alpha = 0.001;flux_button18.alpha = 0.001;flux_button19.alpha = 0.001;flux_button20.alpha = 0.001;flux_button21.alpha = 0.001;flux_button22.alpha = 0.001;flux_button23.alpha = 0.001;
    flux_button32.alpha = 1;flux_button25.alpha = 0.001;flux_button26.alpha = 0.001;flux_button27.alpha = 0.001;flux_button28.alpha = 0.001;flux_button29.alpha = 0.001;flux_button30.alpha = 0.001;flux_button31.alpha = 0.001;
    test1 = false;test2 = false;test3 = false;test4 = false;test5 = false;test6 = false;test7 = false;test8 = false;
    test81 = false;test11 = false;test21 = false;test31 = false;test41 = false;test51 = false;test61 = false;test71 = false;
    test82 = false;test12 = false;test22 =false;test32 = false;test42 = false;test52 = false;test62 = false;test72 = false;
    test83 = true;test13 = false;test23 = false;test33 = false;test43 = false;test53 = false;test63 = false;test73 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false
}
else if(tour_bleu == true  && mouvement == false){
    flux_button41.alpha = 0.001; flux_button42.alpha = 0.001; flux_button43.alpha = 0.001; flux_button44.alpha = 0.001; flux_button45.alpha = 0.001; flux_button46.alpha = 0.001; flux_button47.alpha = 0.001; flux_button48.alpha = 0.001; 
    flux_button56.alpha = 0.001; flux_button49.alpha = 0.001; flux_button50.alpha = 0.001; flux_button51.alpha = 0.001; flux_button52.alpha = 0.001; flux_button53.alpha = 0.001; flux_button54.alpha = 0.001; flux_button55.alpha = 0.001; 
    flux_button64.alpha = 0.001; flux_button57.alpha = 0.001; flux_button58.alpha = 0.001; flux_button59.alpha = 0.001; flux_button60.alpha = 0.001; flux_button61.alpha = 0.001; flux_button62.alpha = 0.001; flux_button63.alpha = 0.001; 
    flux_button72.alpha = 1; flux_button65.alpha = 0.001; flux_button66.alpha = 0.001; flux_button67.alpha = 0.001; flux_button68.alpha = 0.001; flux_button69.alpha = 0.001; flux_button70.alpha = 0.001; flux_button71.alpha = 0.001; 
    test14 = false;test24 = false;test34 = false;test44 = false;test54 = false;test64 = false;test74 = false;test84 = false;
    test85 = false;test15 = false;test25 = false;test35 = false;test45 = false;test55 = false;test65 = false;test75 = false;
    test86 = false;test16 = false;test26 =false;test36 = false;test46 = false;test56 = false;test66 = false;test76 = false;
    test87 = true;test17 = false;test27 = false;test37 = false;test47 = false;test57 = false;test67 = false;test77 = false;
    no_tour += 1 ;test_demi_tour = false; test_right = false;  test_left = false;  test_down = false;  test_up = false;
    test_regle = false; test_regle_2 = false ; pion1_flux_off = false; pion1_flux2_off = false; pion2_flux_off = false; pion2_flux2_off = false; obj_flux_off = false; obj_flux2_off = false}
});


////////////////////////////////////////////////////////////////////
//////////////// bouton cases : plassage des pions  /////////////
////////////////////////////////////////////////////////////////

        function case_bleu_1(i){}
        function case_bleu_2(i){}
        function case_bleu_3(i){}
        function case_bleu_4(i){}
        function case_bleu_5(i){}
        function case_bleu_6(i){}
        function case_bleu_7(i){}
        function case_bleu_8(i){}

        function case_vert_1(i){}
        function case_vert_2(i){}
        function case_vert_3(i){}
        function case_vert_4(i){}
        function case_vert_5(i){}
        function case_vert_6(i){}
        function case_vert_7(i){}
        function case_vert_8(i){}

        function case_obj_1(i){}
        function case_obj_2(i){}
        function case_obj_3(i){}
        function case_obj_4(i){}
        function case_obj_5(i){}
        function case_obj_6(i){}
        function case_obj_7(i){}
        function case_obj_8(i){}



    //je n'ai pas réussi à faire des case dépendant de 2 paramètres..
        for(let i = 0; i < 8; i++){
            case_obj_1[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 0*64 -12, 'case_obj', 0).setInteractive();
            case_obj_2[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 1*64 -12, 'case_obj', 0).setInteractive();
            case_obj_3[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 2*64 -12, 'case_obj', 0).setInteractive();
            case_obj_4[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 3*64 -12, 'case_obj', 0).setInteractive();
            case_obj_5[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 4*64 -12, 'case_obj', 0).setInteractive();
            case_obj_6[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 5*64 -12, 'case_obj', 0).setInteractive();
            case_obj_7[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 6*64 -12, 'case_obj', 0).setInteractive();
            case_obj_8[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 7*64 -12, 'case_obj', 0).setInteractive();
            case_vert_1[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 0*64 -12, 'case2', 0).setInteractive();
            case_vert_2[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 1*64 -12, 'case2', 0).setInteractive();
            case_vert_3[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 2*64 -12, 'case2', 0).setInteractive();
            case_vert_4[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 3*64 -12, 'case2', 0).setInteractive();
            case_vert_5[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 4*64 -12, 'case2', 0).setInteractive();
            case_vert_6[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 5*64 -12, 'case2', 0).setInteractive();
            case_vert_7[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 6*64 -12, 'case2', 0).setInteractive();
            case_vert_8[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 7*64 -12, 'case2', 0).setInteractive();
        }

        // intialisation poistion des pions ligne 1 ////////////////////////////////////////////////////////////
        for(let i = 0; i < 8; i++){
            case_bleu_1[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 0*64 -12, 'case1', 0).setInteractive();
            case_bleu_1[i].alpha = 0.05; case_vert_1[i].alpha = 0.05; case_obj_1[i].alpha = 0.05
            case_bleu_1[i].on('pointerover', function () {
                if(no_tour == 1){case_obj_1[i].alpha = 0.3}
                if(no_tour == 2){case_vert_1[i].alpha = 0.6}
                if(no_tour == 3){case_bleu_1[i].alpha = 0.5}}); 
            case_bleu_1[i].on('pointerout', function () {
                if(no_tour == 1){case_obj_1[i].alpha = 0.05}
                if(no_tour == 2){case_vert_1[i].alpha = 0.05}
                if(no_tour == 3){case_bleu_1[i].alpha = 0.05}});
            case_bleu_1[i].on('pointerdown', function () {
                if(no_tour == 1){
                    obj_x_init = position_fleche_v + i*64 +5 ; obj_y_init = position_fleche_h + 0*64 -12;
                    case_obj_1[i].alpha = 0.05;
                    test_case_obj = true}
                if(no_tour == 2){
                    pion2_x_init = position_fleche_v + i*64 +5 ; pion2_y_init = position_fleche_h + 0*64 -3;
                    case_vert_1[i].alpha = 0.05;
                    test_case_pion1 = true}
                if(no_tour == 3){
                    if(pion2_x_init == position_fleche_v + i*64 +5 && pion2_y_init == position_fleche_h + 0*64 -3)
                        {test_regle_4 = true}
                        else{
                        pion1_x_init = position_fleche_v + i*64 +5 ; pion1_y_init = position_fleche_h + 0*64 -3;
                        case_bleu_1[i].alpha = 0.05;
                        test_case_pion2 = true}}})
        }
        
        // intialisation poistion des pions ligne 2 ////////////////////////////////////////////////////////////
        for(let i = 0; i < 8; i++){
            case_bleu_2[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 1*64 -12, 'case1', 0).setInteractive();
            case_bleu_2[i].alpha = 0.05; case_vert_2[i].alpha = 0.05; case_obj_2[i].alpha = 0.05
            case_bleu_2[i].on('pointerover', function () {
                if(no_tour == 1){case_obj_2[i].alpha = 0.3}
                if(no_tour == 2){case_vert_2[i].alpha = 0.6}
                if(no_tour == 3){case_bleu_2[i].alpha = 0.5}}); 
            case_bleu_2[i].on('pointerout', function () {
                if(no_tour == 1){case_obj_2[i].alpha = 0.05}
                if(no_tour == 2){case_vert_2[i].alpha = 0.05}
                if(no_tour == 3){case_bleu_2[i].alpha = 0.05}});
            case_bleu_2[i].on('pointerdown', function () {
                if(no_tour == 1){
                    obj_x_init = position_fleche_v + i*64 +5 ; obj_y_init = position_fleche_h + 1*64 -12;
                    case_obj_2[i].alpha = 0.05;
                    test_case_obj = true}
                if(no_tour == 2){
                    pion2_x_init = position_fleche_v + i*64 +5 ; pion2_y_init = position_fleche_h + 1*64 -3;
                    case_vert_2[i].alpha = 0.05;
                    test_case_pion1 = true}
                if(no_tour == 3){
                    if(pion2_x_init == position_fleche_v + i*64 +5 && pion2_y_init == position_fleche_h + 1*64 -3)
                        {test_regle_4 = true}
                        else{
                        pion1_x_init = position_fleche_v + i*64 +5 ; pion1_y_init = position_fleche_h + 1*64 -3;
                        case_bleu_2[i].alpha = 0.05;
                        test_case_pion2 = true}}})
    }

           // intialisation poistion des pions ligne 3 ////////////////////////////////////////////////////////////
           for(let i = 0; i < 8; i++){
            case_bleu_3[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 2*64 -12, 'case1', 0).setInteractive();
            case_bleu_3[i].alpha = 0.05; case_vert_3[i].alpha = 0.05; case_obj_3[i].alpha = 0.05
            case_bleu_3[i].on('pointerover', function () {
                if(no_tour == 1){case_obj_3[i].alpha = 0.3}
                if(no_tour == 2){case_vert_3[i].alpha = 0.6}
                if(no_tour == 3){case_bleu_3[i].alpha = 0.5}}); 
            case_bleu_3[i].on('pointerout', function () {
                if(no_tour == 1){case_obj_3[i].alpha = 0.05}
                if(no_tour == 2){case_vert_3[i].alpha = 0.05}
                if(no_tour == 3){case_bleu_3[i].alpha = 0.05}});
            case_bleu_3[i].on('pointerdown', function () {
                if(no_tour == 1){
                    obj_x_init = position_fleche_v + i*64 +5 ; obj_y_init = position_fleche_h + 2*64 -12;
                    case_obj_3[i].alpha = 0.05;
                    test_case_obj = true}
                if(no_tour == 2){
                    pion2_x_init = position_fleche_v + i*64 +5 ; pion2_y_init = position_fleche_h + 2*64 -3;
                    case_vert_3[i].alpha = 0.05;
                    test_case_pion1 = true}
                if(no_tour == 3){
                    if(pion2_x_init == position_fleche_v + i*64 +5 && pion2_y_init == position_fleche_h + 2*64 -3)
                        {test_regle_4 = true}
                        else{
                        pion1_x_init = position_fleche_v + i*64 +5 ; pion1_y_init = position_fleche_h + 2*64 -3;
                        case_bleu_3[i].alpha = 0.05;
                        test_case_pion2 = true}}})
    }
    
           // intialisation poistion des pions ligne 4 ////////////////////////////////////////////////////////////
           for(let i = 0; i < 8; i++){
            case_bleu_4[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 3*64 -12, 'case1', 0).setInteractive();
            case_bleu_4[i].alpha = 0.05; case_vert_4[i].alpha = 0.05; case_obj_4[i].alpha = 0.05
            case_bleu_4[i].on('pointerover', function () {
                if(no_tour == 1){case_obj_4[i].alpha = 0.3}
                if(no_tour == 2){case_vert_4[i].alpha = 0.6}
                if(no_tour == 3){case_bleu_4[i].alpha = 0.5}}); 
            case_bleu_4[i].on('pointerout', function () {
                if(no_tour == 1){case_obj_4[i].alpha = 0.05}
                if(no_tour == 2){case_vert_4[i].alpha = 0.05}
                if(no_tour == 3){case_bleu_4[i].alpha = 0.05}});
            case_bleu_4[i].on('pointerdown', function () {
                if(no_tour == 1){
                    obj_x_init = position_fleche_v + i*64 +5 ; obj_y_init = position_fleche_h + 3*64 -12;
                    case_obj_4[i].alpha = 0.05;
                    test_case_obj = true}
                if(no_tour == 2){
                    pion2_x_init = position_fleche_v + i*64 +5 ; pion2_y_init = position_fleche_h + 3*64 -3;
                    case_vert_4[i].alpha = 0.05;
                    test_case_pion1 = true}
                if(no_tour == 3){
                    if(pion2_x_init == position_fleche_v + i*64 +5 && pion2_y_init == position_fleche_h + 3*64 -3)
                        {test_regle_4 = true}
                        else{
                        pion1_x_init = position_fleche_v + i*64 +5 ; pion1_y_init = position_fleche_h + 3*64 -3;
                        case_bleu_4[i].alpha = 0.05;
                        test_case_pion2 = true}}})
    }

           // intialisation poistion des pions ligne 5 ////////////////////////////////////////////////////////////
           for(let i = 0; i < 8; i++){
            case_bleu_5[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 4*64 -12, 'case1', 0).setInteractive();
            case_bleu_5[i].alpha = 0.05; case_vert_5[i].alpha = 0.05; case_obj_5[i].alpha = 0.05
            case_bleu_5[i].on('pointerover', function () {
                if(no_tour == 1){case_obj_5[i].alpha = 0.3}
                if(no_tour == 2){case_vert_5[i].alpha = 0.6}
                if(no_tour == 3){case_bleu_5[i].alpha = 0.5}}); 
            case_bleu_5[i].on('pointerout', function () {
                if(no_tour == 1){case_obj_5[i].alpha = 0.05}
                if(no_tour == 2){case_vert_5[i].alpha = 0.05}
                if(no_tour == 3){case_bleu_5[i].alpha = 0.05}});
            case_bleu_5[i].on('pointerdown', function () {
                if(no_tour == 1){
                    obj_x_init = position_fleche_v + i*64 +5 ; obj_y_init = position_fleche_h + 4*64 -12;
                    case_obj_5[i].alpha = 0.05;
                    test_case_obj = true}
                if(no_tour == 2){
                    pion2_x_init = position_fleche_v + i*64 +5 ; pion2_y_init = position_fleche_h + 4*64 -3;
                    case_vert_5[i].alpha = 0.05;
                    test_case_pion1 = true}
                if(no_tour == 3){
                    if(pion2_x_init == position_fleche_v + i*64 +5 && pion2_y_init == position_fleche_h + 4*64 -3)
                        {test_regle_4 = true}
                        else{
                        pion1_x_init = position_fleche_v + i*64 +5 ; pion1_y_init = position_fleche_h + 4*64 -3;
                        case_bleu_5[i].alpha = 0.05;
                        test_case_pion2 = true}}})
    }

           // intialisation poistion des pions ligne 6 ////////////////////////////////////////////////////////////
           for(let i = 0; i < 8; i++){
            case_bleu_6[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 5*64 -12, 'case1', 0).setInteractive();
            case_bleu_6[i].alpha = 0.05; case_vert_6[i].alpha = 0.05; case_obj_6[i].alpha = 0.05
            case_bleu_6[i].on('pointerover', function () {
                if(no_tour == 1){case_obj_6[i].alpha = 0.3}
                if(no_tour == 2){case_vert_6[i].alpha = 0.6}
                if(no_tour == 3){case_bleu_6[i].alpha = 0.5}}); 
            case_bleu_6[i].on('pointerout', function () {
                if(no_tour == 1){case_obj_6[i].alpha = 0.05}
                if(no_tour == 2){case_vert_6[i].alpha = 0.05}
                if(no_tour == 3){case_bleu_6[i].alpha = 0.05}});
            case_bleu_6[i].on('pointerdown', function () {
                if(no_tour == 1){
                    obj_x_init = position_fleche_v + i*64 +5 ; obj_y_init = position_fleche_h + 5*64 -12;
                    case_obj_6[i].alpha = 0.05;
                    test_case_obj = true}
                if(no_tour == 2){
                    pion2_x_init = position_fleche_v + i*64 +5 ; pion2_y_init = position_fleche_h + 5*64 -3;
                    case_vert_6[i].alpha = 0.05;
                    test_case_pion1 = true}
                if(no_tour == 3){
                    if(pion2_x_init == position_fleche_v + i*64 +5 && pion2_y_init == position_fleche_h + 5*64 -3)
                        {test_regle_4 = true}
                        else{
                        pion1_x_init = position_fleche_v + i*64 +5 ; pion1_y_init = position_fleche_h + 5*64 -3;
                        case_bleu_6[i].alpha = 0.05;
                        test_case_pion2 = true}}})
    }


           // intialisation poistion des pions ligne 7 ////////////////////////////////////////////////////////////
           for(let i = 0; i < 8; i++){
            case_bleu_7[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 6*64 -12, 'case1', 0).setInteractive();
            case_bleu_7[i].alpha = 0.05; case_vert_7[i].alpha = 0.05; case_obj_7[i].alpha = 0.05
            case_bleu_7[i].on('pointerover', function () {
                if(no_tour == 1){case_obj_7[i].alpha = 0.3}
                if(no_tour == 2){case_vert_7[i].alpha = 0.6}
                if(no_tour == 3){case_bleu_7[i].alpha = 0.5}}); 
            case_bleu_7[i].on('pointerout', function () {
                if(no_tour == 1){case_obj_7[i].alpha = 0.05}
                if(no_tour == 2){case_vert_7[i].alpha = 0.05}
                if(no_tour == 3){case_bleu_7[i].alpha = 0.05}});
            case_bleu_7[i].on('pointerdown', function () {
                if(no_tour == 1){
                    obj_x_init = position_fleche_v + i*64 +5 ; obj_y_init = position_fleche_h + 6*64 -12;
                    case_obj_7[i].alpha = 0.05;
                    test_case_obj = true}
                if(no_tour == 2){
                    pion2_x_init = position_fleche_v + i*64 +5 ; pion2_y_init = position_fleche_h + 6*64 -3;
                    case_vert_7[i].alpha = 0.05;
                    test_case_pion1 = true}
                if(no_tour == 3){
                    if(pion2_x_init == position_fleche_v + i*64 +5 && pion2_y_init == position_fleche_h + 6*64 -3)
                        {test_regle_4 = true}
                        else{
                        pion1_x_init = position_fleche_v + i*64 +5 ; pion1_y_init = position_fleche_h + 6*64 -3;
                        case_bleu_7[i].alpha = 0.05;
                        test_case_pion2 = true}}})
    }

           // intialisation poistion des pions ligne 8 ////////////////////////////////////////////////////////////
           for(let i = 0; i < 8; i++){
            case_bleu_8[i] = this.add.sprite(position_fleche_v + i*64 +5, position_fleche_h + 7*64 -12, 'case1', 0).setInteractive();
            case_bleu_8[i].alpha = 0.05; case_vert_8[i].alpha = 0.05; case_obj_8[i].alpha = 0.05
            case_bleu_8[i].on('pointerover', function () {
                if(no_tour == 1){case_obj_8[i].alpha = 0.3}
                if(no_tour == 2){case_vert_8[i].alpha = 0.6}
                if(no_tour == 3){case_bleu_8[i].alpha = 0.5}}); 
            case_bleu_8[i].on('pointerout', function () {
                if(no_tour == 1){case_obj_8[i].alpha = 0.05}
                if(no_tour == 2){case_vert_8[i].alpha = 0.05}
                if(no_tour == 3){case_bleu_8[i].alpha = 0.05}});
            case_bleu_8[i].on('pointerdown', function () {
                if(no_tour == 1){
                    obj_x_init = position_fleche_v + i*64 +5 ; obj_y_init = position_fleche_h + 7*64 -12;
                    case_obj_8[i].alpha = 0.05;
                    test_case_obj = true}
                if(no_tour == 2){
                    pion2_x_init = position_fleche_v + i*64 +5 ; pion2_y_init = position_fleche_h + 7*64 -3;
                    case_vert_8[i].alpha = 0.05;
                    test_case_pion1 = true}
                if(no_tour == 3){
                    if(pion2_x_init == position_fleche_v + i*64 +5 && pion2_y_init == position_fleche_h + 7*64 -3)
                        {test_regle_4 = true}
                        else{
                        pion1_x_init = position_fleche_v + i*64 +5 ; pion1_y_init = position_fleche_h + 7*64 -3;
                        case_bleu_8[i].alpha = 0.05;
                        test_case_pion2 = true}}})
    }



//////////////////////////////////////////////////////////////////
////////////////////////// collisions //////////////////////////
//////////////////////////////////////////////////////////////

//colision point du i dans le logo ///////////////
this.physics.add.collider(this.point_i, this.mur_logo_1)
this.physics.add.collider(this.point_i, this.mur_logo_2)

//fonction mouvement lors de la collision pion1 / pion2 ///////////////
this.physics.add.collider(this.pion1, this.pion2, (pion1, pion2) =>  {

    if(this.physics.collide(this.pion1, this.MurGroupv )){
        //résolution du cas particulier ou les 2 pions sont dans un flux et le gravité gérale est opposée
        if(((pion1_influx_gauche == true || pion1_influx_gauche2 == true) && test_right == true) || ((pion1_influx_droite == true || pion1_influx_droite2 == true) && test_left == true)){}

        else{

                this.pion1.body.gravity.x = gravity1_x
                this.pion1.body.gravity.y = gravity1_y
                this.pion2.body.gravity.x = gravity2_x
                this.pion2.body.gravity.y = gravity2_y
                if(test_up == true || test_down == true){
                if(pion1_influx_gauche == true || pion1_influx_droite == true){pion1_flux_off = true}
                if(pion2_influx_gauche == true || pion2_influx_droite == true){pion2_flux_off = true}
                if(pion1_influx_gauche2 == true || pion1_influx_droite2 == true){pion1_flux2_off = true}
                if(pion2_influx_gauche2 == true || pion2_influx_droite2 == true){pion2_flux2_off = true}
            }
       }
    }

    if(this.physics.collide(this.pion1, this.MurGrouph )){
        if(((pion1_influx_haut == true || pion1_influx_haut2 == true) && test_down == true) || ((pion1_influx_bas == true || pion1_influx_bas2 == true) && test_up == true)){}

        else{
                this.pion1.body.gravity.y = gravity1_y
                this.pion2.body.gravity.y = gravity2_y
                this.pion1.body.gravity.x = gravity1_x
                this.pion2.body.gravity.x = gravity2_x
                if(test_left == true || test_right == true){
                if(pion1_influx_gauche == true || pion1_influx_droite == true){pion1_flux_off = true}
                if(pion2_influx_gauche == true || pion2_influx_droite == true){pion2_flux_off = true}
                if(pion1_influx_gauche2 == true || pion1_influx_droite2 == true){pion1_flux2_off = true}
                if(pion2_influx_gauche2 == true || pion2_influx_droite2 == true){pion2_flux2_off = true}
            }    
 
        }
    }

    if(this.physics.collide(this.pion2, this.MurGroupv )){
        if(((pion2_influx_gauche == true || pion2_influx_gauche2 == true) && test_right == true) || ((pion2_influx_droite == true || pion2_influx_droite2 == true) && test_left == true)){}

        else{    
                this.pion1.body.gravity.x = gravity1_x
                this.pion1.body.gravity.y = gravity1_y
                this.pion2.body.gravity.x = gravity2_x
                this.pion2.body.gravity.y = gravity2_y

                if(test_up == true || test_down == true){
                if(pion1_influx_gauche == true || pion1_influx_droite == true){pion1_flux_off = true}
                if(pion2_influx_gauche == true || pion2_influx_droite == true){pion2_flux_off = true}
                if(pion1_influx_gauche2 == true || pion1_influx_droite2 == true){pion1_flux2_off = true}
                if(pion2_influx_gauche2 == true || pion2_influx_droite2 == true){pion2_flux2_off = true}
            }
       }
    }

    
    if(this.physics.collide(this.pion2, this.MurGrouph)){
        if(((pion2_influx_haut == true || pion2_influx_haut2 == true) && test_down == true) || ((pion2_influx_bas == true || pion2_influx_bas2) && test_up == true)){}

        else{
                this.pion2.body.gravity.x = gravity2_x
                this.pion2.body.gravity.y = gravity2_y
                this.pion1.body.gravity.x = gravity1_x
                this.pion1.body.gravity.y = gravity1_y

                if(test_left == true || test_right == true){
                if(pion1_influx_haut == true || pion1_influx_bas == true){pion1_flux_off = true}
                if(pion1_influx_haut2 == true || pion1_influx_bas2 == true){pion1_flux2_off = true}
                if(pion2_influx_haut == true || pion2_influx_bas == true){pion2_flux_off = true}
                if(pion2_influx_haut2 == true || pion2_influx_bas2 == true){pion2_flux2_off = true}
            }
        }
    }
}); 


//fonction mouvement lorsque les pions sont en contact avec les murs ///////////////////////
this.collision1murH = this.physics.add.collider(this.pion1, this.MurGrouph, (pion1) => {
    pion1_flux_off = false; pion1_flux2_off = false
    if((pion1_influx_droite == true && test_droite == true) || (pion1_influx_droite2 == true && test_droite2 == true)){
        this.pion1.body.gravity.x = 80
    }
    else if((pion1_influx_gauche == true && test_gauche == true) || (pion1_influx_gauche2 == true && test_gauche2 == true)){
        this.pion1.body.gravity.x = -80
    }
    else{

    this.pion1.body.gravity.x = gravity1_x
    this.pion1.body.gravity.y = gravity1_y

    if(test_left == true || test_right == true){
        this.pion1.body.velocity.x = 0
        this.pion1.body.velocity.y = 0
        if(pion1_influx_haut == true || pion1_influx_bas == true){pion1_flux_off = true}
        if(pion1_influx_haut2 == true || pion1_influx_bas2 == true){pion1_flux2_off = true}
    }
    //redondant avec la fonction contact pion1/pion2 mais ça marche comme ça je sais pas trop pourquoi
        if(this.physics.collide(this.pion1, this.pion2) || contact_lim_bas == true || contact_lim_haut == true){
            this.pion2.body.gravity.x = gravity2_x
            this.pion2.body.gravity.y = gravity2_y

            if(test_left == true || test_right == true){
                if(pion2_influx_haut == true || pion2_influx_bas == true){pion2_flux_off = true}
                if(pion2_influx_haut2 == true || pion2_influx_bas2 == true){pion2_flux2_off = true}  
            }
        }

    }
});

this.collision2murH = this.physics.add.collider(this.pion2, this.MurGrouph, (pion2) => {
    pion2_flux_off = false; pion2_flux2_off = false
    if((pion2_influx_droite == true && test_droite == true) || (pion2_influx_droite2 == true && test_droite2 == true)){
        this.pion2.body.gravity.x = 80           
    }
    else if((pion2_influx_gauche == true && test_gauche == true) || (pion2_influx_gauche2 == true && test_gauche2 == true)){
        this.pion2.body.gravity.x = -80
    }
    else{

    this.pion2.body.gravity.x = gravity2_x
    this.pion2.body.gravity.y = gravity2_y

    if(test_left == true || test_right == true){
        //debug2 = true
        this.pion2.body.velocity.x = 0
        this.pion2.body.velocity.y = 0
        if(pion2_influx_haut == true || pion2_influx_bas == true){pion2_flux_off = true}
        if(pion2_influx_haut2 == true || pion2_influx_bas2 == true){pion2_flux2_off = true}  
    }

        if(this.physics.collide(this.pion1, this.pion2) || contact_lim_bas == true || contact_lim_haut == true){
            this.pion1.body.gravity.x = gravity1_x
            this.pion1.body.gravity.y = gravity1_y  
            //debug1 = true
            if(test_left == true || test_right == true){
                if(pion1_influx_haut == true || pion1_influx_bas == true){pion1_flux_off = true}
                if(pion1_influx_haut2 == true || pion1_influx_bas2 == true){pion1_flux2_off = true}
            }
        }
    }
});

this.collision1murV = this.physics.add.collider(this.pion1, this.MurGroupv, (pion1) => {
    pion1_flux_off = false; pion1_flux2_off = false
    if((pion1_influx_bas == true && test_bas == true) || (pion1_influx_bas2 == true && test_bas2 == true)){
        this.pion1.body.gravity.y = 80
    }
    else if((pion1_influx_haut == true  && test_haut == true) || (pion1_influx_haut2 == true && test_haut2 == true)){
        this.pion1.body.gravity.y = -80
    }
    else{
        this.pion1.body.gravity.x = gravity1_x
        this.pion1.body.gravity.y = gravity1_y
    this.pion1.body.velocity.x = 0
    this.pion1.body.velocity.y = 0

    if(test_up == true || test_down == true){
        this.pion1.body.gravity.x = gravity1_x
        this.pion1.body.gravity.y = gravity1_y
        if(pion1_influx_gauche == true || pion1_influx_droite == true){pion1_flux_off = true}
        if(pion1_influx_gauche2 == true || pion1_influx_droite2 == true){pion1_flux2_off = true}
    }

        if(this.physics.collide(this.pion1, this.pion2) || contact_lim_gauche == true || contact_lim_droite == true){
            this.pion2.body.gravity.x = gravity2_x
            this.pion2.body.gravity.y = gravity2_y
            if(test_up == true || test_down == true){
                if(pion2_influx_gauche == true || pion2_influx_droite == true){pion2_flux_off = true}
                if(pion2_influx_gauche2 == true || pion2_influx_droite2 == true){pion2_flux2_off = true}
            }
        }
    }
});


this.collision2murV = this.physics.add.collider(this.pion2, this.MurGroupv, (pion2) => {
    debug4 = true
    pion2_flux_off = false; pion2_flux_off = false
    if((pion2_influx_bas == true && test_bas == true) || (pion2_influx_bas2 == true && test_bas2 == true)){
      this.pion2.body.gravity.y = 80
    }
    else if((pion2_influx_haut == true  && test_haut == true) || (pion2_influx_haut2 == true && test_haut2 == true)){
       this.pion2.body.gravity.y = -80
    }
    else{
    

    this.pion2.body.velocity.x = 0
    this.pion2.body.velocity.y = 0

    if(test_up == true || test_down == true){
        this.pion2.body.gravity.x = gravity2_x
        this.pion2.body.gravity.y = gravity2_y
        if(pion2_influx_gauche == true || pion2_influx_droite == true){pion2_flux_off = true}
        if(pion2_influx_gauche2 == true || pion2_influx_droite2 == true){pion2_flux2_off = true}
    }

        if(this.physics.collide(this.pion1, this.pion2) || contact_lim_gauche == true || contact_lim_droite == true){
            debug1 = true
            this.pion1.body.gravity.x = gravity1_x
            this.pion1.body.gravity.y = gravity1_y
            if(test_up == true || test_down == true){
                debug2 = true
                if(pion1_influx_gauche == true || pion1_influx_droite == true){pion1_flux_off = true}
                if(pion1_influx_gauche2 == true || pion1_influx_droite2 == true){pion1_flux2_off = true}
            }
        }
        debug1 = false
        debug2 = false
    }
    //debug4 = false
})

this.collision3murH = this.physics.add.collider(this.obj, this.MurGrouph, (obj) => {
    if((obj_influx_droite == true && test_droite == true) || (obj_influx_droite2 == true && test_droite2 == true)){
        this.obj.body.gravity.x = 80
    }
    else if((obj_influx_gauche == true && test_gauche == true) || (obj_influx_gauche2 == true && test_gauche2 == true)){
        this.obj.body.gravity.x = -80
    }
    else{
    this.obj.body.gravity.x = gravity_obj_x
    this.obj.body.gravity.y = gravity_obj_y
    //this.obj.body.velocity.x = 0
    //this.obj.body.velocity.y = 0

    if(test_left == true || test_right == true){
        if(obj_influx_haut == true || obj_influx_bas == true){obj_flux_off = true}
        if(obj_influx_haut2 == true || obj_influx_bas2 == true){obj_flux2_off = true}
    }
    }
});

this.collision3murV = this.physics.add.collider(this.obj, this.MurGroupv, (obj) => {
    if((obj_influx_bas == true && test_bas == true) || (obj_influx_bas2 == true && test_bas2 == true)){
        this.obj.body.gravity.y = 80
    }
    else if((obj_influx_haut == true  && test_haut == true) || (obj_influx_haut2 == true && test_haut2 == true)){
        this.obj.body.gravity.y = -80
    }
    else{
    this.obj.body.gravity.x = gravity_obj_x
    this.obj.body.gravity.y = gravity_obj_y
    //this.obj.body.velocity.x = 0
    //this.obj.body.velocity.y = 0

    if(test_up == true || test_down == true){
        if(obj_influx_gauche == true || obj_influx_droite == true){obj_flux_off = true}
        if(obj_influx_gauche2 == true || obj_influx_droite2 == true){obj_flux2_off = true}
    }
    }
});



//restart button ///////////////////////////////////////////
var restart = this.add.image(370, 373, 'restart') 
restart.alpha = 0


this.restart_logo = this.add.sprite(370, 370, 'restart_logo').setInteractive(); 
this.restart_logo.alpha = 0; this.restart_logo.width = 200;this.restart_logo.height =200;
this.restart_logo.on('pointerover', function () {restart.alpha = 1; this.setTint("#E0FFFF");this.alpha = 0.5});
this.restart_logo.on('pointerout', function () {restart.alpha = 0; this.clearTint()}); 
this.restart_logo.on('pointerdown', function () {    
   restart_game = true
});

var restart = this.add.image(370, 373, 'restart') 
restart.alpha = 0



}   


update() {

if(test_menu == true){
    this.registry.destroy(); // destroy registry
    this.events.off();// disable all active events
    this.scene.start('scene_menu')
    //this.scene.switch('scene_menu');
}

if(test_rules == true){
    this.registry.destroy(); // destroy registry
    this.events.off();// disable all active events
    window.open("rules_gravity.pdf")
    test_rules = false
}

if(test_demo == true){
    this.registry.destroy(); // destroy registry
    this.events.off();// disable all active events
    this.scene.start('scene_menu')
}

//////////////////////////////////////////////////////////////////////////
////////////// initialisation  gravité générale ////////////////////////
///////////////////////////////////////////////////////////////////////

// flèche /////////////////////////////////////////////////////////
if(no_tour == 0){
if(GDroite.isDown || test_fleche_clavier_droite == true) {
    //fonction mouvement gravité générale
    //definition de variables pour utilisation dans les autres foncitons de mouvement
    gravity1_x = 130
    gravity1_y = 0
    gravity2_x = 130
    gravity2_y = 0
    gravity_obj_x = 130
    gravity_obj_y = 0

    this.point_i.body.velocity.x = 100    
    //affichage fleche de gravité
    this.GravityD.alpha = 1;
    this.GravityB.alpha = 0;
    this.GravityH.alpha = 0;
    this.GravityG.alpha = 0;
    //sert à passer au joueur suivant le prochain tour
    no_tour += 1 
    this.text_regle_1.setVisible(false); ;

    test_right = true    
    test_left = false
    test_up = false  
    test_down = false 
    test_fleche_clavier_droite == false
    }
else if(GGauche.isDown || test_fleche_clavier_gauche == true) {   
    gravity1_x = -130
    gravity1_y = 0
    gravity2_x = -130
    gravity2_y = 0
    gravity_obj_x = -130
    gravity_obj_y = 0
    this.point_i.body.velocity.x = -100  

    this.GravityD.alpha = 0;
    this.GravityB.alpha = 0;
    this.GravityH.alpha = 0;
    this.GravityG.alpha = 1;   
    no_tour += 1 
    this.text_regle_1.setVisible(false);   
    test_right = false   
    test_left = true
    test_up = false  
    test_down = false 
    test_fleche_clavier_gauche == false
    }
else if(GBas.isDown|| test_fleche_clavier_bas == true) {   
    gravity1_x = 0
    gravity1_y = 130
    gravity2_x = 0
    gravity2_y = 130
    gravity_obj_x = 0
    gravity_obj_y = 130
    this.GravityD.alpha = 0;
    this.GravityB.alpha = 1;
    this.GravityH.alpha = 0;
    this.GravityG.alpha = 0;
    no_tour += 1 
    this.text_regle_1.setVisible(false); 
    test_right = false    
    test_left = false
    test_up = false  
    test_down = true 
    test_fleche_clavier_bas == false
    }
else if(GHaut.isDown|| test_fleche_clavier_haut == true) { 
    gravity1_x = 0
    gravity1_y = -130
    gravity2_x = 0
    gravity2_y = -130
    gravity_obj_x = 0
    gravity_obj_y = -130
    this.GravityD.alpha = 0;
    this.GravityB.alpha = 0;
    this.GravityH.alpha = 1;
    this.GravityG.alpha = 0;
    no_tour += 1 ;
    this.text_regle_1.setVisible(false); 
    test_right = false    
    test_left = false
    test_up = true 
    test_down = false 
    test_fleche_clavier_haut == false
    }

// afficher le texte ///////////////////////////////
this.text_sens_gravite1.setVisible(true)
this.text_sens_gravite2.setVisible(true)
this.fleche_clavier.alpha = 1
this.fleche_clavier_gauche.alpha = 1
this.fleche_clavier_droite.alpha = 1
this.fleche_clavier_haut.alpha = 1
this.fleche_clavier_bas.alpha = 1
} 


if(no_tour == 1 && no_tour == 0){ 
      
    test = this.add.text(200, 200, " test", {
        font: "20px Arial",
        fill: "#FFFFFF",
        align: "center" 
    })
}

if(no_tour == 1){
// détruire le texte précèdent /////////////////////////
this.text_sens_gravite1.destroy()
this.text_sens_gravite2.destroy()
this.fleche_clavier.alpha = 0
this.fleche_clavier_gauche.alpha = 0
this.fleche_clavier_droite.alpha = 0
this.fleche_clavier_haut.alpha = 0
this.fleche_clavier_bas.alpha = 0
this.text_pos_obj1.setVisible(true)
this.text_pos_obj2.setVisible(true)
}


//////////////////////////////////////////////////////////////////////////
////////////// initialisation  : placement des différents pions /////////
///////////////////////////////////////////////////////////////////////

if(no_tour < 4){
this.obj.x = obj_x_init;  this.obj.y = obj_y_init; 
this.pion1.x = pion1_x_init;  this.pion1.y = pion1_y_init; 
this.pion2.x = pion2_x_init;  this.pion2.y = pion2_y_init; 


if(test_case_obj == true){
    no_tour = 2
    this.text_pos_obj1.destroy()
    this.text_pos_obj2.destroy()
    this.text_pos_pion1_1.setVisible(true)
    this.text_pos_pion1_2.setVisible(true)
}

if(test_case_pion1 == true){
    no_tour = 3
    this.text_pos_pion1_1.destroy()
    this.text_pos_pion1_2.destroy()
    this.text_pos_pion2_1.setVisible(true)
    this.text_pos_pion2_2.setVisible(true)

    if(test_regle_4 == true){
        this.text_regle_4.setVisible(true)
    }
}
    
if(test_case_pion2 == true){
    //appliquer la gravité aux pions
    this.pion1.body.velocity.x = 0;
    this.pion2.body.velocity.x = 0;
    this.obj.body.velocity.x = 0;
    this.pion1.body.velocity.y = 0;
    this.pion2.body.velocity.y = 0;
    this.obj.body.velocity.y = 0;
    this.pion1.body.gravity.x = gravity1_x;
    this.pion2.body.gravity.x = gravity2_x;
    this.obj.body.gravity.x = gravity_obj_x;
    this.pion1.body.gravity.y = gravity1_y;
    this.pion2.body.gravity.y = gravity2_y;
    this.obj.body.gravity.y = gravity_obj_y;  
    no_tour = 4;

    test_regle_4 = false;
    if(test_regle_4 == false){
        this.text_regle_4.setVisible(false)
    }
    this.text_pos_pion2_1.destroy()
    this.text_pos_pion2_2.destroy()
}}



//une fois initialisation terminée
else{
 
////////////////////////////////////////////////////////////
////////////// messages consignes joueurs ////////////////
////////////////////////////////////////////////////////

 // test règle 1 : pas de retour pion dans un identique à l'état précèdent ///////////
if(test_demi_tour == true && test_was_left && GDroite.isDown){
    test_right = true
    test_regle = true
}

if(test_demi_tour == true && test_was_right && GGauche.isDown){
    test_left = true
    test_regle = true
}

if(test_demi_tour == true && test_was_up && GBas.isDown){
    test_down = true
    test_regle = true
}
//else{test_down = false}

if(test_demi_tour == true && test_was_down && GHaut.isDown){
    test_up = true
    test_regle = true
}

// affiche les regles lorsqu'il y'en a besoin
if(test_regle == false){
    this.text_regle_1.setVisible(false)
}
else(this.text_regle_1.setVisible(true))

if(test_regle_2 == false){
    this.text_regle_2.setVisible(false)
}
else(this.text_regle_2.setVisible(true))

//consignes actions joueurs
if(test_regle == false && test_regle_2 == false && test_regle_4 == false && victoire_joueur_1 ==  false && victoire_joueur_2 == false){
    this.text_consigne_1.setVisible(true)
}
else{this.text_consigne_1.setVisible(false)}


/////////////////////////////////////////////////////////////////////
/////// fonction pour passer d'un joueur à un autre ////////////////
//////////////////////////////////////////////////////////////////

if(no_tour%2 == 0 && no_tour > 3){
    tour_bleu = true;
    tour_vert = false;
    this.text_joueur_bleu.setVisible(true)
    this.text_joueur_vert.setVisible(false)
}

else {
    tour_vert = true;
    tour_bleu = false;
    this.text_joueur_bleu.setVisible(false)
    this.text_joueur_vert.setVisible(true)
}



/////////////////////////////////////////////////////////////////////////////////
/////////////// fonction mouvement dans les lignes et colonnes /////////////////
//////////////////////////////////////////////////////////////////////////////
//--> permet d'eviter aux pions de se prendre les murs et de les recentrer lorsqu'il y a contact pion1 et pion2

if((this.pion1.body.gravity.y > 0 || this.pion1.body.gravity.y < 0) && pion1_influx_droite == false  && pion1_influx_gauche == false && pion1_influx_droite2 == false  && pion1_influx_gauche2 == false){
 
    for(let step = 0; step < 8; step++){
        if(this.pion1.x < (position_flux_v + 30 + step*64)  && this.pion1.x > (position_flux_v - 30 + step*64))
        {this.pion1.x = position_flux_v + step*64.1}

    }
}

if((this.pion2.body.gravity.y > 0 || this.pion2.body.gravity.y < 0) && pion2_influx_droite == false  && pion2_influx_gauche == false && pion2_influx_droite2 == false  && pion2_influx_gauche2 == false){
    for(let step = 0; step < 8; step++){
        if(this.pion2.x < (position_flux_v + 30 + step*64)  && this.pion2.x > (position_flux_v - 30 + step*64))
        {this.pion2.x = position_flux_v + step*64.3}

    }
}

if((this.pion1.body.gravity.x > 0 || this.pion1.body.gravity.x < 0) && pion1_influx_haut == false  && pion1_influx_bas == false && pion1_influx_haut2 == false  && pion1_influx_bas2 == false){
    for(let step = 0; step < 8; step++){
        if(this.pion1.y < (position_flux_h + 6 + 30 + step*64)  && this.pion1.y > (position_flux_h + 6 - 30 + step*64))
        {this.pion1.y = position_flux_h + 8 + step*63.9}  
    }
}

if((this.pion2.body.gravity.x > 0 || this.pion2.body.gravity.x < 0) && pion2_influx_haut == false  && pion2_influx_bas == false && pion2_influx_haut2 == false  && pion2_influx_bas2 == false){
    for(let step = 0; step < 8; step++){
        if(this.pion2.y < (position_flux_h + 6 + 30 + step*64)  && this.pion2.y > (position_flux_h + 6 - 30 + step*64))
        {this.pion2.y = position_flux_h + 8 + step*63.9}
      
    }
}

//pas necessaire pour le pion obj mais permet d'homogénéiser les déplacements
if((this.obj.body.gravity.y > 0 || this.obj.body.gravity.y < 0) && obj_influx_droite == false  && obj_influx_gauche == false && obj_influx_droite2 == false  && obj_influx_gauche2 == false){
    for(let step = 0; step < 8; step++){
       if(this.obj.x < (position_flux_v + 30 + step*64)  && this.obj.x > (position_flux_v - 30 + step*64))
        {this.obj.x = position_flux_v + step*64}

    }
}

if((this.obj.body.gravity.x > 0 || this.obj.body.gravity.x < 0) && obj_influx_haut == false  && obj_influx_bas == false && obj_influx_bas2 == false && obj_influx_haut2 == false){
   for(let step = 0; step < 8; step++){
   if(this.obj.y < (position_flux_h + 30 + step*64)  && this.obj.y > (position_flux_h - 30 + step*64))
   {this.obj.y = position_flux_h + step*63.9 -1}
   }
}


//////////////////////////////////////////////////////////////////
/////////////// fonction changement de gravité /////////////////
//////////////////////////////////////////////////////////////


if(GDroite.isDown && test_right == false && mouvement == false) {
//affichage fleche de gravité
    this.GravityD.alpha = 1;
    this.GravityB.alpha = 0;
    this.GravityH.alpha = 0;
    this.GravityG.alpha = 0;

    //fonction mouvement gravité générale
    //definition de variables pour utilisation dans les autres foncitons de mouvement
    gravity1_x = 90
    gravity1_y = 0
    gravity2_x = 90
    gravity2_y = 0
    gravity_obj_x = 90
    gravity_obj_y = 0
    this.pion1.body.velocity.x = 0;
    this.pion2.body.velocity.x = 0;
    this.obj.body.velocity.x = 0;
    this.pion1.body.velocity.y = 0;
    this.pion2.body.velocity.y = 0;
    this.obj.body.velocity.y = 0;
    this.pion1.body.gravity.x = gravity1_x;
    this.pion2.body.gravity.x = gravity2_x;
    this.obj.body.gravity.x = gravity_obj_x;
    this.pion1.body.gravity.y = gravity1_y;
    this.pion2.body.gravity.y = gravity2_y;
    this.obj.body.gravity.y = gravity_obj_y;

    this.point_i.body.velocity.x = 50;

//sert à passer au joueur suivant le prochain tour
   no_tour += 1;

//permet de ne pas pouvoir appuyer plusieur fois sur la meme fleche
   test_right = true    
   test_left = false
   test_up = false  
   test_down = false 

 if(test_was_left == true && no_change == no_tour_was){test_demi_tour = true}
 else{test_demi_tour = false}
 test_regle = false; test_regle_2 = false

   //remet les tests de sorties de flux à 0
    pion1_flux_off = false
    pion1_flux2_off = false
    pion2_flux_off = false
    pion2_flux2_off = false
    obj_flux_off = false
    obj_flux2_off = false

    no_change = no_tour

}
else if(GGauche.isDown && test_left == false && mouvement == false) {

    this.GravityD.alpha = 0;
    this.GravityB.alpha = 0;
    this.GravityH.alpha = 0;
    this.GravityG.alpha = 1;

    gravity1_x = -90
    gravity1_y = 0
    gravity2_x = -90
    gravity2_y = 0
    gravity_obj_x = -90
    gravity_obj_y = 0
    this.pion1.body.velocity.x = 0;
    this.pion2.body.velocity.x = 0;
    this.obj.body.velocity.x = 0;
    this.pion1.body.velocity.y = 0;
    this.pion2.body.velocity.y = 0;
    this.obj.body.velocity.y = 0;
    this.pion1.body.gravity.x = gravity1_x;
    this.pion2.body.gravity.x = gravity2_x;
    this.obj.body.gravity.x = gravity_obj_x;
    this.pion1.body.gravity.y = gravity1_y;
    this.pion2.body.gravity.y = gravity2_y;
    this.obj.body.gravity.y = gravity_obj_y;

    this.point_i.body.velocity.x = -50;
 
    no_tour += 1;   
  
    test_right = false    
    test_left = true
    test_up = false  
    test_down = false     

    if(test_was_right == true && no_change == no_tour_was){test_demi_tour = true}
    else{test_demi_tour = false}
    test_regle = false; test_regle_2 = false

    pion1_flux_off = false
    pion1_flux2_off = false
    pion2_flux_off = false
    pion2_flux2_off = false
    obj_flux_off = false
    obj_flux2_off = false

    no_change = no_tour
}
else if(GBas.isDown && test_down == false && mouvement == false) {

    this.GravityD.alpha = 0;
    this.GravityB.alpha = 1;
    this.GravityH.alpha = 0;
    this.GravityG.alpha = 0;

    gravity1_x = 0
    gravity1_y = 90
    gravity2_x = 0
    gravity2_y = 90
    gravity_obj_x = 0
    gravity_obj_y = 90
    this.pion1.body.velocity.x = 0;
    this.pion2.body.velocity.x = 0;
    this.obj.body.velocity.x = 0;
    this.pion1.body.velocity.y = 0;
    this.pion2.body.velocity.y = 0;
    this.obj.body.velocity.y = 0;
    this.pion1.body.gravity.x = gravity1_x;
    this.pion2.body.gravity.x = gravity2_x;
    this.obj.body.gravity.x = gravity_obj_x;
    this.pion1.body.gravity.y = gravity1_y;
    this.pion2.body.gravity.y = gravity2_y;
    this.obj.body.gravity.y = gravity_obj_y;

    no_tour += 1; 
 
    test_right = false    
    test_left = false
    test_up = false  
    test_down = true 
    
    if(test_was_up == true && no_change == no_tour_was){test_demi_tour = true}
    else{test_demi_tour = false}
    test_regle = false; test_regle_2 = false

    pion1_flux_off = false
    pion1_flux2_off = false
    pion2_flux_off = false
    pion2_flux2_off = false
    obj_flux_off = false
    obj_flux2_off = false

    no_change = no_tour
}
else if(GHaut.isDown && test_up == false && mouvement == false) {

    this.GravityD.alpha = 0;
    this.GravityB.alpha = 0;
    this.GravityH.alpha = 1;
    this.GravityG.alpha = 0;

    gravity1_x = 0
    gravity1_y = -90
    gravity2_x = 0
    gravity2_y = -90
    gravity_obj_x = 0
    gravity_obj_y = -90
    this.pion1.body.velocity.x = 0;
    this.pion2.body.velocity.x = 0;
    this.obj.body.velocity.x = 0;
    this.pion1.body.velocity.y = 0;
    this.pion2.body.velocity.y = 0;
    this.obj.body.velocity.y = 0;
    this.pion1.body.gravity.x = gravity1_x;
    this.pion2.body.gravity.x = gravity2_x;
    this.obj.body.gravity.x = gravity_obj_x;
    this.pion1.body.gravity.y = gravity1_y;
    this.pion2.body.gravity.y = gravity2_y;
    this.obj.body.gravity.y = gravity_obj_y;
    
    no_tour += 1; 

    test_right = false    
    test_left = false
    test_up = true  
    test_down = false  
    
    if(test_was_down == true && no_change == no_tour_was){test_demi_tour = true}
    else{test_demi_tour = false}
    test_regle = false; test_regle_2 = false

    pion1_flux_off = false
    pion1_flux2_off = false
    pion2_flux_off = false
    pion2_flux2_off = false
    obj_flux_off = false
    obj_flux2_off = false

    no_change = no_tour
}



//////////////////////////////////////////////////////////////////
/////////////// fonction réapparition aux limites /////////////
//////////////////////////////////////////////////////////////

// pion1 /////////////////////////
    if(this.pion1.x < position_flux_v - 8 && (this.pion1.body.gravity.x < 0 || pion1_influx_gauche == true || pion1_influx_gauche2 == true)){//on doit bien vérifier que le mouvement du pion est d'aller de l'autre coté 
        // permet d'éviter de le conflit si un autre pion est à l'endroit ou doit reapparaitre le pion
        if(this.pion2.x > 550 && this.pion2.y < this.pion1.y + 62 && this.pion2.y > this.pion1.y - 62) {
            this.pion1.body.stop(); this.pion1.x = pion1_lastPos_x; this.pion1.body.gravity.x = gravity1_x; this.pion1.body.gravity.y = gravity1_y;
            contact_lim_gauche = true
        }

        else{
        //fonction cas classique
        this.pion1.x = position_flux_v + 64*7 + 8
        //this.pion1.body.velocity.x = 0 
        this.pion1.body.gravity.x = gravity1_x //pas obligé mais permet de ralentir le pion
        contact_lim_gauche = false
    }}
    else if(this.pion1.x > position_flux_v + 64*7 + 8 && (this.pion1.body.gravity.x > 0 || pion1_influx_droite ==true || pion1_influx_droite2 == true)){
        if(this.pion2.x < 210 && this.pion2.y < this.pion1.y + 62 && this.pion2.y > this.pion1.y - 62)
        {this.pion1.body.stop(); this.pion1.x = pion1_lastPos_x; this.pion1.body.gravity.x = gravity1_x; this.pion1.body.gravity.y = gravity1_y;
        contact_lim_droite = true}
        else{
        this.pion1.x = position_flux_v - 8 
        //this.pion1.body.velocity.x = 0 
        this.pion1.body.gravity.x = gravity1_x 
        contact_lim_droite = false
    }}
    else if(this.pion1.y < position_flux_h  && (this.pion1.body.gravity.y < 0 || pion1_influx_haut == true|| pion1_influx_haut2 == true)){
        //debug3 =true
        if(this.pion2.y > 550 && this.pion2.x < this.pion1.x + 62 && this.pion2.x > this.pion1.x - 62)
        {this.pion1.body.stop(); this.pion1.y = pion1_lastPos_y; this.pion1.y = pion1_lastPos_y; this.pion1.body.gravity.y = gravity1_y; this.pion1.body.gravity.x = gravity1_x;
        contact_lim_haut = true} 
        else{
        this.pion1.y = position_flux_h + 7*64.1 + 16
        this.pion1.body.gravity.y = gravity1_y
        contact_lim_haut = false
    }}
    else if(this.pion1.y > position_flux_h + 7*64.1 + 14 && (this.pion1.body.gravity.y > 0 || pion1_influx_bas == true || pion1_influx_bas2 == true)){
        if(this.pion2.y < 210 && this.pion2.x < this.pion1.x + 62 && this.pion2.x > this.pion1.x - 62)
        {this.pion1.body.stop(); this.pion1.y = pion1_lastPos_y; this.pion1.body.gravity.y = gravity1_y; this.pion1.body.gravity.x = gravity1_x;
        contact_lim_bas = true}
        else{
       this.pion1.y = position_flux_h - 2 
       this.pion1.body.gravity.y = gravity1_y
       contact_lim_bas = false
    }}

// pion2 /////////////////////////
    else if(this.pion2.x < position_flux_v - 8 && (this.pion2.body.gravity.x < 0 || pion2_influx_gauche == true || pion2_influx_gauche2 == true)){
        // permet d'éviter de le conflit si un autre pion est à l'endroit ou doit reapparaitre le pion
        if(this.pion1.x > 550 && this.pion2.y < this.pion1.y + 62 && this.pion2.y > this.pion1.y - 62)
        {this.pion2.body.stop(); this.pion2.x = pion2_lastPos_x; this.pion2.body.gravity.x = gravity2_x; this.pion2.body.gravity.y = gravity2_y;
        contact_lim_gauche = true}
        else{
        this.pion2.x = position_flux_v + 64*7 + 8
        //this.pion2.body.velocity.x = 0
        this.pion2.body.gravity.x = gravity2_x
        contact_lim_gauche = false
    }}
    else if(this.pion2.x > position_flux_v + 64*7 + 8 && (this.pion2.body.gravity.x > 0 || pion2_influx_droite == true || pion2_influx_droite2 == true)){
        if(this.pion1.x < 210 && this.pion2.y < this.pion1.y + 62 && this.pion2.y > this.pion1.y - 62)
        {this.pion2.body.stop(); this.pion2.x = pion2_lastPos_x; this.pion2.body.gravity.x = gravity2_x; this.pion2.body.gravity.y = gravity2_y;
        contact_lim_droite = true}
        else{
        this.pion2.x = position_flux_v - 8
        //this.pion2.body.velocity.x = 0
       this.pion2.body.gravity.x = gravity2_x
       contact_lim_droite = false
    }}
    else if(this.pion2.y < position_flux_h && (this.pion2.body.gravity.y < 0 || pion2_influx_haut  == true|| pion2_influx_haut2 == true)){
        if(this.pion1.y > 550  && this.pion2.x < this.pion1.x + 62 && this.pion2.x > this.pion1.x - 62)
        {this.pion2.body.stop(); this.pion2.y = pion2_lastPos_y; this.pion2.body.gravity.y = gravity2_y; this.pion2.body.gravity.x = gravity2_x;
        contact_lim_haut = true} 
        else{
        this.pion2.y = position_flux_h + 64*7 + 8
        this.pion2.body.gravity.y = gravity2_y
        contact_lim_haut = false
    }}
    else if(this.pion2.y > position_flux_h + 64*7 + 8 && (this.pion2.body.gravity.y > 0 || pion2_influx_bas == true || pion2_influx_bas2 == true)){
        if(this.pion1.y < 210  && this.pion2.x < this.pion1.x + 62 && this.pion2.x > this.pion1.x - 62)
        {this.pion2.body.stop(); this.pion2.y= pion2_lastPos_y; this.pion2.body.gravity.y = gravity2_y; this.pion2.body.gravity.x = gravity2_x;
        contact_lim_bas = true} 
        else{
        this.pion2.y = position_flux_h
        this.pion2.body.gravity.y = gravity2_y
        contact_lim_bas = false
    }}

    else{
        contact_lim_gauche = false
        contact_lim_droite = false
        contact_lim_haut = false
        contact_lim_bas = false
    }

// pion objectif //////////////////////////
    if(this.obj.x < position_flux_v - 8){
        this.obj.x = position_flux_v + 64*7 + 8
        this.obj.body.gravity.x = gravity_obj_x 
    }
    else if(this.obj.x > position_flux_v + 64*7 + 8){
        this.obj.x = position_flux_v - 8
        this.obj.body.gravity.x = gravity_obj_x 
    }
    else if(this.obj.y < position_flux_h - 8){
        this.obj.y = position_flux_h + 64.1*7 + 8
        this.obj.body.gravity.y = gravity_obj_y 
    }
    else if(this.obj.y > position_flux_h + 64.1*7 + 8){
        this.obj.y = position_flux_h - 8
        this.obj.body.gravity.y = gravity_obj_y
    }


////////////////////////////////////////////////////////////////////
////////////////Creation flux de gravité individuel //////////////
/////////////////////////////////////////////////////////////////


////////// affichage image flux bleu si bouton est activé //////////////
if(test14 == true){this.fluxhaut_bleu1.alpha = 1;coeff5 =0;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false} //coeff sert pour la position du flux et des regles de mouvement
if(test24 == true){this.fluxhaut_bleu2.alpha = 1;coeff5 =1;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test34 == true){this.fluxhaut_bleu3.alpha = 1;coeff5 =2;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test44 == true){this.fluxhaut_bleu4.alpha = 1;coeff5 =3;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test54 == true){this.fluxhaut_bleu5.alpha = 1;coeff5 =4;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test64 == true){this.fluxhaut_bleu6.alpha = 1;coeff5 =5;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test74 == true){this.fluxhaut_bleu7.alpha = 1;coeff5 =6;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test84 == true){this.fluxhaut_bleu8.alpha = 1;coeff5 =7;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}

if(test15 == true){this.fluxbas_bleu1.alpha = 1;coeff6 =0;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false} //coeff sert pour la position du flux et des regles de mouvement
if(test25 == true){this.fluxbas_bleu2.alpha = 1;coeff6 =1;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test35 == true){this.fluxbas_bleu3.alpha = 1;coeff6 =2;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test45 == true){this.fluxbas_bleu4.alpha = 1;coeff6 =3;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test55 == true){this.fluxbas_bleu5.alpha = 1;coeff6 =4;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test65 == true){this.fluxbas_bleu6.alpha = 1;coeff6 =5;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test75 == true){this.fluxbas_bleu7.alpha = 1;coeff6 =6;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test85 == true){this.fluxbas_bleu8.alpha = 1;coeff6 =7;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}


if(test16 == true){this.fluxdroite_bleu1.alpha = 1;coeff7 =0;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false} //coeff sert pour la position du flux et des regles de mouvement
if(test26 == true){this.fluxdroite_bleu2.alpha = 1;coeff7 =1;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test36 == true){this.fluxdroite_bleu3.alpha = 1;coeff7 =2;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test46 == true){this.fluxdroite_bleu4.alpha = 1;coeff7 =3;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test56 == true){this.fluxdroite_bleu5.alpha = 1;coeff7 =4;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test66 == true){this.fluxdroite_bleu6.alpha = 1;coeff7 =5;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test76 == true){this.fluxdroite_bleu7.alpha = 1;coeff7 =6;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test86 == true){this.fluxdroite_bleu8.alpha = 1;coeff7 =7;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}

if(test17 == true){this.fluxgauche_bleu1.alpha = 1;coeff8 =0;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false} //coeff sert pour la position du flux et des regles de mouvement
if(test27 == true){this.fluxgauche_bleu2.alpha = 1;coeff8 =1;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test37 == true){this.fluxgauche_bleu3.alpha = 1;coeff8 =2;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test47 == true){this.fluxgauche_bleu4.alpha = 1;coeff8 =3;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test57 == true){this.fluxgauche_bleu5.alpha = 1;coeff8 =4;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test67 == true){this.fluxgauche_bleu6.alpha = 1;coeff8 =5;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test77 == true){this.fluxgauche_bleu7.alpha = 1;coeff8 =6;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test87 == true){this.fluxgauche_bleu8.alpha = 1;coeff8 =7;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}

////////// affichage image flux bleu si bouton est activé //////////////
if(test1 == true){this.fluxhaut_vert1.alpha = 1;coeff =0;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false} //coeff sert pour la position du flux et des regles de mouvement
if(test2 == true){this.fluxhaut_vert2.alpha = 1;coeff =1;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test3 == true){this.fluxhaut_vert3.alpha = 1;coeff =2;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test4 == true){this.fluxhaut_vert4.alpha = 1;coeff =3;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test5 == true){this.fluxhaut_vert5.alpha = 1;coeff =4;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test6 == true){this.fluxhaut_vert6.alpha = 1;coeff =5;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test7 == true){this.fluxhaut_vert7.alpha = 1;coeff =6;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test8 == true){this.fluxhaut_vert8.alpha = 1;coeff =7;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}

if(test12 == true){this.fluxbas_vert1.alpha = 1;coeff3 =0;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test22 == true){this.fluxbas_vert2.alpha = 1;coeff3 =1;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test32 == true){this.fluxbas_vert3.alpha = 1;coeff3 =2;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test42 == true){this.fluxbas_vert4.alpha = 1;coeff3 =3;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test52 == true){this.fluxbas_vert5.alpha = 1;coeff3 =4;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test62 == true){this.fluxbas_vert6.alpha = 1;coeff3 =5;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test72 == true){this.fluxbas_vert7.alpha = 1;coeff3 =6;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test82 == true){this.fluxbas_vert8.alpha = 1;coeff3 =7;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}        

if(test11 == true){this.fluxdroite_vert1.alpha = 1;coeff2 =0;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false} 
if(test21 == true){this.fluxdroite_vert2.alpha = 1;coeff2 =1;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test31 == true){this.fluxdroite_vert3.alpha = 1;coeff2 =2;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test41 == true){this.fluxdroite_vert4.alpha = 1;coeff2 =3;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test51 == true){this.fluxdroite_vert5.alpha = 1;coeff2 =4;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test61 == true){this.fluxdroite_vert6.alpha = 1;coeff2 =5;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test71 == true){this.fluxdroite_vert7.alpha = 1;coeff2 =6;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test81 == true){this.fluxdroite_vert8.alpha = 1;coeff2 =7;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}    

if(test13 == true){this.fluxgauche_vert1.alpha = 1;coeff4 =0;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false} 
if(test23 == true){this.fluxgauche_vert2.alpha = 1;coeff4 =1;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test33 == true){this.fluxgauche_vert3.alpha = 1;coeff4 =2;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test43 == true){this.fluxgauche_vert4.alpha = 1;coeff4 =3;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test53 == true){this.fluxgauche_vert5.alpha = 1;coeff4 =4;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test63 == true){this.fluxgauche_vert6.alpha = 1;coeff4 =5;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test73 == true){this.fluxgauche_vert7.alpha = 1;coeff4 =6;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}
if(test83 == true){this.fluxgauche_vert8.alpha = 1;coeff4 =7;change_flux_obj_1 == false;change_flux_obj_2 == false;change_flux_pion1_1 == false;change_flux_pion1_2 == false;change_flux_pion2_1 == false;change_flux_pion2_2 == false}  

///////// disparition image flux si bouton est désactivé //////////
if(test1 == false){this.fluxhaut_vert1.alpha = 0} 
if(test2 == false){this.fluxhaut_vert2.alpha = 0}
if(test3 == false){this.fluxhaut_vert3.alpha = 0}
if(test4 == false){this.fluxhaut_vert4.alpha = 0}
if(test5 == false){this.fluxhaut_vert5.alpha = 0}
if(test6 == false){this.fluxhaut_vert6.alpha = 0} 
if(test7 == false){this.fluxhaut_vert7.alpha = 0}
if(test8 == false){this.fluxhaut_vert8.alpha = 0}   

if(test12 == false){this.fluxbas_vert1.alpha = 0} 
if(test22 == false){this.fluxbas_vert2.alpha = 0}
if(test32 == false){this.fluxbas_vert3.alpha = 0}
if(test42 == false){this.fluxbas_vert4.alpha = 0}
if(test52 == false){this.fluxbas_vert5.alpha = 0}
if(test62 == false){this.fluxbas_vert6.alpha = 0} 
if(test72 == false){this.fluxbas_vert7.alpha = 0}
if(test82 == false){this.fluxbas_vert8.alpha = 0}   

if(test11 == false){this.fluxdroite_vert1.alpha = 0} 
if(test21 == false){this.fluxdroite_vert2.alpha = 0}
if(test31 == false){this.fluxdroite_vert3.alpha = 0}
if(test41 == false){this.fluxdroite_vert4.alpha = 0}
if(test51 == false){this.fluxdroite_vert5.alpha = 0}
if(test61 == false){this.fluxdroite_vert6.alpha = 0}
if(test71 == false){this.fluxdroite_vert7.alpha = 0}
if(test81 == false){this.fluxdroite_vert8.alpha = 0}   

if(test13 == false){this.fluxgauche_vert1.alpha = 0} 
if(test23 == false){this.fluxgauche_vert2.alpha = 0}
if(test33 == false){this.fluxgauche_vert3.alpha = 0}
if(test43 == false){this.fluxgauche_vert4.alpha = 0}
if(test53 == false){this.fluxgauche_vert5.alpha = 0}
if(test63 == false){this.fluxgauche_vert6.alpha = 0}
if(test73 == false){this.fluxgauche_vert7.alpha = 0}
if(test83 == false){this.fluxgauche_vert8.alpha = 0}   


if(test14 == false){this.fluxhaut_bleu1.alpha = 0} 
if(test24 == false){this.fluxhaut_bleu2.alpha = 0}
if(test34 == false){this.fluxhaut_bleu3.alpha = 0}
if(test44 == false){this.fluxhaut_bleu4.alpha = 0}
if(test54 == false){this.fluxhaut_bleu5.alpha = 0}
if(test64 == false){this.fluxhaut_bleu6.alpha = 0} 
if(test74 == false){this.fluxhaut_bleu7.alpha = 0}
if(test84 == false){this.fluxhaut_bleu8.alpha = 0}  

if(test15 == false){this.fluxbas_bleu1.alpha = 0} 
if(test25 == false){this.fluxbas_bleu2.alpha = 0}
if(test35 == false){this.fluxbas_bleu3.alpha = 0}
if(test45 == false){this.fluxbas_bleu4.alpha = 0}
if(test55 == false){this.fluxbas_bleu5.alpha = 0}
if(test65 == false){this.fluxbas_bleu6.alpha = 0} 
if(test75 == false){this.fluxbas_bleu7.alpha = 0}
if(test85 == false){this.fluxbas_bleu8.alpha = 0}  

if(test16 == false){this.fluxdroite_bleu1.alpha = 0} 
if(test26 == false){this.fluxdroite_bleu2.alpha = 0}
if(test36 == false){this.fluxdroite_bleu3.alpha = 0}
if(test46 == false){this.fluxdroite_bleu4.alpha = 0}
if(test56 == false){this.fluxdroite_bleu5.alpha = 0}
if(test66 == false){this.fluxdroite_bleu6.alpha = 0} 
if(test76 == false){this.fluxdroite_bleu7.alpha = 0}
if(test86 == false){this.fluxdroite_bleu8.alpha = 0}  

if(test17 == false){this.fluxgauche_bleu1.alpha = 0} 
if(test27 == false){this.fluxgauche_bleu2.alpha = 0}
if(test37 == false){this.fluxgauche_bleu3.alpha = 0}
if(test47 == false){this.fluxgauche_bleu4.alpha = 0}
if(test57 == false){this.fluxgauche_bleu5.alpha = 0}
if(test67 == false){this.fluxgauche_bleu6.alpha = 0} 
if(test77 == false){this.fluxgauche_bleu7.alpha = 0}
if(test87 == false){this.fluxgauche_bleu8.alpha = 0}  

//if(contact_lim_haut == true){debug3 = true}


if(debug1 == true){
    //this.fluxgauche_vert1.alpha = 1;  
   // this.fluxgauche_vert8.alpha = 0;
   // this.fluxgauche_vert1.alpha = 0;
   // this.fluxgauche_vert2.alpha = 0
}
//else{this.fluxgauche_vert1.alpha = 0}
if(debug2 == true){
   //this.fluxgauche_vert2.alpha = 1;  
   //this.fluxgauche_vert7.alpha = 0;
   //this.fluxgauche_vert1.alpha = 0;
  // this.fluxgauche_vert2.alpha = 0
}
//else{this.fluxgauche_vert2.alpha = 0}

if(contact_lim_gauche == true){
    //this.fluxgauche_vert3.alpha = 1;
}
//else{this.fluxgauche_vert3.alpha = 0}
if(debug4 == true){
   // this.fluxgauche_vert4.alpha = 1;  
   // this.fluxgauche_vert8.alpha = 0;
   // this.fluxgauche_vert1.alpha = 0;
   // this.fluxgauche_vert2.alpha = 0
}
//else{this.fluxgauche_vert4.alpha = 0}


///////////////////////// test si un flux est activé ////////////////////////
if(test1 == true || test2 == true || test3 == true || test4 == true || test5 == true || test6 == true || test7 == true || test8 == true){test_haut = true} else{test_haut = false}
if(test14 == true || test24 == true || test34 == true || test44 == true || test54 == true || test64 == true || test74 == true || test84 == true){test_haut2 = true} else{test_haut2 = false}

if(test12 == true || test22 == true || test32 == true || test42 == true || test52 == true || test62 == true || test72 == true || test82 == true){test_bas = true} else{test_bas = false}
if(test15 == true || test25 == true || test35 == true || test45 == true || test55 == true || test65 == true || test75 == true || test85 == true){test_bas2 = true} else{test_bas2 = false}

if(test11 == true || test21 == true || test31 == true || test41 == true || test51 == true || test61 == true || test71 == true || test81 == true){test_droite = true} else{test_droite = false}
if(test16 == true || test26 == true || test36 == true || test46 == true || test56 == true || test66 == true || test76 == true || test86 == true){test_droite2 = true} else{test_droite2 = false}

if(test13 == true || test23 == true || test33 == true || test43 == true || test53 == true || test63 == true || test73 == true || test83 == true){test_gauche = true} else{test_gauche = false}
if(test17 == true || test27 == true || test37 == true || test47 == true || test57 == true || test67 == true || test77 == true || test87 == true){test_gauche2 = true} else{test_gauche2 = false}


////////////////////////////////////////////////////////////////////////////////////////
//////////////// test présence dans les différents flux instant t ////////////////////
////////////////////////////////////////////////////////////////////////////////////

// pion flux haut
if(this.pion1.x < (position_flux_v + 12 + coeff*64)  && this.pion1.x > (position_flux_v - 12 + coeff*64) && test_haut == true && pion1_flux_off == false)
{pion1_influx_haut = true} else{pion1_influx_haut = false}
if(this.pion1.x < (position_flux_v + 12 + coeff5*64)  && this.pion1.x > (position_flux_v - 12 + coeff5*64) && test_haut2 == true && pion1_flux2_off == false)
{pion1_influx_haut2 = true} else{pion1_influx_haut2 = false}

if(this.pion2.x < (position_flux_v + 12 + coeff*64)  && this.pion2.x > (position_flux_v - 12 + coeff*64) && test_haut == true && pion2_flux_off == false)
{pion2_influx_haut = true} else{pion2_influx_haut = false}
if(this.pion2.x < (position_flux_v + 12 + coeff5*64)  && this.pion2.x > (position_flux_v - 12 + coeff5*64) && test_haut2 == true && pion2_flux2_off == false)
{pion2_influx_haut2 = true} else{pion2_influx_haut2 = false}

if(this.obj.x < (position_flux_v + 12 + coeff*64)  && this.obj.x > (position_flux_v - 12 + coeff*64) && test_haut == true && obj_flux_off == false)
{obj_influx_haut = true} else{obj_influx_haut = false}
if(this.obj.x < (position_flux_v + 12 + coeff5*64)  && this.obj.x > (position_flux_v - 12 + coeff5*64) && test_haut2 == true && obj_flux2_off == false)
{obj_influx_haut2 = true} else{obj_influx_haut2 = false}

// pion flux bas
if(this.pion1.x < (position_flux_v + 12 + coeff3*64)  && this.pion1.x > (position_flux_v - 12 + coeff3*64) && test_bas == true && pion1_flux_off == false){pion1_influx_bas = true}
else{pion1_influx_bas = false}
if(this.pion1.x < (position_flux_v + 12 + coeff6*64)  && this.pion1.x > (position_flux_v - 12 + coeff6*64) && test_bas2 == true && pion1_flux2_off == false){pion1_influx_bas2 = true}
else{pion1_influx_bas2 = false}

if(this.pion2.x < (position_flux_v + 12 + coeff3*64)  && this.pion2.x > (position_flux_v - 12 + coeff3*64) && test_bas == true && pion2_flux_off == false){pion2_influx_bas = true}
else{pion2_influx_bas = false}
if(this.pion2.x < (position_flux_v + 12 + coeff6*64)  && this.pion2.x > (position_flux_v - 12 + coeff6*64) && test_bas2 == true && pion2_flux2_off == false){pion2_influx_bas2 = true}
else{pion2_influx_bas2 = false}

if(this.obj.x < (position_flux_v + 12 + coeff3*64)  && this.obj.x > (position_flux_v - 12 + coeff3*64) && test_bas == true && obj_flux_off == false){obj_influx_bas = true}
else{obj_influx_bas = false}
if(this.obj.x < (position_flux_v + 12 + coeff6*64)  && this.obj.x > (position_flux_v - 12 + coeff6*64) && test_bas2 == true && obj_flux2_off == false){obj_influx_bas2 = true}
else{obj_influx_bas2 = false}

// pion flux droite
if((this.pion1.y < (position_flux_h + 7 + 12 + coeff2*64))  && (this.pion1.y > (position_flux_h + 7 - 12 + coeff2*64)) && test_droite == true && pion1_flux_off == false){pion1_influx_droite = true}
else{pion1_influx_droite = false}
if((this.pion1.y < (position_flux_h + 7 + 12 + coeff7*64))  && (this.pion1.y > (position_flux_h + 7 - 12 + coeff7*64)) && test_droite2 == true && pion1_flux2_off == false){pion1_influx_droite2 = true}
else{pion1_influx_droite2 = false}

if((this.pion2.y < (position_flux_h + 7 + 12 + coeff2*64))  && (this.pion2.y > (position_flux_h + 7 - 12 + coeff2*64)) && test_droite == true && pion2_flux_off == false){pion2_influx_droite = true}
else{pion2_influx_droite = false}
if((this.pion2.y < (position_flux_h + 7 + 12 + coeff7*64))  && (this.pion2.y > (position_flux_h + 7 - 12 + coeff7*64)) && test_droite2 == true && pion2_flux2_off == false){pion2_influx_droite2 = true}
else{pion2_influx_droite2 = false}

if((this.obj.y < (position_flux_h + 12 + coeff2*64 -1))  && (this.obj.y > (position_flux_h - 12 + coeff2*64 -1)) && test_droite == true && obj_flux_off == false){obj_influx_droite = true}
else{obj_influx_droite = false}
if((this.obj.y < (position_flux_h + 12 + coeff7*64 -1))  && (this.obj.y > (position_flux_h - 12 + coeff7*64 -1)) && test_droite2 == true && obj_flux2_off == false){obj_influx_droite2 = true}
else{obj_influx_droite2 = false}

// pion flux gauche
if((this.pion1.y < (position_flux_h +7 + 12 + coeff4*64))  && (this.pion1.y > (position_flux_h +7 - 12 + coeff4*64)) && test_gauche == true && pion1_flux_off == false){pion1_influx_gauche = true}
else{pion1_influx_gauche = false}
if((this.pion1.y < (position_flux_h +7 + 12 + coeff8*64))  && (this.pion1.y > (position_flux_h +7 - 12 + coeff8*64)) && test_gauche2 == true && pion1_flux2_off == false){pion1_influx_gauche2 = true}
else{pion1_influx_gauche2 = false}

if((this.pion2.y < (position_flux_h +7 + 12 + coeff4*64))  && (this.pion2.y > (position_flux_h +7 - 12 + coeff4*64)) && test_gauche == true && pion2_flux_off == false){pion2_influx_gauche = true}
else{pion2_influx_gauche = false}
if((this.pion2.y < (position_flux_h +7 + 12 + coeff8*64))  && (this.pion2.y > (position_flux_h +7 - 12 + coeff8*64)) && test_gauche2 == true && pion2_flux2_off == false){pion2_influx_gauche2 = true}
else{pion2_influx_gauche2 = false}

if((this.obj.y < (position_flux_h + 12 + coeff4*64 -1))  && (this.obj.y > (position_flux_h - 12 + coeff4*64 -1)) && test_gauche == true && obj_flux_off == false){obj_influx_gauche = true && obj_flux_off == false}
else{obj_influx_gauche = false}
if((this.obj.y < (position_flux_h + 12 + coeff8*64 -1))  && (this.obj.y > (position_flux_h - 12 + coeff8*64 -1)) && test_gauche2 == true && obj_flux2_off == false){obj_influx_gauche2 = true && obj_flux2_off == false}
else{obj_influx_gauche2 = false}

////////////////////////////////////////////////////////////////////////////////////////
/////////////// test présence dans les différents flux  intant t-1 ///////////////////
////////////////////////////////////////////////////////////////////////////////////

// pion flux haut
if(pion1_lastPos_x < (position_flux_v + 12 + coeff*64)  && pion1_lastPos_x > (position_flux_v - 12 + coeff*64)){pion1_wasinflux_haut = true}
else{pion1_wasinflux_haut = false}
if(pion1_lastPos_x < (position_flux_v + 12 + coeff5*64)  && pion1_lastPos_x > (position_flux_v - 12 + coeff5*64)){pion1_wasinflux_haut2 = true}
else{pion1_wasinflux_haut2 = false}

if(pion2_lastPos_x < (position_flux_v + 12 + coeff*64)  && pion2_lastPos_x > (position_flux_v - 12 + coeff*64)){pion2_wasinflux_haut = true}
else{pion2_wasinflux_haut = false}
if(pion2_lastPos_x < (position_flux_v + 12 + coeff5*64)  && pion2_lastPos_x > (position_flux_v - 12 + coeff5*64)){pion2_wasinflux_haut2 = true}
else{pion2_wasinflux_haut2 = false}

if(obj_lastPos_x < (position_flux_v + 12 + coeff*64)  && obj_lastPos_x> (position_flux_v - 12 + coeff*64)){obj_wasinflux_haut = true}
else{obj_wasinflux_haut = false}
if(obj_lastPos_x < (position_flux_v + 12 + coeff5*64)  && obj_lastPos_x> (position_flux_v - 12 + coeff5*64)){obj_wasinflux_haut2 = true}
else{obj_wasinflux_haut2 = false}

// pion flux bas
if(pion1_lastPos_x < (position_flux_v + 12 + coeff3*64)  && pion1_lastPos_x > (position_flux_v - 12 + coeff3*64)){pion1_wasinflux_bas = true}
else{pion1_wasinflux_bas = false}
if(pion1_lastPos_x < (position_flux_v + 12 + coeff6*64)  && pion1_lastPos_x > (position_flux_v - 12 + coeff6*64)){pion1_wasinflux_bas2 = true}
else{pion1_wasinflux_bas2 = false}

if(pion2_lastPos_x < (position_flux_v + 12 + coeff3*64)  && pion2_lastPos_x > (position_flux_v - 12 + coeff3*64)){pion2_wasinflux_bas = true}
else{pion2_wasinflux_bas = false}
if(pion2_lastPos_x < (position_flux_v + 12 + coeff6*64)  && pion2_lastPos_x > (position_flux_v - 12 + coeff6*64)){pion2_wasinflux_bas2 = true}
else{pion2_wasinflux_bas2 = false}

if(obj_lastPos_x < (position_flux_v + 12 + coeff3*64)  && obj_lastPos_x> (position_flux_v - 12 + coeff3*64)){obj_wasinflux_bas = true}
else{obj_wasinflux_bas = false}
if(obj_lastPos_x < (position_flux_v + 12 + coeff6*64)  && obj_lastPos_x> (position_flux_v - 12 + coeff6*64)){obj_wasinflux_bas2 = true}
else{obj_wasinflux_bas2 = false}

// pion flux droite
if((pion1_lastPos_y < (position_flux_h + 7 + 12 + coeff2*64))  && (pion1_lastPos_y > (position_flux_h - 7 - 12 + coeff2*64))){pion1_wasinflux_droite = true}
else{pion1_wasinflux_droite = false}
if((pion1_lastPos_y < (position_flux_h + 7 + 12 + coeff7*64))  && (pion1_lastPos_y > (position_flux_h - 7 - 12 + coeff7*64))){pion1_wasinflux_droite2 = true}
else{pion1_wasinflux_droite2 = false}

if((pion2_lastPos_y < (position_flux_h + 7 + 12 + coeff2*64))  && (pion2_lastPos_y > (position_flux_h +7 - 12 + coeff2*64))){pion2_wasinflux_droite = true}
else{pion2_wasinflux_droite = false}
if((pion2_lastPos_y < (position_flux_h + 7 + 12 + coeff7*64))  && (pion2_lastPos_y > (position_flux_h +7 - 12 + coeff7*64))){pion2_wasinflux_droite2 = true}
else{pion2_wasinflux_droite2 = false}

if((obj_lastPos_y < (position_flux_h + 12 + coeff2*64 -1))  && (obj_lastPos_y > (position_flux_h - 12 + coeff2*64 - 1))){obj_wasinflux_droite = true}
else{obj_wasinflux_droite = false}
if((obj_lastPos_y < (position_flux_h + 12 + coeff7*64 -1))  && (obj_lastPos_y > (position_flux_h - 12 + coeff7*64 - 1))){obj_wasinflux_droite2 = true}
else{obj_wasinflux_droite2 = false}

// pion flux gauche
if((pion1_lastPos_y < (position_flux_h +7 + 12 + coeff4*64))  && (pion1_lastPos_y > (position_flux_h +7 - 12 + coeff4*64))){pion1_wasinflux_gauche = true}
else{pion1_wasinflux_gauche = false}
if((pion1_lastPos_y < (position_flux_h +7 + 12 + coeff8*64))  && (pion1_lastPos_y > (position_flux_h +7 - 12 + coeff8*64))){pion1_wasinflux_gauche2 = true}
else{pion1_wasinflux_gauche2 = false}

if((pion2_lastPos_y < (position_flux_h +7 + 12 + coeff4*64))  && (pion2_lastPos_y > (position_flux_h +7 - 12 + coeff4*64))){pion2_wasinflux_gauche = true}
else{pion2_wasinflux_gauche = false}
if((pion2_lastPos_y < (position_flux_h +7 + 12 + coeff8*64))  && (pion2_lastPos_y > (position_flux_h +7 - 12 + coeff8*64))){pion2_wasinflux_gauche2 = true}
else{pion2_wasinflux_gauche2 = false}

if((obj_lastPos_y < (position_flux_h + 12 + coeff4*64 -1))  && (obj_lastPos_y > (position_flux_h - 12 + coeff4*64 -1))){obj_wasinflux_gauche = true}
else{obj_wasinflux_gauche = false}
if((obj_lastPos_y < (position_flux_h + 12 + coeff8*64 -1))  && (obj_lastPos_y > (position_flux_h - 12 + coeff8*64 -1))){obj_wasinflux_gauche2 = true}
else{obj_wasinflux_gauche2 = false}




if(pion2_influx_droite == true){
   // this.fluxgauche_vert3.alpha = 1;  
   //this.fluxgauche_vert4.alpha = 0; 
   //this.fluxgauche_vert7.alpha = 0;
   //this.fluxgauche_vert2.alpha = 0
}
if(pion2_influx_droite == false){
  //this.fluxgauche_vert4.alpha = 1;  
  //this.fluxgauche_vert3.alpha = 0;
  //this.fluxgauche_vert1.alpha = 0;
  //this.fluxgauche_vert7.alpha = 0
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// fonction mouvement dans les flux de gravité vertical vert vers le haut //////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

if(obj_influx_haut == true){ 
    //fonction si changement de flux de gravité
    if((obj_influx_droite2 == true || obj_influx_gauche2 == true) && obj_wasinflux_haut == true && change_flux_obj_2 == false)
    {this.obj.body.stop(); change_flux_obj_1 = true}
    else{
        //permet de centrer le mouvement dans le flux (s'applique qu'une fois)
        if(obj_wasinflux_haut == false)
        {this.obj.x = position_flux_v + coeff*64}

    //fonction mouvement classique
    this.obj.body.velocity.x = 0
    this.obj.body.gravity.y = -80
    this.obj.body.gravity.x = 0
    }
}

if(pion1_influx_haut == true){
    if((pion1_influx_droite2 == true || pion1_influx_gauche2 == true) && pion1_wasinflux_haut && change_flux_pion1_2 == false)
    {this.pion1.body.stop(); change_flux_pion1_1 = true}
    else{
        if(pion1_wasinflux_haut == false)
        {this.pion1.x = position_flux_v  + coeff*64}

        this.pion1.body.gravity.x = 0
        this.pion1.body.gravity.y = -80
        this.pion1.body.velocity.x = 0
    }
}

if(pion2_influx_haut == true){ 
    if((pion2_influx_droite2 == true || pion2_influx_gauche2 == true) && pion2_wasinflux_haut&& change_flux_pion2_2 == false)
    {this.pion2.body.stop(); change_flux_pion2_1 = true}
    else{
        if(pion2_wasinflux_haut == false)
        {this.pion2.x = position_flux_v  + coeff*64}
   // this.pion2.x = position_flux_v + coeff*64  
    this.pion2.body.gravity.x = 0
    this.pion2.body.gravity.y = -80
    this.pion2.body.velocity.x = 0 
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////
////////////// fonction mouvement dans les flux de gravité vertical vert vers le bas //////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

if(obj_influx_bas == true){ 
    if((obj_influx_droite2 == true || obj_influx_gauche2 == true) && obj_wasinflux_bas && change_flux_obj_2 == false)
    {this.obj.body.stop(); change_flux_obj_1 = true}
    else{
        if(obj_wasinflux_bas == false){
        this.obj.x = position_flux_v + coeff3*64}
        this.obj.body.velocity.x = 0
        this.obj.body.gravity.y = 80
        //this.obj.body.velocity.y = velocity_speed
        this.obj.body.gravity.x = 0
    }
}

if(pion1_influx_bas == true) {
    if((pion1_influx_droite2 == true || pion1_influx_gauche2 == true) && pion1_wasinflux_bas && change_flux_pion1_2 == false)
    {this.pion1.body.stop(); change_flux_pion1_1 = true}
    else{
        if(pion1_wasinflux_bas == false)
        {this.pion1.x = position_flux_v  + coeff3*64}
    this.pion1.body.gravity.x = 0
    this.pion1.body.gravity.y = 80
    this.pion1.body.velocity.x = 0
    }
}   

if(pion2_influx_bas == true){ 
    if((pion2_influx_droite2 == true || pion2_influx_gauche2 == true) && pion2_wasinflux_bas && change_flux_pion2_2 == false)
    {this.pion2.body.stop(); change_flux_pion2_1 = true}
    else{
        if(pion2_wasinflux_bas == false)
        {this.pion2.x = position_flux_v  + coeff3*64}
    this.pion2.body.gravity.x = 0
    this.pion2.body.gravity.y = 80
    this.pion2.body.velocity.x = 0
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// fonction mouvement dans les flux de gravité horizontal vert vers la droite /////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

if(obj_influx_droite == true){ 
    if((obj_influx_haut2 == true || obj_influx_bas2 == true) && obj_wasinflux_droite && change_flux_obj_1 == false)
    {this.obj.body.stop(); change_flux_obj_2 = true}
    else{
        if(obj_wasinflux_droite == false){
        this.obj.y = position_flux_h + coeff2*64 -1}

        this.obj.body.velocity.y = 0
        this.obj.body.gravity.x = 80 
        this.obj.body.gravity.y = 0
    }
}

if(pion1_influx_droite ==true){ 
    if((pion1_influx_haut2 == true || pion1_influx_bas2 == true) && pion1_wasinflux_droite && change_flux_pion1_1 == false)
    {this.pion1.body.stop(); change_flux_pion1_2 = true}
    else{
        if(pion1_wasinflux_droite == false)
        {this.pion1.y = position_flux_h  + coeff2*64 +7}
    this.pion1.body.gravity.x = 80
    this.pion1.body.gravity.y = 0
    this.pion1.body.velocity.y = 0
    }
}

if(pion2_influx_droite == true){ 
    if((pion2_influx_haut2 == true || pion2_influx_bas2 == true) && pion2_wasinflux_droite && change_flux_pion2_1 == false)
    {this.pion2.body.stop(); change_flux_pion2_2 = true}
    else{
        if(pion2_wasinflux_droite == false)
        {this.pion2.y = position_flux_h  + coeff2*64 +7}
    this.pion2.body.gravity.x = 80
    this.pion2.body.gravity.y = 0
    this.pion2.body.velocity.y = 0
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// fonction mouvement dans les flux de gravité horizontal vert vers la gauche ////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

if(obj_influx_gauche == true){ 
    if((obj_influx_haut2 == true || obj_influx_bas2 == true) && obj_wasinflux_gauche && change_flux_obj_1 == false)
    {this.obj.body.stop(); change_flux_obj_2 = true}
    else{
        if(obj_wasinflux_gauche == false){
        this.obj.y = position_flux_h + coeff4*64 -1}
        this.obj.body.velocity.y = 0
        this.obj.body.gravity.x = -80 
        this.obj.body.gravity.y = 0
    }
}

if(pion1_influx_gauche == true){ 
    if((pion1_influx_haut2 == true || pion1_influx_bas2 == true) && pion1_wasinflux_gauche && change_flux_pion1_1 == false)
    {this.pion1.body.stop(); change_flux_pion1_2 = true}
    else{
        if(pion1_wasinflux_gauche == false)
        {this.pion1.y = position_flux_h  + coeff4*64 +7}
    this.pion1.body.gravity.x = -80
    this.pion1.body.gravity.y = 0
    this.pion1.body.velocity.y = 0
    }
}

if(pion2_influx_gauche == true){ 
    if((pion2_influx_haut2 == true || pion2_influx_bas2 == true) && pion2_wasinflux_gauche && change_flux_pion2_1 == false)
    {this.pion2.body.stop(); change_flux_pion2_2 = true}
    else{
        if(pion2_wasinflux_gauche == false)
        {this.pion2.y = position_flux_h  + coeff4*64 +7}
    this.pion2.body.gravity.x = -80
    this.pion2.body.gravity.y = 0
    this.pion2.body.velocity.y = 0
    }
}    




/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// fonction mouvement dans les flux de gravité vertical bleu vers le haut //////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

if(obj_influx_haut2 == true){ 
    if((obj_influx_droite == true || obj_influx_gauche == true) && obj_wasinflux_haut2 == true && change_flux_obj_2 == false)
    {this.obj.body.stop(); change_flux_obj_1 = true}
    else{
        if(obj_wasinflux_haut2 == false)
        {this.obj.x = position_flux_v + coeff5*64}

    this.obj.body.velocity.x = 0
    this.obj.body.gravity.y = -80
    this.obj.body.gravity.x = 0
    }
}

if(pion1_influx_haut2 == true){
    if((pion1_influx_droite == true || pion1_influx_gauche == true) && pion1_wasinflux_haut2 && change_flux_pion1_2 == false)
    {this.pion1.body.stop(); change_flux_pion1_1 = true}
    else{
        if(pion1_wasinflux_haut2 == false)
        {this.pion1.x = position_flux_v  + coeff5*64}

        this.pion1.body.gravity.x = 0
        this.pion1.body.gravity.y = -80
        this.pion1.body.velocity.x = 0
    }
}

if(pion2_influx_haut2 == true){ 
    if((pion2_influx_droite == true || pion2_influx_gauche == true) && pion2_wasinflux_haut2 && change_flux_pion2_2 == false)
    {this.pion2.body.stop(); change_flux_pion2_1 = true}
    else{
        if(pion2_wasinflux_haut2 == false)
        {this.pion2.x = position_flux_v  + coeff5*64} 
    this.pion2.body.gravity.x = 0
    this.pion2.body.gravity.y = -80
    this.pion2.body.velocity.x = 0 
}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////// fonction mouvement dans les flux de gravité vertical bleu vers le bas //////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

if(obj_influx_bas2 == true){ 
    if((obj_influx_droite == true || obj_influx_gauche == true) && obj_wasinflux_bas2 && change_flux_obj_2 == false)
    {this.obj.body.stop(); change_flux_obj_1 = true}
    else{
        if(obj_wasinflux_bas2 == false){
        this.obj.x = position_flux_v + coeff6*64}

        this.obj.body.velocity.x = 0
        this.obj.body.gravity.y = 80
        this.obj.body.gravity.x = 0
    }
}

if(pion1_influx_bas2 == true) {
    if((pion1_influx_droite == true || pion1_influx_gauche == true) && pion1_wasinflux_bas2 && change_flux_pion1_2 == false)
    {this.pion1.body.stop(); change_flux_pion1_1 = true}
    else{
        if(pion1_wasinflux_bas2 == false)
        {this.pion1.x = position_flux_v  + coeff6*64}
    this.pion1.body.gravity.x = 0
    this.pion1.body.gravity.y = 80
    this.pion1.body.velocity.x = 0
    }
}   

if(pion2_influx_bas2 == true){ 
    if((pion2_influx_droite == true || pion2_influx_gauche == true) && pion2_wasinflux_bas2 && change_flux_pion2_2 == false)
    {this.pion2.body.stop(); change_flux_pion2_1 = true}
    else{
        if(pion2_wasinflux_bas2 == false)
        {this.pion2.x = position_flux_v  + coeff6*64}
    this.pion2.body.gravity.x = 0
    this.pion2.body.gravity.y = 80
    this.pion2.body.velocity.x = 0
    }   
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// fonction mouvement dans les flux de gravité horizontal bleu vers la droite /////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

if(obj_influx_droite2 == true){ 
    if((obj_influx_haut == true || obj_influx_bas == true) && obj_wasinflux_droite2 && change_flux_obj_1 == false)
    {this.obj.body.stop(); change_flux_obj_2 = true}
    else{
        if(obj_wasinflux_droite2 == false){
        this.obj.y = position_flux_h + coeff7*64 -1}

        this.obj.body.velocity.y = 0
        this.obj.body.gravity.x = 80 
        this.obj.body.gravity.y = 0
    }
}

if(pion1_influx_droite2 ==true){ 
    if((pion1_influx_haut == true || pion1_influx_bas == true) && pion1_wasinflux_droite2 && change_flux_pion1_1 == false)
    {this.pion1.body.stop(); change_flux_pion1_2 = true}
    else{
        if(pion1_wasinflux_droite2 == false)
        {this.pion1.y = position_flux_h  + coeff7*64 +7}
    this.pion1.body.gravity.x = 80
    this.pion1.body.gravity.y = 0
    this.pion1.body.velocity.y = 0
    }
}

if(pion2_influx_droite2 == true){ 
    if((pion2_influx_haut == true || pion2_influx_bas == true) && pion2_wasinflux_droite2 && change_flux_pion2_1 == false)
    {this.pion2.body.stop(); change_flux_pion2_2 = true}
    else{
        if(pion2_wasinflux_droite2 == false)
        {this.pion2.y = position_flux_h  + coeff7*64 +7}
    this.pion2.body.gravity.x = 80
    this.pion2.body.gravity.y = 0
    this.pion2.body.velocity.y = 0
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// fonction mouvement dans les flux de gravité horizontal bleu vers la gauche ////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

if(obj_influx_gauche2 == true){ 
    if((obj_influx_haut == true || obj_influx_bas == true) && obj_wasinflux_gauche2 && change_flux_obj_1 == false)
    {this.obj.body.stop(); change_flux_obj_2 = true}
    else{
        if(obj_wasinflux_gauche2 == false){
        this.obj.y = position_flux_h + coeff8 *64 -1}
        this.obj.body.velocity.y = 0
        this.obj.body.gravity.x = -80 
        this.obj.body.gravity.y = 0
    }
}

if(pion1_influx_gauche2 == true){ 
    if((pion1_influx_haut == true || pion1_influx_bas == true) && pion1_wasinflux_gauche2 && change_flux_pion1_1 == false)
    {this.pion1.body.stop(); change_flux_pion1_2 = true}
    else{
        if(pion1_wasinflux_gauche2 == false)
        {this.pion1.y = position_flux_h  + coeff8 *64 +7}
    this.pion1.body.gravity.x = -80
    this.pion1.body.gravity.y = 0
    this.pion1.body.velocity.y = 0
    }
}

if(pion2_influx_gauche2 == true){ 
    if((pion2_influx_haut == true || pion2_influx_bas == true) && pion2_wasinflux_gauche2 && change_flux_pion2_1 == false)
    {this.pion2.body.stop(); change_flux_pion2_2 = true}
    else{
        if(pion2_wasinflux_gauche2 == false)
        {this.pion2.y = position_flux_h  + coeff8 *64 +7}
    this.pion2.body.gravity.x = -80
    this.pion2.body.gravity.y = 0
    this.pion2.body.velocity.y = 0
    }
}    


////////////////////////////////////////////////////////////////////
////////// conditions mouvement - autoaisation commande  /////////
////////////////////////////////////////////////////////////////

if(Math.abs(this.pion1.body.velocity.x) < 12 && Math.abs(this.pion1.body.velocity.y) < 12 && Math.abs(this.pion2.body.velocity.x) < 12 && Math.abs(this.pion2.body.velocity.y) < 12 && Math.abs(this.obj.body.velocity.x) < 12 && Math.abs(this.obj.body.velocity.y) < 12){
    mouvement = false
}

else {
   mouvement =  true   
}



// mémorise les anciennes positions des pions --> sert à gérer les fonctions de mouvement dans les flux
pion1_lastPos_x = this.pion1.x;
pion1_lastPos_y = this.pion1.y;
pion2_lastPos_x = this.pion2.x;
pion2_lastPos_y = this.pion2.y;
obj_lastPos_x = this.obj.x;
obj_lastPos_y = this.obj.y;

//mémorise la direction de gravité précédente --> permet de gérer la règle 1 

test_was_right = test_right    
test_was_left = test_left
test_was_up = test_up 
test_was_down = test_down

no_tour_was = no_tour


////////////////////////////////////////////////////////////////////
//////////////// fonction victoire  /////////////////////////////
////////////////////////////////////////////////////////////////

//////////////// condition victoire  /////////////////////////////
if((Math.abs(this.pion1.x - this.obj.x) < 10 && Math.abs(this.pion1.y - 9 - this.obj.y) < 10)){
    victoire_joueur_1 = true
}

if((Math.abs(this.pion2.x - this.obj.x) < 10 && Math.abs(this.pion2.y - 9 - this.obj.y) < 10)){
    victoire_joueur_2 = true
}

////////////////// actions victoire  /////////////////////////////
if(victoire_joueur_1 == true){
//annule toute la physique sur les pions
    this.obj.x = this.pion1.x
    this.obj.y = this.pion1.y - 9
    this.pion1.body.stop()
    this.pion2.body.stop()
    this.obj.body.stop()
    this.pion1.body.gravity.x = 0
    this.pion1.body.gravity.y = 0
    this.pion2.body.gravity.x = 0
    this.pion2.body.gravity.y = 0
    this.obj.body.gravity.x = 0
    this.obj.body.gravity.y = 0

    pion1_flux_off = true
    pion1_flux2_off = true
    pion2_flux_off = true
    pion2_flux2_off = true
    obj_flux_off = true
    obj_flux2_off = true

//annule la possibilité de changer de gravité ou de mettre des nouveaux flux
    tour_bleu = false
    tour_vert = false
    test_right = true
    test_left = true
    test_down = true
    test_up = true

// text victoire
    this.text_vict_bleu.setVisible(true)
    this.text_joueur_bleu.setVisible(false)
    this.text_joueur_vert.setVisible(false)


// restart game ////a
    this.restart_logo.alpha = 1
    if(restart_game == true){
        this.registry.destroy(); // destroy registry
        this.events.off();// disable all active events
        this.scene.restart();// restart current scene
    }
}


if(victoire_joueur_2 == true){
    this.obj.x = this.pion2.x
    this.obj.y = this.pion2.y - 9
    this.pion1.body.stop()
    this.pion2.body.stop()
    this.obj.body.stop()
    this.pion1.body.gravity.x = 0
    this.pion1.body.gravity.y = 0
    this.pion2.body.gravity.x = 0
    this.pion2.body.gravity.y = 0
    this.obj.body.gravity.x = 0
    this.obj.body.gravity.y = 0

    pion1_flux_off = true
    pion1_flux2_off = true
    pion2_flux_off = true
    pion2_flux2_off = true
    obj_flux_off = true
    obj_flux2_off = true

    tour_bleu = false
    tour_vert = false
    test_right = true
    test_left = true
    test_down = true
    test_up = true

    this.text_joueur_bleu.setVisible(false)
    this.text_joueur_vert.setVisible(false)
    this.text_vict_vert.setVisible(true)

    // restart game ////a
    this.restart_logo.alpha = 1
    if(restart_game == true){
        this.registry.destroy(); // destroy registry
        this.events.off();// disable all active events
        this.scene.restart();// restart current scene
        //this.scene.start('scene_menu')
    }

   
    
 





//
}


////////////////////////////////////////////////////////////////////
//////////////// résolution cas de conflit ///////////////////////
/////////////////////////////////////////////////////////////////            
    


} //fin du else jeu

    

//////// fin programme //////////////////////////
}


}
