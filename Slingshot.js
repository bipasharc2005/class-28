class Slingshot {
    constructor(BodyA,PointB){
        var option={
            bodyA:BodyA,
            pointB:PointB,
            length:10,
            stiffness:0.04
        }

    this.sling=Constraint.create(option);
    World.add(world, this.sling);
    this.pointB = PointB 
    }
    fly(){
      this.sling.bodyA=null;
    }

    display(){
        if ( this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
        
    }
}