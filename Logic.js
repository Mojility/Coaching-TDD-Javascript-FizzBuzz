module.exports = function(divisor, output) {

    this.output = function(input) {
        if (input % divisor === 0) {
            return output;
        } else {
            return "";
        }
    };

};

