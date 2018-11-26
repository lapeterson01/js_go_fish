describe('Player', () => {
  let player

  beforeEach(() => {
    player = new Player('Player 1')
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
      const card = new PlayingCard('A', 'S')
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
})
