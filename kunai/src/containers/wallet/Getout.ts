class Getout extends eui.ItemRenderer {
    private wechat: eui.Button
    private two: eui.Button
    private three: eui.Button
    private four: eui.Button
    private five: eui.Button
    private ten: eui.Button
    private twenty: eui.Button
    private back: eui.Image
    private money: eui.Label
    private getoutbtn: eui.Button

    private chosenbtns = new Array<eui.Button>()
    private chosenIdx: string = "-1"

    constructor() {
        super()
        this.init()
    }

    private init() {
        // 创建场景
        this.createScene()
    }

    private createScene() {
        this.skinName = "resource/eui_skins/GetoutSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90;

        this.initchosenbtns()

        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.delete()
        }, this)

        this.getoutbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.onGetout()
        }, this)
    }

    public loadData(money: string): void {
        this.money.text = money
    }

    private delete(): void {
        if (this.parent) {
            this.parent.removeChild(this)
        }
    }

    private onGetout() {
        if (this.chosenIdx == "-1") {
            console.log("not chosen")
            return
        }

        var getoutmoney = Number(this.chosenbtns[this.chosenIdx].label.replace("元", ""))
        var money = Number(this.money.text)
        if (getoutmoney > money) {
            Msg.showMsg(this, "余额不足")
            return
        }

        let data = { getoutmoney: getoutmoney }
        Http.post(this, API.ApiMoneyGetoutApply, data).then(res => {
            if (res == undefined) {
                Msg.showMsg(this, "提现成功")
                return
            }
        })
    }


    private initchosenbtns(): void {
        // 设置按钮文字大小
        this.wechat.currentState = "down";
        (<eui.Label>this.wechat.labelDisplay).size = 18;

        this.two.currentState = "down"
        this.chosenIdx = "0"

        this.chosenbtns.push(this.two)
        this.chosenbtns.push(this.three)
        this.chosenbtns.push(this.four)
        this.chosenbtns.push(this.five)
        this.chosenbtns.push(this.ten)
        this.chosenbtns.push(this.twenty)

        for (let i in this.chosenbtns) {
            (<eui.Label>this.chosenbtns[i].labelDisplay).size = 18;
            this.chosenbtns[i].addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                this.chosenIdx = i
                this.chosen(this.chosenbtns[i].label)
            }, this)
        }
    }

    private chosen(label: string): void {
        for (let v of this.chosenbtns) {
            if (v.label == label) {
                v.currentState = "down"
            } else {
                v.currentState = "up"
            }
        }
    }
}