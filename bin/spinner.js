var Spinner = require('cli-spinner').Spinner;
 
var spinner = new Spinner('loading.. %s');
spinner.setSpinnerString('|/-\\');
spinner.start();

setTimeout(() => {
    spinner.stop()
}, 1000);