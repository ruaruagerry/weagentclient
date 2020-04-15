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
        // 创建微信透明按钮
        this.createWxbtn()
    }

    private createScene() {
        this.skinName = "resource/eui_skins/LoginSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight

        // this.wxloginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWxLogin, this)
        this.testloginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTestLogin, this)
    }

    private createWxbtn() {
        let that = this

        wx.login({
            success: function (e) {
                const wxbtn = wx.createUserInfoButton({
                    type: "text",
                    text: "111",
                    style: {
                        left: this.left,
                        top: this.top,
                        width: this.width,
                        height: this.height,
                        lineHeight: 0,
                        backgroundColor: "",//透明
                        color: "#ffffff",
                    }
                });
                wxbtn.onTap(function (res) {
                    if (res) {
                        wxbtn.destroy();
                        var data = {
                            code: e.code,
                            encrypteddata: res.encrypteddata,
                            iv: res.iv,
                        }
                        Http.post(that, API.ApiAuthWxLogin, data).then((res) => {
                            // unknown转any
                            var rsp: any = res
                            that.loadRsp(rsp)
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
            }
        })
    }

    // private onWxLogin() {
    //     var timer: egret.Timer = new egret.Timer(500, 1);
    //     timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
    //     timer.start();
    //     function onTimerComplete(): void {
    //         console.log("???")
    //     }
    // }

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