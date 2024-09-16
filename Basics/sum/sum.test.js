const sum = require('./sum');

test("should add 1 + 2 to equals to 3", () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
})

