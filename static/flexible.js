(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
            return;
        }
        var fontSize = clientWidth / 16;
        if (!/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
            if (clientWidth >= 1400) {
                fontSize = 1920 / 16;     //120
            } else if (clientWidth < 1400) {
                fontSize = 1600 / 16;      //100
            }
        }

        docEl.style.fontSize = fontSize + 'px';
    };
    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window));
