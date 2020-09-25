class Roof {
    constructor(x,y,w,h) {
        var options = {
            isStatic : true,
            density : 0.3,
            friction : 0,
            restitution : 0
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill(72);
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
    }
}