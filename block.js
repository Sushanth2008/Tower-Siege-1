class Block{
    constructor(x, y, width, height,colour,strokeWeight) {
        var options = {
            'restitution':0.7,
            'friction':0.01,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.colour=colour;
        this.strokeWeight=strokeWeight;
        World.add(world,this.body);
    }

    display(){

     var angle=this.body.angle;
     var pos=this.body.position
     push()
     translate(pos.x,pos.y)
     rotate (angle)
     rectMode(CENTER);
     strokeWeight(this.strokeWeight)
     fill (this.colour)
     rect(0,0,this.width,this.height)
     pop()
    }

}
