import Vue from 'vue'
import "babel-polyfill"

import "./assests/css/reset.css"
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import api from "./api"
import entry from './js/entry.js'

Vue.use(Element);
Vue.use(api);
Vue.use(entry);

import App from './App.vue'
/*import details from './views/details.vue'
import full from './views/full.vue'
import layer from './views/layer.vue'*/

/*var node = document.createElement("div");
node.id = "app"
document.body.appendChild(node);*/

/*new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: (h) => h(App)
})*/