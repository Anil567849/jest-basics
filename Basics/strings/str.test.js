test('there is no I in team', () => {
    // This test checks if the string "team" does not contain the character "I".
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    // This test checks if the string "Christoph" contains the substring "stop".
    expect('Christoph').toMatch(/stop/);
});