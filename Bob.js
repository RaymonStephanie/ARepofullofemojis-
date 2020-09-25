class Bob {
    constructor(x,y,w,h) {
        var options = {
            isStatic : true,
            restitution : 0.3,
            density : 0.5,
            friction : 0.8
        }
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill(255,0,255);
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}