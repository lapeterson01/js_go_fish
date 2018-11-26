class Player {
  constructor(name, id) {
    this._name = name
    this._id = id
    this._hand = []
  }

  name() {
    return this._name
  }

  id() {
    return this._id
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

  hasRank(rank) {
    return this.hand().some((card) => {
      return card.rank() == rank
    })
  }
}
