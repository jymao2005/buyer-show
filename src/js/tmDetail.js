import dom from '../js/dom'
import entry from '../views/entry.vue'
import Vue from 'vue'
import details from '../views/details.vue'

export default {
    deal(){
        function addEntry(){
            if(document.querySelector('.tm-qrcode-icon')){
                document.querySelector('#J_TabBar').insertBefore(dom.createNode('div',{
                    id:'entry'
                }),document.querySelector('.tm-qrcode-icon'));
                new Vue({
                    el:'#entry',
                    render: h => h(entry,{
                        on:{
                            showDetails(){
                                Details.showDetail=true;
                                Details.$children[0].showDetail=true;
                                //document.querySelector('.el-dialog__wrapper').style.display='block';
                            }
                        }
                    })
                })
            }else{
                setTimeout(addEntry,500);
            } 
        }
        addEntry();      

        document.querySelector('body').appendChild(dom.createNode('div',{
            id:'details'
        }));
        let Details=new Vue({
            el:'#details',
            render: h => h(details)
        })
    },
    
}