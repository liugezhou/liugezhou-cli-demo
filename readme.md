#### 说明
> 刚仓库最原始是用来学习yargs相关命令的，然后随着项目demo的增加，还测试了很多其他三方库，测试某个文件的输出效果、共，只需将某文件代码替换index，并使用npm link调试即可。

> + bin/commander.js 该文件内代码主要是学习快速搭建脚手架的第三方库commander的使用。
>
> + bin/yargs.js  该文件内代码主要是yargs相关命令的学习demo
>
> + bin/npminstall  该文件代码为学习npminstall这个cnpm提供的npm 包安装功能库。
>
> 代码中的mjs主要是测试通过node原生支持ES Module的测试代码编写(需要注意的是node版本需要大于14.x)
>
> bin/process/fork.js文件主要用来学习  node中child_process的异步方法fork的使用，并结合child.js进行主进程与子进程的通信。
>
> bin/process/spawn.js文件主要用来学习  node中child_process的异步方法spawn的使用。
>
> bin/process/exec.js文件主要用来学习  node中child_process的异步方法exec和execFile的使用。
>
> bin/process/sync.js文件主要用来学习  node中child_process的同步方法execSync和execFileSync和spawnSync的使用。
>
> bin/inquirer/index.js 是对inquirer这个库进行的简单代码测试

> bin/process/inherit.js文件主要用来学习  node中child_process的异步方法spawn的stdio属性使用。

> bin/process/input.js文件主要用来学习  node中child_process的exec方法的源码以及回调监听的学习。

> /bin/inquire: Inquire测试代码：掌握input、confirm、list，其它先混个脸熟