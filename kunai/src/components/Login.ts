class Login extends eui.ItemRenderer {
    public static LoginSuccess: string

    private wxloginbtn: eui.Button
    private testloginbtn: eui.Button
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

        this.wxloginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWxLogin, this)
        this.testloginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTestLogin, this)
    }

    private onWxLogin(): void {
        var data = {
            account: this.account.text,
        }
        Http.post(this, API.ApiAuthWxLogin, data).then((res) => {
            // unknown转any
            var rsp: any = res
            this.loadRsp(rsp)
        })
    }

    private onTestLogin(): void {
        var data = {
            account: this.account.text,
        }
        Http.post(this, API.ApiAuthTestLogin, data).then((res) => {
            // unknown转any
            var rsp: any = res
            this.loadRsp(rsp)
        })
    }

    private loadRsp(rsp: any): void {
        egret.localStorage.setItem("Session", rsp.token)
        // 登陆成功，通知事件
        this.dispatchEventWith(Login.LoginSuccess, true, rsp.userinfo)
    }
}