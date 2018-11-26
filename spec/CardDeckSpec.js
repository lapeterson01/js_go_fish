describe('CardDeck', () => {
  let deck

  beforeEach(() => {
    deck = new CardDeck()
  })

  describe('#constructor', () => {
    it('begins with a deck of 52 standard playing cards', () => {
      expect(deck.count()).toEqual(52)
    })
  })

  describe('#shuffle', () => {
    it('shuffles the cards', () => {
      deck2 = new CardDeck()
      expect(deck.cards()).toEqual(deck2.cards())

      deck2.shuffle()
      expect(deck.cards()).not.toEqual(deck2.cards())
    })
  })

  describe('#deal', () => {
    it('returns the first card', () => {
      card = deck.deal()

      expect(card.rank()).toEqual('A')
      expect(card.suit()).toEqual('S')
      expect(deck.count()).toEqual(51)
    })
  })
})
