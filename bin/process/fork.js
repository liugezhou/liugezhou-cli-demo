const cp = require('child_process')
const path = require('path')

const child = cp.fork(path.resolve(__dirname,'child.js'))
child.send('hello child process！',()=>{
    // child.disconnect()
})
console.log('main pid:',process.pid)

child.on('message',msg =>{
    console.log(msg)
    child.disconnect()
})
