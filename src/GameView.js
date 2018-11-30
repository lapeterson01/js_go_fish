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

  roundInfo() {
    return this.game().roundInfo()
  }

  opponentElement() {
    return document.getElementById('opponentList')
  }

  draw(container) {
    const gameMarkup = `
      <div class="game">
        <div id="opponent">
          <ul id="opponentList"></ul>
        </div>
        <div id="table">Deck: ${this.game().deck().count()}</div>
        <div id="player"></div>
        <div id="roundMessage"></div>
        <div id="playRound"></div>
      </div>
    `

    container.innerHTML = gameMarkup
    this._drawPlayRoundButton()
    this._drawOpponent()
    this._drawPlayer()
    this._drawRoundMessage()
  }

  _drawPlayRoundButton() {
    if (this.game().humanPlayer() == this.game().currentPlayer()) {
      playRound.innerHTML = '<input type="button" id="playRoundButton" value="Play!" />'
      playRoundButton.onclick = this.playRound.bind(this)
    } else {
      playRound.innerHTML = `<input type="button" id="playRoundButton" value="${this.game().currentPlayer().name()} Play!" />`
      playRoundButton.onclick = this.botPlayRound.bind(this)
    }
  }

  _drawOpponent() {
    const view = new OpponentView(this.allOpponents(), this.setPlayer.bind(this))
    view.draw(opponentList)
    view.draw(this.opponentElement())
  }

  _drawPlayer() {
    const view = new PlayerView(this.game().humanPlayer(), this.setRank.bind(this))
    view.draw(player)
  }

  _drawRoundMessage() {
    let message
    if (this.roundInfo()) {
      if (this.roundInfo().requestedPlayer() == 'deck') {
        if (this.roundInfo().currentPlayer() == 'You') {
          message = `You drew ${this.roundInfo().cardsReceived} from the deck`
        } else {
          message = `${this.roundInfo().currentPlayer()} drew from the deck`
        }
      } else {
        if (this.roundInfo().currentPlayer() == 'You' || this.roundInfo().requestedPlayer() == 'you') {
          message = `${this.roundInfo().currentPlayer()} took ${this.roundInfo().cardsReceived} from ${this.roundInfo().requestedPlayer()}`
        } else {
          message = `${this.roundInfo().currentPlayer()} took cards from ${this.roundInfo().requestedPlayer()}`
        }
      }
    } else {
      message = 'It is your turn'
    }

    roundMessage.innerHTML = message
  }
}
