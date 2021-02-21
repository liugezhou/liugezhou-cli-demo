const cp = require('child_process')

//execSync
const ret = cp.execSync('ls -al | grep index.js')
console.log(ret.toString())

//execFileSync
const ret2 = cp.execFileSync('ls', ['-al'])
console.log(ret2.toString())

//spawnSync
const ret3 = cp.spawnSync('ls',['-al'])
console.log(ret3.stdout.toString())