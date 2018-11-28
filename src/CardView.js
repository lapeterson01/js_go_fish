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
    element.setAttribute('data-rank', this.card().rank())
    element.onclick = this.setRank.bind(this)
    element.innerHTML = this.card().toString()
    container.appendChild(element)
  }
}
