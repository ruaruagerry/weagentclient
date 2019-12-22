const rootUrl = "http://127.0.0.1:3003"

module API {
    /* ----------------- auth ---------------- */
    export var ApiAuthLogin = rootUrl + "/auth/login"

    /* ----------------- phone ---------------- */
    export var ApiPhoneEntrance = rootUrl + "/phone/entrance"
    export var ApiPhoneGetCode = rootUrl + "/phone/getcode"
    export var ApiPhoneBind = rootUrl + "/phone/bind"

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
}