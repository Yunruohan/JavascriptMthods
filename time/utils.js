// 日期格式化
const formatDate = (parDate, formatStr) => {
    if(parDate && parDate.constructor === String) {
        parData = parData.replace(/-/g,"/")
    }
    let date = new Date(parDate)
    let zeroize = function (value, length) {
        let i, zeros 
        if(!length) {
            length = 2
        }
        value = value + ''
        for(i = 0, zeros = ''; i < (length - value.length); i++) {
            zeros += '0'
        } 
        return zeros + value
    }

    if (!formatStr){
        formatStr = 'yyyy-MM-dd'
    }
}