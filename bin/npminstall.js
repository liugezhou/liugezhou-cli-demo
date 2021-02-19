const npminstall = require('npminstall')
const path = require('path')
const userHome = require('user-home')
npminstall({
    root: path.resolve(userHome,'.cli-test'), //模块路径
    storeDir: path.resolve(userHome,'.cli-test','node_modules') ,
    registry:'https://registry.npmjs.org',
    pkgs:[
        {name:'foo',version:'~1.0.0'}
    ]
})