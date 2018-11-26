class Game {
  constructor(player, numberOfBots) {
    this._player = new Player(player, 0)
    this._numberOfBots = numberOfBots
  }

  start() {
    this._shuffleDeck()
    this._dealCards()
  }

  playRound(playerId, rank) {
    const selectedPlayer = this.players()[playerId]
    if (selectedPlayer.hasRank(rank)) {
      // selected player gives cards to player whose turn it is
    } else {
      // turn draws from deck
      // next player turn
    }
  }

  turn() {
    if (!this._turn) {
      this._turn = this.players()[0]
    }
    return this._turn
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
      this._botPlayers = [...Array(this._botCount()).keys()].map(i => new Player(`Bot ${i + 1}`, i + 1))
    }
    return this._botPlayers
  }
}
