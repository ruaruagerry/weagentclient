var egret = window.egret;window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/AdRecordItemSkin.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = ["date","earning","money"];
		
		this.height = 100;
		this.width = 428;
		this.elementsContent = [this._Rect1_i(),this.date_i(),this.earning_i(),this.money_i()];
	}
	var _proto = $exmlClass1.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 428;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.date_i = function () {
		var t = new eui.Label();
		this.date = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 16;
		t.left = 22;
		t.size = 17;
		t.text = "1";
		t.textAlign = "center";
		t.top = 16;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 115;
		return t;
	};
	_proto.earning_i = function () {
		var t = new eui.Label();
		this.earning = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 16;
		t.horizontalCenter = 25.5;
		t.size = 17;
		t.text = "2";
		t.textAlign = "center";
		t.top = 15;
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 75;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 15;
		t.right = 25;
		t.size = 17;
		t.text = "3";
		t.textAlign = "center";
		t.top = 16;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 75;
		return t;
	};
	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/AdRecordSkin.exml'] = window.$exmlClass2 = (function (_super) {
	__extends($exmlClass2, _super);
	function $exmlClass2() {
		_super.call(this);
		this.skinParts = ["back","dataList"];
		
		this.height = 624.67;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.back_i(),this.dataList_i()];
	}
	var _proto = $exmlClass2.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -0.3300000000000409;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0.16500000000002046;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xe25d5d;
		t.height = 64;
		t.horizontalCenter = -0.5;
		t.left = -1;
		t.right = 0;
		t.top = 76;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xedc4c4;
		t.height = 76;
		t.horizontalCenter = -0.5;
		t.left = -1;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 64.67;
		t.left = 1;
		t.size = 17;
		t.text = "日期";
		t.textAlign = "center";
		t.top = 74;
		t.verticalAlign = "middle";
		t.width = 157.33;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 64.67;
		t.right = 2;
		t.size = 17;
		t.text = "余额";
		t.textAlign = "center";
		t.top = 74;
		t.verticalAlign = "middle";
		t.width = 91.32;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 64.67;
		t.horizontalCenter = 34.5;
		t.size = 17;
		t.text = "收益";
		t.textAlign = "center";
		t.top = 74;
		t.verticalAlign = "middle";
		t.width = 104.65;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.horizontalCenter = 0.5;
		t.text = "收益记录";
		t.textAlign = "center";
		t.top = 17;
		t.verticalAlign = "middle";
		t.width = 135;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 16;
		t.source = "back_png";
		t.top = 23;
		t.width = 31;
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 486.67;
		t.width = 358;
		t.x = 0;
		t.y = 140;
		return t;
	};
	return $exmlClass2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xaf4d4d;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DataSkin.exml'] = window.$exmlClass3 = (function (_super) {
	__extends($exmlClass3, _super);
	function $exmlClass3() {
		_super.call(this);
		this.skinParts = ["data_yestarday_all","data_history_all","data_today_adnum","data_today_onlinenum","data_today_all"];
		
		this.height = 622.67;
		this.width = 358.33;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Label2_i(),this._Label3_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i(),this._Rect10_i(),this.data_yestarday_all_i(),this._Label4_i(),this._Label5_i(),this.data_history_all_i(),this._Label6_i(),this._Label7_i(),this._Rect11_i(),this._Rect12_i(),this.data_today_adnum_i(),this._Label8_i(),this._Rect13_i(),this._Rect14_i(),this.data_today_onlinenum_i(),this._Label9_i(),this._Rect15_i(),this._Rect16_i(),this.data_today_all_i(),this._Label10_i()];
	}
	var _proto = $exmlClass3.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x45828e;
		t.height = 57;
		t.horizontalCenter = 0.835000000000008;
		t.left = 0;
		t.right = -1.670000000000016;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -1.330000000000041;
		t.fillColor = 0xb7b7b7;
		t.horizontalCenter = 0.835000000000008;
		t.left = 0;
		t.right = -1.670000000000016;
		t.top = 57;
		t.verticalCenter = 29.16500000000002;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 85.66999999999996;
		t.fillColor = 0xFFFFFF;
		t.height = 217;
		t.horizontalCenter = 0.835000000000008;
		t.left = 9;
		t.right = 7.329999999999984;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35;
		t.horizontalCenter = 0.835000000000008;
		t.left = 99;
		t.right = 97.32999999999998;
		t.size = 21;
		t.text = "分红详情";
		t.textAlign = "center";
		t.top = 22;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 175;
		t.horizontalCenter = 0.835000000000008;
		t.left = 9;
		t.right = 7.329999999999984;
		t.top = 108;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xc1c1c1;
		t.height = 1;
		t.horizontalCenter = 1.835000000000008;
		t.left = 20;
		t.right = 16.329999999999984;
		t.strokeColor = 0x444444;
		t.top = 138;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 269.66999999999996;
		t.fillColor = 0xC1C1C1;
		t.height = 1;
		t.horizontalCenter = 1.835000000000008;
		t.left = 20;
		t.right = 16.329999999999984;
		t.strokeColor = 0x444444;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 28;
		t.left = 20;
		t.size = 15;
		t.text = "广告收益";
		t.textAlign = "left";
		t.textColor = 0x5365aa;
		t.top = 110;
		t.verticalAlign = "middle";
		t.width = 86;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "NSimSun";
		t.height = 28;
		t.right = 16.329999999999984;
		t.size = 12;
		t.text = "每日中午12点更新";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.top = 111;
		t.verticalAlign = "middle";
		t.width = 134;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xff5151;
		t.height = 84;
		t.left = 35;
		t.top = 154;
		t.width = 127;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x2869ed;
		t.height = 84;
		t.right = 32.329999999999984;
		t.top = 153;
		t.width = 127;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.62;
		t.fillColor = 0xff5151;
		t.height = 26;
		t.left = 35;
		t.top = 237;
		t.width = 127;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.62;
		t.fillColor = 0x153fd6;
		t.height = 26;
		t.right = 32.329999999999984;
		t.top = 237;
		t.width = 127;
		return t;
	};
	_proto.data_yestarday_all_i = function () {
		var t = new eui.Label();
		this.data_yestarday_all = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.left = 35;
		t.text = "0.00";
		t.textAlign = "center";
		t.top = 153;
		t.verticalAlign = "middle";
		t.width = 128;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 27;
		t.left = 35;
		t.size = 12;
		t.text = "昨日全网收益(元)";
		t.textAlign = "center";
		t.top = 236;
		t.verticalAlign = "middle";
		t.width = 128;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 25;
		t.right = 31.329999999999984;
		t.size = 12;
		t.text = "历史全网收益(元)";
		t.textAlign = "center";
		t.top = 237;
		t.verticalAlign = "middle";
		t.width = 128;
		return t;
	};
	_proto.data_history_all_i = function () {
		var t = new eui.Label();
		this.data_history_all = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.right = 32.329999999999984;
		t.text = "0";
		t.textAlign = "center";
		t.top = 153;
		t.verticalAlign = "middle";
		t.width = 128;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 271.66999999999996;
		t.fontFamily = "KaiTi";
		t.height = 28;
		t.left = 20;
		t.size = 15;
		t.text = "今日实时数据";
		t.textAlign = "left";
		t.textColor = 0x5365AA;
		t.verticalAlign = "middle";
		t.width = 118;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 271.66999999999996;
		t.fontFamily = "NSimSun";
		t.height = 28;
		t.right = 16.329999999999984;
		t.size = 12;
		t.text = "每日凌晨12点重新计算";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 137.66999999999996;
		t.fillColor = 0x1d8207;
		t.height = 119;
		t.left = 31;
		t.width = 83;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 113.66999999999996;
		t.fillAlpha = 0.62;
		t.fillColor = 0x45ad08;
		t.height = 24;
		t.left = 31;
		t.width = 83;
		return t;
	};
	_proto.data_today_adnum_i = function () {
		var t = new eui.Label();
		this.data_today_adnum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 138.66999999999996;
		t.fontFamily = "Microsoft YaHei";
		t.height = 118;
		t.left = 32;
		t.size = 20;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 113.66999999999996;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.left = 32;
		t.size = 10;
		t.text = "广告总数";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 136.66999999999996;
		t.fillColor = 0x1D8207;
		t.height = 119;
		t.horizontalCenter = 2.335000000000008;
		t.width = 83;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 112.66999999999996;
		t.fillAlpha = 0.62;
		t.fillColor = 0x45AD08;
		t.height = 24;
		t.horizontalCenter = 2.335000000000008;
		t.width = 83;
		return t;
	};
	_proto.data_today_onlinenum_i = function () {
		var t = new eui.Label();
		this.data_today_onlinenum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 137.66999999999996;
		t.fontFamily = "Microsoft YaHei";
		t.height = 118;
		t.horizontalCenter = 2.335000000000008;
		t.size = 20;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 112.66999999999996;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.horizontalCenter = 3.335000000000008;
		t.size = 10;
		t.text = "在线总数";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 137.66999999999996;
		t.fillColor = 0x1D8207;
		t.height = 119;
		t.right = 28.329999999999984;
		t.width = 83;
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 113.66999999999996;
		t.fillAlpha = 0.62;
		t.fillColor = 0x45AD08;
		t.height = 24;
		t.right = 28.329999999999984;
		t.width = 83;
		return t;
	};
	_proto.data_today_all_i = function () {
		var t = new eui.Label();
		this.data_today_all = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 138.66999999999996;
		t.fontFamily = "Microsoft YaHei";
		t.height = 118;
		t.right = 29.329999999999984;
		t.size = 20;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 113.66999999999996;
		t.fontFamily = "Microsoft YaHei";
		t.height = 24;
		t.right = 28.329999999999984;
		t.size = 10;
		t.text = "全网广告收益(元)";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81;
		return t;
	};
	return $exmlClass3;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GetoutRecordItemSkin.exml'] = window.$exmlClass4 = (function (_super) {
	__extends($exmlClass4, _super);
	function $exmlClass4() {
		_super.call(this);
		this.skinParts = ["date","money","status"];
		
		this.height = 100;
		this.width = 428;
		this.elementsContent = [this._Rect1_i(),this.date_i(),this.money_i(),this.status_i()];
	}
	var _proto = $exmlClass4.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 428;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.date_i = function () {
		var t = new eui.Label();
		this.date = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 16;
		t.left = 22;
		t.size = 17;
		t.text = "1";
		t.textAlign = "center";
		t.top = 16;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 115;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 16;
		t.horizontalCenter = 25.5;
		t.size = 17;
		t.text = "2";
		t.textAlign = "center";
		t.top = 15;
		t.verticalAlign = "middle";
		t.verticalCenter = -0.5;
		t.width = 75;
		return t;
	};
	_proto.status_i = function () {
		var t = new eui.Label();
		this.status = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 15;
		t.right = 25;
		t.size = 17;
		t.text = "3";
		t.textAlign = "center";
		t.top = 16;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 75;
		return t;
	};
	return $exmlClass4;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GetoutRecordSkin.exml'] = window.$exmlClass5 = (function (_super) {
	__extends($exmlClass5, _super);
	function $exmlClass5() {
		_super.call(this);
		this.skinParts = ["back","dataList"];
		
		this.height = 624.67;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.back_i(),this.dataList_i()];
	}
	var _proto = $exmlClass5.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -0.3300000000000409;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0.16500000000002046;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xe25d5d;
		t.height = 64;
		t.horizontalCenter = -0.5;
		t.left = -1;
		t.right = 0;
		t.top = 76;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xedc4c4;
		t.height = 76;
		t.horizontalCenter = -0.5;
		t.left = -1;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 64.67;
		t.left = 1;
		t.size = 17;
		t.text = "申请日期";
		t.textAlign = "center";
		t.top = 74;
		t.verticalAlign = "middle";
		t.width = 157.33;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 64.67;
		t.right = 2;
		t.size = 17;
		t.text = "状态";
		t.textAlign = "center";
		t.top = 74;
		t.verticalAlign = "middle";
		t.width = 91.32;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 64.67;
		t.horizontalCenter = 34.5;
		t.size = 17;
		t.text = "金额";
		t.textAlign = "center";
		t.top = 74;
		t.verticalAlign = "middle";
		t.width = 104.65;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.horizontalCenter = 0.5;
		t.text = "提现记录";
		t.textAlign = "center";
		t.top = 17;
		t.verticalAlign = "middle";
		t.width = 135;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 16;
		t.source = "back_png";
		t.top = 23;
		t.width = 31;
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 486.67;
		t.width = 358;
		t.x = 0;
		t.y = 140;
		return t;
	};
	return $exmlClass5;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GetoutSkin.exml'] = window.$exmlClass6 = (function (_super) {
	__extends($exmlClass6, _super);
	var $exmlClass6$Skin7 = 	(function (_super) {
		__extends($exmlClass6$Skin7, _super);
		function $exmlClass6$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_blue_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass6$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_grey_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass6$Skin7;
	})(eui.Skin);

	var $exmlClass6$Skin8 = 	(function (_super) {
		__extends($exmlClass6$Skin8, _super);
		function $exmlClass6$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_blue_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass6$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_grey_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass6$Skin8;
	})(eui.Skin);

	var $exmlClass6$Skin9 = 	(function (_super) {
		__extends($exmlClass6$Skin9, _super);
		function $exmlClass6$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_blue_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass6$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_grey_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass6$Skin9;
	})(eui.Skin);

	var $exmlClass6$Skin10 = 	(function (_super) {
		__extends($exmlClass6$Skin10, _super);
		function $exmlClass6$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_blue_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass6$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_grey_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass6$Skin10;
	})(eui.Skin);

	var $exmlClass6$Skin11 = 	(function (_super) {
		__extends($exmlClass6$Skin11, _super);
		function $exmlClass6$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_blue_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass6$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_grey_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass6$Skin11;
	})(eui.Skin);

	var $exmlClass6$Skin12 = 	(function (_super) {
		__extends($exmlClass6$Skin12, _super);
		function $exmlClass6$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_blue_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass6$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_grey_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass6$Skin12;
	})(eui.Skin);

	var $exmlClass6$Skin13 = 	(function (_super) {
		__extends($exmlClass6$Skin13, _super);
		function $exmlClass6$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_blue_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass6$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_grey_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass6$Skin13;
	})(eui.Skin);

	function $exmlClass6() {
		_super.call(this);
		this.skinParts = ["wechat","back","money","getoutbtn","two","three","four","five","ten","twenty"];
		
		this.height = 622;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.wechat_i(),this._Label1_i(),this.back_i(),this.money_i(),this._Label2_i(),this._Label3_i(),this.getoutbtn_i(),this.two_i(),this.three_i(),this.four_i(),this.five_i(),this.ten_i(),this.twenty_i()];
	}
	var _proto = $exmlClass6.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x45828E;
		t.height = 121;
		t.horizontalCenter = 1;
		t.left = 0;
		t.right = -2;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -1;
		t.fillColor = 0xe8e8e8;
		t.horizontalCenter = 0;
		t.left = 1;
		t.right = 1;
		t.top = 116;
		t.verticalCenter = 58.5;
		return t;
	};
	_proto.wechat_i = function () {
		var t = new eui.Button();
		this.wechat = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = false;
		t.height = 50;
		t.label = "微信";
		t.left = 48;
		t.scaleX = 1;
		t.top = 190;
		t.width = 73.01;
		t.skinName = $exmlClass6$Skin7;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35;
		t.horizontalCenter = 0.835000000000008;
		t.left = 99;
		t.right = 97.32999999999998;
		t.size = 21;
		t.text = "我的钱包";
		t.textAlign = "center";
		t.top = 22;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 16;
		t.source = "back_png";
		t.top = 23;
		t.width = 31;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0.5;
		t.text = "Label";
		t.textAlign = "center";
		t.top = 77;
		t.verticalAlign = "middle";
		t.width = 144.67;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.33;
		t.left = 48;
		t.size = 18;
		t.text = "提现方式";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 151;
		t.verticalAlign = "middle";
		t.width = 84.67;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39.33;
		t.left = 48;
		t.size = 18;
		t.text = "提现金额";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -19.5;
		t.width = 84.67;
		return t;
	};
	_proto.getoutbtn_i = function () {
		var t = new eui.Button();
		this.getoutbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 64;
		t.height = 57;
		t.horizontalCenter = -3;
		t.label = "提现";
		t.width = 214;
		return t;
	};
	_proto.two_i = function () {
		var t = new eui.Button();
		this.two = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 39;
		t.label = "20元";
		t.left = 52;
		t.scaleX = 1;
		t.verticalCenter = 39.5;
		t.width = 55.01;
		t.skinName = $exmlClass6$Skin8;
		return t;
	};
	_proto.three_i = function () {
		var t = new eui.Button();
		this.three = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.horizontalCenter = 1.5;
		t.label = "30元";
		t.scaleX = 1;
		t.verticalCenter = 39.5;
		t.width = 55.01;
		t.skinName = $exmlClass6$Skin9;
		return t;
	};
	_proto.four_i = function () {
		var t = new eui.Button();
		this.four = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.label = "40元";
		t.right = 51;
		t.scaleX = 1;
		t.verticalCenter = 39.5;
		t.width = 55.01;
		t.skinName = $exmlClass6$Skin10;
		return t;
	};
	_proto.five_i = function () {
		var t = new eui.Button();
		this.five = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 191;
		t.height = 39;
		t.label = "50元";
		t.left = 52;
		t.scaleX = 1;
		t.width = 55.01;
		t.skinName = $exmlClass6$Skin11;
		return t;
	};
	_proto.ten_i = function () {
		var t = new eui.Button();
		this.ten = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 191;
		t.height = 39;
		t.horizontalCenter = 1.5;
		t.label = "100元";
		t.scaleX = 1;
		t.width = 55.01;
		t.skinName = $exmlClass6$Skin12;
		return t;
	};
	_proto.twenty_i = function () {
		var t = new eui.Button();
		this.twenty = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 191;
		t.height = 39;
		t.label = "200元";
		t.right = 51;
		t.scaleX = 1;
		t.width = 55.01;
		t.skinName = $exmlClass6$Skin13;
		return t;
	};
	return $exmlClass6;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemSkin.exml'] = window.$exmlClass14 = (function (_super) {
	__extends($exmlClass14, _super);
	function $exmlClass14() {
		_super.call(this);
		this.skinParts = ["rank_rect","rank_ranknum","rank_score","rank_portrait","rank_nick"];
		
		this.height = 75;
		this.width = 269;
		this.elementsContent = [this.rank_rect_i(),this.rank_ranknum_i(),this.rank_score_i(),this.rank_portrait_i(),this.rank_nick_i()];
	}
	var _proto = $exmlClass14.prototype;

	_proto.rank_rect_i = function () {
		var t = new eui.Rect();
		this.rank_rect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.width = 269;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rank_ranknum_i = function () {
		var t = new eui.Label();
		this.rank_ranknum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.fontFamily = "KaiTi";
		t.left = 3;
		t.size = 16;
		t.text = "1";
		t.textAlign = "center";
		t.top = 21;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 28;
		return t;
	};
	_proto.rank_score_i = function () {
		var t = new eui.Label();
		this.rank_score = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.fontFamily = "KaiTi";
		t.right = 15;
		t.size = 16;
		t.text = "1";
		t.textAlign = "center";
		t.top = 21;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 28;
		return t;
	};
	_proto.rank_portrait_i = function () {
		var t = new eui.Image();
		this.rank_portrait = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 14;
		t.left = 39;
		t.rotation = 359.63;
		t.top = 17;
		t.verticalCenter = 0.5;
		t.width = 53.86;
		return t;
	};
	_proto.rank_nick_i = function () {
		var t = new eui.Label();
		this.rank_nick = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.horizontalCenter = 18;
		t.size = 22;
		t.text = "nick";
		t.textAlign = "center";
		t.top = 22;
		t.verticalAlign = "middle";
		t.verticalCenter = 1;
		t.width = 91;
		return t;
	};
	return $exmlClass14;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoginSkin.exml'] = window.$exmlClass15 = (function (_super) {
	__extends($exmlClass15, _super);
	var $exmlClass15$Skin16 = 	(function (_super) {
		__extends($exmlClass15$Skin16, _super);
		function $exmlClass15$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_grey_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass15$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_green_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass15$Skin16;
	})(eui.Skin);

	var $exmlClass15$Skin17 = 	(function (_super) {
		__extends($exmlClass15$Skin17, _super);
		function $exmlClass15$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bg_grey_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass15$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bg_green_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass15$Skin17;
	})(eui.Skin);

	function $exmlClass15() {
		_super.call(this);
		this.skinParts = ["wxloginbtn","testloginbtn","account"];
		
		this.height = 622;
		this.width = 358;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.wxloginbtn_i(),this.testloginbtn_i(),this.account_i()];
	}
	var _proto = $exmlClass15.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -1;
		t.horizontalCenter = -1;
		t.left = 0;
		t.right = 2;
		t.source = "1_jpg";
		t.top = 0;
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.67;
		t.horizontalCenter = -1.5;
		t.source = "2_jpg";
		t.top = 92;
		t.width = 197.33;
		return t;
	};
	_proto.wxloginbtn_i = function () {
		var t = new eui.Button();
		this.wxloginbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 70;
		t.enabled = true;
		t.height = 68.66;
		t.horizontalCenter = -1.5;
		t.label = "微信登陆";
		t.width = 238.67;
		t.skinName = $exmlClass15$Skin16;
		return t;
	};
	_proto.testloginbtn_i = function () {
		var t = new eui.Button();
		this.testloginbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 201;
		t.enabled = true;
		t.height = 68.66;
		t.horizontalCenter = -1.5;
		t.label = "测试登陆";
		t.width = 238.67;
		t.skinName = $exmlClass15$Skin17;
		return t;
	};
	_proto.account_i = function () {
		var t = new eui.TextInput();
		this.account = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 48.78;
		t.horizontalCenter = -3.5;
		t.prompt = "账号";
		t.verticalCenter = -4.5;
		t.width = 186.66;
		return t;
	};
	return $exmlClass15;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LogoutSkin.exml'] = window.$exmlClass18 = (function (_super) {
	__extends($exmlClass18, _super);
	function $exmlClass18() {
		_super.call(this);
		this.skinParts = ["back","version","logoutbtn"];
		
		this.height = 622;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label1_i(),this.back_i(),this._Rect3_i(),this._Label2_i(),this.version_i(),this.logoutbtn_i()];
	}
	var _proto = $exmlClass18.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -7;
		t.fillColor = 0xD8D8D8;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 1;
		t.verticalCenter = 4;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x45828E;
		t.height = 121;
		t.horizontalCenter = 1;
		t.left = 0;
		t.right = -2;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35;
		t.horizontalCenter = 1;
		t.left = 99;
		t.right = 97;
		t.size = 21;
		t.text = "设置";
		t.textAlign = "center";
		t.top = 44;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 19;
		t.source = "back_png";
		t.top = 46;
		t.width = 31;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 74.66;
		t.horizontalCenter = 1.5;
		t.left = 45;
		t.right = 42;
		t.top = 153;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.left = 66;
		t.size = 18;
		t.text = "当前版本";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 181;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.version_i = function () {
		var t = new eui.Label();
		this.version = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.34;
		t.right = 68;
		t.size = 18;
		t.text = "1.0.1";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 175;
		t.verticalAlign = "middle";
		t.width = 129.34;
		return t;
	};
	_proto.logoutbtn_i = function () {
		var t = new eui.Button();
		this.logoutbtn = t;
		t.horizontalCenter = -1;
		t.label = "退出";
		t.verticalCenter = -30;
		return t;
	};
	return $exmlClass18;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ModifyPhoneSkin.exml'] = window.$exmlClass19 = (function (_super) {
	__extends($exmlClass19, _super);
	function $exmlClass19() {
		_super.call(this);
		this.skinParts = ["back","oldphone","phone","code","modifybindbtn","getcodebtn"];
		
		this.height = 622;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this.back_i(),this.oldphone_i(),this.phone_i(),this.code_i(),this.modifybindbtn_i(),this.getcodebtn_i()];
	}
	var _proto = $exmlClass19.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0xD8D8D8;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 121;
		t.verticalCenter = 60.5;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x45828E;
		t.height = 121;
		t.horizontalCenter = 1;
		t.left = 0;
		t.right = -2;
		t.top = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 264.33;
		t.horizontalCenter = 0.5;
		t.left = 34;
		t.right = 33;
		t.top = 151;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35;
		t.horizontalCenter = 1;
		t.left = 99;
		t.right = 97;
		t.size = 21;
		t.text = "修改手机绑定";
		t.textAlign = "center";
		t.top = 44;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 19;
		t.source = "back_png";
		t.top = 46;
		t.width = 31;
		return t;
	};
	_proto.oldphone_i = function () {
		var t = new eui.TextInput();
		this.oldphone = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = false;
		t.height = 46;
		t.horizontalCenter = 0.5;
		t.left = 63;
		t.prompt = "手机号码";
		t.right = 62;
		t.top = 186;
		return t;
	};
	_proto.phone_i = function () {
		var t = new eui.TextInput();
		this.phone = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 46;
		t.horizontalCenter = 0.5;
		t.left = 63;
		t.prompt = "手机号码";
		t.right = 62;
		t.verticalCenter = -25;
		return t;
	};
	_proto.code_i = function () {
		var t = new eui.TextInput();
		this.code = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 46;
		t.left = 63;
		t.prompt = "验证码";
		t.verticalCenter = 51;
		t.width = 120;
		t.x = 10;
		return t;
	};
	_proto.modifybindbtn_i = function () {
		var t = new eui.Button();
		this.modifybindbtn = t;
		t.horizontalCenter = 4;
		t.label = "提交";
		t.verticalCenter = 157;
		return t;
	};
	_proto.getcodebtn_i = function () {
		var t = new eui.Button();
		this.getcodebtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.label = "获取";
		t.right = 73;
		t.verticalCenter = 51.5;
		t.width = 73;
		return t;
	};
	return $exmlClass19;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PhoneSkin.exml'] = window.$exmlClass20 = (function (_super) {
	__extends($exmlClass20, _super);
	function $exmlClass20() {
		_super.call(this);
		this.skinParts = ["back","phone","code","bindbtn","modifybindbtn","getcodebtn","tip"];
		
		this.height = 622;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this.back_i(),this.phone_i(),this.code_i(),this.bindbtn_i(),this.modifybindbtn_i(),this.getcodebtn_i(),this.tip_i()];
	}
	var _proto = $exmlClass20.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0xD8D8D8;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 121;
		t.verticalCenter = 60.5;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x45828E;
		t.height = 121;
		t.horizontalCenter = 1;
		t.left = 0;
		t.right = -2;
		t.top = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 217.33;
		t.horizontalCenter = 0.5;
		t.left = 34;
		t.right = 33;
		t.top = 151;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35;
		t.horizontalCenter = 1;
		t.left = 99;
		t.right = 97;
		t.size = 21;
		t.text = "手机绑定";
		t.textAlign = "center";
		t.top = 44;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 19;
		t.source = "back_png";
		t.top = 46;
		t.width = 31;
		return t;
	};
	_proto.phone_i = function () {
		var t = new eui.TextInput();
		this.phone = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 46;
		t.horizontalCenter = 0.5;
		t.left = 63;
		t.prompt = "手机号码";
		t.right = 62;
		t.top = 186;
		return t;
	};
	_proto.code_i = function () {
		var t = new eui.TextInput();
		this.code = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 46;
		t.left = 63;
		t.prompt = "验证码";
		t.verticalCenter = 0;
		t.width = 120;
		t.x = 10;
		return t;
	};
	_proto.bindbtn_i = function () {
		var t = new eui.Button();
		this.bindbtn = t;
		t.horizontalCenter = -79;
		t.label = "提交";
		t.verticalCenter = 117;
		return t;
	};
	_proto.modifybindbtn_i = function () {
		var t = new eui.Button();
		this.modifybindbtn = t;
		t.horizontalCenter = 82;
		t.label = "修改";
		t.verticalCenter = 117;
		return t;
	};
	_proto.getcodebtn_i = function () {
		var t = new eui.Button();
		this.getcodebtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.label = "获取";
		t.right = 73;
		t.verticalCenter = 0.5;
		t.width = 73;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 27;
		t.size = 16;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 114;
		t.x = 66;
		t.y = 234.67;
		return t;
	};
	return $exmlClass20;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankSkin.exml'] = window.skins.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	function RankSkin() {
		_super.call(this);
		this.skinParts = ["verticalScrollBar","dataList"];
		
		this.height = 244;
		this.minHeight = 20;
		this.minWidth = 20;
		this.width = 295;
		this.elementsContent = [this.verticalScrollBar_i(),this.dataList_i()];
	}
	var _proto = RankSkin.prototype;

	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.autoVisibility = false;
		t.percentHeight = 100;
		t.visible = false;
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 244;
		t.width = 295;
		t.x = 52;
		t.y = 184.19;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RealSkin.exml'] = window.$exmlClass21 = (function (_super) {
	__extends($exmlClass21, _super);
	function $exmlClass21() {
		_super.call(this);
		this.skinParts = ["back","realnick","cardcode","realbtn"];
		
		this.height = 622;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Label1_i(),this.back_i(),this.realnick_i(),this.cardcode_i(),this.realbtn_i()];
	}
	var _proto = $exmlClass21.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0xD8D8D8;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 121;
		t.verticalCenter = 60.5;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x45828E;
		t.height = 121;
		t.horizontalCenter = 1;
		t.left = 0;
		t.right = -2;
		t.top = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 217.33;
		t.horizontalCenter = 0.5;
		t.left = 34;
		t.right = 33;
		t.top = 151;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35;
		t.horizontalCenter = 1;
		t.left = 99;
		t.right = 97;
		t.size = 21;
		t.text = "实名认证";
		t.textAlign = "center";
		t.top = 44;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.left = 19;
		t.source = "back_png";
		t.top = 46;
		t.width = 31;
		return t;
	};
	_proto.realnick_i = function () {
		var t = new eui.TextInput();
		this.realnick = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 46;
		t.horizontalCenter = 0.5;
		t.left = 63;
		t.prompt = "姓名";
		t.right = 62;
		t.top = 186;
		return t;
	};
	_proto.cardcode_i = function () {
		var t = new eui.TextInput();
		this.cardcode = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 46;
		t.horizontalCenter = 0.5;
		t.left = 63;
		t.prompt = "身份证";
		t.right = 62;
		t.top = 288;
		return t;
	};
	_proto.realbtn_i = function () {
		var t = new eui.Button();
		this.realbtn = t;
		t.horizontalCenter = 0;
		t.label = "提交";
		t.verticalCenter = 117;
		return t;
	};
	return $exmlClass21;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.autoVisibility = false;
		t.bottom = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.autoVisibility = false;
		t.percentHeight = 100;
		t.right = 0;
		t.visible = false;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SetupSkin.exml'] = window.$exmlClass22 = (function (_super) {
	__extends($exmlClass22, _super);
	function $exmlClass22() {
		_super.call(this);
		this.skinParts = ["portrait","portraitMask","nickname","realbtn","phonebtn","setupbtn","id"];
		
		this.height = 622;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this.portrait_i(),this.portraitMask_i(),this._Label1_i(),this.nickname_i(),this._Rect2_i(),this.realbtn_i(),this._Image1_i(),this._Label2_i(),this._Image2_i(),this.phonebtn_i(),this._Image3_i(),this._Label3_i(),this._Image4_i(),this.setupbtn_i(),this._Image5_i(),this._Label4_i(),this._Image6_i(),this.id_i()];
		
		eui.Binding.$bindProperties(this, ["portraitMask"],[0],this.portrait,"mask");
		eui.Binding.$bindProperties(this, ["hostComponent.realcheckMask"],[0],this._Image1,"mask");
		eui.Binding.$bindProperties(this, ["hostComponent.bindphoneMask"],[0],this._Image3,"mask");
		eui.Binding.$bindProperties(this, ["hostComponent.setupMask"],[0],this._Image5,"mask");
	}
	var _proto = $exmlClass22.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x45828E;
		t.height = 161;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = -28;
		t.verticalCenter = -258.5;
		return t;
	};
	_proto.portrait_i = function () {
		var t = new eui.Image();
		this.portrait = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "";
		t.width = 80;
		t.x = 35;
		t.y = 29;
		return t;
	};
	_proto.portraitMask_i = function () {
		var t = new eui.Rect();
		this.portraitMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0x0000FF;
		t.height = 80;
		t.left = 35;
		t.top = 29;
		t.width = 80;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 28;
		t.left = 125;
		t.size = 18;
		t.text = "ID:";
		t.textAlign = "center";
		t.top = 39;
		t.verticalAlign = "middle";
		t.width = 39;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 31;
		t.left = 133;
		t.size = 18;
		t.text = "nickname";
		t.textAlign = "left";
		t.top = 69;
		t.verticalAlign = "middle";
		t.width = 86;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -18;
		t.fillColor = 0xd8d8d8;
		t.height = 507;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 75.5;
		return t;
	};
	_proto.realbtn_i = function () {
		var t = new eui.Rect();
		this.realbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.fillColor = 0xffffff;
		t.height = 56;
		t.horizontalCenter = 0;
		t.left = 12;
		t.right = 12;
		t.verticalCenter = -134;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.left = 32;
		t.source = "realcheck_png";
		t.verticalCenter = -134.5;
		t.width = 44;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 33;
		t.left = 91;
		t.size = 14;
		t.text = "实名认证";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -133.5;
		t.width = 84;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.right = 25;
		t.source = "arrow_forward_png";
		t.verticalCenter = -134;
		t.width = 28;
		return t;
	};
	_proto.phonebtn_i = function () {
		var t = new eui.Rect();
		this.phonebtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.fillColor = 0xFFFFFF;
		t.height = 56;
		t.horizontalCenter = 0;
		t.left = 12;
		t.right = 12;
		t.verticalCenter = -59;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.left = 32;
		t.source = "phone_png";
		t.verticalCenter = -59.5;
		t.width = 44;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 33;
		t.left = 91;
		t.size = 14;
		t.text = "手机绑定";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -58.5;
		t.width = 84;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.right = 25;
		t.source = "arrow_forward_png";
		t.verticalCenter = -59;
		t.width = 28;
		return t;
	};
	_proto.setupbtn_i = function () {
		var t = new eui.Rect();
		this.setupbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.fillColor = 0xFFFFFF;
		t.height = 56;
		t.horizontalCenter = 0;
		t.left = 12;
		t.right = 12;
		t.verticalCenter = 16;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.left = 32;
		t.source = "settings_png";
		t.verticalCenter = 14.5;
		t.width = 44;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 33;
		t.left = 91;
		t.size = 14;
		t.text = "设置";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 15.5;
		t.width = 84;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.right = 25;
		t.source = "arrow_forward_png";
		t.verticalCenter = 15;
		t.width = 28;
		return t;
	};
	_proto.id_i = function () {
		var t = new eui.Label();
		this.id = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "FangSong";
		t.size = 18;
		t.text = "id";
		t.width = 76.5;
		t.x = 166;
		t.y = 44;
		return t;
	};
	return $exmlClass22;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TabbarCell.exml'] = window.$exmlClass23 = (function (_super) {
	__extends($exmlClass23, _super);
	function $exmlClass23() {
		_super.call(this);
		this.skinParts = ["img_rect","img_res","img_text"];
		
		this.height = 47;
		this.width = 38;
		this.elementsContent = [this.img_rect_i(),this.img_res_i(),this.img_text_i()];
	}
	var _proto = $exmlClass23.prototype;

	_proto.img_rect_i = function () {
		var t = new eui.Rect();
		this.img_rect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.top = 0;
		return t;
	};
	_proto.img_res_i = function () {
		var t = new eui.Image();
		this.img_res = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 77.5;
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "game_png";
		t.top = 20;
		t.width = 90;
		return t;
	};
	_proto.img_text_i = function () {
		var t = new eui.EditableText();
		this.img_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = "0";
		t.fontFamily = "SimHei";
		t.height = 22;
		t.horizontalCenter = "-0.5";
		t.right = "2";
		t.size = 12;
		t.text = "游 戏";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 35;
		return t;
	};
	return $exmlClass23;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x8c8c8c;
		t.percentHeight = 100;
		t.strokeColor = 0x000000;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/WalletSkin.exml'] = window.$exmlClass24 = (function (_super) {
	__extends($exmlClass24, _super);
	function $exmlClass24() {
		_super.call(this);
		this.skinParts = ["total","money","getouttotal","remainsee","getoutrecordbtn","adrecordbtn","getoutbtn"];
		
		this.height = 622;
		this.width = 358;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label1_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Label2_i(),this._Rect6_i(),this._Rect7_i(),this.total_i(),this.money_i(),this.getouttotal_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this.remainsee_i(),this._Label6_i(),this.getoutrecordbtn_i(),this.adrecordbtn_i(),this.getoutbtn_i()];
	}
	var _proto = $exmlClass24.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x45828E;
		t.height = 57;
		t.horizontalCenter = 0.835000000000008;
		t.left = 0;
		t.right = -1.670000000000016;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -1.330000000000041;
		t.fillColor = 0xB7B7B7;
		t.horizontalCenter = 0.835000000000008;
		t.left = 0;
		t.right = -1.670000000000016;
		t.top = 57;
		t.verticalCenter = 29.16500000000002;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35;
		t.horizontalCenter = 0.835000000000008;
		t.left = 99;
		t.right = 97.32999999999998;
		t.size = 21;
		t.text = "收益详情";
		t.textAlign = "center";
		t.top = 22;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 250;
		t.horizontalCenter = 1;
		t.left = 9;
		t.right = 7;
		t.top = 108;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xC1C1C1;
		t.height = 1;
		t.horizontalCenter = 2;
		t.left = 20;
		t.right = 16;
		t.strokeColor = 0x444444;
		t.top = 159;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xC1C1C1;
		t.height = 1;
		t.horizontalCenter = 2;
		t.left = 20;
		t.right = 16;
		t.strokeColor = 0x444444;
		t.top = 295;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 37;
		t.left = 25;
		t.size = 25;
		t.text = "钱包";
		t.textAlign = "left";
		t.textColor = 0x5365AA;
		t.top = 118;
		t.verticalAlign = "middle";
		t.width = 59;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xC1C1C1;
		t.height = 112;
		t.left = 135;
		t.strokeColor = 0x444444;
		t.top = 175;
		t.width = 1;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xC1C1C1;
		t.height = 112;
		t.right = 135;
		t.strokeColor = 0x444444;
		t.top = 175;
		t.width = 1;
		return t;
	};
	_proto.total_i = function () {
		var t = new eui.Label();
		this.total = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.left = 25;
		t.size = 19;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 175;
		t.verticalAlign = "middle";
		t.width = 88;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.horizontalCenter = 4;
		t.size = 19;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 175;
		t.verticalAlign = "middle";
		t.width = 97;
		return t;
	};
	_proto.getouttotal_i = function () {
		var t = new eui.Label();
		this.getouttotal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.right = 25;
		t.size = 19;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 175;
		t.verticalAlign = "middle";
		t.width = 86;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 19;
		t.left = 25;
		t.size = 13;
		t.text = "总收益(元)";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 267;
		t.verticalAlign = "middle";
		t.width = 88;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 19;
		t.horizontalCenter = 4;
		t.size = 13;
		t.text = "当前账户余额(元)";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 267;
		t.verticalAlign = "middle";
		t.width = 104;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 18;
		t.right = 23;
		t.size = 13;
		t.text = "总提现金额(元)";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 267;
		t.verticalAlign = "middle";
		t.width = 98;
		return t;
	};
	_proto.remainsee_i = function () {
		var t = new eui.Label();
		this.remainsee = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.right = 77;
		t.size = 15;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 312;
		t.verticalAlign = "middle";
		t.width = 41;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35;
		t.left = 47;
		t.size = 15;
		t.text = "当天剩余有收益广告次数：";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 312;
		t.verticalAlign = "middle";
		t.width = 195;
		return t;
	};
	_proto.getoutrecordbtn_i = function () {
		var t = new eui.Button();
		this.getoutrecordbtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 159;
		t.enabled = true;
		t.label = "提现记录";
		t.left = 25;
		t.width = 160;
		return t;
	};
	_proto.adrecordbtn_i = function () {
		var t = new eui.Button();
		this.adrecordbtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 159;
		t.label = "收益记录";
		t.right = 25;
		t.width = 160;
		return t;
	};
	_proto.getoutbtn_i = function () {
		var t = new eui.Button();
		this.getoutbtn = t;
		t.anchorOffsetX = 0;
		t.bottom = 86;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "提现";
		t.left = 20;
		t.right = 20;
		return t;
	};
	return $exmlClass24;
})(eui.Skin);