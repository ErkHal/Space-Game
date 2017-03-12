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
//This class creates the enemies.
var enemySpeed = 4;

function Enemy(x,y) {
    
    this.x = x;
    this.y = y;
    
    this.show = function() {
    
    fill(255);
    rect(this.x, this.y, 20, 20);
    
    }
        
    //Makes the enemy close in on the player
    this.approach = function() {
        
            this.x -= enemySpeed;
                
    }
    
}

function summonEnemies() {
    
    enemy = new Enemy(random(width + 400, width + 800), random(20, height - 20))
    enemies.push(enemy);
    
}