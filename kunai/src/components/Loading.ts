
// var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("loading"));


class Loading {
    public static mc1: egret.MovieClip

    public static init() {
        var data = RES.getRes("loading_json");
        var txtr = RES.getRes("loading_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        Loading.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("loading"));
    }

    public static showLoading(obj: any): void {
        obj.addChild(Loading.mc1)
        Loading.mc1.x = (obj.width - Loading.mc1.width) / 2
        Loading.mc1.y = (obj.height - Loading.mc1.height) / 2
        Loading.mc1.gotoAndPlay(1, -1);
    }

    public static hidLoading(obj: any): void {
        obj.removeChild(Loading.mc1)
    }
}