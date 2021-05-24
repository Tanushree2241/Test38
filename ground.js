class ground {
    constructor() {
        var ground_options = {
          isStatic : true
        }

     this.body = Bodies.rectangle(550,550,1100,20,ground_options);
     World.add(myworld,this.body);
    }

    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        fill("brown");
        rect(pos.x , pos.y , 1100,20);
    }
}