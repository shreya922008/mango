class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.Sling= Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly(){
        this.Sling.bodyA=null
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA
    }
    display(){
    }
    
}