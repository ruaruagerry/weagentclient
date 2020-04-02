/*
 * @Author: your name
 * @Date: 2019-12-23 12:12:04
 * @LastEditTime : 2019-12-27 17:36:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weagentclient\kunai\src\containers\data\Data.ts
 */

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

    private init() {
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

    public loadData() {
        Http.get(API.ApiDataEntrance).then(res => {
            if (res == undefined) {
                return
            }

            // unknown转any
            var rsp: any = res

            this.data_yestarday_all.text = rsp.yestardayall
            this.data_history_all.text = rsp.historyall
            this.data_today_adnum.text = rsp.todayadnum
            this.data_today_onlinenum.text = rsp.todayonlinenum
            this.data_today_all.text = rsp.todayall
        })
    }
}