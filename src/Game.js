class Game {
  constructor(playerName, numberOfBots) {
    this._playerName = playerName
    this._numberOfBots = Number(numberOfBots)
  }

  start() {
    this._shuffleDeck()
    this._dealCards()
  }

  playRound(playerName, rank) {
    const selectedPlayer = this.playerByName([playerName])
    if (selectedPlayer.hasRank(rank)) {
      this._giveCardsToCurrentPlayer(selectedPlayer, rank)
    } else {
      this._drawFromDeck()
      this._nextPlayerTurn()
    }
  }

  winner() {
    if (this._areAllHandsEmpty() || this._isDeckEmpty()) {
      return this._calculateWinner()
    } else {
      return false
    }
  }

  humanPlayer() {
    return this.playerList().player()
  }

  players() {
    return this.playerList().players()
  }

  playerByName(playerName) {
    return this.playerList().playerByName(playerName)
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

  _giveCardsToCurrentPlayer(player, rank) {
    return this.playerList().giveCardsToCurrentPlayer(player, rank)
  }

  _shuffleDeck() {
    this.deck().shuffle()
  }

  _dealCards() {
    for (let i = 0; i < 7; i++) {
      this.players().forEach((player) => {
        this._drawFromDeck(player)
      })
    }
  }

  _humanPlayerName() {
    return this._playerName
  }

  _botCount() {
    if (!this._numberOfBots) this._numberOfBots = 1
    return this._numberOfBots
  }

  _drawFromDeck(player) {
    if (!player) player = this.playerList().currentPlayer()
    player.retrieveCard(this.deck().deal())
  }

  _nextPlayerTurn() {
    this.playerList().nextTurn()
  }

  _areAllHandsEmpty() {
    return this.playerList().areAllHandsEmpty()
  }

  _isDeckEmpty() {
    return this.deck().isEmpty()
  }

  _calculateWinner() {
    return this.playerList().calculateWinner()
  }
}
