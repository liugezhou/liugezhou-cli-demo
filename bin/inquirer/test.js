const inquirer = require('inquirer')

inquirer
    .prompt([{
        type:'input',
        name:'projectName',
        message:'your choise:',
        default:'',
        validate:function(v){
            const done = this.async();
            // Do async stuff
            setTimeout(function() {
            if (!/^[a-zA-Z]+([-][a-zA-Z][a-zA-Z0-9]*|[_][a-zA-Z][a-zA-Z0-9]*|[a-zA-Z0-9])*$/.test(v)) {
                done(`请输入合法的名称`);
                return;
            }
            done(null, true);
            }, 0);
            // 规则一：输入的首字符为英文字符
            // 规则二：尾字符必须为英文或数字
            // 规则三：字符仅允许-和_两种
            // \w=a-zA_Z0-9_
        },
        filter:function(v){
            return v
        }
    }])
    .then(answers =>{
        console.log(answers)
    })
    .catch(err =>{
        console.log(err)
    })