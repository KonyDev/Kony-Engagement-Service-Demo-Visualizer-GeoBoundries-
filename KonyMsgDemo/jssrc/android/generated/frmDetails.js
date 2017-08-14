function addWidgetsfrmDetails() {
    frmDetails.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "height": "8%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "22%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0e5dd0e5fded348",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "0.00%",
        "width": "65%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0fcde708d58334c",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetails.setDefaultUnit(kony.flex.DP);
    var mapDetails = new kony.ui.Map({
        "calloutWidth": 80,
        "defaultPinImage": "pinb.png",
        "height": "30%",
        "id": "mapDetails",
        "isVisible": true,
        "left": "0%",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showZoomControl": true,
        "zoomLevel": 4
    });
    var flxLocationDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "flxLocationDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0d74eea3a6ae748",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLocationDetails.setDefaultUnit(kony.flex.DP);
    var lblDescription = new kony.ui.Label({
        "height": "20%",
        "id": "lblDescription",
        "isVisible": true,
        "left": "4%",
        "skin": "CopysknLblKonyThemeNormal0ec16964d882c48",
        "text": "Description",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "92%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxRadius = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxRadius",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0a7901e4a287243",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxRadius.setDefaultUnit(kony.flex.DP);
    var lblRadius = new kony.ui.Label({
        "height": "100%",
        "id": "lblRadius",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": " Radius Area",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblRadiusData = new kony.ui.Label({
        "height": "100%",
        "id": "lblRadiusData",
        "isVisible": true,
        "left": "45%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "0.2 Mi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxRadius.add(lblRadius, lblRadiusData);
    var flxLatitude = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxLatitude",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0a7901e4a287243",
        "top": "32%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLatitude.setDefaultUnit(kony.flex.DP);
    var lblLat = new kony.ui.Label({
        "height": "100%",
        "id": "lblLat",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": " Latitude",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLatData = new kony.ui.Label({
        "height": "100%",
        "id": "lblLatData",
        "isVisible": true,
        "left": "45%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "0.2 Mi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLatitude.add(lblLat, lblLatData);
    var flxLongitude = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxLongitude",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0a7901e4a287243",
        "top": "44%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLongitude.setDefaultUnit(kony.flex.DP);
    var lblLong = new kony.ui.Label({
        "height": "100%",
        "id": "lblLong",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": " Longitude",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLongData = new kony.ui.Label({
        "height": "100%",
        "id": "lblLongData",
        "isVisible": true,
        "left": "45%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "0.2 Mi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLongitude.add(lblLong, lblLongData);
    var flxAltitude = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxAltitude",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0a7901e4a287243",
        "top": "56%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAltitude.setDefaultUnit(kony.flex.DP);
    var lblAltitude = new kony.ui.Label({
        "height": "100%",
        "id": "lblAltitude",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": " Altitude",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblAltitudeData = new kony.ui.Label({
        "height": "100%",
        "id": "lblAltitudeData",
        "isVisible": true,
        "left": "45%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "0.2 Mi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxAltitude.add(lblAltitude, lblAltitudeData);
    var flxClient = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxClient",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0a7901e4a287243",
        "top": "68%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxClient.setDefaultUnit(kony.flex.DP);
    var lblClient = new kony.ui.Label({
        "height": "100%",
        "id": "lblClient",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": " Client Action",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblClientData = new kony.ui.Label({
        "height": "100%",
        "id": "lblClientData",
        "isVisible": true,
        "left": "45%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "0.2 Mi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxClient.add(lblClient, lblClientData);
    var flxMetadata = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxMetadata",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0a7901e4a287243",
        "top": "80%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMetadata.setDefaultUnit(kony.flex.DP);
    var lblMetadata = new kony.ui.Label({
        "height": "100%",
        "id": "lblMetadata",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": " Metadata",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblMetadataData = new kony.ui.Label({
        "height": "100%",
        "id": "lblMetadataData",
        "isVisible": true,
        "left": "45%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "0.2 Mi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMetadata.add(lblMetadata, lblMetadataData);
    flxLocationDetails.add(lblDescription, flxRadius, flxLatitude, flxLongitude, flxAltitude, flxClient, flxMetadata);
    flxDetails.add(mapDetails, flxLocationDetails);
    frmDetails.add(lblHeader, flxDetails);
};

function frmDetailsGlobals() {
    frmDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDetails,
        "enabledForIdleTimeout": false,
        "id": "frmDetails",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0eebc10622d804c"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};