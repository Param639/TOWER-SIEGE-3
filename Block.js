class Block {
  constructor(x, y, width, height){
    var options ={
      'isStatic': false,
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.x = x;
    this.y =y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    this.visibility = 255;
    World.add(world,this.body);
  }
  display(){
        console.log(this.body.speed);
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0,255,255);
        strokeWeight(1);
        rect(0, 0, 30, 40);
        pop();
        }
        else
        {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          pop();
        }
  }
  score(){
    if(this.visibility<0 && this.visibility >-105){
      score = score+1
    }
  }
}
