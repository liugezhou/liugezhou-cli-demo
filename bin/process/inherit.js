const cp = require('child_process')
const path = require('path')

const child = cp.spawn('npm',['install'],{
    cwd:path.resolve('..'),
    stdio:'inherit'
});

// console.log(child.pid,process.pid)
child.stdout.on('data',function(chunk){
    console.log('stdout',chunk.toString())
})

child.stderr.on('data',function(chunk){
    console.log('stderr',chunk.toString())
})