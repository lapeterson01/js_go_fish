describe('Bot', () => {
  let bot

  beforeEach(() => {
    bot = new Bot('Bot 1')
  })

  it('shares same functionality as Player', () => {
    debugger
    expect(bot.name()).toEqual('Bot 1')
    expect(bot.hand()).toEqual([])
  })

  describe('#randomRank', () => {
    it('selects a randomRank from its hand', () => {
      const deck = new CardDeck()
      for (let i = 0; i < 7; i++) {
        bot.retrieveCard(deck.deal())
      }
      expect(bot.hand().some((card) => card.rank() == bot.randomRank())).toBe(true)
    })
  })

  describe('#randomPlayer', () => {
    it('selects a random opposing player')
  })
})
