const inquirer = require('inquirer')
inquirer
  .prompt([{
    type:'input',
    name:'name',
    message:'your name:',
    default:'liugezhou',
    validate:function(v){
        return typeof v === 'string'
    },
    filter:function(v){
        return v+'!'
    },
    transformer: function(v){
        return 'name :'+ v
    }
 },{
    type:'number',
    name:'age',
    message:'your age:',
    default:'18'
 }])
  .then(answers => {
    console.log(answers.name)
    console.log(answers.age)
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log('error')
    } else {
        // Something else when wrong
    }
  });