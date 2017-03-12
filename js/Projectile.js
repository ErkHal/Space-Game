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
//Spawns the projectiles and moves them.
function Projectile(x,y) {
    
    this.x = x;
    this.y = y;
    
    this.show = function() {
    
    fill(0, 255, 100);
    rect(this.x, this.y, 7, 5);
    
    }
        
    //Makes the projectile travel from the ship
    this.travel = function() {
        
            this.x += bulletTravel;
                
    }
    
}