class Player {
  constructor(name) {
    this._name = name
    this._hand = []
  }

  name() {
    return this._name
  }

  hand() {
    return this._hand
  }

  retrieveCard(card) {
    this._hand.push(card)
  }

  countHand() {
    return this.hand().length
  }
}
