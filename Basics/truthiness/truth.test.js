test('null', () => {
    const n = null;
    expect(n).toBeNull(); // pass
    expect(n).toBeDefined(); // pass
    expect(n).not.toBeUndefined(); // pass
    expect(n).not.toBeTruthy(); // pass
    expect(n).toBeFalsy(); // pass
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull(); // pass
    expect(z).toBeDefined(); // pass
    expect(z).not.toBeUndefined(); // pass
    expect(z).not.toBeTruthy(); // pass
    expect(z).toBeFalsy(); // pass
});