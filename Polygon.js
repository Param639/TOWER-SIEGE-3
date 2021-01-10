class Polygon {
    constructor(x,y,width,height){
        var options ={
            isStatic :false,
            'restitution' :0,
            'friction' :1,
            'density' :1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display()
    {
            //this.stone.position.x = mouseX;
            //this.stone.position.y = mouseY;
            var pos=this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER)
            strokeWeight(5);
            fill(255);
            image(this.image,0,0,50,50);
            pop();
    }
}