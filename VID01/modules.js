//const req = require('./people');

//console.log(req.people);

const { people, ages } = require('./people');
const os = require('os');

console.log(people, ages);
console.log(os.platform(), os.homedir());