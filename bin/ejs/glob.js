const glob = require('glob')

glob('**/*.js',{ignore:['node_modules/**','webpack.config.js']},function(err,file){
    console.log(file)
})