describe('PlayingCard', () => {
  describe('#constructor', () => {
    it('has a rank and suit', () => {
      rank = 'A'
      suit = 'Spades'
      card = new PlayingCard(rank, suit)
      expect(card.rank()).toEqual(rank)
      expect(card.suit()).toEqual(suit)
    })
  })
})
