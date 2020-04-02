/*
 * @Author: your name
 * @Date: 2019-12-23 12:12:04
 * @LastEditTime : 2020-01-07 17:46:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weagentclient\kunai\src\containers\setup\Setup.ts
 */

class Setup extends eui.ItemRenderer {
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
        this.skinName = "resource/eui_skins/SetupSkin.exml";

        const { stage } = egret.MainContext.instance

        this.width = stage.stageWidth
        this.height = stage.stageHeight - 90
    }

    public loadData() {
        // Http.get(API.ApiDataEntrance).then(res => {
        //     // unknown转any
        //     var rsp: any = res
        // })
    }
}