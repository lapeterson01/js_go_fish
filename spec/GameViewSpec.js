describe('GameView', () => {
  describe('render player name', () => {
    let mockFunctions

    beforeEach(() => {
      mockFunctions = () => {
        // does nothing
      }
    })

    it('renders the human players name', () => {
      const game = new Game('Player 1', 1)
      const view = new GameView(game, mockFunctions.bind(this), mockFunctions.bind(this), mockFunctions.bind(this), )
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      expect(container.innerText).toMatch(/Player 1/)
      container.remove()
    })
  })
})
