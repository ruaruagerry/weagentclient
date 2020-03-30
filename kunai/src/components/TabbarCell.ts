module MGTabBar {
    export class TabBarCell extends eui.ItemRenderer {
        private img_res: eui.Image = null;
        private img_text: eui.EditableText = null;
        private img_rect: eui.Rect = null;

        public constructor() {
            super();
            this.skinName = "resource/eui_skins/TabbarCell.exml";
        }
        protected createChildren(): void {
            super.createChildren();
        }
        protected dataChanged(): void {
            this.loadData();
        }
        private loadData(): void {
            let $dataModel: TabBarCell_Data = <TabBarCell_Data>this.data;
            let $selected: boolean = $dataModel.selected;
            // console.log("index:" + this.itemIndex + ", select:", $selected)
            this.img_text.text = $dataModel.img_text;
            this.img_res.source = RES.getRes($dataModel.img_sel_res);

            if ($selected) {
                this.img_rect.fillColor = 0x878787;
            }
        }
    }

    export interface TabBarCell_Data {
        /**图片下的文本**/
        img_text: string;
        /**是否处于选择状态*/
        selected: boolean;
        /**选择状态下的美术文本资源*/
        img_sel_res: string;
    }
}