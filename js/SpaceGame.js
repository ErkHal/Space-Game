var speed = 5;
var projectileSpeed = 6;

function setup() {
    
    createCanvas(720,400);
    player = new ship();
    noStroke();
}

function draw() {
    
    background(100);
    player.show();
    movement();
    
}

//Defines the inputs necessary to move the player's starship
function movement () {
    
    // W KEY
    if (keyIsDown(87)) {
        
        if(player.y <= 0) {
            
            player.y = 0;
            
        } else {
            
        player.y -= speed;
        
        }
    }
    
    // S KEY
    if (keyIsDown(83)) {
        
         if(player.y >= height) {
            
            player.y = height;
            
        } else {
            
        player.y += speed;
        
        }
    }
    
    // A KEY
    if (keyIsDown(65)) {
        
        if(player.x < 0) {
        
            player.x = 0;
        
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
    
    //SPACE
    if (keyIsDown(32)) {
        
        if(frameCount % 15  == 0) {
        
            player.shoot();
        
        }
    }
    
}

//Holds all of the objects that the ship consist of.
function ship() {
    
    this.x=150;
    this.y=height/2;
    
    
    this.show = function() {
        
        fill (150);
        //create the shapes of the thrusters
        rect(this.x -20, this.y + 20, 20, 20);
        rect(this.x -20, this.y - 13, 20, 20);
        
        fill(255);
        //create the main hull of the ship
        rect(this.x, this.y, 30,30);
        
        fill(150);
        //create the cockpit of the ship
        rect(this.x + 30, this.y + 10, 25,10);
        
    }
    
    this.shoot = function() {
        
        strokeWeight(4);
        stroke(0, 255, 0);
        line(this.x + 55, this.y + 15, width, this.y + 15);
        noStroke();
        strokeWeight(4);
        
    }
}   