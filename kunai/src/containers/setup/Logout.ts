class Logout extends eui.ItemRenderer {
    private back: eui.Image
    private version: eui.Label
    private logoutbtn: eui.Button

    constructor() {
        super()
        this.init()
    }

    private init() {
        // 创建场景
        this.createScene()
    }

    private createScene() {
        this.skinName = "resource/eui_skins/LogoutSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90;

        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.delete()
        }, this)

        this.logoutbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.dispatchEventWith(Main.MainLogin, true)
        }, this)
    }

    public loadData(latestversion: string) {
        this.version.text = version
        if (version == latestversion) {
            this.version.text += "(已最新)"
        }
    }

    private delete() {
        if (this.parent) {
            this.parent.removeChild(this)
        }
    }
}