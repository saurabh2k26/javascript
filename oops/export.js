//The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.
//data.js
module.exports = {
    firstName: 'James',
    lastName: 'Bond'
}


//app.js
var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);
