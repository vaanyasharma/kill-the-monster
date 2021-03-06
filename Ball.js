class Ball{
    constuctor(x,y,width,height){
        var  options={
            density:1,
            frictionAir:0.005



        }
        this.image=loadImage("images/Superhero-01");
      
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y-100);
        
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        
        pop();
    
    }

}