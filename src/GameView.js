class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  allOpponents() {
    return this.game().playerList().allPlayersExcept(this.game().humanPlayer().name())
  }

  opponentElement() {
    return document.getElementById('opponentList')
  }

  playerElement() {
    return document.getElementById('player')
  }

  draw(container) {
    const gameMarkup = `
      <div class="game">
        <div id="opponent">
          <ul id="opponentList"></ul>
        </div>
        <div id="player"></div>
      </div>
    `

    container.innerHTML = gameMarkup
    this._drawOpponent()
    this._drawPlayer()
  }

  _drawOpponent() {
    const view = new OpponentView(this.allOpponents())
    view.draw(this.opponentElement())
  }

  _drawPlayer() {
    const view = new PlayerView(this.game().humanPlayer())
    view.draw(this.playerElement())
  }
}
