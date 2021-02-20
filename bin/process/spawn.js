const cp = require('child_process')
const path = require('path')

const child = cp.spawn(path.resolve(__dirname,'test.shell'),['-al','-bl'],{
    cwd:path.resolve('..')
});

// console.log(child.pid,process.pid)
child.stdout.on('data',function(chunk){
    console.log('stdout',chunk.toString())
})

child.stderr.on('data',function(chunk){
    console.log('stderr',chunk.toString())
})