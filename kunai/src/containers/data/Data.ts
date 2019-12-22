class Data extends egret.Sprite {
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