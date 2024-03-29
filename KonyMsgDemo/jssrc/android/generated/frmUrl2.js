function addWidgetsfrmUrl2() {
    var lblInfo = new kony.ui.Label({
        "id": "lblInfo",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Welcome to the Kony Engagement demo app.     To get started,please provide the URL to your Kony Engagement service."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 5, 2, 1],
        "marginInPixel": false,
        "padding": [1, 1, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblUrlEg = new kony.ui.Label({
        "id": "lblUrlEg",
        "isVisible": true,
        "skin": "sknLblKonyThemeSmallFont",
        "text": "(example:https://mycompany.messaging.konycloud.com)"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 0, 1, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var line214054342142757 = new kony.ui.Line({
        "id": "line214054342142757",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 5, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var hbox35769663518924 = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbox35769663518924",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label35769663518927 = new kony.ui.Label({
        "id": "label35769663518927",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Url :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtBoxUrl = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxUrl",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "e.g : https://demo.messaging.konycloud.com",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbox35769663518924.add(label35769663518927, txtBoxUrl);
    var CopylblUrlEg01e24a3944f5443 = new kony.ui.Label({
        "id": "CopylblUrlEg01e24a3944f5443",
        "isVisible": true,
        "skin": "sknLblKonyThemeSmallFont",
        "text": "(example:https://mycompany.messaging.konycloud.com)"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [2, 0, 1, 0],
        "marginInPixel": false,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var hbxAppId = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbxAppId",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label4152904429982 = new kony.ui.Label({
        "id": "label4152904429982",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Application ID :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtBoxAppId = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxAppId",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "e.g :11233-232423",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbxAppId.add(label4152904429982, txtBoxAppId);
    var hbox41529044210924 = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbox41529044210924",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label41529044210927 = new kony.ui.Label({
        "id": "label41529044210927",
        "isVisible": true,
        "skin": "sknLblKonyThemeNormal",
        "text": "Sender ID :"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtBoxSenderID = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTbxKonyThemeLogin",
        "id": "txtBoxSenderID",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "e.g :4545454543",
        "secureTextEntry": false,
        "skin": "sknTbxKonyThemeLogin",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [2, 3, 0, 3],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknTbxKonyThemeLogin",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbox41529044210924.add(label41529044210927, txtBoxSenderID);
    var lblInfo2 = new kony.ui.Label({
        "id": "lblInfo2",
        "isVisible": true,
        "skin": "sknLblKonyThemeSmallFont",
        "text": "If you don't have access to Kony Engagement.you can create"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 1, 1, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var hboxHeader = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hboxHeader",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_HEADER,
        "skin": "sknHbxKonyThemeHeader"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label158654807140518 = new kony.ui.Label({
        "id": "label158654807140518",
        "isVisible": true,
        "skin": "sknLblKonyThemeAppHeader",
        "text": "Demo App Settings"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    hboxHeader.add(label158654807140518);
    var hbox21405434215921 = new kony.ui.Box({
        "focusSkin": "sknHbxKonyThemeTransparent",
        "id": "hbox21405434215921",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_FOOTER,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnSubmitProfile = new kony.ui.Button({
        "focusSkin": "sknBtnKonyThemeNormal",
        "id": "btnSubmitProfile",
        "isVisible": true,
        "onClick": p2kwiet428023489589_btnSubmitProfile_onClick_seq0,
        "skin": "sknBtnKonyThemeNormal",
        "text": "DONE"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox21405434215921.add(btnSubmitProfile);
    var hbxInfo = new kony.ui.Box({
        "focusSkin": "hbxWhite",
        "id": "hbxInfo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknHbxKonyThemeTransparent"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var lblInfo3 = new kony.ui.Label({
        "id": "lblInfo3",
        "isVisible": true,
        "skin": "sknLblKonyThemeSmallFont",
        "text": "a trial of MobileFabric at"
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var linkAccount = new kony.ui.Link({
        "id": "linkAccount",
        "isVisible": true,
        "onClick": p2kwiet428023489589_linkAccount_onClick_seq0,
        "skin": "sknLinkKonyThemeTransparent",
        "text": "kony.com/trial"
    }, {
        "containerWeight": 66,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT
    }, {});
    hbxInfo.add(lblInfo3, linkAccount);
    frmUrl2.add(lblInfo, lblUrlEg, line214054342142757, hbox35769663518924, CopylblUrlEg01e24a3944f5443, hbxAppId, hbox41529044210924, lblInfo2, hboxHeader, hbox21405434215921, hbxInfo);
};

function frmUrl2Globals() {
    frmUrl2 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUrl2,
        "enabledForIdleTimeout": false,
        "id": "frmUrl2",
        "needAppMenu": true,
        "preShow": function(eventobject) {
            p2kwiet428023489589_frmUrl_preshow_seq0(eventobject);
        },
        "skin": "sknKonyThemeForm",
        "title": "Demo App Settings"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "sknTitleKonyTheme",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};