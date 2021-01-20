var fixedrect , 
movingrect;
var object1 , object2 , object3 , object4
function setup() {
  createCanvas(800,400);
 fixedrect =  createSprite(400, 200, 50, 100);
 movingrect = createSprite(400,100,100,50);
 object1=createSprite(50,100,50,50);
 object2=createSprite(150,100,50,50);
 object3=createSprite(250,100,50,50);
 object4=createSprite(350,100,50,50);
 fixedrect.shapeColor = "blue";
 movingrect.shapeColor = "green";
 fixedrect.debug = true;
 movingrect.debug = true;
}

function draw() {
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  //when we call the function we need to just call by it's name.
  if(isTouching(object1 , movingrect)){
    object1.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
 else if(isTouching(object2 , movingrect)){
    object2.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
 else if(isTouching(object3 , movingrect)){
    object3.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
 else if(isTouching(object4 , movingrect)){
    object4.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
 else if(isTouching(fixedrect , movingrect)){
   fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else{
    object1.shapeColor = "blue";
    object2.shapeColor = "blue"
    object3.shapeColor = "blue"
    object4.shapeColor = "blue"
    fixedrect.shapeColor = "blue"
    movingrect.shapeColor = "green";
  }
  drawSprites();
}
//create or defining a function - function name(){}
//yes or no : true or false - boolean values
