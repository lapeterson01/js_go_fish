class PlayerView {
  constructor(player) {
    this._player = player
  }

  player() {
    return this._player
  }

  setRank(event) {
    event.target.parentNode.childNodes.forEach((cardNode) => {
      cardNode.setAttribute('style', 'color: none')
    })
    event.target.setAttribute('style', 'color: red')
    this._selectedRank = event.target.dataset.rank
  }

  draw(container) {
    const playerMarkup = `
      <div class="player">
        <div id="playerName">
          ${this.player().name()}
        </div>
        <ul id="playerHand"></ul>
        <div id="playerBooks">
          Books: ${this.player().books()}
        </div>
      </div>
    `

    container.innerHTML = playerMarkup
    this._drawCards()
  }

  playerHand() {
    return document.getElementById('playerHand')
  }

  _drawCards() {
    this.player().hand().forEach((card) => {
      const view = new CardView(card, this.setRank.bind(this))
      view.draw(this.playerHand())
    })
  }
}
