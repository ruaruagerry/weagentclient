/*
 * @Author: your name
 * @Date: 2019-12-23 12:12:04
 * @LastEditTime : 2019-12-27 16:46:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weagentclient\kunai\src\api\api.ts
 */

const version = "1.0.1"
const rootUrl = "http://127.0.0.1:3003"

module API {
    /* ----------------- auth ---------------- */
    export var ApiAuthWxLogin = rootUrl + "/auth/wxlogin"
    export var ApiAuthTestLogin = rootUrl + "/auth/testlogin"

    /* ----------------- phone ---------------- */
    export var ApiPhoneEntrance = rootUrl + "/phone/entrance"
    export var ApiPhoneGetCode = rootUrl + "/phone/getcode"
    export var ApiPhoneBind = rootUrl + "/phone/bind"
    export var ApiPhoneModifyBind = rootUrl + "/phone/modifybind"

    /* ----------------- setup ---------------- */
    export var ApiSetupRealGet = rootUrl + "/setup/real/get"
    export var ApiSetupRealModify = rootUrl + "/setup/real/modify"

    /* ----------------- money ---------------- */
    export var ApiMoneyAdSee = rootUrl + "/money/ad/see"
    export var ApiMoneyAdClick = rootUrl + "/money/ad/click"
    export var ApiMoneyAdRecord = rootUrl + "/money/ad/record"
    export var ApiMoneyEntrance = rootUrl + "/money/entrance"
    export var ApiMoneyGetoutRecord = rootUrl + "/money/getout/record"
    export var ApiMoneyGetoutApply = rootUrl + "/money/getout/apply"

    /* ----------------- data ---------------- */
    export var ApiDataEntrance = rootUrl + "/data/entrance"

    /* ----------------- game ---------------- */
    export var ApiGameRebirthUse = rootUrl + "/game/rebirth/use"
    export var ApiGameScoreUpdate = rootUrl + "/game/score/update"
    export var ApiGameScoreRank = rootUrl + "/game/score/rank"

}