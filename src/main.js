/*if (/localhost/.test(window.location.host)) {
    //for hot update
    console.log(module.hot)
    if (module.hot) {
        var doCheck = function() {
            module.hot.check(function(err, outdated) {
                if (err) {
                    console.error('Check error', err);
                }
                if (outdated) {
                    module.hot.apply(function(err, updated) {
                        if (err) {
                            console.error('Update error', err);
                        } else {
                            console.log('Replaced modules', updated);
                            window.open("http://reload.extensions")
                        }
                        setTimeout(doCheck, 1000);
                    });
                } else {
                    setTimeout(doCheck, 1000);
                }
            });
        };
        doCheck();
    }
} else {
    window.open("http://localhost:8080");
}*/

//
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

var node = document.createElement("div");
node.id = "app"
document.body.appendChild(node);

/*new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: (h) => h(App)
})*/