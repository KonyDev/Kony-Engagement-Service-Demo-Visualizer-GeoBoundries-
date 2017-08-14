function addWidgetsfrmFilters() {
    frmFilters.setDefaultUnit(kony.flex.DP);
    var flxFilterMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxFilterMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0hd89bedba0024a",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFilterMain.setDefaultUnit(kony.flex.DP);
    var lblLocation = new kony.ui.Label({
        "height": "8%",
        "id": "lblLocation",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "Location",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLocationText = new kony.ui.Label({
        "height": "10%",
        "id": "lblLocationText",
        "isVisible": true,
        "left": "0%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0b1bce8fe866f41",
        "text": "Current Location",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtLocation = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "10%",
        "id": "txtLocation",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "-0.30%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0af406d79989848",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "8%",
        "width": "100.60%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblLatitude = new kony.ui.Label({
        "id": "lblLatitude",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel0c1bfd4137d714e",
        "text": "Latitude : ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "19%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLatitudeText = new kony.ui.Label({
        "id": "lblLatitudeText",
        "isVisible": true,
        "left": "22%",
        "skin": "CopyslLabel0c1bfd4137d714e",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "19.00%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLongitude = new kony.ui.Label({
        "id": "lblLongitude",
        "isVisible": true,
        "left": "50%",
        "skin": "CopyslLabel0c1bfd4137d714e",
        "text": "Longitude :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "19%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLongitudeText = new kony.ui.Label({
        "id": "lblLongitudeText",
        "isVisible": true,
        "left": "72%",
        "skin": "CopyslLabel0c1bfd4137d714e",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "19%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblDistance = new kony.ui.Label({
        "height": "8%",
        "id": "lblDistance",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "Distance",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22.03%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listDistance = new kony.ui.ListBox({
        "height": "10%",
        "id": "listDistance",
        "isVisible": true,
        "left": "0%",
        "masterData": [
            ["5", "  5 Miles"],
            ["10", "  10 Miles"],
            ["20", "  20 Miles"],
            ["50", "  50 Miles"],
            ["100", "  100 Miles"]
        ],
        "selectedKey": "10",
        "selectedKeyValue": ["10", "  10 Miles"],
        "skin": "CopyslListBox0g57a8cf0bc8943",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 4, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": "downarrow.png",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lblTags = new kony.ui.Label({
        "height": "8%",
        "id": "lblTags",
        "isVisible": true,
        "left": "4%",
        "skin": "CopyslLabel0g00970d5ae294b",
        "text": "Tags",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtTags = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "height": "22%",
        "id": "txtTags",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "numberOfVisibleLines": 3,
        "skin": "CopyslTextArea0b0839adc187b42",
        "text": "dlsfjasdflk\n",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [4, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var btnSearch = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0g5ba4631fab446",
        "height": "10%",
        "id": "btnSearch",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_g4db433b09be4f05a7ac932c8737e957,
        "skin": "CopyslButtonGlossBlue0d016ef26e61049",
        "text": "SEARCH",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var segSuggest = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblSuggestText": "Label"
        }, {
            "lblSuggestText": "Label"
        }, {
            "lblSuggestText": "Label"
        }],
        "groupCells": false,
        "height": "60%",
        "id": "segSuggest",
        "isVisible": false,
        "left": "2%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxTmpSuggest,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": true,
        "showScrollbars": false,
        "top": "18%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxTmpSuggest": "flxTmpSuggest",
            "lblSuggestText": "lblSuggestText"
        },
        "widgetSkin": "Copyseg0f96e69af2c0f4b",
        "width": "96%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxFilterMain.add(lblLocation, lblLocationText, txtLocation, lblLatitude, lblLatitudeText, lblLongitude, lblLongitudeText, lblDistance, listDistance, lblTags, txtTags, btnSearch, segSuggest);
    var lblFilter = new kony.ui.Label({
        "height": "8%",
        "id": "lblFilter",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0bdeb8df271174e",
        "text": "Filters",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    frmFilters.add(flxFilterMain, lblFilter);
};

function frmFiltersGlobals() {
    frmFilters = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFilters,
        "enabledForIdleTimeout": false,
        "id": "frmFilters",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_f583008c69604bdeb7aaf1026c2d3b34,
        "skin": "CopyslForm0f405dc2f570647"
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