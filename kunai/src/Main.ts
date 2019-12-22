//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    private data2TabBar_arr: Array<MGTabBar.TabBarCell_Data> = null;
    private tabbar: eui.TabBar;
    private viewStack: eui.ViewStack;
    private lastindex = 0;
    private arrayCollection: eui.ArrayCollection;

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        // 加载微信开放域资源
        platform.openDataContext.postMessage({ command: 'loadRes' })
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

	/**
	 * 创建场景界面
	 * Create scene interface
	 */
    protected createGameScene(): void {
        platform.scopeUserInfo()
        // 初始化背景
        this.initBackground()
        // 创建tabbar
        this.createTabbar()
    }

    private initBackground() {
        const { stage } = this
        const bg = new egret.Shape()
        bg.graphics.beginGradientFill(egret.GradientType.RADIAL, [0xffffff, 0xffffff], [1, 1], [150, 50], new egret.Matrix())
        bg.graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight)
        bg.graphics.endFill()
        this.addChild(bg)
    }

    private createTabbar() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        this.tabbar = new eui.TabBar;
        this.data2TabBar_arr = [
            {
                img_text: "分 红",
                selected: false,
                img_sel_res: "data_png",
            },
            {
                img_text: "游 戏",
                selected: true,
                img_sel_res: "game_png",
            },
            {
                img_text: "收 益",
                selected: false,
                img_sel_res: "wallet_png",
            },
            {
                img_text: "我 的",
                selected: false,
                img_sel_res: "setup_png",
            },
        ];
        this.lastindex = 1
        this.arrayCollection = new eui.ArrayCollection(this.data2TabBar_arr);
        this.tabbar.dataProvider = this.arrayCollection;
        this.tabbar.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onBarItemTap, this);
        this.tabbar.width = stageW;
        this.tabbar.height = 90;
        this.tabbar.y = stageH - 90;
        this.addChild(this.tabbar);
        this.tabbar.itemRenderer = MGTabBar.TabBarCell;

        this.viewStack = new eui.ViewStack();
        this.viewStack.width = stageW;
        this.viewStack.height = stageH - 90;

        for (var i: number = 0; i < 4; i++) {
            var group: eui.Group = new eui.Group();
            group.name = "Group" + i;


            switch (i) {
                case 0:
                    var data = new Data()
                    group.addChild(data)
                    break
                case 1:
                    var game = new Game()
                    group.addChild(game)
                    break
                case 2:
                    var setup = new Setup()
                    group.addChild(setup)
                    break
                case 3:
                    var wallet = new Wallet()
                    group.addChild(wallet)
                    break
            }

            this.viewStack.addChild(group);
        }

        this.viewStack.selectedIndex = this.lastindex
        this.addChild(this.viewStack);
    }

    private onBarItemTap(e: eui.ItemTapEvent): void {
        this.viewStack.selectedIndex = e.itemIndex;

        let lastdata: MGTabBar.TabBarCell_Data = this.arrayCollection.getItemAt(this.lastindex);
        this.lastindex = e.itemIndex;
        lastdata.selected = false;

        let data: MGTabBar.TabBarCell_Data = this.arrayCollection.getItemAt(e.itemIndex);
        data.selected = true;

        this.tabbar.dataProvider = new eui.ArrayCollection(this.data2TabBar_arr);
    }
}

