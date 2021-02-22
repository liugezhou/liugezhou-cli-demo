const inquirer = require('inquirer')

inquirer
    .prompt([{
        type:'confirm',
        name:'choise',
        message:'your choise:',
        default:false
    }])
    .then(answers =>{
        console.log(answers)
    })
    .catch(err =>{
        console.log(err)
    })