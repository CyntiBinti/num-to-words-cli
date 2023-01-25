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
		expect(numbersToWords(100)).toBe("one hundred");
		expect(numbersToWords(101)).toBe("one hundred and one");
		expect(numbersToWords(352)).toBe("three hundred and fifty-two");
		expect(numbersToWords(999)).toBe("nine hundred and ninety-nine");
        expect(numbersToWords(1000)).toBe("one thousand");
		expect(numbersToWords(1001)).toBe("one thousand and one");
		expect(numbersToWords(9999)).toBe("nine thousand, nine hundred and ninety-nine");
		expect(numbersToWords(10000)).toBe("ten thousand");
		expect(numbersToWords(10001)).toBe("ten thousand and one");
        expect(numbersToWords(12055)).toBe("twelve thousand and fifty-five");
        expect(numbersToWords(12300)).toBe("twelve thousand, three hundred");
        expect(numbersToWords(12345)).toBe("twelve thousand, three hundred and forty-five");
		expect(numbersToWords(19000)).toBe("nineteen thousand");
		expect(numbersToWords(19001)).toBe("nineteen thousand and one");
		expect(numbersToWords(99999)).toBe("ninety nine thousand, nine hundred and ninety-nine");
		expect(numbersToWords(100000)).toBe("one hundred, thousand");

	});
});

// To-do: create test-cases array export so that dynamically parses into jest function .toBe()
