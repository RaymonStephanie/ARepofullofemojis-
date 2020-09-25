class Rope {
    constructor(body1, body2,offsetX,offsetY) { 
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.04,
            length : 400,
            pointB : {x: this.offsetX,y: this.offsetY}
        }
        this.body = Constraint.create(options);
        this.body.damping = 0.1;
        World.add(world,this.body);
    }

    display() {
        var pos1 = this.body.bodyA.position;
        var pos2 = this.body.bodyB.position;
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
}