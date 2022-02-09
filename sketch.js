var cubo;

var database;

var gameState = 0;

var playerCount = 0;

var allPlayers;

var meteoro, form, game, player, players, player1, player2, player3, player4;

function setup() {
  createCanvas(800, 400);

  database = firebase.database();
  cubo = createSprite(200, 300, 20, 20);

  game = new Game();
  game.getState();
  game.start();

 
 
}
function draw() {
 background(0);


  if (gameState === 1) {
  

    game.play();
  }
  if (playerCount === 4) {
    game.update(1);
  }

  console.log();


}
