class LoginView {
  constructor(onLogin) {
    this.onLogin = onLogin
  }

  onSubmit(event) {
    event.preventDefault();
    this.onLogin(event.target.name.value, event.target.botCount.value)
  }

  nameInput() {
    return document.getElementById('name')
  }

  botCountInput() {
    return document.getElementById('botCount')
  }

  submitButton() {
    return document.getElementById('submit')
  }

  draw(container) {
    const formMarkup = `
      <form class="user-form">
        <label for="name">Name</label>
        <input type="text" id="name" />

        <label for="botCount">How Many Bots?</label>
        <select id="botCount">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <input id="submit" type="submit" value="Login">
      </form>
    `

    const element = document.createElement('div')
    element.innerHTML = formMarkup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}
