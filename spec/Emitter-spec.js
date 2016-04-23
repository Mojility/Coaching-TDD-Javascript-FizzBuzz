Emitter = require("../Emitter");

describe("Emitter", function() {
    var h = new Emitter();

    it("should emit simple numbers", function() {
        expect(h.output(1)).toEqual("1");
        expect(h.output(2)).toEqual("2");
    });

    it("should emit Fizz for 3", function() {
        expect(h.output(3)).toEqual("Fizz");
    });

    it("should emit Buzz for 5", function() {
        expect(h.output(5)).toEqual("Buzz");
    });

    it("should emit FizzBuzz for 15", function() {
        expect(h.output(15)).toEqual("FizzBuzz");
    });

    it("should emit Woof for 7", function() {
        expect(h.output(7)).toEqual("Woof");
    });

    it("should emit FizzWoof for 21 (3*7)", function() {
        expect(h.output(21)).toEqual("FizzWoof");
    });

    it("should emit BuzzWoof for 35 (5*7)", function() {
        expect(h.output(35)).toEqual("BuzzWoof");
    });

    it("should emit BuzzWoof for 105 (3*5*7)", function() {
        expect(h.output(105)).toEqual("FizzBuzzWoof");
    });
});


