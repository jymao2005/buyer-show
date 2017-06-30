export default {
    install(Vue) {
        Vue.prototype.$api = makeApi();
    }
}

class TbApi {
    constructor() {

    }
    async getComments({ pageIdx }) {

    }

    async getAppendedComments({ pageIdx }) {

    }
}
class JdApi {
    constructor() {

    }
    async getComments({ pageIdx }) {

    }

    async getAppendedComments({ pageIdx }) {

    }
}

import sa from "superagent";

class TmallApi {
    constructor() {
        this._url = "https://rate.tmall.com/list_detail_rate.htm";
        this._ensureInfo().then((info) => {
            this._info = info && info.rateConfig;
        });
    }
    async getComments({ pageIdx, append = 0 }) {
        if (!this._info) {
            console.log("not ready");
            return await (() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        var ps = this.getComments({ pageIdx, append })
                        ps.then(resolve, reject);
                    }, 200);
                })
            })()
        }
        console.log(this._info)
        let { itemId, spuId, sellerId } = this._info;
        let res = await sa.get(this._url)
            .query({
                itemId,
                spuId,
                sellerId,
                order: 3,
                currentPage: pageIdx,
                append,
                content: 1,
                picture: append ? 0 : 1
            })
        let data = JSON.parse("{" + res.text + "}");
        console.log(data);
        let { rateDetail: { paginator, rateCount, rateList } } = data;
        return { paginator, rateCount, rateList };
    }

    _ensureInfo() {
        return new Promise((resolve, reject) => {
            if (this._info) {
                resolve(this._info);
            } else {
                let retry = () => {
                    let info = this._getInfo();
                    if (info) {
                        console.log("got info:", info)
                        resolve(info)
                    } else {
                        console.log("retry")
                        setTimeout(retry, 200);
                    }
                }
                retry();
            }
        })
    }
    _getInfo() {
        for (let script of document.scripts) {
            var m = script.innerText.match(/TShop.Setup\([\n]*([\s\S\n]*?)[\n]*\)/);
            if (m && m[1]) {
                return JSON.parse(m[1]);
            }
        }

    }
}

function makeApi() {
    let host = window.location.host;
    if (/taobao\.com/i.test(host)) {
        return new TbApi();
    }
    if (/jd\.com/i.test(host)) {
        return new JdApi();
    }
    if (/tmall\.com/i.test(host)) {
        return new TmallApi();
    }
}

function parseQuery(query) {
    query = query.substr(1);
    let args = {};
    let pairs = query.split("&");
    for (let pair of pairs) {
        console.log(pair)
        let kv = pair.split("=");
        console.log(kv)
        args[kv[0]] = kv[1];
    }

    return args;
}