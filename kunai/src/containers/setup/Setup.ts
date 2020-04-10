/*
 * @Author: your name
 * @Date: 2019-12-23 12:12:04
 * @LastEditTime : 2020-01-07 17:46:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weagentclient\kunai\src\containers\setup\Setup.ts
 */

class Setup extends eui.ItemRenderer {
    private realbtn: eui.Rect = null
    private real: Real = null

    private phone: Phone = null
    private phonebtn: eui.Rect = null

    private setupbtn: eui.Rect = null


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

        // 增加按钮事件
        this.realbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.onReal()
        }, this)

        this.phonebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.onPhone()
        }, this)
    }

    public loadData() {
        // Http.get(API.ApiDataEntrance).then(res => {
        //     // unknown转any
        //     var rsp: any = res
        // })
    }

    private onReal(): void {
        this.real = new Real()
        this.addChild(this.real)
    }

    private onPhone(): void {
        this.phone = new Phone()
        this.addChild(this.phone)
    }
}