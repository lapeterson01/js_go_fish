class Bot {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  player() {
    return this.game().currentPlayer()
  }

  allPlayersExceptCurrentPlayer() {
    return this.game().allPlayersExcept(this.player().name())
  }

  randomRank() {
    return this.player().hand()[this._randomIndexOf(this.player().hand())].rank()
  }

  randomPlayer() {
    return this.allPlayersExceptCurrentPlayer()[this._randomIndexOf(this.allPlayersExceptCurrentPlayer())].name()
  }

  _randomIndexOf(array) {
    return Math.floor(Math.random() * array.length)
  }
}
