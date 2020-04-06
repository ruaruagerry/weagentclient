class Wallet extends eui.ItemRenderer {
    private total: eui.Label = null // 钱包总收益
    private money: eui.Label = null // 当前账户余额
    private getouttotal: eui.Label = null // 总提现金额
    private remainsee: eui.Label = null // 剩余观看次数

    private getoutrecord: GetoutRecord = null
    private getoutrecordbtn: eui.Button = null // 提现记录按钮

    private adrecord: AdRecord = null
    private adrecordbtn: eui.Button = null // 收益记录按钮

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
        this.skinName = "resource/eui_skins/WalletSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90

        // 增加按钮事件
        this.getoutrecordbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.onGetoutRecord()
        }, this)

        this.adrecordbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.onAdRecord()
        }, this)
    }

    public loadData() {
        Http.get(API.ApiMoneyEntrance).then(res => {
            if (res == undefined) {
                return
            }

            // unknown转any
            var rsp: any = res

            this.total.text = rsp.total
            this.money.text = rsp.money
            this.getouttotal.text = rsp.getouttotal
            this.remainsee.text = rsp.remainsee
        })
    }

    private onGetoutRecord() {
        this.getoutrecord = new GetoutRecord()
        this.addChild(this.getoutrecord)
    }

    private onAdRecord() {
        this.adrecord = new AdRecord()
        this.addChild(this.adrecord)
    }
}