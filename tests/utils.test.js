const { checkIfValidNumber } = require("../lib/utils");

describe('Testing the checkIfValidNumber function', () => {
	it('returns an appropriate error message if user input is invalid', () => {
		expect(checkIfValidNumber("hello")).toBe("Sorry! I only accept numbers.");
		expect(checkIfValidNumber(-23)).toBe("Oops! I only accept positive whole integers between 0 and 100,000.");
        expect(checkIfValidNumber(null)).toBe("Sorry! I only accept numbers.");
        expect(checkIfValidNumber(100005)).toBe("Oops! I only accept positive whole integers between 0 and 100,000.");
	});

    it('returns true if user input is a valid number between 0 and 100,000', () => {
		expect(checkIfValidNumber(0)).toBe(true);
        expect(checkIfValidNumber(50000)).toBe(true);
        expect(checkIfValidNumber(100000)).toBe(true);
        
	});
});