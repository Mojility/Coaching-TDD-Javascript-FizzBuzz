var Emitter = require('./Emitter');

var e = new Emitter();

for (var i = 1; i <= 50; i++)
    console.log(e.output(i));
