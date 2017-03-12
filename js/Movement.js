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
//Defines the inputs necessary to move the player
function Movement () {
    
    // W KEY
    if (keyIsDown(87)) {
        
        if(player.y <= 30) {
            
            player.y = 30;
            
        } else {
            
        player.y -= speed;
        
        }
    }
    
    // S KEY
    if (keyIsDown(83)) {
        
         if(player.y >= height - 30) {
            
            player.y = height - 30;
            
        } else {
            
        player.y += speed;
        
        }
    }
    
    // A KEY
    if (keyIsDown(65)) {
        
        if(player.x < 30) {
        
            player.x = 30;
        
        } else {
        
            player.x -= speed
        
        }
        
    }
    
    // D KEY
    if (keyIsDown(68)) {
        
        if(player.x > width/2) {
            
            player.x = width/2;
            
        } else {
            
        player.x += speed; 
        
        }
    }
    
    //SPACE you can limit the firerate by changing the value after the modulus
    if (keyIsDown(32)) {
        
        if(frameCount % 7  == 0) {
        
            player.shoot();
        
        }
    }
    
}