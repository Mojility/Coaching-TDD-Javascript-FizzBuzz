module.exports = function() {
    this.output = function(input) {
        var out = "" + input;

        if (input == 3)
            out = "Fizz";

        return out;
    };
};