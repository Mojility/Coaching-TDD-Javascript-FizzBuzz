var Emitter = require("../Emitter");

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
});
