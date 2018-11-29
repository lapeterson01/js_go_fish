class GameView {
  constructor(game, setRank, setPlayer, playRound) {
    this._game = game
    this.setRank = setRank
    this.setPlayer = setPlayer
    this.playRound = playRound
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

  playRoundElement() {
    return document.getElementById('playRound')
  }

  playRoundButton() {
    return document.getElementById('playRoundButton')
  }

  draw(container) {
    const gameMarkup = `
      <div class="game">
        <div id="opponent">
          <ul id="opponentList"></ul>
        </div>
        <div id="table">Deck: ${this.game().deck().count()}</div>
        <div id="player"></div>
        <div id="playRound"></div>
      </div>
    `

    container.innerHTML = gameMarkup
    if (this.game().humanPlayer() == this.game().currentPlayer()) {
      this.playRoundElement().innerHTML = '<input type="button" id="playRoundButton" value="Play!" />'
      this.playRoundButton().onclick = this.playRound.bind(this)
    } else {
      this.playRoundElement().innerHTML = `Waiting for ${this.game().currentPlayer().name()}`
    }
    this._drawOpponent()
    this._drawPlayer()
  }

  _drawOpponent() {
    const view = new OpponentView(this.allOpponents(), this.setPlayer.bind(this))
    view.draw(this.opponentElement())
  }

  _drawPlayer() {
    const view = new PlayerView(this.game().humanPlayer(), this.setRank.bind(this))
    view.draw(this.playerElement())
  }
}
