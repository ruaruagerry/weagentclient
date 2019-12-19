/**
 * 首页底部
 */

class Bottom extends egret.Sprite {
    constructor() {
        super()
    }

    public static FRIENDS_RANK = 'friendsrank'
    public static GROUP_RANK = 'grouprank'
    public static WORLD_RANK = 'worldrank'
    public static SKIN = 'skin'
    public static ZAN = 'ZAN'
    public height: number = 100
    private _width: number = 1000
    private bg: egret.Shape

    public init() {
        const bg: egret.Shape = new egret.Shape()
        bg.graphics.beginFill(0xffffff, .5)
        bg.graphics.drawRect(0, 0, this._width, this.height)
        bg.graphics.endFill()
        this.bg = bg
        this.addChild(this.bg)

        const b1: egret.Bitmap = new egret.Bitmap()
        b1.texture = RES.getRes('data_png')
        b1.width = 70 * .4
        b1.height = 65 * .4
        b1.x = 40
        b1.y = 20
        this.addChild(b1)
        b1.touchEnabled = true
        b1.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Bottom.FRIENDS_RANK)
        }, this)

        const t1: egret.TextField = new egret.TextField()
        t1.text = '分红详情'
        t1.size = 12
        t1.textColor = 0x000000
        t1.x = 30
        t1.y = 60
        this.addChild(t1)
        t1.touchEnabled = true
        t1.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Bottom.FRIENDS_RANK)
        }, this)

        const b2: egret.Bitmap = new egret.Bitmap()
        b2.texture = RES.getRes('game_png')
        b2.width = 90 * .4
        b2.height = 65 * .4
        b2.x = 136
        b2.y = 20
        this.addChild(b2)
        b2.touchEnabled = true
        b2.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Bottom.FRIENDS_RANK)
        }, this)

        const t2: egret.TextField = new egret.TextField()
        t2.text = '游戏'
        t2.size = 12
        t2.textColor = 0x000000
        t2.x = 142
        t2.y = 60
        this.addChild(t2)
        t2.touchEnabled = true
        t2.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Bottom.FRIENDS_RANK)
        }, this)

        const b3: egret.Bitmap = new egret.Bitmap()
        b3.texture = RES.getRes('wallet_png')
        b3.width = 70 * .4
        b3.height = 65 * .4
        b3.x = 240
        b3.y = 20
        this.addChild(b3)
        b3.touchEnabled = true
        b3.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Bottom.SKIN)
        }, this)

        const t3: egret.TextField = new egret.TextField()
        t3.text = '收益'
        t3.size = 12
        t3.textColor = 0x000000
        t3.x = 242
        t3.y = 60
        this.addChild(t3)
        t3.touchEnabled = true
        t3.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Bottom.SKIN)
        }, this)

        const miniObj = {
            appId: 'wx18a2ac992306a5a4',
            path: 'pages/apps/largess/detail?id=waQKNtmC5mk%3D'
        }
        const b4: egret.Bitmap = new egret.Bitmap()
        b4.texture = RES.getRes('setup_png')
        b4.width = 70 * .4
        b4.height = 65 * .4
        b4.x = 340
        b4.y = 20
        this.addChild(b4)
        b4.touchEnabled = true
        b4.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Bottom.ZAN)
            platform.openMini(miniObj)
        }, this)

        const t4: egret.TextField = new egret.TextField()
        t4.text = '我的'
        t4.size = 12
        t4.textColor = 0x000000
        t4.x = 342
        t4.y = 60
        this.addChild(t4)
        t4.touchEnabled = true
        t4.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Bottom.ZAN)
            platform.openMini(miniObj)
        }, this)

    }
}