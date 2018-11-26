class Game {
  constructor(player, numberOfBots) {
    this._player = new Player(player)
    this._numberOfBots = numberOfBots
  }

  start() {
    this._shuffleDeck()
    this._dealCards()
  }

  players() {
    if (!this._players) {
      this._players = [this._humanPlayer()].concat(this._bots())
    }
    return this._players
  }

  deck() {
    if (!this._deck) {
      this._deck = new CardDeck()
    }
    return this._deck
  }

  _botCount() {
    if (!this._numberOfBots) this._numberOfBots = 1
    return this._numberOfBots
  }

  _shuffleDeck() {
    this.deck().shuffle()
  }

  _dealCards() {
    this.players().forEach((player) => {
      for (let i = 0; i < 7; i++) {
        player.retrieveCard(this.deck().deal())
      }
    })
  }

  _humanPlayer() {
    return this._player
  }

  _bots() {
    if (!this._botPlayers) {
      this._botPlayers = [...Array(this._botCount()).keys()].map(i => new Player(`Bot ${i + 1}`))
    }
    return this._botPlayers
  }
}
