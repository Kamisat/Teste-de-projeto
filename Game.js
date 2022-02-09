class Game {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    player1 = createSprite(100, 500, 20, 20);

    player2 = createSprite(300, 500, 20, 20);

    player3 = createSprite(500, 500, 20, 20);

    player4 = createSprite(700, 500, 20, 20);

    players = [player1, player2, player3, player4];
  }

  play() {
    form.hide();

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      var index = 0;

      var x = 100;
      var y = 500;

      for (var plr in allPlayers) {
        index = index + 1;

        x = x + 200;

        players[index - 1].x = x;
        players[index - 1].y = y;

        if (index === player.index) {
          players[index - 1].x = mouseX;

          console.log(players[index - 1].x);
        }
      }
    }

    if (frameCount % 20 === 0) {
      meteoro = createSprite(random(10, 790), 0, 20, 20);
      meteoro.velocityY = 5;
      meteoro.lifetime = 80;
    }

    if (player.index !== null) {
      player.update();
    }
    drawSprites();
  }

  end() {
    console.log("EHE");
  }
}
