/** * 滑动列表 * 使用虚拟布局、自定义项呈现器 * 不需要初始化item只需要添加皮肤 * */
class Rank extends eui.Scroller implements eui.UIComponent {
    public dataList: eui.List;
    public constructor() {
        super();
        this.skinName = "resource/eui_skins/RankSkin.exml";
        this.initItemRenderer(RankItem)
        this.viewport = this.dataList;
    }

    /** * 通过SkinName 初始化item皮肤 * @param itemSkin item皮肤 */
    public initItemSkin(itemSkin: any): void {
        this.dataList.itemRendererSkinName = itemSkin;
    }

    /** * 通过itemRenderer 初始化item皮肤 *  @param itemRenderer 所有item都要继承 eui.ItemRenderer */
    public initItemRenderer(itemRenderer: any): void {
        this.dataList.itemRenderer = itemRenderer;
    }

    /** 进行数据绑定 */
    public bindData(data: Array<any>): void {
        let arrCollection: eui.ArrayCollection = new eui.ArrayCollection(data);
        this.dataList.dataProvider = arrCollection;
    }
}

class RankItem extends eui.ItemRenderer {
    private rank_ranknum: eui.Label = null;
    private rank_score: eui.Label = null;
    private rank_portrait: eui.Image = null;
    private rank_nick: eui.Label = null;
    private rank_rect: eui.Rect = null;

    public constructor() {
        super();
        this.skinName = "resource/eui_skins/ItemSkin.exml";
    }

    protected createChildren(): void {
        super.createChildren();
    }

    protected dataChanged(): void {
        this.loadData();
    }

    private loadData(): void {
        // this.rank_ranknum.text = this.data.index;
        this.rank_ranknum.text = String(this.itemIndex + 1)
        this.rank_score.text = this.data.score;
        this.rank_portrait.source = RES.getRes(this.data.portrait);
        this.rank_nick.text = this.data.nick;
    }

    public setRectColor(fillcolor: number): void {
        this.rank_rect.fillColor = fillcolor
        this.rank_rect.height = this.height
    }

    public setData(ranknum: number, portrait: string, nick: string, score: number): void {
        this.rank_ranknum.text = String(ranknum)
        this.rank_score.text = String(score);
        this.rank_portrait.source = RES.getRes(portrait);
        this.rank_nick.text = nick;
    }
}