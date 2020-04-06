class AdRecord extends eui.ItemRenderer {
    private dataList: eui.List
    private rspdata: Array<any> = new Array<any>()
    private scroller: eui.Scroller
    private startindex: number = 0
    private endindex: number = this.startindex + 5
    private stopload: boolean = false
    private loading: boolean = false
    public back: eui.Image

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
        this.skinName = "resource/eui_skins/AdRecordSkin.exml"
        this.dataList.itemRenderer = AdRecordItem


        const { stage } = egret.MainContext.instance
        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90

        // 创建滑动
        this.scroller = new eui.Scroller();
        this.scroller.x = this.dataList.x
        this.scroller.y = this.dataList.y
        this.scroller.width = this.width
        this.scroller.height = this.height - 140
        this.scroller.viewport = this.dataList
        this.scroller.scrollPolicyH = 'off'
        this.addChild(this.scroller)

        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.delete()
        }, this)

        // 增加滑动事件
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoved, this)
    }

    public loadData() {
        if (this.stopload || this.loading) {
            return
        }

        this.loading = true
        var data = { start: this.startindex, end: this.endindex }
        Http.post(this, API.ApiMoneyAdRecord, data).then(res => {
            if (res == undefined) {
                return
            }

            // unknown转any
            var rsp: any = res
            for (let v of rsp.adrecords) {
                this.rspdata.push(v)
            }
            this.bindData(this.rspdata)
            this.startindex = this.rspdata.length
            this.endindex = this.startindex + 5

            if (rsp.adrecords.length < 5) {
                this.stopload = true
            }

            this.loading = false
        })
    }


    /** 进行数据绑定 */
    public bindData(data: Array<any>): void {
        let arrCollection: eui.ArrayCollection = new eui.ArrayCollection(data);
        this.dataList.dataProvider = arrCollection;
    }

    private delete(): void {
        if (this.parent) {
            this.parent.removeChild(this)
        }
    }

    private touchMoved(): void {
        this.loadData()
    }
}

class AdRecordItem extends eui.ItemRenderer {
    private date: eui.Label = null;
    private earning: eui.Label = null;
    private money: eui.Label = null;

    public constructor() {
        super();
        this.skinName = "resource/eui_skins/AdRecordItemSkin.exml";
    }

    protected createChildren(): void {
        super.createChildren();
    }

    protected dataChanged(): void {
        this.loadData();
    }

    private loadData(): void {
        this.date.text = this.data.createtime;
        this.earning.text = this.data.earning
        this.money.text = this.data.money;
    }
}