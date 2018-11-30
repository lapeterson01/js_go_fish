class GameView {
  constructor(game, setRank, setPlayer, playRound, botPlayRound) {
    this._game = game
    this.setRank = setRank
    this.setPlayer = setPlayer
    this.playRound = playRound
    this.botPlayRound = botPlayRound
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
    this._drawPlayRoundButton()
    this._drawOpponent()
    this._drawPlayer()
  }

  _drawPlayRoundButton() {
    if (this.game().humanPlayer() == this.game().currentPlayer()) {
      this.playRoundElement().innerHTML = '<input type="button" id="playRoundButton" value="Play!" />'
      this.playRoundButton().onclick = this.playRound.bind(this)
    } else {
      this.playRoundElement().innerHTML = `<input type="button" id="playRoundButton" value="${this.game().currentPlayer().name()} Play!" />`
      this.playRoundButton().onclick = this.botPlayRound.bind(this)
    }
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
