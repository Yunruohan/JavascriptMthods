// 获取url的参数
const getParams = (url, key) => {
    url = url.split('?')[1]
    let reg = RegExp('(^|&)' + key + '=([^&]*)(&|$)')
    let result = url.match(reg)
    return result ? decodeURIComponent(result[2]) : ''
}
console.log(getParams("www.com?name=sundongmei","name"))

const setformateData = (date) => {
    return date.replace()
}


// 