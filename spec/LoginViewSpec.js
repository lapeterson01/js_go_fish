describe('LoginView', () => {
  describe('form submit', () => {
    it('calls passed in function logged in player name', () => {
      let calledWith
      const onLogin = (name, botCount) => { calledWith = [name, botCount] }
      const view = new LoginView(onLogin)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      view.nameInput().value = 'Player 1'
      view.botCountInput().value = 2
      view.submitButton().click()

      expect(calledWith).toEqual(['Player 1', '2'])
      container.remove()
    })
  })
})
