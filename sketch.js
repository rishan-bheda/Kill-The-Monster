var backgroundImage;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, hero, rope, monster;

var engine, world;

function preload() {

    backgroundImage = loadImage("images/GamingBackground.png");

}

function setup() {

    createCanvas(1300, 600);

    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,100,70,70);
    box2 = new Box(800,100,70,70);
    box3 = new Box(800,100,70,70);
    box4 = new Box(800,100,70,70);
    box5 = new Box(800,100,70,70);
    box6 = new Box(800,100,70,70);

    box7 = new Box(700, 100, 70, 70);
    box8 = new Box(700, 100, 70, 70);
    box9 = new Box(700, 100, 70, 70);
    box10 = new Box(700, 100, 70, 70);
    box11 = new Box(700, 100, 70, 70);
    box12 = new Box(700, 100, 70, 70);

    box13 = new Box(600, 100, 70, 70);
    box14 = new Box(600, 100, 70, 70);
    box15 = new Box(600, 100, 70, 70);
    box16 = new Box(600, 100, 70, 70);
    box17 = new Box(600, 100, 70, 70);
    box18 = new Box(600, 100, 70, 70);
    box19 = new Box(600, 100, 70, 70);
    box20 = new Box(600, 100, 70, 70);


    ground = new Ground(300, 400, 1500, 20);
    hero = new Hero(100, 100, 200);

    rope = new SlingShot(hero.body, {x:300, y:50});

    monster = new Monster(1000, 100, 200);

}

function draw() {

    background(backgroundImage);

    Engine.update(engine);

    ground.display();

    hero.display();

    monster.display();

    rope.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    console.log(hero.body.position.y);

}

function mouseDragged(){

	Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY}) 

}