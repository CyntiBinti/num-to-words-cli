const { numbersToWords } = require("../lib/index");

describe('Testing the numbersToWords function', () => {
	it('returns the correct words for a "ones" number', () => {
		expect(numbersToWords(0)).toBe("zero");
		expect(numbersToWords(9)).toBe("nine");
        expect(numbersToWords(19)).toBe("nineteen");
	});

    it('returns the correct words for a "tens" number', () => {
		expect(numbersToWords(52)).toBe("fifty-two");
		expect(numbersToWords(79)).toBe("seventy-nine");
        expect(numbersToWords(99)).toBe("ninety-nine");
	});

    it('returns the correct words for a "magnitude" number', () => {
		expect(numbersToWords(101)).toBe("one hundred and one");
		expect(numbersToWords(352)).toBe("three hundred and fifty-two");
        expect(numbersToWords(1000)).toBe("one thousand");
        expect(numbersToWords(12055)).toBe("twelve thousand and fifty-five");
        expect(numbersToWords(12300)).toBe("twelve thousand, three hundred");
        expect(numbersToWords(12345)).toBe("twelve thousand, three hundred and forty-five");
	});
});

// To-do: create test-cases array export so that dynamically parsed into jest function