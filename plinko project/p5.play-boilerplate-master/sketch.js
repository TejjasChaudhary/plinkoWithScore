const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, world;


var ground, division;

var plinkos = [];

var balls = [];
    
var ball;


function setup(){
    var canvas = createCanvas(480,800);
    myEngine = Engine.create();
    world = myEngine.world;

   
    ground = new Ground(460,660,1200,20);

   // first row
   for(var i=770; i >=0; i-=40){
    plinkos.push(new Plinko(i,60,7));
   }
    
    // second row
    for(var i=770; i >=0; i-=40){
      plinkos.push(new Plinko(i,130,7));
     }

     // third row
     for(var i=770; i >=0; i-=40){
      plinkos.push(new Plinko(i,200,7));
     }

     // fourth row
     for(var i=770; i >=0; i-=40){
      plinkos.push(new Plinko(i,270,7));
     }

      // fifth row
      for(var i=770; i >=0; i-=40){
        plinkos.push(new Plinko(i,340,7));
       }
  

    
    division1 = new Division(5,660,15,400);
    division2 = new Division(105,660,15,400);
    division3 = new Division(215,660,15,400);
    division4 = new Division(315,660,15,400);
    division5 = new Division(415,660,15,400);
    division6 = new Division(450,660,15,400);

    balls = new Balls( 100,100,6);



   
    if (frameCount % 60 == 0){
      balls.push(newBall(random(width/2-30, width/2+30), 10,10));
   
    
    }

    
    
    
   

}

function draw(){
    background("blue");
    Engine.update(myEngine);
    
    ground.display(); 
    console.log("In draw.." + plinkos.length);

    for( var i = 0; i < plinkos.length; i++){
      plinkos[i].display();
    }


    if (frameCount % 60 == 0){
      ball = new Ball( 20,0,6);
      ball.x = Math.round(random(25,460));
   
    
    }


    console.log("b4 printing div..");
    /*for(var i=0; i<plinkos.length; i++){
      console.log("Inside for..");
      plinkos[i].display(); 
    }*/
    /*plinko1.display();  
    plinko2.display();  
    plinko3.display();  
    plinko4.display();  
    plinko5.display();
    plinko6.display();
    plinko7.display();  

    plinko8.display();  
    plinko9.display();  
    plinko10.display();  
    plinko11.display();  
    plinko12.display();
    plinko13.display();  
    plinko14.display();   */ 
      
  division3.display(); 
  division1.display();    
  division2.display();    
  division3.display(); 
  division4.display(); 
  division5.display();    
  division5.display();
  ball.display();    
    
}

