class Monster {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false
      }
      this.img = loadImage("monsterimg.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.img , pos.x , pos.y , 300,300);
      //rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  