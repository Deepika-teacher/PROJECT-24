class Paper{
    constructor(x,y){
        var paper_options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.2
        }
        this.paperBody=Bodies.circle(x,y,25,paper_options);
        World.add(myWorld,this.paperBody);
        this.radius=50;
    }

    display(){
        var pos=this.paperBody.position;
        var ang=this.paperBody.angle;

        push();
        translate(pos.x,pos.y);
        strokeWeight(4);
        stroke('blue');
        fill ('green');
        ellipse(ellipseMode)
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
