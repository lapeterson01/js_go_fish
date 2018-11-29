class GameView {
  constructor(game) {
    this._game = game
  }

  setPlayer(event) {
    event.target.parentNode.parentNode.childNodes.forEach((opponentNode) => {
      opponentNode.setAttribute('style', 'color: none')
    })
    event.target.parentNode.  setAttribute('style', 'color: blue')
    this._selectedPlayer = event.target.dataset.player
  }

  setRank(event) {
    event.target.parentNode.childNodes.forEach((cardNode) => {
      cardNode.setAttribute('style', 'color: none')
    })
    event.target.setAttribute('style', 'color: red')
    this._selectedRank = event.target.dataset.rank
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
    const view = new OpponentView(this.allOpponents(), this.setPlayer.bind(this))
    view.draw(this.opponentElement())
  }

  _drawPlayer() {
    const view = new PlayerView(this.game().humanPlayer(), this.setRank.bind(this))
    view.draw(this.playerElement())
  }
}
