//actions.js file 
function AS_Button_bc85595f24bd43e0af7a39e8aadda3c4(eventobject) {
    this.touchCancelAction();
}

function AS_Button_d06dd8aa54a846a7866d73b869fa9829(eventobject) {
    this.touchEnableAction();
}

function AS_Button_deaad3576fdd45dfb7bd4cea5907d98c(eventobject) {
    this.invokeButtonClick();
}

function AS_Button_fe871ac9bd194551b75bf1f10044f309(eventobject) {
    this.cancelTouchID();
}

function AS_FlexContainer_0565b74578ed4af8ba232bf0cd2b9541(eventobject) {
    this.invokeTouchID();
}

function AS_FlexContainer_40857fa09bd74ab296b13260a335a8c6(eventobject) {
    this.remembermeSelection();
}

function AS_FlexContainer_a577f20bc92e4174a07871e987f1aa3d(eventobject) {
    if (this.view.lblPassword.top == "23%") {
        this.view.flxLblPassword.isVisible = false;
        this.invokeTouch(this.view.lblPassword, "16%");
    }
    this.view.forceLayout();
}

function AS_FlexContainer_b5222b09fbad45b59f22fead2d5f5c1c(eventobject) {
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("reusableGoogleLogin");
}

function AS_FlexContainer_c1889801e50245af819017fdb980bed6(eventobject) {
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("reusableFacebookLogin");
}

function AS_FlexContainer_c456c5f9c50e4ba8b9897794f2d70232(eventobject) {
    if (this.view.lblUsername.top == "6%") {
        this.view.flxLblUsername.isVisible = false;
        this.invokeTouch(this.view.lblUsername, "-1%");
    }
    this.view.forceLayout();
}

function AS_FlexContainer_c86710f8599b4a1f8ef335ad57a4a707(eventobject) {
    this.view.flxIdentity.isVisible = false;
    this.view.brwsrIdentity.htmlString = "<html>Please wait !!</html>"
}

function AS_FlexContainer_e0ccf673175e48308c705f8f7b27ba5e(eventobject) {
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("reusableOffice365Login");
}

function AS_FlexContainer_ia857350c99f4ec4b9646fc5da3a88f6(eventobject) {
    kony.store.setItem("inputType", "social");
    this.invokeIdentityService("reusableLinkedinLogin");
}

function AS_TextField_35916db09d234cef9beb1541afb1fd67(eventobject, changedtext) {
    this.onDoneCredentials(this.view.lblPassword);
}

function AS_TextField_f2a98e0e28fa4cf7ab5090e88380bb66(eventobject, changedtext) {
    //this.onDoneCredentials(this.view.lblUsername);
    this.validateUsername();
}

function AS_Button_054011ab838e416bb8c2dac3b80c3f86(eventobject) {
    return pushRegistration.call(this);
}

function AS_Button_8490bc4cb2a54fc087c9cc1a99bdd195(eventobject) {
    return pushRegistration.call(this);
}

function AS_Button_a58fe8f0e0aa4b84b7c81e86b0e99294(eventobject) {
    if (frmGeoLocations.btnMap.text == "Map") {
        frmGeoLocations.segLocations.isVisible = false;
        frmGeoLocations.mapLocations.isVisible = true;
        frmGeoLocations.btnMap.text = "List";
    } else {
        frmGeoLocations.segLocations.isVisible = true;
        frmGeoLocations.mapLocations.isVisible = false;
        frmGeoLocations.btnMap.text = "Map";
    }
}

function AS_Button_cb3f0f7adbac4a0aa91ea8fee43848ce(eventobject) {
    var prevForm = kony.application.getPreviousForm();
    prevForm.show();
}

function AS_Button_fde30cd5d3d749e989b0623c9a3c3c5c(eventobject) {
    frmTrigerPush.show();
}

function AS_Button_g4db433b09be4f05a7ac932c8737e957(eventobject) {
    var tags = frmFilters.txtTags.text;
    // if(tags==="" || tags === null)
    //   tags="";
    // else
    //   tags = tags.split(",");
    alert(tags);
    alert(frmFilters.listDistance.selectedKey);
    registerGeoBoundary(frmFilters.listDistance.selectedKey, tags);
}

function AS_Button_hf937154ad8d413b9216e38d6658a844(eventobject) {
    var prevForm = kony.application.getPreviousForm();
    prevForm.show();
}

function AS_Button_if07653b5a5643cd8a8628ae3365998c(eventobject) {
    var prevForm = kony.application.getPreviousForm();
    prevForm.show();
}

function AS_Form_0dbd82e8de294f0db00405898c49ea0a(eventobject) {
    //frmUrl.txtBoxUrl.text="";
    //frmUrl.txtBoxAppId.text="";
    //frmUrl.txtBoxSenderID.text="";
    firstRegister = true;
}

function AS_Form_7f2e95aecefe4dd2bb10f01e5f358be4(eventobject) {}

function AS_Form_b0ee0c21c69a496b845df4961ce931e9(eventobject) {
    startGeoBOunds();
}

function AS_Form_bd1d28b201764f7ea607778f5b4b10af(eventobject, neworientation) {
    kony.print("--on Device Back Clicked---");
}

function AS_Form_e07a15740d4642a3acf578df7beeced8(eventobject) {
    return testsample.call(this);
}

function AS_Form_f583008c69604bdeb7aaf1026c2d3b34(eventobject) {
    frmFilters.lblLocationText.text = frmGeoLocations.lblSearchLocation.text;
    frmFilters.lblLatitudeText.text = lat;
    frmFilters.lblLongitudeText.text = lon;
}

function AS_Form_fb28f3ac962e4877bd891230933fa271(eventobject) {
    frmGeoLocations.btnMap.text = "Map";
    frmGeoLocations.segLocations.isVisible = true;
    frmGeoLocations.mapLocations.isVisible = false;
}

function AS_Label_84f74b6b79c041408d1040a98c773ec6(eventobject, x, y) {
    kony.application.openURL("http://www.kony.com/trials");
}

function AS_Label_f957d34a0f1c4ae9be17e6d8e1bf606c(eventobject, x, y) {
    frmFilters.show();
}

function AS_Segment_a6dbaa63732f4dabbe1139dc2eac3828(eventobject, sectionNumber, rowNumber) {
    onSegRowClick();
}

function AS_Segment_ad924502fe9c406ca681df3e80eb06cb(eventobject, sectionNumber, rowNumber) {
    onSeggestionSegRowClick();
}

function AS_Segment_f83ad92a00ef4fb4a2b3ce6792524f10(eventobject, sectionNumber, rowNumber) {
    onSegRowClick();
}

function AS_TextField_b33d7d16be894e7ca056c9cd99f6b9b9(eventobject, changedtext) {
    suggestLocation();
}

function AS_TitleBar_7a3353e61d5f4c7c8bd23efd8373487e(eventobject) {}

function kmsapppostappinit(params) {
    return
}

function kmsapppreappinit(params) {
    return
}

function p2kwiet428023489458_btnReload_onClick_seq0(eventobject) {
    return reloadCOntent.call(this);
}

function p2kwiet428023489469_btnSubmitProfile_onClick_seq0(eventobject) {
    return triggerEvent.call(this);
}

function p2kwiet428023489469_frmEvent_preshow_seq0(eventobject, neworientation) {
    frmEvent.lblInfo2.setVisibility(false);
}

function p2kwiet428023489469_txtBoxEventId_onTextChange_seq0(eventobject, changedtext) {
    frmEvent.lblInfo2.setVisibility(false);
}

function p2kwiet428023489493_button158654807166987_onClick_seq0(eventobject) {
    return locate_iBeacons.call(this);
}

function p2kwiet428023489493_button214054342124383_onClick_seq0(eventobject) {
    frmSetting.show();
}

function p2kwiet428023489493_vbox15865480716587_onClick_seq0(eventobject) {
    return getGeoLocations.call(this);
}

function p2kwiet428023489493_vbox214054342110889_onClick_seq0(eventobject) {
    frmProfile.show();
}

function p2kwiet428023489493_vbox214054342112105_onClick_seq0(eventobject) {
    frmPreference.show();
}

function p2kwiet428023489493_vbox214054342115915_onClick_seq0(eventobject) {
    frmEvent.show();
}

function p2kwiet428023489501_frmOption_postshow_seq0(eventobject, neworientation) {
    return showOptionPopUp.call(this);
}

function p2kwiet428023489520_btnSubmitProfile_onClick_seq0(eventobject) {
    return preferences.call(this);
}

function p2kwiet428023489520_frmPreference_preshow_seq0(eventobject, neworientation) {
    return setpreferences.call(this);
}

function p2kwiet428023489545_btnSubmitProfile_onClick_seq0(eventobject) {
    return updatePushSubscription.call(this);
}

function p2kwiet428023489545_frmProfile_init_seq0(eventobject, neworientation) {
    return countryName.call(this);
}

function p2kwiet428023489545_frmProfile_postshow_seq0(eventobject, neworientation) {}

function p2kwiet428023489545_frmProfile_preshow_seq0(eventobject, neworientation) {
    return frmProfilePreShow.call(this);
}

function p2kwiet428023489545_listbox5316540885527_onSelection_seq0(eventobject) {
    selectedCountry = frmProfile.listbox5316540885527.selectedKeyValue[1];
    if (selectedCountry == "United States") {
        frmProfile.lstboxStates.placeholder = "Select State";
        frmProfile.lstboxStates.setVisibility(true);
        frmProfile.lineState.setVisibility(true);
    } else {
        frmProfile.lstboxStates.setVisibility(false);
        frmProfile.lineState.setVisibility(false);
        selectedState = "";
    }
}

function p2kwiet428023489545_lstboxStates_onSelection_seq0(eventobject) {
    selectedState = frmProfile.lstboxStates.selectedKeyValue[1];
    //alert(selectedState);
}

function p2kwiet428023489565_btnReset_onClick_seq0(eventobject) {
    return resetDemo.call(this);
}

function p2kwiet428023489565_btnSubmitProfile_onClick_seq0(eventobject) {
    return resetback.call(this);
}

function p2kwiet428023489565_frmSetting_preshow_seq0(eventobject, neworientation) {
    frmSetting.txtBoxurl.text = KMSPROP.kmsServerUrl;
    frmSetting.txtBoxAppId.text = KMSPROP.appId;
    frmSetting.txtBoxSenderID.text = KMSPROP.senderID;
}

function p2kwiet428023489565_txtBoxurl1_onTextChange_seq0(eventobject, changedtext) {
    frmSetting.txtBoxurl.text = "https://mycompany.messaging. konycloud.com";
}

function p2kwiet428023489589_btnSubmitProfile_onClick_seq0(eventobject) {
    return pushRegistration.call(this);
}

function p2kwiet428023489589_frmUrl_preshow_seq0(eventobject, neworientation) {
    frmUrl.txtBoxUrl.text = "";
    frmUrl.txtBoxAppId.text = "";
    frmUrl.txtBoxSenderID.text = "";
    firstRegister = true;
}

function p2kwiet428023489589_linkAccount_onClick_seq0(eventobject) {
    kony.application.openURL("http://www.kony.com/trials");
}

function p2kwiet428023489603_btnCancel_onClick_seq0(eventobject) {
    return negativeSelection.call(this);
}

function p2kwiet428023489603_btnProceed_onClick_seq0(eventobject) {
    return positiveSelection.call(this);
}

function p2kwiet428023489568_resetback_titlebarAction(eventobject) {
    return resetback.call(this);
}