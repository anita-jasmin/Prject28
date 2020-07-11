class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:20,
            stiffness:0.04
        }
        this.pointB=pointB;
        this.string=Constraint.create(options);
        World.add(world,this.string);
    }
    fly(){
        this.string.bodyA=null;
    }
    display(){
        if(this.string.bodyA){
        var pointA= this.string.bodyA.position;
        var pointB=this.pointB;
        push();
        line(pointA.x+10,pointA.y+10,pointB.x,pointB.y);
        pop();
    }

    }
}