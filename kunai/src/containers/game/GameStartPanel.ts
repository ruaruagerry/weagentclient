/**
 * 游戏开始界面
 */
class GameStartPanel extends egret.Sprite {
    public static GAME_START_1: string = 'gamestart1'
    public static GAME_START_2: string = 'gamestart2'
    private bg: egret.Shape
    private img: egret.Bitmap
    private logo: egret.Bitmap
    private startBtn: Buttons
    private startPK: Buttons
    private PK: egret.Bitmap
    private skinMask: egret.Shape
    private skinDialog: SkinDialog

    public constructor() {
        super()
        this.init()
    }

    public start() {
        const { stage } = egret.MainContext.instance
        const { startBtn, onTouchTap, img, logo, PK } = this
        img.width = stage.stageWidth
        img.height = stage.stageHeight - 90
        logo.x = stage.stageWidth / 2 - logo.width / 2
        logo.y = - logo.height
        egret.Tween.get(logo).to({ y: 60 }, 500, egret.Ease.bounceOut)

        startBtn.x = - startBtn.width
        startBtn.y = 400
        startBtn.touchEnabled = true
        startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.onTouchTap(1)
        }, this)
        egret.Tween.get(startBtn).to({ x: stage.stageWidth / 2 - startBtn.width / 2 }, 500, egret.Ease.bounceOut)
    }

    private init() {
        const { stage } = egret.MainContext.instance
        const img = new egret.Bitmap()
        img.texture = RES.getRes('1_jpg')
        img.x = 0
        img.y = 0
        img.alpha = .6
        this.img = img
        this.addChildAt(this.img, 0)

        const logo = new egret.Bitmap()
        // logo.texture = RES.getRes('logo_png')
        logo.width = 751 * .4
        logo.height = 599 * .4
        this.logo = logo
        this.addChild(this.logo)

        this.startBtn = new Buttons()
        this.addChild(this.startBtn)
        this.startBtn.init(1, '开始游戏')

        this.btnClose = new egret.Bitmap(RES.getRes('close_png'));
        this.btnClose.width = 25
        this.btnClose.height = 25
        this.btnClose.x = stage.stageWidth * 4 / 5 + 30
        this.btnClose.y = 65
        this.btnClose.touchEnabled = true
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.removeChild(this.btnClose)
        }, this);
    }

    private onTouchTap(mode: number = 1) {
        // mode1：简单
        // mode2：疯狂
        if (mode === 1) {
            this.dispatchEventWith(GameStartPanel.GAME_START_1)
        } else if (mode === 2) {
            this.dispatchEventWith(GameStartPanel.GAME_START_2)
        }
    }

    public end() {
        const { startBtn, onTouchTap } = this
        startBtn.$touchEnabled = false
        if (startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, onTouchTap, this)
        }
    }

    private btnClose: egret.Bitmap;
}