class createDrop{
    constructor(x,y){
        var options = {
            friction: 1,
            restitution:1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    
    
    
    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

  
  
  
    showDrop(){
       
        ellipseMode(CENTER);
        fill("white")
       
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}