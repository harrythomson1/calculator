// Tests for the calculator
var calculator = require("./scripts.js")

describe("A calculator", function() {
    it("can add one and one and get two", function() {
        var result = calculator.add("1", "1")
        expect(result).toBe(2)
    })

    it("can subtract two from three and get one", function() {
        var result = calculator.subtract("3", "2")
        expect(result).toBe(1)
    })

    it("can multiply 3 by 5 and get 15", function() {
        var result = calculator.multiply("3", "5")
        expect(result).toBe(15)
    })

   it("Can divide 3 by 15 and get 5", function() {
        var result = calculator.divide("15", "3")
        expect(result).toBe(5)
    })
})
