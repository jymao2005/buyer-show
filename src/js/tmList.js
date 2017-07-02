import layer from '../views/layer.vue'
import full from '../views/full.vue'
import Vue from 'vue'
import dom from '../js/dom.js'
export default {
    deal() {
        let items = document.querySelectorAll('.product');
        items.forEach((item, index) => {
            if (index % 5 >= 3) this.itemEvent(item, false);
            else this.itemEvent(item);
        })

        document.querySelector('body').appendChild(dom.createNode('div',{
            id:'full'
        }));
        new Vue({
            el:'#full',
            render: h => h(full)
        })
    },
    itemEvent(item, tmRight = true) {
        let self = this;
        item.addEventListener('mouseenter', function () {
            //添加layer弹出框
            dom.removeSelf(document.querySelectorAll('.layer'));
            let wrap = dom.createNode('div', {
                id: 'layer-wrap',
            })
            this.appendChild(wrap);
            new Vue({
                el: '#layer-wrap',
                render: (h) => h(layer, {
                    props: {
                        tmRight
                    },
                    on: {
                        selectPic: self.showBig
                    }
                })
            })
            document.querySelectorAll('.layer')[0].style.display = 'none';

            //添加有奖图标
            dom.removeSelf(document.querySelectorAll('.reward'));
            let reward = dom.createNode('img', {
                class: 'reward',
                src: dom.getPicUrl('img/reward.png')
            })
            this.appendChild(reward);

            reward.addEventListener('mouseover', function () {
                document.querySelectorAll('.layer')[0].style.display = 'block';
                let content = document.querySelector('.layer .content');
                let body = document.querySelector('body');
                let bar = document.querySelector('.mui-mbar');
                content.addEventListener('mouseover', function () {
                    body.style.overflow = "hidden";
                    body.style.paddingRight = "17px";
                    bar.style.marginRight = '17px';
                })
                content.addEventListener('mouseout', function () {
                    body.style.overflow = "auto";
                    body.style.paddingRight = "0";
                    bar.style.marginRight = '0px';
                })
            })
        })
        item.addEventListener('mouseleave', function () {
            dom.removeSelf(document.querySelectorAll('.layer'));
            dom.removeSelf(document.querySelectorAll('.reward'));
        })
    },
    showBig(index) {
        console.log(index);
    }
}