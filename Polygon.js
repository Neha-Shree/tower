class Polygon {
    constructor() {
      var options = {
          'isStatic': false,
          'friction': true,
          'density': 0.5,
          'restitution': 0.5
      }

      this.image = loadImage("polygon.png");
      this.polygon = Bodies.circle(50,200,1);
      World.add(world, this.polygon);
      
    }
    display(){
      var angle = this.polygon.angle;
      this.polygon.position.x = mouseX;
      this.polygon.position.y = mouseY;
        push();
        translate(this.polygon.position.x, this.polygon.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.polygon.position.x, this.polygon.position.y , this.width, this.height);
        pop()
    }
  }