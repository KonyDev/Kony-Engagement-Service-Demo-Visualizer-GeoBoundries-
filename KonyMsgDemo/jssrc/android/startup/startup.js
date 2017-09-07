//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "kmsapp1",
    appName: "KMSDemo",
    appVersion: "2.0.0",
    platformVersion: null,
    serverIp: "10.10.12.145",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "kmsapp1",
    isturlbase: "https://mobilefabric-demo.konycloud.com/services",
    isMFApp: true,
    appKey: "c83482247bbc6c3b37219779d3919f29",
    appSecret: "441ad05519c27981a6f67118dc8b9a74",
    serviceUrl: "https://100003520.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "3cc5b1e8-576d-4b8d-ad97-e55d765a0b8b",
        "baseId": "e9828dee-16cb-4e60-a461-a98f7520ae6f",
        "name": "KonyMsgDemo",
        "selflink": "https://100003520.auth.konycloud.com/appconfig",
        "reportingsvc": {
            "custom": "https://mobilefabric-demo.konycloud.com/services/CMS",
            "session": "https://mobilefabric-demo.konycloud.com/services/IST"
        },
        "services_meta": {}
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: [],
    url: "https://mobilefabric-demo.konycloud.com/kmsapp1/MWServlet",
    secureurl: "https://mobilefabric-demo.konycloud.com/kmsapp1/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeMVCTemplates();
    initializeUserWidgets();
    initializetmpLocations();
    initializetmpSuggest();
    frmBrowserGlobals();
    frmDetailsGlobals();
    frmEventGlobals();
    frmFiltersGlobals();
    frmGeoLocationsGlobals();
    frmHomeGlobals();
    frmOptionGlobals();
    frmPreferenceGlobals();
    frmProfileGlobals();
    frmSettingGlobals();
    frmUrlGlobals();
    frmUrl2Globals();
    optionPopupGlobals();
    Popup0fdec1725e93e4eGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        preappinit: kmsapppreappinit,
        init: appInit,
        postappinit: kmsapppostappinit,
        showstartupform: function() {
            frmUrl.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_com_kony"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};