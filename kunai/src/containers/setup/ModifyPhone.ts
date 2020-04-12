class ModifyPhone extends eui.ItemRenderer {
    private back: eui.Image
    private oldphone: eui.TextInput
    private phone: eui.TextInput
    private code: eui.TextInput
    private getcodebtn: eui.Button
    private modifybindbtn: eui.Button

    constructor() {
        super()
    }

    public init(oldphone: string) {
        // 创建场景
        this.createScene(oldphone)
    }

    private createScene(oldphone: string) {
        this.skinName = "resource/eui_skins/ModifyPhoneSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90;

        // 初始数据
        this.oldphone.text = oldphone
        this.oldphone.enabled = false

        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.delete()
        }, this)

        this.modifybindbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.modifyBindPhone()
        }, this)

        this.getcodebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.getCode()
        }, this)
    }

    private delete() {
        if (this.parent) {
            this.parent.dispatchEventWith(Phone.BackPhone, false, this.oldphone.text)
            this.parent.removeChild(this)
        }
    }

    private modifyBindPhone() {
        if (this.phone.text == "" || this.code.text == "" || this.oldphone.text == "") {
            Msg.showMsg(this, "请输入完整信息")
            return
        }

        var data = {
            oldphone: this.oldphone.text,
            phone: this.phone.text,
            code: this.code.text,
        }
        Http.post(this, API.ApiPhoneModifyBind, data).then(res => {
            if (res == undefined) {
                Msg.showMsg(this, "修改绑定成功")
                this.oldphone.text = this.phone.text
                this.phone.text = ""
                this.code.text = ""
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
}