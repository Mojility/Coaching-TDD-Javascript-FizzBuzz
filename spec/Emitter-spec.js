Emitter = require("../Emitter");

describe("Emitter", function() {
  var h = new Emitter();

  it("should emit simple numbers", function() {
    expect(h.output(1)).toEqual("1");
    expect(h.output(2)).toEqual("2");
  });

  it("should emit Fizz", function() {
    expect(h.output(3)).toEqual("Fizz");
  });
});
