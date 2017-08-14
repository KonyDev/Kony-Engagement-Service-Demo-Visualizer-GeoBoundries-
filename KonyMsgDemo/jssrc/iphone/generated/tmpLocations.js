function initializetmpLocations() {
    rowLocation = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10.60%",
        "id": "rowLocation",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0e573fbd1a2bb4f"
    }, {}, {});
    rowLocation.setDefaultUnit(kony.flex.DP);
    var img = new kony.ui.Image2({
        "centerY": "48.24%",
        "height": "35dp",
        "id": "img",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "loc.png",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCount = new kony.ui.Label({
        "centerY": "42%",
        "id": "lblCount",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a5b6139c423846",
        "text": "1",
        "top": "9%",
        "width": "10%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblName",
        "isVisible": true,
        "left": "16%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0faa3494d2bb94a",
        "text": "Label",
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "13%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblDist = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblDist",
        "isVisible": true,
        "right": "4%",
        "skin": "CopyslLabel0eadfeb45b68342",
        "text": "2 Mi",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    rowLocation.add(img, lblCount, lblName, lblDist);
}