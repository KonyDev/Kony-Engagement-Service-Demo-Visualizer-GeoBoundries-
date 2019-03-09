function initializetmpSuggest() {
    flxTmpSuggest = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxTmpSuggest",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "isModalContainer": false,
        "skin": "CopyslFbox0i4e5f50674ed4f"
    }, {}, {});
    flxTmpSuggest.setDefaultUnit(kony.flex.DP);
    var lblSuggestText = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSuggestText",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0f5d5e201d3644c",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTmpSuggest.add(lblSuggestText);
}