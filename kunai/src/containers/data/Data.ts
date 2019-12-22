class Data extends egret.Sprite {
    constructor() {
        super()
        this.init()
    }

    public init() {
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