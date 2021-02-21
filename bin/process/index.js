const cp = require('child_process')
const path = require('path')

const child = cp.exec('ls -al|grep node_modules',function(err,stdout,stderr){
    console.log('callback--------start')
    console.log(stdout)
    console.log('callback--------end')
})

child.stdout.on('data',(chunk)=>{
    console.log('stdout data:',chunk)
})

child.stderr.on('data',(chunk)=>{
    console.log('stderr data:',chunk)
})

child.stderr.on('close',()=>{
    console.log('stderr close')
})
child.on('exit',(exitCode)=>{
    console.log('exit:',exitCode)
})
child.on('close',()=>{
    console.log('close!')
})