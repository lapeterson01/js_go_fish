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
