/**
 * 统一提示
 */
class Msg extends egret.Sprite {
    private static shape: egret.Shape
    private static showtext: egret.TextField

    constructor() {
        super()
    }

    public static init() {
        Msg.shape = new egret.Shape()
        Msg.showtext = new egret.TextField()
        Msg.showtext.size = 14
        Msg.showtext.textColor = 0xffffff
    }

    public static showMsg(obj: any, txt: string) {
        Msg.shape.graphics.beginFill(0x000000, .6)
        Msg.shape.graphics.drawRect(0, -100, obj.width, 100)
        Msg.shape.graphics.endFill()
        obj.addChild(Msg.shape)
        egret.Tween.get(Msg.shape).to({ y: 100 }, 100, egret.Ease.bounceOut).call(() => {
            setTimeout(() => {
                obj.removeChild(Msg.shape)
            }, 3000)
        }, this)

        Msg.showtext.text = txt
        Msg.showtext.x = obj.width / 2 - Msg.showtext.width / 2
        Msg.showtext.y = -100 / 2 - Msg.showtext.height / 2
        obj.addChild(Msg.showtext)
        egret.Tween.get(Msg.showtext).to({ y: 100 / 2 - Msg.showtext.height / 2 }, 100, egret.Ease.bounceOut).call(() => {
            setTimeout(() => {
                obj.removeChild(Msg.showtext)
            }, 3000)
        }, this)
    }
}