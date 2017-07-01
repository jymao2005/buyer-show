import layer from '../views/layer.vue'
import Vue from 'vue'
import dom from '../js/dom.js'
let Tmall={
    dealList(){
        let items=document.querySelectorAll('.product');
        items.forEach(function(item){
            item.addEventListener('mouseenter',function(){
                dom.removeSelf(document.getElementsByClassName('layer'));
                let node = document.createElement("div");
                node.id = "layer";
                this.appendChild(node);
                new Vue({
                    el:'#layer',
                    render: (h) => h(layer)
                })
            })
        })        
    }
}
let href = window.location.href;
if (/list\.tmall\.com\/search_product\.htm/i.test(href)) {
    Tmall.dealList();
}
if (/jd\.com/i.test(href)) {
    
}
if (/tmall\.com/i.test(href)) {
    
}