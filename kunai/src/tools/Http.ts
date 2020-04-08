
/**
* 网络公共类
* Http.requestInterceptor     请求拦截钩子
* Http.responseInterceptor    响应拦截钩子
* Http.get
* Http.post
* Http.request
*/
class Http {
    public static utf8_decode(utftext) { // utf-8解码
        var string = '';
        let i = 0;
        let c = 0;
        let c1 = 0;
        let c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c1 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
                i += 2;
            } else {
                c1 = utftext.charCodeAt(i + 1);
                c2 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
                i += 3;
            }
        }
        return string;
    }

    public static bas64_decode(input) { // 解码，配合decodeURIComponent使用
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
    }

    //钩子函数，推荐在main.ts初始化，可覆盖
    public static requestInterceptor(request) {
        return request;
    };

    public static responseInterceptor(response) {
        return response;
    };

    public static get(obj: any, linkurl: string, data: Object = null) {
        return this.request(obj, linkurl, data, egret.HttpMethod.GET)
    }

    public static post(obj: any, linkurl: string, data: Object) {
        return this.request(obj, linkurl, data, egret.HttpMethod.POST)
    }

    public static request(obj: any, linkurl: string, data: Object, type: string = egret.HttpMethod.POST) {
        Loading.showLoading(obj)
        return new Promise((resolve, reject) => {
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.setRequestHeader("Session", egret.localStorage.getItem("Session") || '');
            if (this.requestInterceptor && typeof this.requestInterceptor === 'function') {
                request = this.requestInterceptor(request)
            }
            switch (type) {
                case egret.HttpMethod.POST:
                    request.open(linkurl, type);
                    request.send(this.formatData(data, type));
                    break;
                case egret.HttpMethod.GET:
                    request.open(linkurl + this.formatData(data, type), type);
                    request.send();
                    break;
            }
            request.addEventListener(egret.Event.COMPLETE, onComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, onIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, onProgress, this);


            function onComplete(event: egret.Event) {
                Loading.hidLoading(obj)
                var request = <egret.HttpRequest>event.currentTarget;
                var Datas = JSON.parse(request.response);
                if (this.responseInterceptor && typeof this.responseInterceptor === 'function') {
                    Datas = this.responseInterceptor(Datas)
                }
                switch (Datas.result) {
                    case 0:
                        if (Datas.data != undefined) {
                            Datas.data = this.bas64_decode(Datas.data)
                            Datas.data = JSON.parse(Datas.data)
                        }
                        resolve(Datas.data);
                        break;
                    default:
                        Msg.showMsg(obj, Datas.msg)
                        reject(Datas);
                        break;
                }
            }
            function onIOError(event: egret.IOErrorEvent): void {
                //再次重新请求
                setTimerS(event)
            }
            function onProgress(event: egret.ProgressEvent): void {
                //console.log("request progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
            }
            var TimerConut = 0;
            function setTimerS(event: egret.IOErrorEvent) {
                TimerConut++;
                if (TimerConut < 3) {
                    request.responseType = egret.HttpResponseType.TEXT;
                    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                    request.open(linkurl, type);
                    request.send(data);
                } else {
                    Loading.hidLoading(obj)
                    Msg.showMsg(obj, "温馨提示, 网络出错！");
                    return reject(event);
                }
            }
        }).catch(err => {
            console.error(err);
        })
    }

    private static formatData(data: Object, type: string): string {
        let params: string = '';
        if (data != null) {
            for (let key of Object.keys(data)) {
                if (params.length > 0) {
                    params = `${params}&`
                }
                params += `${key}=${data[key]}`
            }
            switch (type) {
                case egret.HttpMethod.POST:
                    params = JSON.stringify(data);//json時启用
                    break;
                case egret.HttpMethod.GET:
                    if (params.length > 0)
                        params = `?${params}`
                    break;
            }
        }

        return params
    }
}
