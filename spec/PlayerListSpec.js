describe('PlayerList', () => {
  let player, playerList, bot1

  beforeEach(() => {
    player = new Player('Player 1', 0)
    bot1 = new Player('Bot 1', 1)
    playerList = new PlayerList(player.name())
  })

  describe('#constructor', () => {
    it('takes in players and adds them to player object', () => {
      expect(playerList.players()).toEqual([player, bot1])
    })
  })

  describe('#players', () => {
    it('returns the list of players', () => {
      expect(playerList.players()).toEqual([player, bot1])
    })
  })

  describe('#createBots', () => {
    it('creates a number of specified bots', () => {
      const bot2 = new Player('Bot 2', 2)
      playerList.createBots(2)
      expect(playerList.players()).toEqual([player, bot1, bot2])
    })
  })

  describe('#turn', () => {
    it('knows whose turn it is', () => {
      expect(playerList.turn()).toEqual(player)
    })
  })

  describe('#playerByName', () => {
    it('returns the player with the given name', () => {
      expect(playerList.playerByName(player.name())).toEqual(player)
    })
  })
})
