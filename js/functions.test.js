const hello = require('./functions');

test('Adds 2+2 to ensure the answer really is 4', () => {
	expect(hello(2,2)).toBe(4);
});

test('Adds -2+2 to ensure the answer really is 0', () => {
	expect(hello(-2,2)).toBe(0);
});