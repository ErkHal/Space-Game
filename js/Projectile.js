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
//Spawns the projectiles and moves them.
var damage = 5;

function Projectile(x,y, enemyBullet) {
    
    this.x = x;
    this.y = y;
    this.enemyBullet = enemyBullet;

    //Changes the projectiles color to red if the game is initializing an enemy's bullet
    if(enemyBullet == true) {

        this.show = function() {
    
    fill(255, 0, 0);
    rect(this.x, this.y + 15, 7, 5);
    
        }

    } else {
    
    this.show = function() {
    
    fill(0, 255, 100);
    rect(this.x, this.y, 7, 5);
    
    }
}
        
    //Makes the projectile travel from the ship
    this.travel = function() {
        
        if(this.enemyBullet) {
            
            this.x += bulletSpeed;
        
        } else {
            
            this.x += bulletTravel;
            
        }
    }
    
}

//Checks if the bullets hit the enemies and/or the player.
function checkHit() {
    
    //Checks first if the bullets have reached the end of the game screen
    for(var i = 0; i < projectiles.length; i++) {
        
        if(projectiles[i].x >= width || projectiles[i].x <= 0) {
            
            projectiles.splice(i,1);
            
        }
        
    }
    
    for (var index = 0; index < projectiles.length; index++ ) {
        
        var bulletX = projectiles[index].x;
        var bulletY = projectiles[index].y;
        var playerLocation = createVector(player.x, player.y, 0)

        if(int(dist(bulletX,bulletY,player.x, player.y)) <= 20 && projectiles[index].enemyBullet == true) {

            isDead = true;

        }
        
        for(var j = 0; j < enemies.length; j++ ) {
            
            var enemyX = enemies[j].x;
            var enemyY = enemies[j].y;
            
            if(int(dist(bulletX, bulletY, enemyX, enemyY)) <= 20 && projectiles[index].enemyBullet == false ) {
                
                if(enemies[j].health > 5) {
                    
                    enemies[j].health -= damage;
                    projectiles.splice(index, 1);
                    
                } else {
                
                enemies.splice(j,1);
                
                projectiles.splice(index, 1);
                
                enemiesDestroyed++;
                
                }
            } 
            
        }  
        
        
        
    }  
}