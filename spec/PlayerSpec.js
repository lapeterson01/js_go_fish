describe('Player', () => {
  let player, card

  beforeEach(() => {
    player = new Player('Player 1', 0)
    card = new PlayingCard('A', 'S')
  })

  describe('#constructor', () => {
    it('starts with a name', () => {
      const name = 'Player 1'
      expect(player.name()).toEqual(name)
    })

    it('starts with an id', () => {
      const id = 0
      expect(player.id()).toEqual(id)
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
      player.retrieveCard('fake card')
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
})
