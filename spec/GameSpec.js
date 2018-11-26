describe('Game', () => {
  let player, game, bot1

  beforeEach(() => {
    game = new Game('Player 1')
    player = game._humanPlayer()
    bot1 = game._bots()[0]
  })

  describe('#constructor', () => {
    it('should start with a human player and bots', () => {
      bot2 = new Player('Bot 2')
      game = new Game(player.name(), 2)
      expect(game.players()).toEqual([player, bot1, bot2])
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

  describe('#allPlayers', () => {
    it('should return all players', () => {
      expect(game.players()).toEqual([player, bot1])
    })
  })
})
