#!/usr/bin/env node

const yargs = require('yargs/yargs')
const dedent = require('dedent')   //dedent这个库的作用是将文字定格显示，一个文本格式化的作用
const { hideBin } = require('yargs/helpers')   // 参数解析
const log = require('npmlog')
const pkg = require("../package.json")
const argv = hideBin(process.argv)

const context = {
  liugezhouVersion: pkg.version,
};

yargs()
  .usage('Usage: $0 command <options>')  // 用法提示
  .demandCommand(1,'A command is required. Pass --help to see all ')  // 至少需要一个命令的提示
  .recommendCommands()    //推荐命令，需要在命令注册完毕后使用
  .strict()       // 严格模式，在输入错误的情况下显示错误提示，若未调用，输入错误情况下无反馈
  .fail((err, msg) => {
    log.error(err)
  })
  .alias("h",'help')        //别名
  .alias("v",'version')     // 别名
  .wrap(yargs().terminalWidth())   //wap内是number：设置控制台页面输出的宽度
  .epilogue(dedent                            
      `      For more information, You can gey my Wechat:18231133236 
  `)     //epilogue:结语的意思/这是是指页脚的一句话
  .options({   //增加一个或多个全局的选项 
    //该选项添加对所有的command都有效，所有command均可访问该参数
    debug:{
      type:'boolean',
      describe:'Bootstrap debug mode!',
      alias:'d'
    }
  })   
  .option('registry',{ // 增加一个全局的选项
    type:'string',
    describe:'Define global registry',
    alias:'r'
  })
  .group(['debug'],'Dev options:') //  options展示分组
  .group(['registry'],'Extra options:') //  options展示分组
  .command('init [name]', 'Do init a project', (yargs) => {
    yargs.option('name', {
      type:'string',
      describe:'Name of a Project',
      alias:'n'
    })
  }, (argv) =>{
    console.log(argv)
  })
  .command({
    command:'list',
    aliases:["ls", "la", "ll"],
    describe : "List local packages",
    builder:(yargs)=>{},
    handler:(argv)=>{
      console.log('start')
      setTimeout(() => {
        console.log('Timeout1')
      }, 0)
      new Promise((resolve,reject)=>{
        let chain = Promise.resolve()
        chain.then(()=>console.log('chain 1'))
        chain.then(()=>console.log('chain 2'))
        chain.then(()=>console.log('chain 3'))
      })
      let chain = Promise.resolve()
      chain.then(() => console.log('chain 4'))
      setTimeout(() => {
        console.log('timeout 2')
        let chain = Promise.resolve()
        chain.then(() => console.log('chain 5'))
      }, 0);
      console.log('end')
    }
  })
  .command({
    command:'regular',
    aliases:["rg"],
    describe : "Practice of Regular",
    builder:(yargs)=>{},
    handler:(argv)=>{
      console.log(/(?:^|\/)\.?\.$/.test('..'))
    }
  })
  .command({
    command:'resolve',
    aliases:["cd"],
    describe:'leran about require',
    builder:(yargs)=>{},
    handler:(argv)=>{
      // console.log(require.resolve('.'))
      // console.log(require.resolve.paths('.'))
      console.log(require.resolve('dedent'))
      console.log(require.resolve.paths('dedent'))
    }
  })
  .parse(argv, context);
