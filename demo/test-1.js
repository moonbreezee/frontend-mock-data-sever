// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    // ‘name|rule’:value
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name'	   : '@cname',
        'age|1-100': 100,
        'color'	   : '@color',
        'hehe'     : '@name'
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

// 直接node环境下运行代码