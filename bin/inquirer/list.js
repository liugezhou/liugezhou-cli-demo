const inquirer = require('inquirer')

inquirer
    .prompt([{
        type:'list',
        name:'choise',
        message:'your choise:',
        default:0,
        choices:[
            {value:1,name:'liugezhou'},
            {value:2,name:'liuyilan'},
            {value:3,name:'child'}
        ]
    }])
    .then(answers =>{
        console.log(answers)
    })
    .catch(err =>{
        console.log(err)
    })