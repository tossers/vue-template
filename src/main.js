// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});


// rem 计算
(function (doc, win) {
    const docEl = doc.documentElement;
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) {
            return;
        }
        clientWidth = clientWidth > 2000 ? 2000 : clientWidth;
        clientWidth = clientWidth < 1200 ? 1200 : clientWidth;
        docEl.style.fontSize = (clientWidth / 16) + 'px';
    };

    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window));
