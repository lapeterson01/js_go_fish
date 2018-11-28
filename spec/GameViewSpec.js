describe('GameView', () => {
  describe('render player name', () => {
    it('renders the human players name', () => {
      const game = new Game('Player 1', 1)
      const view = new GameView(game)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      expect(container.innerText).toMatch(/Player 1/)
      container.remove()
    })
  })
})
