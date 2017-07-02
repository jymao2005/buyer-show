import tmList from '../js/tmList.js'
import tmDetail from '../js/tmDetail.js'

export default {
    install() {
        let host = window.location.host;
        if (/list\.tmall\.com/i.test(host)) {
            tmList.deal();  
        }
        if (/detail\.tmall\.com/i.test(host)) {
            setTimeout(()=>{
                tmDetail.deal();
            },1000)       
        }
        if (/jd\.com/i.test(host)) {

        }
        if (/tmall\.com/i.test(host)) {

        }
    }
}
