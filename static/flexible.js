(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
            return;
        }
        if (!/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
            clientWidth = clientWidth > 2000 ? 2000 : clientWidth;
            clientWidth = clientWidth < 1200 ? 1200 : clientWidth;
        }
        docEl.style.fontSize = (clientWidth / 16) + 'px';
    };
    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window));
