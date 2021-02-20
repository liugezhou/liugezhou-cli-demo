const cp = require('child_process')

cp.exec('ls -al|grep node_modules',function(err,stdout,stderr){
    console.log(err)
    console.log(stdout)
    console.log(stderr)
})

cp.execFile('ls',['-al'],function(err,stdout,stderr){
    console.log(err)
    console.log(stdout)
    console.log(stderr)
})