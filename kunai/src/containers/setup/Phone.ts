class Phone extends eui.ItemRenderer {
    public static BackPhone: string = "backphone"

    private back: eui.Image

    private phone: eui.TextInput
    private code: eui.TextInput
    private getcodebtn: eui.Button
    private bindbtn: eui.Button
    private tip: eui.Label

    private modifybindbtn: eui.Button
    private modifybind: ModifyPhone

    constructor() {
        super()
        this.init()
    }

    private init() {
        // 创建场景
        this.createScene()
        // 加载数据
        this.loadData()
    }

    private createScene() {
        this.skinName = "resource/eui_skins/PhoneSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90;

        // 增加自定义事件
        this.addEventListener(Phone.BackPhone, this.onBackPhone, this)

        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.delete()
        }, this)

        this.bindbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.bindPhone()
        }, this)

        this.getcodebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.getCode()
        }, this)

        this.modifybindbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.onModifyBind()
        }, this)
    }

    private loadData() {
        Http.get(this, API.ApiPhoneEntrance).then(res => {
            // unknown转any
            var rsp: any = res

            if (rsp.phone == "") {
                this.getcodebtn.enabled = true
                this.bindbtn.enabled = true
                this.modifybindbtn.enabled = false
                this.tip.text = ""

                if (rsp.remain > 0) {
                    this.getcodebtn.enabled = false
                    this.remainBind(rsp.remain)
                }

                return
            }

            this.tip.text = "已绑定手机号码"
            this.phone.text = rsp.phone
            this.phone.enabled = false
            this.code.enabled = false
            this.code.alpha = 0
            this.getcodebtn.enabled = false
            this.getcodebtn.alpha = 0
            this.bindbtn.enabled = false
            this.modifybindbtn.enabled = true
        })
    }

    private delete() {
        if (this.parent) {
            this.parent.removeChild(this)
        }
    }

    private bindPhone() {
        if (this.phone.text == "" || this.code.text == "") {
            Msg.showMsg(this, "请输入完整信息")
            return
        }

        var data = {
            phone: this.phone.text,
            code: this.code.text,
        }
        Http.post(this, API.ApiPhoneBind, data).then(res => {
            if (res == undefined) {
                Msg.showMsg(this, "绑定成功")
                this.tip.text = "已绑定手机号码"
                this.phone.enabled = false
                this.code.text = ""
                this.code.enabled = false
                this.code.alpha = 0
                this.getcodebtn.enabled = false
                this.getcodebtn.alpha = 0
                this.bindbtn.enabled = false
                this.modifybindbtn.enabled = true
                return
            }
        })
    }

    private getCode() {
        if (this.phone.text == "") {
            Msg.showMsg(this, "请输入手机号码")
            return
        }

        var data = {
            phone: this.phone.text,
        }
        Http.post(this, API.ApiPhoneGetCode, data).then(res => {
            Msg.showMsg(this, "获取成功")

            // unknown转any
            var rsp: any = res
            this.getcodebtn.enabled = false
            this.remainBind(rsp.remain)
        })
    }

    private remainBind(countdown: number) {
        var timer: egret.Timer = new egret.Timer(1000, countdown);
        timer.addEventListener(egret.TimerEvent.TIMER, onTimerHandler, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        timer.start();
        function onTimerHandler(): void {
            countdown--;
            this.getcodebtn.label = String(countdown)
        }
        function onTimerComplete(): void {
            this.getcodebtn.label = "获取"
        }
    }

    private onModifyBind() {
        this.modifybind = new ModifyPhone()
        this.modifybind.init(this.phone.text)
        this.addChild(this.modifybind)
    }

    private onBackPhone(evt: egret.Event) {
        console.log("backbackback")
        this.phone.text = evt.data
    }
}