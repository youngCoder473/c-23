//creating the blueprint of box.
//while giving names to the class- the first letter has to be uppercase
class Box {
    //create 2 things
    //1. properties ->inside the constructor!
    //converting my constructor into arguments.
    constructor(x, y) {
        //'this'-> points to the current object
        var option = {
            restitution: 0.3
        }
        this.body = Bodies.rectangle(x, y, 50, 50, option);
        World.add(world, this.body);

    }

    display() {
        push();
        fill("white");
        var posBody = this.body.position;
        var angle=this.body.angle;
        translate(posBody.x,posBody.y);
        rotate(angle)
        rectMode(CENTER);
        rect(posBody.x, posBody.y, 50, 50);
        pop();
        
    }







    //methods or also called as function


}