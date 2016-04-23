var Logic = require("../Logic");

describe("Logic", function() {

    function check(divisor, output) {
        var l = new Logic(divisor, output);
        expect(l.output(divisor)).toEqual(output);
        expect(l.output(divisor + 1)).toEqual("");
        expect(l.output(divisor - 1)).toEqual("");
        expect(l.output(divisor * 2)).toEqual(output);
    }

    it("should respond for Fizz", function() {
        check(3, "Fizz");
    });

    it("should respond for Buzz", function() {
        check(5, "Buzz");
    });
});
