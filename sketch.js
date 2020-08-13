
var raindrops=[];
var batman;
var thunder;
var thunderImg;
var maxDrop=100;
function preload(){
    bmImg=loadImage('download.png')
    thunderS=loadSound('donnerre2.mp3')
    thunderImg=loadImage('download.jpeg')
}

function setup(){
    createCanvas(1000,800);
    for (var i = 0; i < 800; i++){
      raindrops[i] = new Drop();
    }
    ground= createSprite(0,610,2000,10);
  batman=createSprite(300,490);
  batman.addImage("batman",bmImg);
  thunder=createSprite(300,0);
  thunder.addImage("thunder",thunderImg);
 

}


function draw(){
    background("black");
   
    for (var i = 0; i < 500; i++) {
      raindrops[i].fall();
      raindrops[i].display();  
    }
    if(frameCount%1000===0){
      thunderS.play();
      }
    
  drawSprites();
}   

