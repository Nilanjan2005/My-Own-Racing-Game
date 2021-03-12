var canvas ,backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form,game,player;
var ships,ship1,ship2,ship3,ship4;
var ship1Image,ship2Image,ship3Image,ship4Image;



function preload(){
  track = loadImage("../Images/track.png")
 ship1Image = loadImage("../Images/ship1.png");
 ship2Image = loadImage("../Images/ship2.png");
 ship3Image = loadImage("../Images/ship3.png");
 ship4Image = loadImage("../Images/ship4.png");
}
function setup(){

    canvas = createCanvas(displayWidth-30,displayHeight-20);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();
  }
  
  
  function draw(){
    if(playerCount === 4){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
  }
  
