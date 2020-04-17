/*
 * @Author: your name
 * @Date: 2019-12-23 12:12:04
 * @LastEditTime : 2020-01-07 17:46:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weagentclient\kunai\src\containers\setup\Setup.ts
 */

class Setup extends eui.ItemRenderer {
    private portrait: eui.Image
    private id: eui.Label
    private nickname: eui.Label
    private latestversion: string

    private realbtn: eui.Rect = null
    private real: Real = null

    private phone: Phone = null
    private phonebtn: eui.Rect = null

    private logout: Logout = null
    private setupbtn: eui.Rect = null


    constructor() {
        super()
        this.init()
    }

    private init() {
        // 创建场景
        this.createScene()
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

        this.setupbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this.onLogout()
        }, this)
    }

    public loadData(clientinfo: any) {
        this.nickname.text = Main.userinfo.nickname
        this.id.text = Main.userinfo.id
        // 加载头像
        const imgLoader = new egret.ImageLoader()
        imgLoader.load(Main.userinfo.avatarurl)
        imgLoader.once(egret.Event.COMPLETE, (e: egret.Event) => {
            if (e.currentTarget.data) {
                const texture = new egret.Texture()
                texture.bitmapData = e.currentTarget.data
                this.portrait.texture = texture
            }
        }, this)

        this.latestversion = clientinfo.latestversion
    }

    private onReal(): void {
        this.real = new Real()
        this.addChild(this.real)
    }

    private onPhone(): void {
        this.phone = new Phone()
        this.addChild(this.phone)
    }

    private onLogout(): void {
        this.logout = new Logout()
        this.addChild(this.logout)
        this.logout.loadData(this.latestversion)
    }
}