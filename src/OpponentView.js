class OpponentView {
  constructor (opponents) {
    this._opponents = opponents
  }

  opponents() {
    return this._opponents
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
      container.appendChild(element)
    })
  }
}
