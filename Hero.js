class Hero {

    constructor(x,y,r) {

        var options = {

            density: 2,
            frictionAir: 0.01

        };

        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("images/Superhero-01.png");

        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);

        World.add(world, this.body);

    }

    display(){ 
        
        var heroPos=this.body.position; 
        push() 
        translate(heroPos.x, heroPos.y); 
        imageMode(CENTER); 
        image(this.image, 0, 0, this.r, this.r); 
        pop(); 
    }

}