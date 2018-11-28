class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  player() {
    return document.getElementById('player')
  }

  draw(container) {
    const gameMarkup = `
      <div class="game">
        <div id="opponent">Opponent</div>
        <div id="player"></div>
      </div>
    `

    container.innerHTML = gameMarkup
    this._drawPlayer()
  }

  _drawPlayer() {
    const view = new PlayerView(this.game().humanPlayer())
    view.draw(this.player())
  }
}
