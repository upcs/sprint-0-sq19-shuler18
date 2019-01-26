const sums = require('./functions');

test('Adds 2+2 to ensure the answer really is 4', () => {
	expect(sums(2,2)).toBe(4);
});

test('Adds -2+2 to ensure the answer really is 0', () => {
	expect(sums(-2,2)).toBe(0);
});

test('Adds 2+2 but fails as the check expects the result to be 3', () => {
	expect(sums(2,2)).toBe(3);
});
