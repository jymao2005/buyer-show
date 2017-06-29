import Vue from 'vue'
import App from './App.vue'

var node = document.createElement("div");
node.id = "app"
document.body.appendChild(node);

new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: (h) => h(App)
})