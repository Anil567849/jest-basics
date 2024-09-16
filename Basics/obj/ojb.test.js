test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;

    // toEqual recursively checks every field of an object or array.
    // toEqual ignores object keys with undefined properties, undefined array items, array sparseness, or object type mismatch. To take these into account use toStrictEqual instead.x
    expect(data).toEqual({one: 1, two: 2});

    // expect(data).toBe({one: 1, two: 2}); // false - becuase it is not checking every field.
});