class Game extends egret.Sprite {
    private gameStartPanel: GameStartPanel
    private gamePlayingPanel: GamePlayingPanel
    private gameEndPanel: GameEndPanel

    constructor() {
        super()
        this.init()
        this.start()
    }

    public init() {
        this.gameStartPanel = new GameStartPanel()
        this.gamePlayingPanel = new GamePlayingPanel()
        this.gameEndPanel = new GameEndPanel()

        this.gameStartPanel.start()
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START_1, this.gamePlaying1, this)
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START_2, this.gamePlaying2, this)
    }

    public start() {
        this.addChild(this.gameStartPanel)
        this.gameStartPanel.start()
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START_1, this.gamePlaying1, this)
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START_2, this.gamePlaying2, this)
    }

    private gamePlaying1() {
        this.gameStartPanel.end()
        this.removeChild(this.gameStartPanel)
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START_1, this.gamePlaying1, this)
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START_2, this.gamePlaying2, this)
        this.addChild(this.gamePlayingPanel)
        this.gamePlayingPanel.start(1)
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.GAME_END, this.gameEnd, this)
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.GAME_RESTART, this.gameRestart, this)
    }

    private gamePlaying2() {
        this.gameStartPanel.end()
        this.removeChild(this.gameStartPanel)
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START_1, this.gamePlaying1, this)
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START_2, this.gamePlaying2, this)
        this.addChild(this.gamePlayingPanel)
        this.gamePlayingPanel.start(2)
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.GAME_END, this.gameEnd, this)
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.GAME_RESTART, this.gameRestart, this)
    }

    private gameEnd() {
        this.gamePlayingPanel.end()
        this.removeChild(this.gamePlayingPanel)
        this.gamePlayingPanel.removeEventListener(GamePlayingPanel.GAME_END, this.gameEnd, this)
        this.gamePlayingPanel.removeEventListener(GamePlayingPanel.GAME_RESTART, this.gameRestart, this)
        this.start()
    }

    private gameRestart() {
        console.log('game restart')
    }
}