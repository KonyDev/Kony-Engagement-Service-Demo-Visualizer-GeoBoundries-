function addWidgetsfrmGeoLocations() {
    frmGeoLocations.setDefaultUnit(kony.flex.DP);
    var flxMainLocations = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMainLocations",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0aae7775511c841",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMainLocations.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "height": "8%",
        "id": "lblHeader",
        "isVisible": false,
        "left": "0%",
        "skin": "CopyslLabel0a439e0e0f3cf43",
        "text": "Geo Boundaries",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var flxFilter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxFilter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFilter.setDefaultUnit(kony.flex.DP);
    var lblFilter = new kony.ui.Label({
        "height": "100%",
        "id": "lblFilter",
        "isVisible": false,
        "left": "0%",
        "skin": "CopyslLabel0jd18a52193544f",
        "text": " Filters",
        "top": "0%",
        "width": "18%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtSearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtSearch",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "18%",
        "placeholder": "Current Location",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0ca59e357cbd940",
        "text": "Current Location",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "65%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnMap = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0cf662905902449",
        "height": "100%",
        "id": "btnMap",
        "isVisible": true,
        "left": "83.03%",
        "onClick": AS_Button_a58fe8f0e0aa4b84b7c81e86b0e99294,
        "skin": "CopyslButtonGlossBlue0d6e9ed6d880d4e",
        "text": "Map",
        "top": "-0.23%",
        "width": "17%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var lblSearchLocation = new kony.ui.Label({
        "height": "45%",
        "id": "lblSearchLocation",
        "isVisible": true,
        "left": "18%",
        "maxNumberOfLines": 1,
        "onTouchStart": AS_Label_f957d34a0f1c4ae9be17e6d8e1bf606c,
        "skin": "CopyslLabel0f4dc80dc86c34b",
        "text": "Current Location",
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "50%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopylblSearchLocation0gc1b2d80664d4e = new kony.ui.Label({
        "height": "50%",
        "id": "CopylblSearchLocation0gc1b2d80664d4e",
        "isVisible": true,
        "left": "18%",
        "maxNumberOfLines": 1,
        "onTouchStart": AS_Label_f957d34a0f1c4ae9be17e6d8e1bf606c,
        "skin": "CopyslLabel0bf93f7f4dbf74d",
        "text": "Geo Boundaries",
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "0%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxFilter.add(lblFilter, txtSearch, btnMap, lblSearchLocation, CopylblSearchLocation0gc1b2d80664d4e);
    var btnBack = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0a256cfebffe144",
        "height": "10%",
        "id": "btnBack",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_if07653b5a5643cd8a8628ae3365998c,
        "skin": "CopyslButtonGlossBlue0f9d7ea5ba42146",
        "text": "< Back",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var flxSeg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxSeg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0fe7829f837584d",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSeg.setDefaultUnit(kony.flex.DP);
    var segLocations = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "img": "loc.png",
            "lblCount": "1",
            "lblDist": "2 Mi",
            "lblName": "Victoria"
        }, {
            "img": "loc.png",
            "lblCount": "2",
            "lblDist": "2 Mi",
            "lblName": "Victoria"
        }, {
            "img": "loc.png",
            "lblCount": "3",
            "lblDist": "2 Mi",
            "lblName": "Victoria"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segLocations",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_f83ad92a00ef4fb4a2b3ce6792524f10,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": rowLocation,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "cccccc00",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "img": "img",
            "lblCount": "lblCount",
            "lblDist": "lblDist",
            "lblName": "lblName",
            "rowLocation": "rowLocation"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    flxSeg.add(segLocations);
    var mapLocations = new kony.ui.Map({
        "calloutWidth": 80,
        "defaultPinImage": "pinb.png",
        "height": "90%",
        "id": "mapLocations",
        "isVisible": false,
        "left": "0%",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
        "zoomLevel": 4
    });
    flxMainLocations.add(lblHeader, flxFilter, btnBack, flxSeg, mapLocations);
    frmGeoLocations.add(flxMainLocations);
};

function frmGeoLocationsGlobals() {
    frmGeoLocations = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmGeoLocations,
        "enabledForIdleTimeout": false,
        "id": "frmGeoLocations",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_fb28f3ac962e4877bd891230933fa271,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};