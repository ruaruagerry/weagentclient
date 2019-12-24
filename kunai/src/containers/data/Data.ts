class Data extends eui.ItemRenderer {
    constructor() {
        super()
        this.init()
    }

    public init() {
        // 创建场景
        this.createScene()
        // 加载数据
        // this.loadData()
    }

    private createScene() {
        this.skinName = "resource/eui_skins/DataSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90
        // this.x = 0
        // this.y = 0
    }

    private loadData() {
        Http.get(API.ApiMoneyAdSee).then(res => {
            console.log("res:", res)
            return res;
        })

        var param = {
            getoutmoney: 10,
        }

        Http.post(API.ApiMoneyGetoutApply, param).then(res => {
            console.log("fuck res:", res)
            return res;
        })
    }
}