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
    const view = new GameView(this.game(), this.setRank.bind(this), this.setPlayer.bind(this), this.playRound.bind(this), this.botPlayRound.bind(this))
    view.draw(this.container())
  }

  winnerView() {
    const view = new WinnerView(this.game())
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
      opponentNode.style.color = null
    })
    event.target.parentNode.style.color = 'blue'
    this._selectedPlayer = event.target.parentNode.dataset.player
  }

  setRank(event) {
    event.target.parentNode.childNodes.forEach((cardNode) => {
      cardNode.style.color = null
    })
    event.target.style.color = 'red'
    this._selectedRank = event.target.dataset.rank
  }

  playRound() {
    this.game().playRound(this.selectedPlayer(), this.selectedRank())
    this._checkWinner()
    this.gameView()
  }

  botPlayRound() {
    const bot = new Bot(this.game())
    this.game().playRound(bot.randomPlayer(), bot.randomRank())
    this._checkWinner()
    this.gameView()
  }

  _checkWinner() {
    if (this.game().winner()) this.winnerView()
  }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
