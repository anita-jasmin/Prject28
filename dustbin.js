class dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          density:0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("sprites/dustbingreen.png");
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      image(this.image,550,500,150,150)
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
      
    }
  }
  