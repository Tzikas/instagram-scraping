
var ig = require('./index.js');
 
ig.scrapeUserPage('jscmila').then(result => {
  console.dir(result, '??');
}).catch(err => console.error(err))

