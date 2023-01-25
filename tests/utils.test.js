const { checkIfValidNumber } = require("../lib/utils");

describe('Testing the checkIfValidNumber function', () => {

    it('returns true if user input is a valid number between 0 and 100,000', () => {
		expect(checkIfValidNumber(0)).toBe(true);
        expect(checkIfValidNumber(50000)).toBe(true);
        expect(checkIfValidNumber(100000)).toBe(true);
        
	});

	it('returns false if user input is not a valid integer', () => {
		expect(() => checkIfValidNumber("hello")).toThrow(Error);
        expect(() => checkIfValidNumber(null)).toThrow(Error);
        expect(() => checkIfValidNumber(12.34)).toThrow(Error);
		expect(() => checkIfValidNumber(-23)).toThrow(Error);
		expect(() => checkIfValidNumber(100005)).toThrow(Error);
        
	});
});

