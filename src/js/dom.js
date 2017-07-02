export default{
    removeSelf(node){   //删除自身dom,或数组        
        if(node){
            for(let i=0;i<node.length;i++){
                if(node[i])    node[i].parentNode.removeChild(node[i]);
            }
        }
    },
    createNode(node,attr){
        let dom = document.createElement(node);
        if(attr){
            for(var i in attr){
                dom.setAttribute(i,attr[i]);
            }
        }            
        return dom;
    },
    getPicUrl(url){
        return chrome.extension.getURL(url);
    }
}