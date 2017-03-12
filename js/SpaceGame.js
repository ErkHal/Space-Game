/*
#####################################################################################################################################################
                                                                                                                                                    #
                                                                                                                                                    #
    Written by Erkki Halinen                                                                                                                        #
    for a small game project in 2017.                                                                                                               #
                                                                                                                                                    #
    This project uses p5.js clientside framework for graphics,                                                                                      #
    and antiboredom's p5.gif.js GitHub: https://github.com/antiboredom/p5.gif.js for displaying .GIF files.                                         #
    Visit https://p5js.org/ for more info about p5.js framework.                                                                                    #
                                                                                                                                                    #
                                                                                                                                                    #
                                                                                                                                                    #
#####################################################################################################################################################
*/
//Controls the main aspects of the game. Other classes that belong to this game are Ship.js, Projectile.js, Movement.js and Enemy.js
var bg;
var speed = 5;
var projectileSpeed = 6;
var bulletTravel = 9;

var projectiles = [];

function setup() {
    
    bg = loadGif("img/movingSpace.gif");
    
    createCanvas(720,400);
    player = new Ship();
    noStroke();
}

function draw() {
    
    background(bg);
    player.show();
    Movement();
    
    for(var i = 0 ; i < projectiles.length; i++) {
        
        projectiles[i].show();
        projectiles[i].travel();
        
    }
    
}


    
    
    
    
    
    
    
    
    
    
    
    
    