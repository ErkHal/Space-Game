/*
#####################################################################################################################################################
                                                                                                                                                    #
                                                                                                                                                    #
    Written by Erkki Halinen                                                                                                                        #
    for a small game project in 2017.                                                                                                               #
                                                                                                                                                    #
    This project uses p5.js and processing.js frameworks,                                                                                           #
    and antiboredom's p5.gif.js GitHub: https://github.com/antiboredom/p5.gif.js for displaying .GIF files.                                         #
    Visit https://p5js.org/ and http://processingjs.org/ for more info about p5.js and processing.js frameworks.                                    #
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
var isDead = false;

var projectiles = [];
var enemies = [];

var enemiesDestroyed = 0;

function setup() {
    
    createCanvas(900,500);
    player = new Ship();
    noStroke();
    
    bg = loadGif("img/movingSpace.gif");
    
}


function draw() {
    
    background(bg);
    
    if(!isDead) {
        
    player.show();
    Movement();
    
    checkHit();
    
    //Drawing and moving the projectiles
    for(var i = 0 ; i < projectiles.length; i++) {
        
        projectiles[i].show();
        projectiles[i].travel();
        
    }
    

    
    //Creates enemies everytime modulus return 0
    if(frameCount % 60 == 0) {
        
        summonEnemies();
        
    }
    
    //Draw enemies and move them closer
    for(var index = 0; index < enemies.length; index++) {
        
        enemies[index].show();
        enemies[index].approach();
        
    }
    
    checkCollision();
    
    updateStats();
    
    } else {
        
        deathScreen();    
        
    }
    
    
}

function updateStats() {
    
    rectMode(CENTER);
    fill(255);
    text("Kills: " + enemiesDestroyed.toString(), width - 100, 60, 100,100);
    
}

function deathScreen() {
    
    //Splash screen text.
    fill(240, 0, 0);
    textSize(40);
    text("YOU DIED", 550, height/2, 400, 200);
    text("Kills: " + enemiesDestroyed, 550, height/2 + 100, 400, 200);
    
}


    
    
    
    
    
    
    
    
    
    
    
    
    