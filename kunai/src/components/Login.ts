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

    private onWxLogin() {
        let sysInfo = wx.getSystemInfoSync();
        let button = wx.createUserInfoButton({
            type: "text",
            text: "微信登录",
            style: {
                left: sysInfo.windowWidth / 2 - 50,
                top: sysInfo.windowHeight / 2 - 30,
                width: 100,
                height: 60,
                backgroundColor: "#c7a976",
                color: "#5c5941",
                borderColor: "#5c5941",
                textAlign: "center",
                fontSize: 16,
                borderWidth: 4,
                borderRadius: 4,
                lineHeight: 60,
            }
        });
        button.onTap(function (res) {
            if (res) {
                console.log("res:", res)
                button.destroy();
                var data = {
                    account: this.account.text,
                }
                Http.post(this, API.ApiAuthWxLogin, data).then((res) => {
                    // unknown转any
                    var rsp: any = res
                    this.loadRsp(rsp)
                })
            }
            else {
                wx.showModal({
                    title: "温馨提示",
                    content: "《XXX》是一款在线对战游戏，需要您的用户信息登录游戏。",
                    showCancel: false,
                });
            }
        });
        button.show();
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
        Http.token = rsp.token
        // 登陆成功，通知事件
        this.dispatchEventWith(Login.LoginSuccess, true, rsp)
    }
}