class Wallet extends eui.ItemRenderer {
    private total: eui.Label = null // 钱包总收益
    private money: eui.Label = null // 当前账户余额
    private getouttotal: eui.Label = null // 总提现金额
    private remainsee: eui.Label = null // 剩余观看次数

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
}