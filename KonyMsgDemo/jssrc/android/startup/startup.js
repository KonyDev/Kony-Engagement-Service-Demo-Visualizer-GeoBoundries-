//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "kmsapp1",
    appName: "KMSDemo",
    appVersion: "2.0.0",
    isDebug: true,
    isMFApp: false,
    eventTypes: [],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

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
kony.visualizer.actions.postAppInitCallBack = function(eventObj) {
    return kmsapppostappinit(eventObj);
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        preappinit: kmsapppreappinit,
        postappinit: kony.visualizer.actions.postAppInitCallBack,
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
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_WindowsOfflineObjects"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;