class PlayerView {
  constructor(player, setRank) {
    this._player = player
    this.setRank = setRank
  }

  player() {
    return this._player
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
