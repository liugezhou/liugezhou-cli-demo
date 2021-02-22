const inquirer = require('inquirer')

inquirer
    .prompt([{
        type:'expand',
        name:'choise',
        message:'your choise:',
        default:0,
        choices:[
            {value:'red',key:'R'},
            {value:'green',key:'G'},
            {value:'blue',key:'B'}
        ]
    }])
    .then(answers =>{
        console.log(answers)
    })
    .catch(err =>{
        console.log(err)
    })