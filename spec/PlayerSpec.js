describe('Player', () => {
  let player, card

  beforeEach(() => {
    player = new Player('Player 1')
    card = new PlayingCard('A', 'S')
  })

  describe('#constructor', () => {
    it('starts with a name', () => {
      const name = 'Player 1'
      expect(player.name()).toEqual(name)
    })
  })

  describe('#hand', () => {
    it('starts with an empty hand', () => {
      const hand = []
      expect(player.hand()).toEqual(hand)
    })
  })

  describe('#retrieveCard', () => {
    it('adds a card to player hand', () => {
      player.retrieveCard(card)
      expect(player.hand()).toEqual([card])
    })
  })

  describe('#countHand', () => {
    it('returns the number of cards in player hand', () => {
      expect(player.countHand()).toEqual(0)
      player.retrieveCard(card)
      expect(player.countHand()).toEqual(1)
    })
  })

  describe('#hasRank', () => {
    it('returns true if player has selected rank', () => {
      player.retrieveCard(card)
      expect(player.hasRank(card.rank())).toBe(true)
    })

    it('returns false if player does not have selected rank', () => {
      expect(player.hasRank(card.rank())).toBe(false)
    })
  })

  describe('#giveUpCards', () => {
    it('removes from hand and returns cards of selected rank', () => {
      var card2 = new PlayingCard('A', 'C');
      var card3 = new PlayingCard('2', 'C');
      [card, card2, card3].forEach((card) => player.retrieveCard(card))
      expect(player.giveUpCards(card.rank())).toEqual([card, card2])
      expect(player.hand()).toEqual([card3])
    })
  })
})
