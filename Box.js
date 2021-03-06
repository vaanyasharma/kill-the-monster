class Box {
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:1.0,
            density:20
        }
        this.body=Bodies.rectangle(x,y,100,100);
        this.width=100;
        this.height=100;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        pop();
    }
}