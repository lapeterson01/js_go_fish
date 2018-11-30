class WinnerView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  draw(container) {
    const winnerMarkup = `
      <h1>Winner: ${this.game().winner().name()}</h1>
    `

    container.innerHTML = winnerMarkup
  }
}
