var Emitter = require('./Emitter');

var e = new Emitter();

for (var i = 75; i <= 125; i++)
    console.log(e.output(i));
