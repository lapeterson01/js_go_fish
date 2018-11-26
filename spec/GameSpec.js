describe('Game', () => {
  let player, game, bot1

  beforeEach(() => {
    game = new Game('Player 1')
    player = game._humanPlayer()
    bot1 = game._bots()[0]
  })

  it('knows whose turn it is', () => {
    expect(game.turn()).toEqual(player)
  })

  describe('#constructor', () => {
    it('should start with a human player and bots', () => {
      game = new Game(player.name(), 2)
      bot2 = game._bots()[1]
      expect(game.players()).toEqual([player, bot1, bot2])
    })

    it('gives ids to each player and bot that equals its index in players array', () => {
      expect(player.id()).toEqual(game.players().indexOf(player))
      expect(bot1.id()).toEqual(game.players().indexOf(bot1))
    })

    it('should start with a deck', () => {
      expect(game.deck()).toEqual(new CardDeck())
    })
  })

  describe('#start', () => {
    it('should shuffle the cards', () => {
      deck2 = new CardDeck()
      expect(game.deck().cards()).toEqual(deck2.cards())

      game.start()
      expect(game.deck().cards()).not.toEqual(deck2.cards())
    })

    it('should deal cards to the players', () => {
      game.start()
      expect(game.deck().count()).toEqual(38)
      expect(player.countHand()).toEqual(7)
      expect(bot1.countHand()).toEqual(7)
    })
  })

  describe('#playRound', () => {
    let card1, card2

    beforeEach(() => {
      card1 = new PlayingCard('A', 'S')
      card2 = new PlayingCard('2', 'C')
    })

    xit('plays a round', () => {
      player.retrieveCard(card1)
      bot1.retrieveCard(card2)
      game.playRound(bot1.id(), card2.rank())
      expect(bot1.hand()).toEqual([])
      expect(player.hand()).toEqual([card1, card2])
    })
  })

  describe('#allPlayers', () => {
    it('should return all players', () => {
      expect(game.players()).toEqual([player, bot1])
    })
  })
})
