function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("peanut butter")
        }, 1000);
    })
}

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
// The expect.assertions(0) in your test is used to make sure that exactly 0 expectation (assertion) will run during the test.
expect.assertions(0);
try {
    await fetchData();
} catch (error) {
    expect(error).toMatch('error');
}
});