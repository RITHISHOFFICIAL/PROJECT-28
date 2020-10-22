class boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("Plucking mangoes/boy.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
     // imagemode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,200,650,200,150);
    }
  };