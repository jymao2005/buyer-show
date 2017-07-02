import tmList from '../js/tmList.js'
import tmDetail from '../js/tmDetail.js'

let host = window.location.host;
if (/list\.tmall\.com/i.test(host)) {
    tmList.deal();
}
if (/detail\.tmall\.com/i.test(host)) {
    tmDetail.deal();
}
if (/jd\.com/i.test(host)) {

}
if (/tmall\.com/i.test(host)) {

}
