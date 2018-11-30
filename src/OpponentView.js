class OpponentView {
  constructor (opponents, setPlayer) {
    this._opponents = opponents
    this.setPlayer = setPlayer
  }

  opponents() {
    return this._opponents
  }

  bots() {
    if (!this._bots) this._bots = this.opponents().map((opponent) => {
      return new Bot(opponent)
    })
    return this._bots
  }

  draw(container) {
    container.innerHTML = ''
    this.opponents().forEach((opponent) => {
      const opponentMarkup = `
        <div>${opponent.name()}</div>
        <div>Cards: ${opponent.countHand()}</div>
        <div>Books: ${opponent.books()}</div>
      `

      const element = document.createElement('li')
      element.innerHTML = opponentMarkup
      element.childNodes.forEach((node) => {
        node.onclick = this.setPlayer.bind(this)
      })
      // element.setAttribute('data-player', opponent.name())
      element.dataset.player = opponent.name()
      container.appendChild(element)
    })
  }
}
