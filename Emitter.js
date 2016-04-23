Logic = require("./Logic")

module.exports = function() {
  var divisorLogic = [
    new Logic(3, "Fizz"),
    new Logic(5, "Buzz"),
    new Logic(7, "Woof")
  ];

  this.output = function(input) {
    var out = "";

    for(var i=0; i<divisorLogic.length; i++)
      out += divisorLogic[i].output(input);

    if (out === "")
      out += input

    return out;
  }
}

