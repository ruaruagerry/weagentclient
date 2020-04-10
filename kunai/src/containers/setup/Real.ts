class Real extends eui.ItemRenderer {
    private back: eui.Image
    private realnick: eui.TextInput
    private cardcode: eui.TextInput
    private realbtn: eui.Button

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
        this.skinName = "resource/eui_skins/RealSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90;

        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.delete()
        }, this)

        this.realbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.realdModify()
        }, this)
    }

    private loadData() {
        Http.get(this, API.ApiSetupRealGet).then(res => {
            // unknown转any
            var rsp: any = res

            if (rsp.realnick == "" || rsp.cardcode == "") {
                this.realbtn.enabled = true
                return
            }

            this.realnick.text = rsp.realnick
            this.cardcode.text = rsp.cardcode
            this.realnick.enabled = false
            this.cardcode.enabled = false
            this.realbtn.enabled = false
        })
    }

    private delete() {
        if (this.parent) {
            this.parent.removeChild(this)
        }
    }

    private realdModify() {
        if (this.realnick.text == "" || this.cardcode.text == "") {
            Msg.showMsg(this, "请输入必填信息")
            return
        }

        var data = {
            realnick: this.realnick.text,
            cardcode: this.cardcode.text,
        }
        Http.post(this, API.ApiSetupRealModify, data).then(res => {
            if (res == undefined) {
                Msg.showMsg(this, "提交成功")
                this.realnick.enabled = false
                this.cardcode.enabled = false
                this.realbtn.enabled = false
                return
            }
        })
    }
}