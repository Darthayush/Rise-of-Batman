class Drop {
    constructor(
      
    ){
      this.x = random(width);
      this.y = random(500, 200);
       this.z = random(10, 20);
      this.len = map(this.z, 0, 20, 10, 40);
      this.yspeed = map(this.z, 0, 20, 10, 40);
    
    }
    
    fall() {
      this.y = this.y + this.yspeed;
      var gravity = map(this.z, 0, 20, 5, 2);
      this.yspeed = this.yspeed + gravity;
      var maxDrop=100;

     
      if (this.y > height) {
        this.y = random(-200, -100);
        this.yspeed = map(this.z, 0, 20, 4, 12);
        
      }
    }
  
    display () {
      var drizzles = map(this.z, 0, 20, 1, 3);
      strokeWeight(3.5);
      stroke("red");
      line(this.x, this.y, this.x, this.y + this.len);

    }
  }
