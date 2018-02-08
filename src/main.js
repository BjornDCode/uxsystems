import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll'

import App from './App.vue';

Vue.use(vueSmoothScroll);

new Vue({
    el: '#app',
    render: h => h(App)
});


