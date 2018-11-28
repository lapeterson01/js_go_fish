class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.game.bind(this))
    view.draw(this.container())
  }

  game(name, botCount) {
    const game = new Game(name, botCount)
    game.start()
    const view = new GameView(game)
    view.draw(this.container())
  }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
