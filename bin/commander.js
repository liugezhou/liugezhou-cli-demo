#! /usr/bin/env node

const commander = require('commander')
const pkg = require("../package.json")

// 获取commander的单例
// const {program} = commander

// 手动实例化一个Command示例
const program = new commander.Command()

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug', '是否开启调试模式', false)
  // .requiredOption('-c, --cheese <type>', 'pizza must have cheese')
  .option('-e, --envName  <envName>' , '环境变量')

  // command注册命令
  program
    .command('clone <source> [destination]')
    .description('a new type command')
    .option('-f, --force','是否强制clone')
    .action((source, destination,commandObj) => {
      console.log(source)
      console.log(commandObj)
    })
    
    program
    .command('rmdir <dirs...>')
    .action(function (dirs) {
      dirs.forEach((dir) => {
        console.log('rmdir %s', dir);
      });
    });
    // program
    //   .arguments('<cmd> [options]')
    //   .description('test command',{
    //     cmd :'command to run',
    //     options: 'options to run'
    //   })
    //   .action((cmd,options) => {
    //     console.log(cmd,options)
    //   })
    
    program
      .command('install [name]','install package',{
        executableFile:'vue'
      })
      .alias('i')
    // addCommand注册命令
    //使用.addCommand()向program增加配置好的子命令。
  program.on('command:*',function(obj){
      console.log(obj)
      console.log('未知的命令：' + obj[0])
      const avaliableCommands = program.commands.map( cmd => cmd.name())
      console.log('可用命令：'+ avaliableCommands.join(','))
  })
  program.parse(process.argv);


  const options = program.opts()
  // console.log(options.cheese)
  // program.outputHelp()   //打印出帮助信息
