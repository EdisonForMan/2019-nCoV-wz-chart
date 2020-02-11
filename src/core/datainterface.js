import {getDefaultAxios, getDefaultAxiosCompatible} from "./index.js";

// 正态分布
async function getmsg(_option = {}) {
    const axios = getDefaultAxiosCompatible();
    const option = {
        action: "001",
        count: 100,
        ds: JSON.stringify({
            buffers: [],
            tables: [
                {
                    alias: "a",
                    name: 'lcmap.wz_qzjcysj'
                }
            ],
            cols: [
                {name: "name", raw: "a.HZXM"},
            ],
            module: "wzqd",
            ..._option
        })
    };
    return await axios.post("/api/dw/ds", option);
}

/**
 * [当月开通用户数]
 * 实时数据
 * select count(distinct idcard) from wz_csf.csf_user_auth where date_format(create_time, '%Y%m')  = (date_format(now(), '%Y%m')) and auth_status = 1;
 */
async function dredgeuseratmonth(_option = {}) {
    const axios = getDefaultAxiosCompatible();
    const option = {
        action: "001",
        count: 100,
        ds: JSON.stringify({
            buffers: [],
            tables: [
                {
                    alias: "a",
                    name: `wz_csf.csf_user_auth`,
                },
            ],
            cols: [
                {name: "sumNum", raw: "count(distinct a.idcard)"},
            ],
            module: "wzqd",
            where: "date_format(a.create_time, '%%Y%%m')  = (date_format(now(), '%%Y%%m')) and a.auth_status = 1",
            wherejson: "",
            linkwhere: "",
            order: "",
            groupby: "",
            having: "",
            distinct: false,
            rowlimit: 0,
            childs: [],
            page: {},
            params: [],
            control: {},
            ..._option
        })
    };
    return await axios.post("/api/dw/ds", option);
}
const api = {
    getmsg,
    dredgeuseratmonth,//当月开通用户数
};

export default api;