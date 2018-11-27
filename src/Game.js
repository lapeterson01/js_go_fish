class Game {
  constructor(playerName, numberOfBots) {
    this._playerName = playerName
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
    return this.playerList().turn()
  }

  players() {
    return this.playerList().players()
  }

  deck() {
    if (!this._deck) this._deck = new CardDeck()
    return this._deck
  }

  playerList() {
    if (!this._playerList) {
      this._playerList = new PlayerList(this._humanPlayerName(), this._botCount())
    }
    return this._playerList
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

  _humanPlayerName() {
    return this._playerName
  }

  _botCount() {
    if (!this._numberOfBots) this._numberOfBots = 1
    return this._numberOfBots
  }
}
