import Vue from 'vue'
import App from './app.vue'
import router from './routes/index.js'
import ViewUI from 'view-design'
import store from '@/store/index.js'
import Cookies from 'js-cookie'

import '@/assets/less/index.less'
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);



Vue.config.productionTip = false



new Vue( {
    el:'#app',
    render:h=>h(App),
    router,
    store
})

