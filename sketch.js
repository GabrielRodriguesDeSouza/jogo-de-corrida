var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount,gameState;
var  car1_img, car2_img, track;
var allPlayers, car1, car2;
var cars = [];
var fuels,powerCoins,obstacles
var fuels_img,powerCoins_img,obstacle1Image,obstacle2Image
var lifeImage
var blast_image

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuels_img = loadImage("./assets/fuel.png")
  powerCoins_img = loadImage("./assets/goldCoin.png")
  obstacle1Image = loadImage("./assets/obstacle1.png")
  obstacle2Image = loadImage("./assets/obstacle2.png")
  lifeImage = loadImage("./assets/life.png")
  blast_image = loadImage("./assets/blast.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount == 2){
    game.updateState(1)
  }
  if (gameState == 1) {
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
