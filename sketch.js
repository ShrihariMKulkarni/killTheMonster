const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var hero1, obstacle1, obstacle2,obstacle3 , obstacle4, obstacle5, obstacle6 , obstacle7, obstacle8, obstacle9;
var monster , ground , gameState = "steady";



function preload() {

  bg =  loadImage("clouds.jpg")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
	world = engine.world;

  hero1 = new Hero(windowWidth/4 , windowHeight-300 , 200 , 80);
  ground = new Ground(windowWidth/2 , windowHeight-200 , windowWidth , 20);

  chain = new Chain(hero1.body , {x: 300 , y:300});

  obstacle1 = new Obstacle(windowWidth/2 , windowHeight-250 , 50, 50);
  obstacle2 = new Obstacle(windowWidth/2+70 , windowHeight-250 , 50, 50);
  obstacle3 = new Obstacle(windowWidth/2+140, windowHeight-250 , 50, 50);
  obstacle4 = new Obstacle(windowWidth/2-70 , windowHeight-250 , 50, 50);
  obstacle5 = new Obstacle(windowWidth/2-70, windowHeight-300 , 50, 50);
  obstacle6 = new Obstacle(windowWidth/2+140 , windowHeight-300 , 50, 50);
  obstacle7 = new Obstacle(windowWidth/2+70, windowHeight-300 , 50, 50);
  obstacle8 = new Obstacle(windowWidth/2 , windowHeight-300 , 50, 50);
  obstacle9 = new Obstacle(windowWidth/2+70 , windowHeight-350 , 50, 50);
  obstacle10 = new Obstacle(windowWidth/2-70 , windowHeight-350 , 50, 50);
  obstacle11= new Obstacle(windowWidth/2+140 , windowHeight-350 , 50, 50);
  obstacle12= new Obstacle(windowWidth/2+140 , windowHeight-350 , 50, 50);
  obstacle13= new Obstacle(windowWidth/2 , windowHeight-400 , 50, 50);
  obstacle14= new Obstacle(windowWidth/2+70 , windowHeight-400 , 50, 50);
  obstacle15= new Obstacle(windowWidth/2-70 , windowHeight-450 , 50, 50);
  obstacle16= new Obstacle(windowWidth/2+70 , windowHeight-500 , 50, 50);
  obstacle17= new Obstacle(windowWidth/2-70 , windowHeight-500 , 50, 50);
  obstacle18= new Obstacle(windowWidth/2+70 , windowHeight-500 , 50, 50);
  obstacle19= new Obstacle(windowWidth/2-70 , windowHeight-500 , 50, 50);
  obstacle20= new Obstacle(windowWidth/2+70 , windowHeight-600 , 50, 50);
  obstacle21= new Obstacle(windowWidth/2-70 , windowHeight-600 , 50, 50);
  obstacle22= new Obstacle(windowWidth/2+70 , windowHeight-650 , 50, 50);
  obstacle23= new Obstacle(windowWidth/2-70 , windowHeight-650 , 50, 50);

  monster = new Monster(windowWidth/1.2 , windowHeight-240 , 100, 250);

  Engine.run(engine);
}

function draw() {
  background(bg);

if(monster.speed>=4){

  textSize(30);
  text("You Win" , windowWidth/2 , 300)
}


console.log(monster)
  ground.display();
  hero1.display();
  chain.display();
  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  obstacle4.display();
  obstacle5.display();
  obstacle6.display();
  obstacle7.display();
  obstacle8.display();
  obstacle9.display();
  obstacle10.display();
  obstacle11.display();
  obstacle12.display();
  obstacle13.display();
  obstacle14.display();
  obstacle15.display();
  obstacle16.display();
  obstacle17.display();
  obstacle18.display();
  obstacle19.display();
  obstacle20.display();
  obstacle21.display();
  obstacle22.display();
  obstacle23.display();

  monster.display();

}
function mouseDragged(){
  if(gameState==="steady"){
  
  
      Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
  }
  }
