const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
// 第一种用法
const html ='<div><%= user.name%></div>'
const options = {}
const data = {
    user:{
        name:'liugezhou',
        nickname:'<div>liugezhou</div>',
        copyright:'liugezhou-cli!'
    }
}

// 返回一个f于解析html模板中的function
// const compileTemplate = ejs.compile(html,options)(data)

// console.log(compileTemplate)

//第二种用法
// const renderTemplate = ejs.render(html,data,options)
// console.log(renderTemplate)
// 
//第三种用法
// const renderFile = ejs.renderFile(path.resolve(__dirname,'template.html'),data,options)
// renderFile.then(res => console.log(res))

ejs.fileLoader = function(filepath){
    const content = fs.readFileSync(filepath).toString()
    return '<div>from<%= user.copyright %></div>' + content
}
ejs.renderFile(path.resolve(__dirname,'template.html'),data,{delimiter:'%'},(err,res)=>{
    console.log(res)
})

