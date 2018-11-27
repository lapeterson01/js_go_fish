class Player {
  constructor(name) {
    this._name = name
    this._hand = {}
  }

  name() {
    return this._name
  }

  hand() {
    return Object.values(this.handObject()).flat()
  }

  books() {
    if (!this._books) this._books = 0
    return this._books
  }

  addBook() {
    if (!this._books) this._books = 0
    this._books += 1
  }

  calculateBooks() {
    for (let rank in this.handObject()) {
      if (this.handObject()[rank].length == 4) {
        delete this.handObject()[rank]
        this.addBook()
      }
    }
  }

  retrieveCard(card) {
    if (this.hasRank(card.rank())) {
      this._hand[card.rank()].push(card)
    } else {
      this._hand[card.rank()] = [card]
    }
  }

  countHand() {
    return this.hand().length
  }

  isHandEmpty() {
    return this.countHand() == 0
  }

  hasRank(rank) {
    return this.handObject().hasOwnProperty(rank)
  }

  giveUpCards(rank) {
    if (this.hasRank(rank)) {
      const cardsToReturn = this.handObject()[rank]
      delete this.handObject()[rank]
      return cardsToReturn
    }
  }

  handObject() {
    return this._hand
  }
}
