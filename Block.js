class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }

    display(){
      if(this.body.speed < 5){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
      } 
      else{
        World.remove(world, this.body);
        var pos= this.body.position;
        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();
      }
    }
}