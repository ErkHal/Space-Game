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
var enemySpeed = 2;

var txtre;

function Enemy(x, y, health) {
    
    this.x = x;
    this.y = y;
    
    this.health = health
    this.speed = random(enemySpeed, 6);
    
    txtre = loadImage("img/UFO.png");

    this.show = function() {
    
    image(txtre, this.x, this.y);
        
    //Health bar rect
    fill (200,0,0);
    rect(this.x, this.y - 34, this.health, 5)
    
    }
        
    //Makes the enemy close in on the player on the speed varied by random
    this.approach = function() {
        
            this.x -= this.speed;
                
    }
    
}

//Checks if the player collides with the enemy. If it occurs, destroys player and displays a splash screen.
function checkCollision() {
    
    for (var indexr = 0; indexr < enemies.length; indexr++ ) {
        
        var enemyLocation = createVector(enemies[indexr].x, enemies[indexr].y, 0);
        var playerLocation = createVector(player.x, player.y, 0);
        
        if(enemyLocation.dist(playerLocation) <= 50) {
            
            isDead = true;
            
            //Displays the game over screen for 4 seconds (4000 milliseconds)
            setTimeout(function() { isDead = false; location.reload(); }, 4000);
            
        }
        
    }
}

//Summons enemies before they appear in the game screen. You can change the range of the enemies spawn location 
//and the differencies in health.
function summonEnemies() {
    
    enemy = new Enemy(random(width + 400, width + 800), random(20, height - 20), random(30, 70));
    enemies.push(enemy);
    
}

//This is the initializer for a boss enemy.
/*
function summmonBossEnemy() {

    enemy1 new Enemy(width + 600, )

} */