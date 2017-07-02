export default{
    removeSelf(node){   //删除自身dom,或数组        
        if(node){
            console.log(node);
            if((Array.isArray(node))){
                node.forEach((item,index)=>{
                    console.log(item.parentNode);
                    if(item)    item.parentNode.removeChild(item);
                })
            }else{
                node.parentNode.removeChild(node);
            }
        }    
    }
}