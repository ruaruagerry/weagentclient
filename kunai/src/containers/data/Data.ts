class Data extends eui.ItemRenderer {
    private data_yestarday_all: eui.Label = null // 昨日全网收益
    private data_history_all: eui.Label = null // 历史全网收益
    private data_today_adnum: eui.Label = null // 今日实时看广告次数
    private data_today_onlinenum: eui.Label = null // 今日实时在线人数
    private data_today_all: eui.Label = null // 今日总收益

    constructor() {
        super()
        this.init()
    }

    public init() {
        // 创建场景
        this.createScene()
        // 加载数据
        this.loadData()
    }

    private createScene() {
        this.skinName = "resource/eui_skins/DataSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90
    }

    private loadData() {
        this.data_yestarday_all.text = "1.00"
        this.data_history_all.text = "2.00"
        this.data_today_adnum.text = "3"
        this.data_today_onlinenum.text = "4"
        this.data_today_all.text = "5"

        // Http.get(API.ApiMoneyAdSee).then(res => {
        //     console.log("res:", res)
        //     return res;
        // })

        // var param = {
        //     getoutmoney: 10,
        // }

        // Http.post(API.ApiMoneyGetoutApply, param).then(res => {
        //     console.log("fuck res:", res)
        //     return res;
        // })
    }
}