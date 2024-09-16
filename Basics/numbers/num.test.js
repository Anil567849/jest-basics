test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // pass
    expect(value).toBeGreaterThanOrEqual(3.5); // pass
    expect(value).toBeLessThan(5); // pass
    expect(value).toBeLessThanOrEqual(4.5); // pass
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4); // pass
    expect(value).toEqual(4); // pass
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});