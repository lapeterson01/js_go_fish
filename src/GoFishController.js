class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  startGame(name, botCount) {
    this.game(name, botCount).start()
    this.gameView()
  }

  game(name, botCount) {
    if (!this._game) this._game = new Game(name, botCount)
    return this._game
  }

  gameView() {
    const view = new GameView(this.game(), this.setRank.bind(this), this.setPlayer.bind(this), this.playRound.bind(this))
    view.draw(this.container())
  }

  selectedPlayer() {
    return this._selectedPlayer
  }

  selectedRank() {
    return this._selectedRank
  }

  setPlayer(event) {
    event.target.parentNode.parentNode.childNodes.forEach((opponentNode) => {
      opponentNode.setAttribute('style', 'color: none')
    })
    event.target.parentNode.setAttribute('style', 'color: blue')
    this._selectedPlayer = event.target.parentNode.dataset.player
  }

  setRank(event) {
    event.target.parentNode.childNodes.forEach((cardNode) => {
      cardNode.setAttribute('style', 'color: none')
    })
    event.target.setAttribute('style', 'color: red')
    this._selectedRank = event.target.dataset.rank
  }

  playRound() {
    this.game().playRound(this.selectedPlayer(), this.selectedRank())
    this.gameView()
  }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
