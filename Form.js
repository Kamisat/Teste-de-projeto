class Form {
  constructor() {
    this.input = createInput("Nome");
    this.button = createButton("Iniciar");
    this.reset = createButton("Reiniciar");
  }

  hide() {
    this.input.hide();
    this.button.hide();
  }

  display() {
    this.input.position(400, 100);
    this.button.position(400, 125);
    this.reset.position(600, 300);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount = playerCount + 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });

    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
      var playerInfoRef = database.ref("players");
      playerInfoRef.remove();
    });
  }
}
