var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 游戏开始界面
 */
var GameStartPanel = (function (_super) {
    __extends(GameStartPanel, _super);
    function GameStartPanel() {
        var _this = _super.call(this) || this;
        _this.isdisplay = false;
        _this.init();
        return _this;
    }
    GameStartPanel.prototype.start = function () {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        var _a = this, startBtn = _a.startBtn, onTouchTap = _a.onTouchTap, img = _a.img, logo = _a.logo, PK = _a.PK;
        img.width = stage.stageWidth;
        img.height = stage.stageHeight - 90;
        logo.x = stage.stageWidth / 2 - logo.width / 2;
        logo.y = -logo.height;
        egret.Tween.get(logo).to({ y: 60 }, 500, egret.Ease.bounceOut);
        startBtn.x = -startBtn.width;
        startBtn.y = 400;
        startBtn.touchEnabled = true;
        startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onTouchTap(1);
        }, this);
        egret.Tween.get(startBtn).to({ x: stage.stageWidth / 2 - startBtn.width / 2 }, 500, egret.Ease.bounceOut);
    };
    GameStartPanel.prototype.init = function () {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        var img = new egret.Bitmap();
        img.texture = RES.getRes('1_jpg');
        img.x = 0;
        img.y = 0;
        img.alpha = .6;
        this.img = img;
        this.addChildAt(this.img, 0);
        var logo = new egret.Bitmap();
        logo.texture = RES.getRes('logo_png');
        logo.width = 751 * .4;
        logo.height = 599 * .4;
        this.logo = logo;
        this.addChild(this.logo);
        this.startBtn = new Buttons();
        this.addChild(this.startBtn);
        this.startBtn.init(1, '开始游戏');
        this.btnClose = new egret.Bitmap(RES.getRes('close_png'));
        this.btnClose.width = 25;
        this.btnClose.height = 25;
        this.btnClose.x = stage.stageWidth * 4 / 5 + 30;
        this.btnClose.y = 65;
        this.btnClose.touchEnabled = true;
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.friendsRank();
            _this.removeChild(_this.btnClose);
        }, this);
    };
    GameStartPanel.prototype.onTouchTap = function (mode) {
        if (mode === void 0) { mode = 1; }
        // mode1：简单
        // mode2：疯狂
        if (mode === 1) {
            this.dispatchEventWith(GameStartPanel.GAME_START_1);
        }
        else if (mode === 2) {
            this.dispatchEventWith(GameStartPanel.GAME_START_2);
        }
    };
    GameStartPanel.prototype.end = function () {
        var _a = this, startBtn = _a.startBtn, onTouchTap = _a.onTouchTap;
        startBtn.$touchEnabled = false;
        if (startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, onTouchTap, this);
        }
    };
    GameStartPanel.prototype.friendsRank = function () {
        var platform = window.platform;
        if (this.isdisplay) {
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isdisplay = false;
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "close"
            });
        }
        else {
            //处理遮罩，避免开放数据域事件影响主域。
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.5;
            this.rankingListMask.touchEnabled = true;
            this.addChild(this.rankingListMask);
            //主要示例代码开始
            this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight - 90);
            this.addChild(this.bitmap);
            //简单实现，打开这关闭使用一个按钮。
            this.addChild(this.btnClose);
            //主域向子域发送自定义消息
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "open"
            });
            //主要示例代码结束
            this.isdisplay = true;
        }
    };
    GameStartPanel.prototype.showSkinDialog = function () {
        var stage = egret.MainContext.instance.stage;
        this.skinMask = new egret.Shape();
        this.skinMask.graphics.beginFill(0x000000, .2);
        this.skinMask.graphics.drawRoundRect(0, 0, stage.stageWidth, stage.stageHeight - 90, 10);
        this.skinMask.graphics.endFill();
        this.skinMask.touchEnabled = true;
        this.addChild(this.skinMask);
        this.skinDialog = new SkinDialog();
        this.addChild(this.skinDialog);
        this.skinDialog.x = stage.stageWidth / 2 - this.skinDialog._width / 2;
        this.skinDialog.y = (stage.stageHeight - 90) / 2 - this.skinDialog._height / 2;
        this.skinDialog.addEventListener(SkinDialog.CLOSE_SKIN, this.hideSkinDialog, this);
    };
    GameStartPanel.prototype.hideSkinDialog = function () {
        this.removeChild(this.skinMask);
        this.removeChild(this.skinDialog);
        this.skinDialog.removeEventListener(SkinDialog.CLOSE_SKIN, this.hideSkinDialog, this);
    };
    GameStartPanel.GAME_START_1 = 'gamestart1';
    GameStartPanel.GAME_START_2 = 'gamestart2';
    return GameStartPanel;
}(egret.Sprite));
__reflect(GameStartPanel.prototype, "GameStartPanel");
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data2TabBar_arr = null;
        _this.lastindex = 0;
        _this.data = null;
        _this.game = null;
        _this.wallet = null;
        _this.setup = null;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        // 加载loading模块
        Loading.init();
        // 初始化背景
        this.initBackground();
        // 初始化登陆界面
        this.createLogin();
        // 加载Msg弹窗模块
        Msg.init();
        // 监听事件
        this.addEventListener(Main.MainLogin, this.onBack, this);
    };
    Main.prototype.initBackground = function () {
        var stage = this.stage;
        var bg = new egret.Shape();
        bg.graphics.beginGradientFill(egret.GradientType.RADIAL, [0xffffff, 0xffffff], [1, 1], [150, 50], new egret.Matrix());
        bg.graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
        bg.graphics.endFill();
        this.addChild(bg);
    };
    Main.prototype.createLogin = function () {
        this.login = new Login();
        this.addChild(this.login);
        this.addEventListener(Login.LoginSuccess, this.onLogin, this);
    };
    Main.prototype.createTabbar = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
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
        this.lastindex = 1;
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
        for (var i = 0; i < 4; i++) {
            switch (i) {
                case 0:
                    this.data = new Data();
                    this.viewStack.addChild(this.data);
                    break;
                case 1:
                    this.game = new Game();
                    this.viewStack.addChild(this.game);
                    break;
                case 2:
                    this.wallet = new Wallet();
                    this.viewStack.addChild(this.wallet);
                    break;
                case 3:
                    this.setup = new Setup();
                    this.viewStack.addChild(this.setup);
                    this.setup.loadData(this.userinfo, this.clientinfo);
                    break;
            }
        }
        this.viewStack.selectedIndex = this.lastindex;
        this.addChild(this.viewStack);
    };
    Main.prototype.onBarItemTap = function (e) {
        this.viewStack.selectedIndex = e.itemIndex;
        var lastdata = this.arrayCollection.getItemAt(this.lastindex);
        this.lastindex = e.itemIndex;
        lastdata.selected = false;
        var data = this.arrayCollection.getItemAt(e.itemIndex);
        data.selected = true;
        this.tabbar.dataProvider = new eui.ArrayCollection(this.data2TabBar_arr);
        switch (e.itemIndex) {
            case 0:
                this.data.loadData();
                break;
            case 2:
                this.wallet.loadData();
                break;
        }
    };
    Main.prototype.onLogin = function (evt) {
        this.userinfo = evt.data.userinfo;
        this.clientinfo = evt.data.clientinfo;
        // 登陆
        this.createTabbar();
        this.removeChild(this.login);
        this.removeEventListener(Login.LoginSuccess, function () { }, this);
    };
    Main.prototype.onBack = function () {
        // 移除所有小弟
        this.removeChildren();
        // 初始化背景
        this.initBackground();
        // 初始化登陆界面
        this.createLogin();
    };
    Main.MainLogin = "MainLogin";
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
/**
 * 创建不同颜色的button
 */
var Buttons = (function (_super) {
    __extends(Buttons, _super);
    function Buttons() {
        return _super.call(this) || this;
    }
    Buttons.prototype.init = function (type, text, size, width, height) {
        var _this = this;
        if (type === void 0) { type = 1; }
        if (size === void 0) { size = 24; }
        if (width === void 0) { width = 180; }
        if (height === void 0) { height = 64; }
        this.img = new egret.Bitmap();
        this.txt = new egret.TextField();
        this.width = width;
        this.height = height;
        if (type === 1) {
            this.img.texture = RES.getRes('btn_bg_green_png');
            this.txt.strokeColor = 0x42a605;
        }
        else if (type === 2) {
            this.img.texture = RES.getRes('btn_bg_blue_png');
            this.txt.strokeColor = 0x2582c3;
        }
        else if (type === 3) {
            this.img.texture = RES.getRes('btn_bg_purple_png');
            this.txt.strokeColor = 0x810fb5;
        }
        else if (type === 4) {
            this.img.texture = RES.getRes('btn_bg_pink_png');
            this.txt.strokeColor = 0xc30835;
        }
        else if (type === 5) {
            this.img.texture = RES.getRes('btn_bg_brown_png');
            this.txt.strokeColor = 0x8e4926;
        }
        else {
            this.img.texture = RES.getRes('btn_bg_grey_png');
            this.txt.strokeColor = 0x656565;
        }
        this.img.scale9Grid = new egret.Rectangle(10, 10, 14, 103);
        this.img.width = width;
        this.img.height = height;
        this.addChild(this.img);
        this.txt.size = size;
        this.txt.textColor = 0xffffff;
        this.txt.text = text;
        this.txt.stroke = 1;
        this.txt.x = this.img.width / 2 - this.txt.width / 2;
        this.txt.y = this.img.height / 2 - this.txt.height / 2;
        this.addChild(this.txt);
        this.img.touchEnabled = true;
        this.img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            _this.img.x = _this.img.x + 2;
            _this.img.y = _this.img.y + 2;
            _this.txt.x = _this.txt.x + 2;
            _this.txt.y = _this.txt.y + 2;
        }, this);
        this.img.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            _this.img.x = _this.img.x - 2;
            _this.img.y = _this.img.y - 2;
            _this.txt.x = _this.txt.x - 2;
            _this.txt.y = _this.txt.y - 2;
        }, this);
        this.img.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            _this.img.x = _this.img.x - 2;
            _this.img.y = _this.img.y - 2;
            _this.txt.x = _this.txt.x - 2;
            _this.txt.y = _this.txt.y - 2;
        }, this);
    };
    return Buttons;
}(egret.Sprite));
__reflect(Buttons.prototype, "Buttons");
/**
 * 游戏结束弹窗
 */
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super.call(this) || this;
        _this._width = 280;
        _this._height = 400;
        _this.GAME_RESTART = 'gamerestart';
        _this.GAME_SHARE = 'gameshare';
        _this.GAME_AD = 'gamead';
        _this.init();
        return _this;
    }
    Dialog.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, maskBlack, homeBtn, restartBtn, shareBtn, adBtn, data, that, url, imgLoader, nickname;
            return __generator(this, function (_b) {
                _a = this, maskBlack = _a.maskBlack, homeBtn = _a.homeBtn, restartBtn = _a.restartBtn, shareBtn = _a.shareBtn, adBtn = _a.adBtn;
                maskBlack = new egret.Shape();
                maskBlack.graphics.beginFill(0x000000, .8);
                maskBlack.graphics.drawRoundRect(0, 0, this._width, this._height, 10);
                this.addChild(maskBlack);
                this.score = '0';
                this.tip = new egret.TextField();
                this.tip.y = 15;
                this.tip.textColor = 0xffffff;
                this.tip.size = 18;
                this.tip.x = this._width / 2 - this.tip.width / 2;
                this.addChild(this.tip);
                this.rebirthnum = 0;
                this.tipre = new egret.TextField();
                this.tipre.y = 38;
                this.tipre.textColor = 0xffffff;
                this.tipre.size = 18;
                this.tipre.x = this._width / 2 - this.tipre.width / 2;
                this.addChild(this.tipre);
                homeBtn = new Buttons();
                homeBtn.init(3, '回到首页');
                homeBtn.scaleX = .5;
                homeBtn.scaleY = .5;
                this.addChild(homeBtn);
                homeBtn.x = 30;
                homeBtn.y = 300;
                homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    _this.dispatchEventWith(Dialog.GO_HOME);
                }, this);
                restartBtn = new Buttons();
                restartBtn.init(1, '再玩一次');
                this.addChild(restartBtn);
                restartBtn.x = 160;
                restartBtn.y = 300;
                restartBtn.scaleX = .5;
                restartBtn.scaleY = .5;
                restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    _this.dispatchEventWith(Dialog.RESTART);
                }, this);
                shareBtn = new Buttons();
                shareBtn.init(2, '炫耀战绩');
                this.addChild(shareBtn);
                shareBtn.x = 30;
                shareBtn.y = 350;
                shareBtn.scaleX = .5;
                shareBtn.scaleY = .5;
                shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                }, this);
                adBtn = new Buttons();
                adBtn.init(4, '免费复活');
                this.addChild(adBtn);
                adBtn.x = 160;
                adBtn.y = 350;
                adBtn.scaleX = .5;
                adBtn.scaleY = .5;
                adBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var remainnum;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                remainnum = this.rebirthnum - 1;
                                if (!(remainnum >= 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, Http.get(this, API.ApiGameRebirthUse).then(function (res) {
                                        if (res == undefined) {
                                            return;
                                        }
                                        // unknown转any
                                        var rsp = res;
                                        that.dispatchEventWith(Dialog.REBIRTH);
                                        _this.rebirthnum = rsp.num;
                                    })];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                that.dispatchEventWith(Dialog.NOCHANCE);
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }, this);
                data = {
                    nickName: '悠悠丶',
                    avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKT3CKZgvyic14bBOYKpbaS2PvaS7t1ar4295xuV4w8xArEF8kuxWpzFicgADibw2c2XdWjasfzvDib5Q/132'
                };
                console.log(111, data);
                that = this;
                url = data.avatarUrl;
                imgLoader = new egret.ImageLoader();
                imgLoader.crossOrigin = '';
                imgLoader.load(url);
                imgLoader.once(egret.Event.COMPLETE, function (e) {
                    if (e.currentTarget.data) {
                        var texture = new egret.Texture();
                        texture.bitmapData = e.currentTarget.data;
                        var img = new egret.Bitmap(texture);
                        img.width = 100;
                        img.height = 100;
                        that.addChild(img);
                        img.x = that._width / 2 - img.width / 2;
                        img.y = 100;
                    }
                }, this);
                nickname = new egret.TextField();
                nickname.size = 14;
                nickname.textColor = 0xffffff;
                nickname.text = data.nickName;
                nickname.x = this._width / 2 - nickname.width / 2;
                nickname.y = 220;
                this.addChild(nickname);
                return [2 /*return*/];
            });
        });
    };
    Dialog.prototype.setScores = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = { score: Number(text) };
                        return [4 /*yield*/, Http.post(this, API.ApiGameScoreUpdate, data).then(function (res) {
                                if (res == undefined) {
                                    return;
                                }
                                // unknown转any
                                var rsp = res;
                                _this.score = text;
                                _this.tip.text = "\u672C\u6B21\u5F97\u5206\uFF1A" + _this.score;
                                _this.tip.x = _this._width / 2 - _this.tip.width / 2;
                                _this.rebirthnum = rsp.num;
                                _this.tipre.text = "\u5269\u4F59\u590D\u6D3B\u6B21\u6570\uFF1A" + _this.rebirthnum;
                                _this.tipre.x = _this._width / 2 - _this.tipre.width / 2;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dialog.GO_HOME = 'gohome';
    Dialog.RESTART = 'restart';
    Dialog.SHARE_WX = 'sharewx';
    Dialog.VIEW_AD = 'viewad';
    Dialog.REBIRTH = 'rebirth';
    Dialog.NOCHANCE = 'nochance';
    return Dialog;
}(egret.Sprite));
__reflect(Dialog.prototype, "Dialog");
// var mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("loading"));
var Loading = (function () {
    function Loading() {
    }
    Loading.init = function () {
        // 构建loading弹窗
        var data = RES.getRes("loading_json");
        var txtr = RES.getRes("loading_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        Loading.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("loading"));
    };
    Loading.showLoading = function (obj) {
        obj.addChild(Loading.mc1);
        obj.touchChildren = false;
        Loading.mc1.x = (obj.width - Loading.mc1.width) / 2;
        Loading.mc1.y = (obj.height - Loading.mc1.height) / 2;
        Loading.mc1.gotoAndPlay(1, -1);
    };
    Loading.hidLoading = function (obj) {
        obj.touchChildren = true;
        obj.removeChild(Loading.mc1);
    };
    return Loading;
}());
__reflect(Loading.prototype, "Loading");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Login.prototype.init = function () {
        // 创建场景
        this.createScene();
    };
    Login.prototype.createScene = function () {
        this.skinName = "resource/eui_skins/LoginSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight;
        this.wxloginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWxLogin, this);
        this.testloginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTestLogin, this);
    };
    Login.prototype.onWxLogin = function () {
        var sysInfo = wx.getSystemInfoSync();
        var button = wx.createUserInfoButton({
            type: "text",
            text: "微信登录",
            style: {
                left: sysInfo.windowWidth / 2 - 50,
                top: sysInfo.windowHeight / 2 - 30,
                width: 100,
                height: 60,
                backgroundColor: "#c7a976",
                color: "#5c5941",
                borderColor: "#5c5941",
                textAlign: "center",
                fontSize: 16,
                borderWidth: 4,
                borderRadius: 4,
                lineHeight: 60,
            }
        });
        button.onTap(function (res) {
            var _this = this;
            if (res) {
                console.log("res:", res);
                button.destroy();
                var data = {
                    account: this.account.text,
                };
                Http.post(this, API.ApiAuthWxLogin, data).then(function (res) {
                    // unknown转any
                    var rsp = res;
                    _this.loadRsp(rsp);
                });
            }
            else {
                wx.showModal({
                    title: "温馨提示",
                    content: "《XXX》是一款在线对战游戏，需要您的用户信息登录游戏。",
                    showCancel: false,
                });
            }
        });
        button.show();
    };
    Login.prototype.onTestLogin = function () {
        var _this = this;
        var data = {
            account: this.account.text,
        };
        Http.post(this, API.ApiAuthTestLogin, data).then(function (res) {
            // unknown转any
            var rsp = res;
            _this.loadRsp(rsp);
        });
    };
    Login.prototype.loadRsp = function (rsp) {
        Http.token = rsp.token;
        // 登陆成功，通知事件
        this.dispatchEventWith(Login.LoginSuccess, true, rsp);
    };
    return Login;
}(eui.ItemRenderer));
__reflect(Login.prototype, "Login");
/**
 * 统一提示
 */
var Msg = (function (_super) {
    __extends(Msg, _super);
    function Msg() {
        return _super.call(this) || this;
    }
    Msg.init = function () {
        Msg.shape = new egret.Shape();
        Msg.showtext = new egret.TextField();
        Msg.showtext.size = 14;
        Msg.showtext.textColor = 0xffffff;
    };
    Msg.showMsg = function (obj, txt) {
        Msg.shape.graphics.beginFill(0x000000, .6);
        Msg.shape.graphics.drawRect(0, -100, obj.width, 100);
        Msg.shape.graphics.endFill();
        obj.addChild(Msg.shape);
        egret.Tween.get(Msg.shape).to({ y: 100 }, 100, egret.Ease.bounceOut).call(function () {
            setTimeout(function () {
                obj.removeChild(Msg.shape);
            }, 3000);
        }, this);
        Msg.showtext.text = txt;
        Msg.showtext.x = obj.width / 2 - Msg.showtext.width / 2;
        Msg.showtext.y = -100 / 2 - Msg.showtext.height / 2;
        obj.addChild(Msg.showtext);
        egret.Tween.get(Msg.showtext).to({ y: 100 / 2 - Msg.showtext.height / 2 }, 100, egret.Ease.bounceOut).call(function () {
            setTimeout(function () {
                obj.removeChild(Msg.showtext);
            }, 3000);
        }, this);
    };
    return Msg;
}(egret.Sprite));
__reflect(Msg.prototype, "Msg");
/** * 滑动列表 * 使用虚拟布局、自定义项呈现器 * 不需要初始化item只需要添加皮肤 * */
var Rank = (function (_super) {
    __extends(Rank, _super);
    function Rank() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/RankSkin.exml";
        _this.initItemRenderer(RankItem);
        _this.viewport = _this.dataList;
        return _this;
    }
    /** * 通过SkinName 初始化item皮肤 * @param itemSkin item皮肤 */
    Rank.prototype.initItemSkin = function (itemSkin) {
        this.dataList.itemRendererSkinName = itemSkin;
    };
    /** * 通过itemRenderer 初始化item皮肤 *  @param itemRenderer 所有item都要继承 eui.ItemRenderer */
    Rank.prototype.initItemRenderer = function (itemRenderer) {
        this.dataList.itemRenderer = itemRenderer;
    };
    /** 进行数据绑定 */
    Rank.prototype.bindData = function (data) {
        var arrCollection = new eui.ArrayCollection(data);
        this.dataList.dataProvider = arrCollection;
    };
    return Rank;
}(eui.Scroller));
__reflect(Rank.prototype, "Rank", ["eui.UIComponent", "egret.DisplayObject"]);
var RankItem = (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        var _this = _super.call(this) || this;
        _this.rank_ranknum = null;
        _this.rank_score = null;
        _this.rank_portrait = null;
        _this.rank_nick = null;
        _this.rank_rect = null;
        _this.skinName = "resource/eui_skins/ItemSkin.exml";
        return _this;
    }
    RankItem.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    RankItem.prototype.dataChanged = function () {
        this.loadData();
    };
    RankItem.prototype.loadData = function () {
        // this.rank_ranknum.text = this.data.index;
        this.rank_ranknum.text = String(this.itemIndex + 1);
        this.rank_score.text = this.data.score;
        this.rank_portrait.source = RES.getRes(this.data.portrait);
        this.rank_nick.text = this.data.nick;
    };
    RankItem.prototype.setRectColor = function (fillcolor) {
        this.rank_rect.fillColor = fillcolor;
        this.rank_rect.height = this.height;
    };
    RankItem.prototype.setData = function (ranknum, portrait, nick, score) {
        this.rank_ranknum.text = String(ranknum);
        this.rank_score.text = String(score);
        this.rank_portrait.source = RES.getRes(portrait);
        this.rank_nick.text = nick;
    };
    return RankItem;
}(eui.ItemRenderer));
__reflect(RankItem.prototype, "RankItem");
/**
 * 皮肤切换窗口
 */
var SkinDialog = (function (_super) {
    __extends(SkinDialog, _super);
    function SkinDialog() {
        var _this = _super.call(this) || this;
        _this._width = 300;
        _this._height = 400;
        _this.init();
        return _this;
    }
    SkinDialog.prototype.init = function () {
        var _this = this;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, .8);
        shape.graphics.drawRoundRect(0, 0, this._width, this._height, 10);
        shape.graphics.endFill();
        this.addChild(shape);
        var closeBtn = new egret.Bitmap(RES.getRes('close_png'));
        closeBtn.width = 25;
        closeBtn.height = 25;
        closeBtn.x = this._width - 13;
        closeBtn.y = -13;
        this.addChild(closeBtn);
        closeBtn.touchEnabled = true;
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(SkinDialog.CLOSE_SKIN);
        }, this);
        var title = new egret.TextField();
        title.textColor = 0xffffff;
        title.size = 24;
        title.text = '皮肤选择';
        title.x = this._width / 2 - title.width / 2;
        title.y = 20;
        this.addChild(title);
        var skinList = [{ text: '默认皮肤', value: 1 }, { text: '无限月读', value: 2 }];
        skinList.forEach(function (item, index) {
            var text = new egret.TextField();
            text.textColor = 0xffffff;
            text.size = 16;
            text.y = 40 * index + 70;
            text.x = 20;
            text.text = item.text;
            text.touchEnabled = true;
            text.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.dispatchEventWith(SkinDialog.CLOSE_SKIN);
            }, _this);
            _this.addChild(text);
        });
    };
    SkinDialog.CLOSE_SKIN = 'closeskin';
    return SkinDialog;
}(egret.Sprite));
__reflect(SkinDialog.prototype, "SkinDialog");
var MGTabBar;
(function (MGTabBar) {
    var TabBarCell = (function (_super) {
        __extends(TabBarCell, _super);
        function TabBarCell() {
            var _this = _super.call(this) || this;
            _this.img_res = null;
            _this.img_text = null;
            _this.img_rect = null;
            _this.skinName = "resource/eui_skins/TabbarCell.exml";
            return _this;
        }
        TabBarCell.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        TabBarCell.prototype.dataChanged = function () {
            this.loadData();
        };
        TabBarCell.prototype.loadData = function () {
            var $dataModel = this.data;
            var $selected = $dataModel.selected;
            // console.log("index:" + this.itemIndex + ", select:", $selected)
            this.img_text.text = $dataModel.img_text;
            this.img_res.source = RES.getRes($dataModel.img_sel_res);
            if ($selected) {
                this.img_rect.fillColor = 0x878787;
            }
        };
        return TabBarCell;
    }(eui.ItemRenderer));
    MGTabBar.TabBarCell = TabBarCell;
    __reflect(TabBarCell.prototype, "MGTabBar.TabBarCell");
})(MGTabBar || (MGTabBar = {}));
/**
 * 用弧形遮罩制作不同的木桩形状，用于制作结束动画
 */
var TimberMask = (function (_super) {
    __extends(TimberMask, _super);
    function TimberMask() {
        var _this = _super.call(this) || this;
        _this.ary = [];
        return _this;
    }
    TimberMask.prototype.init = function (skin) {
        var randomAry = [0, 360];
        randomAry.push(Tools.generateRandom(10, 350));
        randomAry.push(Tools.generateRandom(10, 350));
        randomAry.push(Tools.generateRandom(10, 350));
        randomAry.sort(function (a, b) {
            return a - b;
        });
        for (var i = 0; i < randomAry.length - 1; i++) {
            var r = 100;
            var next = i + 1;
            var startAngle = randomAry[i];
            var endAngle = next > randomAry.length ? 360 : randomAry[next];
            var m = new TimberMaskSprite();
            m.createMask(r, startAngle, endAngle, skin);
            this.addChild(m);
            this.ary.push(m);
        }
    };
    TimberMask.prototype.startAnimation = function () {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        this.ary.forEach(function (item) {
            item.rotation = Tools.generateRandom(30, 90);
            item.x = item.x + Tools.generateRandom(30, 90);
            item.y = item.y + Tools.generateRandom(30, 90);
            egret.Tween.get(item).to({ rotation: Tools.generateRandom(30, 90), y: stage.stageHeight, x: Tools.generateRandom(-stage.stageWidth * 2, stage.stageWidth * 2) }, 1000).call(function () {
                item.parent.removeChild(item);
            }, _this);
        });
    };
    return TimberMask;
}(egret.Sprite));
__reflect(TimberMask.prototype, "TimberMask");
/**
 * 不同的木桩弧形遮罩
 */
var TimberMaskSprite = (function (_super) {
    __extends(TimberMaskSprite, _super);
    function TimberMaskSprite() {
        return _super.call(this) || this;
    }
    TimberMaskSprite.prototype.createMask = function (r, startAngle, endAngle, skin) {
        var img = skin === 1 ? 'timber_png' : 'eye_png';
        var t = new egret.Bitmap(RES.getRes(img));
        t.width = r * 2;
        t.height = r * 2;
        this.addChild(t);
        var m = new egret.Shape();
        m.graphics.beginFill(0x000000);
        m.graphics.moveTo(r, r);
        m.graphics.lineTo(r * 2, r);
        m.graphics.drawArc(r, r, r, startAngle * Math.PI / 180, endAngle * Math.PI / 180);
        m.graphics.lineTo(r, r);
        m.graphics.endFill();
        this.addChild(m);
        t.mask = m;
    };
    return TimberMaskSprite;
}(egret.Sprite));
__reflect(TimberMaskSprite.prototype, "TimberMaskSprite");
/*
 * @Author: your name
 * @Date: 2019-12-23 12:12:04
 * @LastEditTime : 2019-12-27 17:36:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weagentclient\kunai\src\containers\data\Data.ts
 */
var Data = (function (_super) {
    __extends(Data, _super);
    function Data() {
        var _this = _super.call(this) || this;
        // private loading: Loading = new Loading()
        _this.data_yestarday_all = null; // 昨日全网收益
        _this.data_history_all = null; // 历史全网收益
        _this.data_today_adnum = null; // 今日实时看广告次数
        _this.data_today_onlinenum = null; // 今日实时在线人数
        _this.data_today_all = null; // 今日总收益
        _this.init();
        return _this;
    }
    Data.prototype.init = function () {
        // 创建场景
        this.createScene();
        // 加载数据
        this.loadData();
    };
    Data.prototype.createScene = function () {
        this.skinName = "resource/eui_skins/DataSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
    };
    Data.prototype.loadData = function () {
        var _this = this;
        Http.get(this, API.ApiDataEntrance).then(function (res) {
            if (res == undefined) {
                return;
            }
            // unknown转any
            var rsp = res;
            _this.data_yestarday_all.text = rsp.yestardayall;
            _this.data_history_all.text = rsp.historyall;
            _this.data_today_adnum.text = rsp.todayadnum;
            _this.data_today_onlinenum.text = rsp.todayonlinenum;
            _this.data_today_all.text = rsp.todayall;
        });
    };
    return Data;
}(eui.ItemRenderer));
__reflect(Data.prototype, "Data");
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.init();
        _this.start();
        return _this;
    }
    Game.prototype.init = function () {
        this.gameStartPanel = new GameStartPanel();
        this.gamePlayingPanel = new GamePlayingPanel();
        this.gameEndPanel = new GameEndPanel();
        this.gameStartPanel.start();
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START_1, this.gamePlaying1, this);
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START_2, this.gamePlaying2, this);
    };
    Game.prototype.start = function () {
        this.addChild(this.gameStartPanel);
        this.gameStartPanel.start();
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START_1, this.gamePlaying1, this);
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START_2, this.gamePlaying2, this);
    };
    Game.prototype.gamePlaying1 = function () {
        this.gameStartPanel.end();
        this.removeChild(this.gameStartPanel);
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START_1, this.gamePlaying1, this);
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START_2, this.gamePlaying2, this);
        this.addChild(this.gamePlayingPanel);
        this.gamePlayingPanel.start(1);
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.GAME_END, this.gameEnd, this);
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.GAME_RESTART, this.gameRestart, this);
    };
    Game.prototype.gamePlaying2 = function () {
        this.gameStartPanel.end();
        this.removeChild(this.gameStartPanel);
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START_1, this.gamePlaying1, this);
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START_2, this.gamePlaying2, this);
        this.addChild(this.gamePlayingPanel);
        this.gamePlayingPanel.start(2);
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.GAME_END, this.gameEnd, this);
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.GAME_RESTART, this.gameRestart, this);
    };
    Game.prototype.gameEnd = function () {
        this.gamePlayingPanel.end();
        this.removeChild(this.gamePlayingPanel);
        this.gamePlayingPanel.removeEventListener(GamePlayingPanel.GAME_END, this.gameEnd, this);
        this.gamePlayingPanel.removeEventListener(GamePlayingPanel.GAME_RESTART, this.gameRestart, this);
        this.start();
    };
    Game.prototype.gameRestart = function () {
        console.log('game restart');
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
/**
 * 游戏结束画面，未用到
 */
var GameEndPanel = (function (_super) {
    __extends(GameEndPanel, _super);
    function GameEndPanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameEndPanel.prototype.start = function () {
        var _a = this, restartBtn = _a.restartBtn, onTouchTap = _a.onTouchTap;
        restartBtn.touchEnabled = true;
        restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, onTouchTap, this);
    };
    GameEndPanel.prototype.init = function () {
        this.restartBtn = new egret.TextField();
        this.restartBtn.text = '重新开始';
        this.restartBtn.x = 450 / 2 - this.restartBtn.width;
        this.restartBtn.y = 400;
        this.addChild(this.restartBtn);
    };
    GameEndPanel.prototype.onTouchTap = function () {
        this.dispatchEventWith(GameEndPanel.GAME_RESTART);
    };
    GameEndPanel.prototype.end = function () {
        var _a = this, restartBtn = _a.restartBtn, onTouchTap = _a.onTouchTap;
        restartBtn.$touchEnabled = false;
        if (restartBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            restartBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, onTouchTap, this);
        }
    };
    GameEndPanel.GAME_RESTART = 'gamerestart';
    return GameEndPanel;
}(egret.Sprite));
__reflect(GameEndPanel.prototype, "GameEndPanel");
/**
 * 游戏进行中的界面
 */
var GamePlayingPanel = (function (_super) {
    __extends(GamePlayingPanel, _super);
    function GamePlayingPanel() {
        var _this = _super.call(this) || this;
        _this.mode = 1;
        _this.skin = 1;
        // 如果是负数则逆时针转动，数值越大速度越快
        _this.rotations = 3;
        _this.isShooting = false;
        _this.insertRotate = [];
        _this.insertRotateNoAnimate = [];
        _this.kunaiW = 21;
        _this.kunaiH = 100;
        // time interval的间隔，数值越小转的越快
        _this.rate = 35;
        // 改变现有旋转速度
        _this.rateOffset = 0;
        // 关数限定
        // 默认需要射中的苦无数量
        _this.kunaiNum = 9;
        // 默认第1关
        _this.level = 1;
        _this.isShowRank = false;
        _this.isUpdareAd = false;
        // 即将到达木桩的苦无与现存于木桩的苦无进行坐标比较
        _this.calcCollision = function (rotate) {
            var insertRotate = _this.insertRotate;
            return insertRotate.some(function (item) {
                return (rotate <= item.range[1] && rotate >= item.range[0]);
            });
        };
        _this.initGame();
        return _this;
    }
    GamePlayingPanel.prototype.start = function (mode) {
        // mode1：简单
        // mode2：疯狂
        this.mode = mode;
        var mat;
        if (this.mode === 1) {
            mat = [
                1, 0, 0, 0, 0,
                0, 1, 0, 0, 0,
                0, 0, 1, 0, 0,
                0, 0, 0, 1, 0,
            ];
        }
        else if (this.mode === 2) {
            // 反色背景
            mat = [
                -1, 0, 0, 0, 255,
                0, -1, 0, 0, 255,
                0, 0, -1, 0, 255,
                0, 0, 0, 1, 0,
            ];
        }
        var matFilter = new egret.ColorMatrixFilter(mat);
        this.bgimg.filters = [matFilter];
    };
    GamePlayingPanel.prototype.end = function () {
        this.resetGame();
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    GamePlayingPanel.prototype.initGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stage, stageW, stageH, skin;
            return __generator(this, function (_a) {
                stage = egret.MainContext.instance.stage;
                stageW = stage.stageWidth;
                stageH = stage.stageHeight - 90;
                this.bgimg = new egret.Bitmap();
                this.bgimg.x = 0;
                this.bgimg.y = 0;
                this.bgimg.width = stageW;
                this.bgimg.height = stageH;
                this.addChild(this.bgimg);
                skin = "1";
                this.skin = parseInt(skin);
                if (this.skin === 1) {
                    this.bgimg.texture = RES.getRes('4_jpg');
                    this.bgimg.alpha = .4;
                    this.timber = this.createBitmapByName('timber_png');
                    this.addChild(this.timber);
                    this.timber.width = 200;
                    this.timber.height = 200;
                }
                else if (this.skin === 2) {
                    this.bgimg.texture = RES.getRes('2_jpg');
                    this.bgimg.alpha = .7;
                    this.timber = this.createBitmapByName('eye_png');
                    this.addChild(this.timber);
                    this.timber.width = 280;
                    this.timber.height = 280;
                }
                this.timber.anchorOffsetX = this.timber.width / 2;
                this.timber.anchorOffsetY = this.timber.height / 2;
                this.timber.x = stageW / 2;
                this.timber.y = 230;
                this.layerNum = this.numChildren;
                this.createText();
                this.createKunai();
                this.createKunaiNum();
                this.createScores();
                // 创建分享及广告
                this.share();
                return [2 /*return*/];
            });
        });
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    GamePlayingPanel.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    GamePlayingPanel.prototype.startAnimation = function () {
        var _this = this;
        if (this.timberInterval) {
            clearInterval(this.timberInterval);
        }
        this.timber.rotation = 0;
        this.timberInterval = setInterval(function () {
            _this.timber.rotation += _this.rotations;
        }, this.rate - this.rateOffset);
    };
    // 关卡加强
    GamePlayingPanel.prototype.resetAnimation = function () {
        var _this = this;
        if (this.mode === 1) {
            var random = Math.floor(Math.random() * this.level);
            // 改变速度
            this.rateOffset = Math.random() < 0.2 ? random : random * -1;
            // 改变方向
            this.rotations = this.level % 3 === 0 && Math.random() < 0.1 ? this.rotations * -1 : this.rotations;
        }
        else if (this.mode === 2) {
            // 疯狂模式下每关增加速度
            this.rateOffset = this.level * 1.2;
        }
        if (this.timberInterval) {
            clearInterval(this.timberInterval);
        }
        this.timberInterval = setInterval(function () {
            _this.timber.rotation += _this.rotations;
        }, this.rate - this.rateOffset);
        this.resetRotateKunai();
    };
    /**
     * 射击动作
     */
    GamePlayingPanel.prototype.shoot = function (e) {
        var _this = this;
        if (this.isShowRank) {
            this.isShowRank = false;
            this.removeChild(this.rank);
            this.removeChild(this.rankimage);
            this.removeChild(this.rankmyitem);
            return;
        }
        if (this.isShooting || this.kunaiNum <= 0)
            return;
        this.isShooting = true;
        this.kunaiNum -= 1;
        this.updateKunaiNum();
        var func = function () {
            if (_this.calcCollision(_this.timber.rotation)) {
                // 如坐标集合里面有了，苦无插入重复的位置，弹飞新加的苦无
                _this.flickKunai();
            }
            else {
                // 木屑
                _this.woodBits();
                // 木桩被射中动画
                var timberX = _this.timber.x;
                var timberY = _this.timber.y;
                egret.Tween.get(_this.timber)
                    .to({ x: _this.timber.x - 6, y: _this.timber.y - 7 }, 20, egret.Ease.bounceInOut)
                    .to({ x: timberX, y: timberY }, 20, egret.Ease.bounceInOut)
                    .call(function () {
                    // 判断及动画完成以后进行游戏判断
                    if (_this.kunaiNum <= 0) {
                        _this.showNext();
                    }
                    else {
                        _this.resetKunai();
                    }
                    _this.resetAnimation();
                }, _this);
                _this.kunai.alpha = 0;
                _this.createRotateKunai();
                _this.updateScores();
            }
        };
        egret.Tween.get(this.kunai)
            .to({ y: 380 }, 150, egret.Ease.cubicIn)
            .call(func, this);
    };
    GamePlayingPanel.prototype.createKunai = function () {
        var stage = egret.MainContext.instance.stage;
        this.kunai = this.createBitmapByName('kunai_png');
        this.addChild(this.kunai);
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight - 90;
        this.kunai.width = this.kunaiW;
        this.kunai.height = this.kunaiH;
        this.kunai.x = stageW / 2 - 10;
        this.kunai.y = stageH - 170;
        this.createRandomKunai();
        this.createClickable();
    };
    // 创建游戏点击区域
    GamePlayingPanel.prototype.createClickable = function () {
        var stage = egret.MainContext.instance.stage;
        var rect = new egret.Shape();
        rect.graphics.beginFill(0x000000, 0);
        rect.graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight - 90);
        rect.graphics.endFill();
        this.addChild(rect);
        rect.touchEnabled = true;
        rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shoot, this);
    };
    GamePlayingPanel.prototype.resetKunai = function () {
        var stage = egret.MainContext.instance.stage;
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight - 90;
        this.kunai.width = 20;
        this.kunai.height = 100;
        this.kunai.rotation = 0;
        this.kunai.x = stageW / 2 - 10;
        this.kunai.y = stageH - 170;
        this.kunai.alpha = 1;
        this.isShooting = false;
    };
    GamePlayingPanel.prototype.createRotateKunai = function (kunaiRotate) {
        var _this = this;
        // 数据存储木桩上的苦无坐标
        // 有kunaiRotate则是随机生成的苦无
        var stage = egret.MainContext.instance.stage;
        var rotate = typeof kunaiRotate === 'number' ? kunaiRotate : this.timber.rotation;
        var range = [];
        range.push(rotate - 10);
        range.push(rotate + 10);
        // 生成木桩上的苦无
        var kunai = this.createBitmapByName('kunai_png');
        kunai.anchorOffsetX = 5;
        kunai.anchorOffsetY = -52;
        kunai.x = stage.stageWidth / 2;
        kunai.y = 230;
        kunai.width = this.kunaiW;
        kunai.height = this.kunaiH;
        // 如果是用kunaiRotate做判断需要乘以-1
        kunai.rotation = typeof kunaiRotate === 'number' ? -kunaiRotate : 0;
        this.addChildAt(kunai, this.layerNum - 1);
        var time = setInterval(function () {
            kunai.rotation += _this.rotations;
        }, this.rate - this.rateOffset);
        var obj = { id: this.timber.rotation, range: range, kunai: kunai, time: time };
        this.insertRotate.push(obj);
    };
    /**
     * 替换原有的动画苦无为静态，方便后续做掉落动画
     */
    GamePlayingPanel.prototype.createRotateKunaiNoAnimate = function (rotate) {
        // 生成无动画的苦无
        var stage = egret.MainContext.instance.stage;
        // 生成木桩上的苦无
        var kunai = this.createBitmapByName('kunai_png');
        kunai.anchorOffsetX = 5;
        kunai.anchorOffsetY = -52;
        kunai.x = stage.stageWidth / 2;
        kunai.y = 230;
        kunai.width = this.kunaiW;
        kunai.height = this.kunaiH;
        // 如果是用kunaiRotate做判断需要乘以-1
        kunai.rotation = -rotate;
        this.addChildAt(kunai, this.layerNum - 1);
        this.insertRotateNoAnimate.push(kunai);
    };
    // 重设苦无动画
    GamePlayingPanel.prototype.resetRotateKunai = function () {
        var _this = this;
        this.insertRotate.forEach(function (item) {
            if (item.time) {
                clearInterval(item.time);
            }
            var time = setInterval(function () {
                item.kunai.rotation += _this.rotations;
            }, _this.rate - _this.rateOffset);
            item.time = time;
        });
    };
    // 消除一定数量的苦无
    GamePlayingPanel.prototype.removeRotateKunai = function (num) {
        if (num === void 0) { num = 3; }
        var _loop_1 = function (i) {
            var item = this_1.insertRotate.splice(0, 1)[0];
            if (item && item.kunai) {
                egret.Tween.get(item.kunai).to({ alpha: 0 }, 100).call(function () {
                    item.kunai.parent.removeChild(item.kunai);
                }, this_1);
            }
        };
        var this_1 = this;
        for (var i = 0; i < num; i++) {
            _loop_1(i);
        }
    };
    // 重复苦无的动画，游戏失败等等
    GamePlayingPanel.prototype.flickKunai = function () {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        var func = function () {
            setTimeout(function () {
                _this.showDialog();
            }, 500);
        };
        egret.Tween.get(this.kunai)
            .to({ x: stage.stageWidth + 100, y: stage.stageHeight + 100, rotation: 720 }, 700, egret.Ease.bounceOut)
            .call(func, this);
    };
    // 文字提示
    GamePlayingPanel.prototype.createText = function () {
        var stage = egret.MainContext.instance.stage;
        var shape1 = new egret.Shape();
        shape1.graphics.beginFill(0x2f1810, .8);
        shape1.graphics.drawRoundRect(-10, 10, 80, 30, 10);
        shape1.graphics.endFill();
        this.addChild(shape1);
        this.textfield = new egret.TextField();
        this.addChild(this.textfield);
        this.textfield.x = 12;
        this.textfield.y = 17;
        this.textfield.textColor = 0xffffff;
        this.textfield.textAlign = egret.HorizontalAlign.CENTER;
        this.textfield.size = 14;
        this.updateLevel();
    };
    // 关数显示
    GamePlayingPanel.prototype.updateLevel = function () {
        this.textfield.text = "\u7B2C " + this.level + " \u5173";
    };
    // 绘制剩余苦无
    GamePlayingPanel.prototype.createKunaiNum = function () {
        var stage = egret.MainContext.instance.stage;
        var kunai = this.createBitmapByName('kunai_png');
        kunai.width = 10;
        kunai.height = 50;
        kunai.x = 30;
        kunai.y = stage.stageHeight - 190;
        this.addChild(kunai);
        this.kunaiNumTips = new egret.TextField();
        this.addChild(this.kunaiNumTips);
        this.kunaiNumTips.x = 50;
        this.kunaiNumTips.y = stage.stageHeight - 170;
        this.kunaiNumTips.textColor = 0xFFFFFF;
        this.kunaiNumTips.textAlign = egret.HorizontalAlign.LEFT;
        this.kunaiNumTips.size = 14;
        this.updateKunaiNum();
    };
    // 更新剩余苦无
    GamePlayingPanel.prototype.updateKunaiNum = function () {
        this.kunaiNumTips.text = "x " + this.kunaiNum;
    };
    // 创建分数
    GamePlayingPanel.prototype.createScores = function () {
        var stage = egret.MainContext.instance.stage;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xffffff, .8);
        shape.graphics.drawRoundRect(stage.stageWidth / 2 - 50, 10, 100, 60, 10);
        shape.graphics.endFill();
        this.addChild(shape);
        var text = new egret.TextField();
        text.size = 18;
        text.textColor = 0x000000;
        text.text = '得分';
        text.x = stage.stageWidth / 2 - text.width / 2;
        text.y = 20;
        this.addChild(text);
        this.scores = new egret.TextField();
        this.scores.size = 16;
        this.scores.textColor = 0x000000;
        this.scores.text = '0';
        this.scores.x = stage.stageWidth / 2 - this.scores.width / 2;
        this.scores.y = 45;
        this.addChild(this.scores);
    };
    // 更新得分
    GamePlayingPanel.prototype.updateScores = function (s) {
        var stage = egret.MainContext.instance.stage;
        this.scores.text = typeof s === 'number' ? "" + s : "" + (parseInt(this.scores.text) + 1);
        this.scores.x = stage.stageWidth / 2 - this.scores.width / 2;
    };
    // 下一关
    GamePlayingPanel.prototype.showNext = function () {
        var _this = this;
        this.timber.alpha = 0;
        this.masks();
        this.timberMask.startAnimation();
        var ary = [];
        this.insertRotate.forEach(function (item) {
            if (item.time) {
                clearInterval(item.time);
            }
            item.kunai.parent.removeChild(item.kunai);
            ary.push(item.id);
        });
        this.insertRotate = [];
        ary.forEach(function (rotate) {
            _this.createRotateKunaiNoAnimate(rotate);
        });
        this.insertRotateNoAnimate.forEach(function (item) {
            item.rotation = Tools.generateRandom(-180, 180);
            egret.Tween.get(item).to({ x: Tools.generateRandom(-_this.stage.stageWidth, _this.stage.stageWidth), y: _this.stage.stageHeight + item.height * 2 }, 1000);
        });
        setTimeout(function () {
            _this.timber.alpha = 1;
            _this.goNext();
        }, 1100);
    };
    // 下一关
    GamePlayingPanel.prototype.goNext = function () {
        // 关数加1
        this.level += 1;
        // 根据关卡加强的难度减少需要射出的苦无
        this.kunaiNum = 9 + Math.floor(this.level / 10 - 1);
        if (this.kunaiNum <= 0) {
            this.kunaiNum = 1;
        }
        this.cleanBitmap();
        this.createRandomKunai();
        this.updateKunaiNum();
        this.updateLevel();
        this.resetKunai();
    };
    /**
     * 每过一关改变关卡过关方式，并重新生成已在木桩上的苦无
     */
    GamePlayingPanel.prototype.createRandomKunai = function () {
        if (this.level !== 1) {
            if (this.mode === 1) {
                // 简单模式，每关随机增减苦无
                var random = Math.floor(Math.random() * this.level);
                if (random >= this.level / 2) {
                    this.kunaiNum = this.kunaiNum - Math.floor(Math.random() * this.level / 2 + 1);
                }
                for (var i = 1; i < random; i++) {
                    var r = Math.floor(Math.random() * 180);
                    r = Math.random() < .5 ? r * -1 : r;
                    this.createRotateKunai(r);
                }
            }
            else if (this.mode === 2) {
                // 疯狂模式每加一关，已插入的苦无多一把
                for (var i = 1; i < this.level; i++) {
                    var random = Math.floor(Math.random() * 180);
                    random = Math.random() < .5 ? random * -1 : random;
                    this.createRotateKunai(random);
                }
            }
        }
        this.startAnimation();
    };
    // 游戏结束提示框
    GamePlayingPanel.prototype.showDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var stage;
            return __generator(this, function (_a) {
                stage = egret.MainContext.instance.stage;
                this.dialog = new Dialog();
                this.dialog.setScores(this.scores.text);
                this.addChild(this.dialog);
                this.dialog.x = stage.stageWidth / 2 - this.dialog._width / 2;
                this.dialog.y = (stage.stageHeight - 90) / 2 - this.dialog._height / 2;
                this.dialog.addEventListener(Dialog.GO_HOME, function () {
                    _this.dispatchEventWith(GamePlayingPanel.GAME_END);
                }, this);
                this.dialog.addEventListener(Dialog.RESTART, function () {
                    _this.resetGame();
                }, this);
                this.dialog.addEventListener(Dialog.REBIRTH, function () {
                    _this.rebirth();
                }, this);
                this.dialog.addEventListener(Dialog.NOCHANCE, function () {
                    _this.noChance();
                }, this);
                return [2 /*return*/];
            });
        });
    };
    GamePlayingPanel.prototype.closeDialog = function () {
        var _this = this;
        this.removeChild(this.dialog);
        this.dialog.removeEventListener(Dialog.GO_HOME, function () {
            _this.dispatchEventWith(GamePlayingPanel.GAME_END);
        }, this);
        this.dialog.removeEventListener(Dialog.RESTART, function () {
            _this.resetGame();
        }, this);
        this.dialog.removeEventListener(Dialog.REBIRTH, function () {
            _this.rebirth();
        }, this);
    };
    // 重置游戏设置
    GamePlayingPanel.prototype.resetGame = function () {
        this.closeDialog();
        this.level = 1;
        this.kunaiNum = 9;
        this.cleanBitmap();
        this.createRandomKunai();
        this.updateKunaiNum();
        this.updateLevel();
        this.resetKunai();
        this.updateScores(0);
    };
    // 清除现有所有的苦无
    GamePlayingPanel.prototype.cleanBitmap = function () {
        this.insertRotate.forEach(function (item) {
            item.kunai.parent.removeChild(item.kunai);
        });
        this.insertRotate = [];
    };
    // 木屑
    GamePlayingPanel.prototype.woodBits = function () {
        var _this = this;
        var _a = egret.MainContext.instance.stage, stageWidth = _a.stageWidth, stageHeight = _a.stageHeight;
        var _loop_2 = function (i) {
            var dou = this_2.createBitmapByName('dou_png');
            dou.width = 5;
            dou.height = 5;
            dou.x = stageWidth / 2 - 1;
            dou.y = 290;
            this_2.addChild(dou);
            var random = Math.floor(Math.random() * stageWidth * 2);
            random = Math.random() < .5 ? random * -1 : random;
            egret.Tween.get(dou)
                .to({ x: random, y: stageHeight - 90 }, 500, egret.Ease.sineOut)
                .call(function () {
                _this.removeChild(dou);
            });
        };
        var this_2 = this;
        for (var i = 0; i < 4; i++) {
            _loop_2(i);
        }
    };
    GamePlayingPanel.prototype.share = function () {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        this.s1 = this.createBitmapByName('rank_png');
        this.s1.width = 118 * .5;
        this.s1.height = 107 * .5;
        this.s1.x = stage.stageWidth - this.s1.width;
        this.s1.y = stage.stageHeight - 420;
        var s1y = this.s1.y;
        this.addChild(this.s1);
        egret.Tween.get(this.s1, { loop: true }).to({ y: this.s1.y + 10 }, 1000).to({ y: s1y }, 1000);
        this.s1.touchEnabled = true;
        this.s1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.showRank();
        }, this);
        this.s2 = this.createBitmapByName('ad_png');
        this.s2.width = 70 * .5;
        this.s2.height = 70 * .5;
        this.s2.x = stage.stageWidth - (this.s2.width + 15);
        this.s2.y = stage.stageHeight - 250;
        var s2y = this.s2.y;
        this.addChild(this.s2);
        egret.Tween.get(this.s2, { loop: true }).to({ y: this.s2.y - 10 }, 1000).to({ y: s2y }, 1000);
        this.s2.touchEnabled = true;
        this.s2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // todo 看广告回调成功后
            _this.adSee();
        }, this);
    };
    // 显示排行榜
    GamePlayingPanel.prototype.showRank = function () {
        var _this = this;
        if (this.isShowRank) {
            return;
        }
        Http.get(this, API.ApiGameScoreRank).then(function (res) {
            if (res == undefined) {
                return;
            }
            // unknown转any
            var rsp = res;
            // 排行榜界面加上
            _this.rank = new Rank();
            _this.rank.x = 52;
            _this.rank.y = 150;
            _this.rank.horizontalCenter = 0;
            _this.rank.height = 300;
            _this.addChild(_this.rank);
            _this.rank.bindData(rsp.players);
            _this.rankimage = new eui.Image();
            _this.rankimage.source = "rank_banner_png";
            _this.rankimage.width = 268;
            _this.rankimage.height = 100;
            _this.rankimage.x = _this.rank.dataList.x + 14;
            _this.rankimage.y = _this.rank.y - _this.rankimage.height;
            _this.addChild(_this.rankimage);
            _this.rankmyitem = new RankItem();
            _this.rankmyitem.setData(rsp.myrank + 1, "portrait", "nick", rsp.score);
            _this.rankmyitem.x = _this.rank.dataList.x + 13;
            _this.rankmyitem.y = _this.rank.y + _this.rank.height + 2;
            _this.rankmyitem.width = 268;
            _this.rankmyitem.height -= 10;
            _this.rankmyitem.setRectColor(0x45828e);
            _this.addChild(_this.rankmyitem);
            _this.isShowRank = true;
        });
    };
    // 看广告成功上报
    GamePlayingPanel.prototype.adSee = function () {
        if (this.isUpdareAd) {
            return;
        }
        this.isUpdareAd = true;
        Http.get(this, API.ApiMoneyAdSee);
        this.isUpdareAd = false;
    };
    // 复活
    GamePlayingPanel.prototype.rebirth = function () {
        this.closeDialog();
        this.resetKunai();
        this.kunaiNum += 1;
        this.updateKunaiNum();
    };
    // 没有复活机会
    GamePlayingPanel.prototype.noChance = function () {
        Msg.showMsg(this, '一天只有三次复活机会哦');
    };
    GamePlayingPanel.prototype.masks = function () {
        var stage = this.stage;
        this.timberMask = new TimberMask();
        this.timberMask.init(this.skin);
        this.addChild(this.timberMask);
        this.timberMask.x = stage.stageWidth / 2 - this.timberMask.width / 2;
        this.timberMask.y = 130;
    };
    GamePlayingPanel.GAME_END = 'gameend';
    GamePlayingPanel.GAME_RESTART = 'gamerestart';
    return GamePlayingPanel;
}(egret.Sprite));
__reflect(GamePlayingPanel.prototype, "GamePlayingPanel");
/*
 * @Author: your name
 * @Date: 2019-12-23 12:12:04
 * @LastEditTime : 2019-12-27 16:46:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weagentclient\kunai\src\api\api.ts
 */
var version = "1.0.1";
var rootUrl = "http://127.0.0.1:3003";
var API;
(function (API) {
    /* ----------------- auth ---------------- */
    API.ApiAuthWxLogin = rootUrl + "/auth/wxlogin";
    API.ApiAuthTestLogin = rootUrl + "/auth/testlogin";
    /* ----------------- phone ---------------- */
    API.ApiPhoneEntrance = rootUrl + "/phone/entrance";
    API.ApiPhoneGetCode = rootUrl + "/phone/getcode";
    API.ApiPhoneBind = rootUrl + "/phone/bind";
    API.ApiPhoneModifyBind = rootUrl + "/phone/modifybind";
    /* ----------------- setup ---------------- */
    API.ApiSetupRealGet = rootUrl + "/setup/real/get";
    API.ApiSetupRealModify = rootUrl + "/setup/real/modify";
    /* ----------------- money ---------------- */
    API.ApiMoneyAdSee = rootUrl + "/money/ad/see";
    API.ApiMoneyAdClick = rootUrl + "/money/ad/click";
    API.ApiMoneyAdRecord = rootUrl + "/money/ad/record";
    API.ApiMoneyEntrance = rootUrl + "/money/entrance";
    API.ApiMoneyGetoutRecord = rootUrl + "/money/getout/record";
    API.ApiMoneyGetoutApply = rootUrl + "/money/getout/apply";
    /* ----------------- data ---------------- */
    API.ApiDataEntrance = rootUrl + "/data/entrance";
    /* ----------------- game ---------------- */
    API.ApiGameRebirthUse = rootUrl + "/game/rebirth/use";
    API.ApiGameScoreUpdate = rootUrl + "/game/score/update";
    API.ApiGameScoreRank = rootUrl + "/game/score/rank";
})(API || (API = {}));
var Logout = (function (_super) {
    __extends(Logout, _super);
    function Logout() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Logout.prototype.init = function () {
        // 创建场景
        this.createScene();
    };
    Logout.prototype.createScene = function () {
        var _this = this;
        this.skinName = "resource/eui_skins/LogoutSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.delete();
        }, this);
        this.logoutbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Main.MainLogin, true);
        }, this);
    };
    Logout.prototype.loadData = function (latestversion) {
        this.version.text = version;
        if (version == latestversion) {
            this.version.text += "(已最新)";
        }
    };
    Logout.prototype.delete = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return Logout;
}(eui.ItemRenderer));
__reflect(Logout.prototype, "Logout");
var ModifyPhone = (function (_super) {
    __extends(ModifyPhone, _super);
    function ModifyPhone() {
        return _super.call(this) || this;
    }
    ModifyPhone.prototype.init = function (oldphone) {
        // 创建场景
        this.createScene(oldphone);
    };
    ModifyPhone.prototype.createScene = function (oldphone) {
        var _this = this;
        this.skinName = "resource/eui_skins/ModifyPhoneSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        // 初始数据
        this.oldphone.text = oldphone;
        this.oldphone.enabled = false;
        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.delete();
        }, this);
        this.modifybindbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.modifyBindPhone();
        }, this);
        this.getcodebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.getCode();
        }, this);
    };
    ModifyPhone.prototype.delete = function () {
        if (this.parent) {
            this.parent.dispatchEventWith(Phone.BackPhone, false, this.oldphone.text);
            this.parent.removeChild(this);
        }
    };
    ModifyPhone.prototype.modifyBindPhone = function () {
        var _this = this;
        if (this.phone.text == "" || this.code.text == "" || this.oldphone.text == "") {
            Msg.showMsg(this, "请输入完整信息");
            return;
        }
        var data = {
            oldphone: this.oldphone.text,
            phone: this.phone.text,
            code: this.code.text,
        };
        Http.post(this, API.ApiPhoneModifyBind, data).then(function (res) {
            if (res == undefined) {
                Msg.showMsg(_this, "修改绑定成功");
                _this.oldphone.text = _this.phone.text;
                _this.phone.text = "";
                _this.code.text = "";
                return;
            }
        });
    };
    ModifyPhone.prototype.getCode = function () {
        var _this = this;
        if (this.phone.text == "") {
            Msg.showMsg(this, "请输入手机号码");
            return;
        }
        var data = {
            phone: this.phone.text,
        };
        Http.post(this, API.ApiPhoneGetCode, data).then(function (res) {
            Msg.showMsg(_this, "获取成功");
            // unknown转any
            var rsp = res;
            _this.getcodebtn.enabled = false;
            _this.remainBind(rsp.remain);
        });
    };
    ModifyPhone.prototype.remainBind = function (countdown) {
        var timer = new egret.Timer(1000, countdown);
        timer.addEventListener(egret.TimerEvent.TIMER, onTimerHandler, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        timer.start();
        function onTimerHandler() {
            countdown--;
            this.getcodebtn.label = String(countdown);
        }
        function onTimerComplete() {
            this.getcodebtn.label = "获取";
        }
    };
    return ModifyPhone;
}(eui.ItemRenderer));
__reflect(ModifyPhone.prototype, "ModifyPhone");
var Phone = (function (_super) {
    __extends(Phone, _super);
    function Phone() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Phone.prototype.init = function () {
        // 创建场景
        this.createScene();
        // 加载数据
        this.loadData();
    };
    Phone.prototype.createScene = function () {
        var _this = this;
        this.skinName = "resource/eui_skins/PhoneSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        // 增加自定义事件
        this.addEventListener(Phone.BackPhone, this.onBackPhone, this);
        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.delete();
        }, this);
        this.bindbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.bindPhone();
        }, this);
        this.getcodebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.getCode();
        }, this);
        this.modifybindbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onModifyBind();
        }, this);
    };
    Phone.prototype.loadData = function () {
        var _this = this;
        Http.get(this, API.ApiPhoneEntrance).then(function (res) {
            // unknown转any
            var rsp = res;
            if (rsp.phone == "") {
                _this.getcodebtn.enabled = true;
                _this.bindbtn.enabled = true;
                _this.modifybindbtn.enabled = false;
                _this.tip.text = "";
                if (rsp.remain > 0) {
                    _this.getcodebtn.enabled = false;
                    _this.remainBind(rsp.remain);
                }
                return;
            }
            _this.tip.text = "已绑定手机号码";
            _this.phone.text = rsp.phone;
            _this.phone.enabled = false;
            _this.code.enabled = false;
            _this.code.alpha = 0;
            _this.getcodebtn.enabled = false;
            _this.getcodebtn.alpha = 0;
            _this.bindbtn.enabled = false;
            _this.modifybindbtn.enabled = true;
        });
    };
    Phone.prototype.delete = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    Phone.prototype.bindPhone = function () {
        var _this = this;
        if (this.phone.text == "" || this.code.text == "") {
            Msg.showMsg(this, "请输入完整信息");
            return;
        }
        var data = {
            phone: this.phone.text,
            code: this.code.text,
        };
        Http.post(this, API.ApiPhoneBind, data).then(function (res) {
            if (res == undefined) {
                Msg.showMsg(_this, "绑定成功");
                _this.tip.text = "已绑定手机号码";
                _this.phone.enabled = false;
                _this.code.text = "";
                _this.code.enabled = false;
                _this.code.alpha = 0;
                _this.getcodebtn.enabled = false;
                _this.getcodebtn.alpha = 0;
                _this.bindbtn.enabled = false;
                _this.modifybindbtn.enabled = true;
                return;
            }
        });
    };
    Phone.prototype.getCode = function () {
        var _this = this;
        if (this.phone.text == "") {
            Msg.showMsg(this, "请输入手机号码");
            return;
        }
        var data = {
            phone: this.phone.text,
        };
        Http.post(this, API.ApiPhoneGetCode, data).then(function (res) {
            Msg.showMsg(_this, "获取成功");
            // unknown转any
            var rsp = res;
            _this.getcodebtn.enabled = false;
            _this.remainBind(rsp.remain);
        });
    };
    Phone.prototype.remainBind = function (countdown) {
        var timer = new egret.Timer(1000, countdown);
        timer.addEventListener(egret.TimerEvent.TIMER, onTimerHandler, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        timer.start();
        function onTimerHandler() {
            countdown--;
            this.getcodebtn.label = String(countdown);
        }
        function onTimerComplete() {
            this.getcodebtn.label = "获取";
        }
    };
    Phone.prototype.onModifyBind = function () {
        this.modifybind = new ModifyPhone();
        this.modifybind.init(this.phone.text);
        this.addChild(this.modifybind);
    };
    Phone.prototype.onBackPhone = function (evt) {
        console.log("backbackback");
        this.phone.text = evt.data;
    };
    Phone.BackPhone = "backphone";
    return Phone;
}(eui.ItemRenderer));
__reflect(Phone.prototype, "Phone");
var Real = (function (_super) {
    __extends(Real, _super);
    function Real() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Real.prototype.init = function () {
        // 创建场景
        this.createScene();
        // 加载数据
        this.loadData();
    };
    Real.prototype.createScene = function () {
        var _this = this;
        this.skinName = "resource/eui_skins/RealSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.delete();
        }, this);
        this.realbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.realdModify();
        }, this);
    };
    Real.prototype.loadData = function () {
        var _this = this;
        Http.get(this, API.ApiSetupRealGet).then(function (res) {
            // unknown转any
            var rsp = res;
            if (rsp.realnick == "" || rsp.cardcode == "") {
                _this.realbtn.enabled = true;
                return;
            }
            _this.realnick.text = rsp.realnick;
            _this.cardcode.text = rsp.cardcode;
            _this.realnick.enabled = false;
            _this.cardcode.enabled = false;
            _this.realbtn.enabled = false;
        });
    };
    Real.prototype.delete = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    Real.prototype.realdModify = function () {
        var _this = this;
        if (this.realnick.text == "" || this.cardcode.text == "") {
            Msg.showMsg(this, "请输入必填信息");
            return;
        }
        var data = {
            realnick: this.realnick.text,
            cardcode: this.cardcode.text,
        };
        Http.post(this, API.ApiSetupRealModify, data).then(function (res) {
            if (res == undefined) {
                Msg.showMsg(_this, "提交成功");
                _this.realnick.enabled = false;
                _this.cardcode.enabled = false;
                _this.realbtn.enabled = false;
                return;
            }
        });
    };
    return Real;
}(eui.ItemRenderer));
__reflect(Real.prototype, "Real");
/*
 * @Author: your name
 * @Date: 2019-12-23 12:12:04
 * @LastEditTime : 2020-01-07 17:46:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weagentclient\kunai\src\containers\setup\Setup.ts
 */
var Setup = (function (_super) {
    __extends(Setup, _super);
    function Setup() {
        var _this = _super.call(this) || this;
        _this.realbtn = null;
        _this.real = null;
        _this.phone = null;
        _this.phonebtn = null;
        _this.logout = null;
        _this.setupbtn = null;
        _this.init();
        return _this;
    }
    Setup.prototype.init = function () {
        // 创建场景
        this.createScene();
    };
    Setup.prototype.createScene = function () {
        var _this = this;
        this.skinName = "resource/eui_skins/SetupSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        // 增加按钮事件
        this.realbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onReal();
        }, this);
        this.phonebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onPhone();
        }, this);
        this.setupbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onLogout();
        }, this);
    };
    Setup.prototype.loadData = function (userinfo, clientinfo) {
        var _this = this;
        this.nickname.text = userinfo.nickname;
        this.id.text = userinfo.id;
        // 加载头像
        var imgLoader = new egret.ImageLoader();
        imgLoader.load(userinfo.avatarurl);
        imgLoader.once(egret.Event.COMPLETE, function (e) {
            if (e.currentTarget.data) {
                var texture = new egret.Texture();
                texture.bitmapData = e.currentTarget.data;
                _this.portrait.texture = texture;
            }
        }, this);
        this.latestversion = clientinfo.latestversion;
    };
    Setup.prototype.onReal = function () {
        this.real = new Real();
        this.addChild(this.real);
    };
    Setup.prototype.onPhone = function () {
        this.phone = new Phone();
        this.addChild(this.phone);
    };
    Setup.prototype.onLogout = function () {
        this.logout = new Logout();
        this.addChild(this.logout);
        this.logout.loadData(this.latestversion);
    };
    return Setup;
}(eui.ItemRenderer));
__reflect(Setup.prototype, "Setup");
var AdRecord = (function (_super) {
    __extends(AdRecord, _super);
    function AdRecord() {
        var _this = _super.call(this) || this;
        _this.rspdata = new Array();
        _this.startindex = 0;
        _this.endindex = _this.startindex + 5;
        _this.stopload = false;
        _this.loading = false;
        _this.init();
        return _this;
    }
    AdRecord.prototype.init = function () {
        // 创建场景
        this.createScene();
        // 加载数据
        this.loadData();
    };
    AdRecord.prototype.createScene = function () {
        var _this = this;
        this.skinName = "resource/eui_skins/AdRecordSkin.exml";
        this.dataList.itemRenderer = AdRecordItem;
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        // 创建滑动
        this.scroller = new eui.Scroller();
        this.scroller.x = this.dataList.x;
        this.scroller.y = this.dataList.y;
        this.scroller.width = this.width;
        this.scroller.height = this.height - 140;
        this.scroller.viewport = this.dataList;
        this.scroller.scrollPolicyH = 'off';
        this.addChild(this.scroller);
        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.delete();
        }, this);
        // 增加滑动事件
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoved, this);
    };
    AdRecord.prototype.loadData = function () {
        var _this = this;
        if (this.stopload || this.loading) {
            return;
        }
        this.loading = true;
        var data = { start: this.startindex, end: this.endindex };
        Http.post(this, API.ApiMoneyAdRecord, data).then(function (res) {
            if (res == undefined) {
                return;
            }
            // unknown转any
            var rsp = res;
            for (var _i = 0, _a = rsp.adrecords; _i < _a.length; _i++) {
                var v = _a[_i];
                _this.rspdata.push(v);
            }
            _this.bindData(_this.rspdata);
            _this.startindex = _this.rspdata.length;
            _this.endindex = _this.startindex + 5;
            if (rsp.adrecords.length < 5) {
                _this.stopload = true;
            }
            _this.loading = false;
        });
    };
    /** 进行数据绑定 */
    AdRecord.prototype.bindData = function (data) {
        var arrCollection = new eui.ArrayCollection(data);
        this.dataList.dataProvider = arrCollection;
    };
    AdRecord.prototype.delete = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    AdRecord.prototype.touchMoved = function () {
        this.loadData();
    };
    return AdRecord;
}(eui.ItemRenderer));
__reflect(AdRecord.prototype, "AdRecord");
var AdRecordItem = (function (_super) {
    __extends(AdRecordItem, _super);
    function AdRecordItem() {
        var _this = _super.call(this) || this;
        _this.date = null;
        _this.earning = null;
        _this.money = null;
        _this.skinName = "resource/eui_skins/AdRecordItemSkin.exml";
        return _this;
    }
    AdRecordItem.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    AdRecordItem.prototype.dataChanged = function () {
        this.loadData();
    };
    AdRecordItem.prototype.loadData = function () {
        this.date.text = this.data.createtime;
        this.earning.text = this.data.earning;
        this.money.text = this.data.money;
    };
    return AdRecordItem;
}(eui.ItemRenderer));
__reflect(AdRecordItem.prototype, "AdRecordItem");
var Getout = (function (_super) {
    __extends(Getout, _super);
    function Getout() {
        var _this = _super.call(this) || this;
        _this.chosenbtns = new Array();
        _this.chosenIdx = "-1";
        _this.init();
        return _this;
    }
    Getout.prototype.init = function () {
        // 创建场景
        this.createScene();
    };
    Getout.prototype.createScene = function () {
        var _this = this;
        this.skinName = "resource/eui_skins/GetoutSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        this.initchosenbtns();
        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.delete();
        }, this);
        this.getoutbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onGetout();
        }, this);
    };
    Getout.prototype.loadData = function (money) {
        this.money.text = money;
    };
    Getout.prototype.delete = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    Getout.prototype.onGetout = function () {
        var _this = this;
        if (this.chosenIdx == "-1") {
            console.log("not chosen");
            return;
        }
        var getoutmoney = Number(this.chosenbtns[this.chosenIdx].label.replace("元", ""));
        var money = Number(this.money.text);
        if (getoutmoney > money) {
            Msg.showMsg(this, "余额不足");
            return;
        }
        var data = { getoutmoney: getoutmoney };
        Http.post(this, API.ApiMoneyGetoutApply, data).then(function (res) {
            if (res == undefined) {
                Msg.showMsg(_this, "提现成功");
                return;
            }
        });
    };
    Getout.prototype.initchosenbtns = function () {
        var _this = this;
        // 设置按钮文字大小
        this.wechat.currentState = "down";
        this.wechat.labelDisplay.size = 18;
        this.two.currentState = "down";
        this.chosenIdx = "0";
        this.chosenbtns.push(this.two);
        this.chosenbtns.push(this.three);
        this.chosenbtns.push(this.four);
        this.chosenbtns.push(this.five);
        this.chosenbtns.push(this.ten);
        this.chosenbtns.push(this.twenty);
        var _loop_3 = function (i) {
            this_3.chosenbtns[i].labelDisplay.size = 18;
            this_3.chosenbtns[i].addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.chosenIdx = i;
                _this.chosen(_this.chosenbtns[i].label);
            }, this_3);
        };
        var this_3 = this;
        for (var i in this.chosenbtns) {
            _loop_3(i);
        }
    };
    Getout.prototype.chosen = function (label) {
        for (var _i = 0, _a = this.chosenbtns; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v.label == label) {
                v.currentState = "down";
            }
            else {
                v.currentState = "up";
            }
        }
    };
    return Getout;
}(eui.ItemRenderer));
__reflect(Getout.prototype, "Getout");
var GetoutRecord = (function (_super) {
    __extends(GetoutRecord, _super);
    function GetoutRecord() {
        var _this = _super.call(this) || this;
        _this.rspdata = new Array();
        _this.startindex = 0;
        _this.endindex = _this.startindex + 5;
        _this.stopload = false;
        _this.loading = false;
        _this.init();
        return _this;
    }
    GetoutRecord.prototype.init = function () {
        // 创建场景
        this.createScene();
        // 加载数据
        this.loadData();
    };
    GetoutRecord.prototype.createScene = function () {
        var _this = this;
        this.skinName = "resource/eui_skins/GetoutRecordSkin.exml";
        this.dataList.itemRenderer = GetoutRecordItem;
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        // 创建滑动
        this.scroller = new eui.Scroller();
        this.scroller.x = this.dataList.x;
        this.scroller.y = this.dataList.y;
        this.scroller.width = this.width;
        this.scroller.height = this.height - 140;
        this.scroller.viewport = this.dataList;
        this.scroller.scrollPolicyH = 'off';
        this.addChild(this.scroller);
        // 增加按钮事件
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.delete();
        }, this);
        // 增加滑动事件
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoved, this);
    };
    GetoutRecord.prototype.loadData = function () {
        var _this = this;
        if (this.stopload || this.loading) {
            return;
        }
        this.loading = true;
        var data = { start: this.startindex, end: this.endindex };
        Http.post(this, API.ApiMoneyGetoutRecord, data).then(function (res) {
            if (res == undefined) {
                return;
            }
            // unknown转any
            var rsp = res;
            for (var _i = 0, _a = rsp.getoutrecords; _i < _a.length; _i++) {
                var v = _a[_i];
                _this.rspdata.push(v);
            }
            _this.bindData(_this.rspdata);
            _this.startindex = _this.rspdata.length;
            _this.endindex = _this.startindex + 5;
            if (rsp.getoutrecords.length < 5) {
                _this.stopload = true;
            }
            _this.loading = false;
        });
    };
    /** 进行数据绑定 */
    GetoutRecord.prototype.bindData = function (data) {
        var arrCollection = new eui.ArrayCollection(data);
        this.dataList.dataProvider = arrCollection;
    };
    GetoutRecord.prototype.delete = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    GetoutRecord.prototype.touchMoved = function () {
        this.loadData();
    };
    return GetoutRecord;
}(eui.ItemRenderer));
__reflect(GetoutRecord.prototype, "GetoutRecord");
var GetoutRecordItem = (function (_super) {
    __extends(GetoutRecordItem, _super);
    function GetoutRecordItem() {
        var _this = _super.call(this) || this;
        _this.date = null;
        _this.money = null;
        _this.status = null;
        _this.skinName = "resource/eui_skins/GetoutRecordItemSkin.exml";
        return _this;
    }
    GetoutRecordItem.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    GetoutRecordItem.prototype.dataChanged = function () {
        this.loadData();
    };
    GetoutRecordItem.prototype.loadData = function () {
        this.date.text = this.data.createtime;
        this.money.text = this.data.getoutmoney;
        this.status.text = this.data.status;
    };
    return GetoutRecordItem;
}(eui.ItemRenderer));
__reflect(GetoutRecordItem.prototype, "GetoutRecordItem");
var Wallet = (function (_super) {
    __extends(Wallet, _super);
    function Wallet() {
        var _this = _super.call(this) || this;
        _this.total = null; // 钱包总收益
        _this.money = null; // 当前账户余额
        _this.getouttotal = null; // 总提现金额
        _this.remainsee = null; // 剩余观看次数
        _this.getoutrecord = null;
        _this.getoutrecordbtn = null; // 提现记录按钮
        _this.adrecord = null;
        _this.adrecordbtn = null; // 收益记录按钮
        _this.getout = null;
        _this.getoutbtn = null;
        _this.init();
        return _this;
    }
    Wallet.prototype.init = function () {
        /* 客户端的金币全部都以元为单位 */
        // 创建场景
        this.createScene();
        // 加载数据
        this.loadData();
    };
    Wallet.prototype.createScene = function () {
        var _this = this;
        this.skinName = "resource/eui_skins/WalletSkin.exml";
        var stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight - 90;
        // 增加按钮事件
        this.getoutrecordbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onGetoutRecord();
        }, this);
        this.adrecordbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onAdRecord();
        }, this);
        this.getoutbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onGetout();
        }, this);
    };
    Wallet.prototype.loadData = function () {
        var _this = this;
        Http.get(this, API.ApiMoneyEntrance).then(function (res) {
            if (res == undefined) {
                return;
            }
            // unknown转any
            var rsp = res;
            _this.total.text = rsp.total;
            _this.money.text = rsp.money;
            _this.getouttotal.text = rsp.getouttotal;
            _this.remainsee.text = rsp.remainsee;
        });
    };
    Wallet.prototype.onGetoutRecord = function () {
        this.getoutrecord = new GetoutRecord();
        this.addChild(this.getoutrecord);
    };
    Wallet.prototype.onAdRecord = function () {
        this.adrecord = new AdRecord();
        this.addChild(this.adrecord);
    };
    Wallet.prototype.onGetout = function () {
        this.getout = new Getout();
        this.getout.loadData(this.money.text);
        this.addChild(this.getout);
    };
    return Wallet;
}(eui.ItemRenderer));
__reflect(Wallet.prototype, "Wallet");
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
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
/**
* 网络公共类
* Http.requestInterceptor     请求拦截钩子
* Http.responseInterceptor    响应拦截钩子
* Http.get
* Http.post
* Http.request
*/
var Http = (function () {
    function Http() {
    }
    Http.utf8_decode = function (utftext) {
        var string = '';
        var i = 0;
        var c = 0;
        var c1 = 0;
        var c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c1 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
                i += 2;
            }
            else {
                c1 = utftext.charCodeAt(i + 1);
                c2 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
                i += 3;
            }
        }
        return string;
    };
    Http.bas64_decode = function (input) {
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = base64EncodeChars.indexOf(input.charAt(i++));
            enc2 = base64EncodeChars.indexOf(input.charAt(i++));
            enc3 = base64EncodeChars.indexOf(input.charAt(i++));
            enc4 = base64EncodeChars.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        return this.utf8_decode(output);
    };
    //钩子函数，推荐在main.ts初始化，可覆盖
    Http.requestInterceptor = function (request) {
        return request;
    };
    ;
    Http.responseInterceptor = function (response) {
        return response;
    };
    ;
    Http.get = function (obj, linkurl, data) {
        if (data === void 0) { data = null; }
        return this.request(obj, linkurl, data, egret.HttpMethod.GET);
    };
    Http.post = function (obj, linkurl, data) {
        return this.request(obj, linkurl, data, egret.HttpMethod.POST);
    };
    Http.request = function (obj, linkurl, data, type) {
        var _this = this;
        if (type === void 0) { type = egret.HttpMethod.POST; }
        Loading.showLoading(obj);
        return new Promise(function (resolve, reject) {
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.setRequestHeader("Session", Http.token || '');
            if (_this.requestInterceptor && typeof _this.requestInterceptor === 'function') {
                request = _this.requestInterceptor(request);
            }
            switch (type) {
                case egret.HttpMethod.POST:
                    request.open(linkurl, type);
                    request.send(_this.formatData(data, type));
                    break;
                case egret.HttpMethod.GET:
                    request.open(linkurl + _this.formatData(data, type), type);
                    request.send();
                    break;
            }
            request.addEventListener(egret.Event.COMPLETE, onComplete, _this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, onIOError, _this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, onProgress, _this);
            function onComplete(event) {
                Loading.hidLoading(obj);
                var request = event.currentTarget;
                var Datas = JSON.parse(request.response);
                if (this.responseInterceptor && typeof this.responseInterceptor === 'function') {
                    Datas = this.responseInterceptor(Datas);
                }
                switch (Datas.result) {
                    case 0:
                        if (Datas.data != undefined) {
                            Datas.data = this.bas64_decode(Datas.data);
                            Datas.data = JSON.parse(Datas.data);
                        }
                        resolve(Datas.data);
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        // token错误处理
                        obj.dispatchEventWith(Main.MainLogin, true);
                        Msg.showMsg(obj, Datas.msg);
                        break;
                    default:
                        Msg.showMsg(obj, Datas.msg);
                        break;
                }
            }
            function onIOError(event) {
                //再次重新请求
                setTimerS(event);
            }
            function onProgress(event) {
                //console.log("request progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
            }
            var TimerConut = 0;
            function setTimerS(event) {
                TimerConut++;
                if (TimerConut < 3) {
                    request.responseType = egret.HttpResponseType.TEXT;
                    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                    request.open(linkurl, type);
                    request.send(data);
                }
                else {
                    Loading.hidLoading(obj);
                    Msg.showMsg(obj, "温馨提示, 网络出错！");
                    return reject(event);
                }
            }
        }).catch(function (err) {
            console.error(err);
        });
    };
    Http.formatData = function (data, type) {
        var params = '';
        if (data != null) {
            for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                var key = _a[_i];
                if (params.length > 0) {
                    params = params + "&";
                }
                params += key + "=" + data[key];
            }
            switch (type) {
                case egret.HttpMethod.POST:
                    params = JSON.stringify(data); //json時启用
                    break;
                case egret.HttpMethod.GET:
                    if (params.length > 0)
                        params = "?" + params;
                    break;
            }
        }
        return params;
    };
    return Http;
}());
__reflect(Http.prototype, "Http");
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
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
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var Tools = (function () {
    function Tools() {
    }
    Tools.generateRandom = function (start, end) {
        return Math.floor(Math.random() * (end - start) + start);
    };
    return Tools;
}());
__reflect(Tools.prototype, "Tools");

;window.Main = Main;