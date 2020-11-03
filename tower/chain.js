class sling{
    constructor(bodyA,pointB){
        var op={
          bodyA:bodyA,
          pointB:pointB,
          length:100,
          stiffness:0.07
      }
      this.rope = bind.create(op);
      this.pointB = pointB;
  
      World.add(world,this.rope);
    }
    detach(){
      this.rope.bodyA = null;
    }
    attach(glue){
      this.rope.bodyA = glue;
    }
  }