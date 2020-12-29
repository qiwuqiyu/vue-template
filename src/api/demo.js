import axios from "./axios.js";
import qs from "qs";

/* 地址簿查询 */
// http://wiki.fcbox.com:8080/pages/viewpage.action?pageId=12066764
export function queryAddressBook(param) {
    return axios.post(``, qs.stringify(param));
}

/* 地址簿删除 */
// http://wiki.fcbox.com:8080/pages/viewpage.action?pageId=12066773
export function deleteAddressBook(param) {
    return axios.post(``, qs.stringify(param));
}