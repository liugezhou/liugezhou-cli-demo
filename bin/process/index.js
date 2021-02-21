const cp = require('child_process')
const path = require('path')

cp.exec('ls -al|grep node_modules ',function(err,stdout,stderr){
    console.log(err)
    console.log(stdout)
    console.log(stderr)
})
