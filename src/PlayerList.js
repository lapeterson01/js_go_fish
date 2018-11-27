class PlayerList {
  constructor(playerName, numberOfBots) {
    this._player = new Player(playerName)
    this.createBots(numberOfBots)
  }

  player() {
    return this._player
  }

  playerByName(playerName) {
    return this.players().find((player) => {
      return player.name() == playerName
    })
  }

  players() {
    return [this.player(), ...this.bots()]
  }

  tradeCards(player, rank) {
    player.giveUpCards(rank).forEach((card) => {
      this.turn().retrieveCard(card)
    })
  }

  bots() {
    return this._bots
  }

  createBots(numberOfBots) {
    this._bots = [...Array(numberOfBots).keys()].map(i => new Player(`Bot ${i + 1}`))
  }

  turn() {
    if (!this._turn) this._turn = this.players()[0]
    return this._turn
  }

  setTurn(player) {
    this._turn = player
  }

  nextTurn() {
    this.setTurn(this.players()[this.players().indexOf(this.turn()) + 1])
  }
}
