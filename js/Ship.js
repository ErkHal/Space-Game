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
//Holds all of the objects that the ship consist of + when the player shoots this class creates a projectile.
function Ship() {
    
    this.x=150;
    this.y=height/2;
    
    
    this.show = function() {
        
        //Draw the parts of the ship from the center of a part.
        rectMode(CENTER);
        
        //create the shapes of the thrusters
        fill (150);
        rect(this.x -20, this.y + 20, 20, 20);
        rect(this.x -20, this.y - 15, 20, 20);
        
       
        //create the main hull of the ship
        fill(255);
        rect(this.x, this.y, 30,30);
        
        
        //create the cockpit of the ship
        fill(150);
        rect(this.x + 27, this.y, 25,10);
        
    }
    
    this.shoot = function() {
        
        ammo = new Projectile(player.x + 50, player.y);
        
        projectiles.push(ammo);
        
    }
}
