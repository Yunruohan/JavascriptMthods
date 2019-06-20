let a = [
    {
        name: "weixin",
        buscid: [
            {zhusao: '1.0',beisao: '2.0'}
        ]
    },
    {
        name: "zhifubao",
        buscid: [
            {zhusao: '1.0',beisao: '2.0'}
        ]
    },
    {
        name: "app",
        buscid: [
            {zhusao: '1.0',beisao: '2.0'}
        ]
    }
]
let b = [
    {
        name: "app",
        buscid: [
            {zhusao: '3.0',beisao: '5.0'}
        ]
    },
    {
        name: "zhifubao",
        buscid: [
            {zhusao: '4.0',beisao: '5.0'}
        ]
    }  
]
// 可以观察的到 a 与 b 之间buscid的值对应的不一样，所以这时候你应该猜到了，将b中包含的a一样的部分必须换成b的，b中没有的a就保留原值就好
function reValue(a, b) {
    for(let i of a) {
        for(let j of b) {
            if(i['name'] === j['name']) {
                i['buscid'] = j['buscid']
            }
        }
    }
    return a
}