class CardView {
  constructor(card, setRank) {
    this.setRank = setRank
    this._card = card
  }

  card() {
    return this._card
  }

  draw(container) {
    const element = document.createElement('li')
    element.dataset.rank = this.card().rank()
    element.onclick = this.setRank.bind(this)
    element.className = 'game-list-item'
    element.innerHTML = this.card().toString()
    container.appendChild(element)
  }
}
