class Login extends eui.ItemRenderer {
    public static LoginSuccess: string

    private wxloginbtn: eui.Button
    private account: eui.TextInput

    constructor() {
        super()
        this.init()
    }

    private init() {
        // 创建场景
        this.createScene()
    }

    private createScene() {
        this.skinName = "resource/eui_skins/LoginSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight

        this.wxloginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this)
    }

    private onLogin(): void {
        var data = {
            account: this.account.text,
        }
        Http.post(this, API.ApiAuthTestLogin, data).then((res) => {
            // unknown转any
            var rsp: any = res

            // 登陆成功，通知事件
            this.dispatchEventWith(Login.LoginSuccess, false, rsp.userinfo)
        })
    }
}