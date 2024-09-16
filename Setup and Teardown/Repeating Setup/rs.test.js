
// You have a method initializeCityDatabase() that must be called before each of these tests, and a method clearCityDatabase() that must be called after each of these tests.

const arr = [];
function initializeCityDatabase(){
    arr.push('Vienna');
    arr.push('New York');
}

function clearCityDatabase(){
    while(arr.length > 0){
        arr.pop();
    }
}

function isCity(city){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === city) return true;
    }
    return false;
}
// Applies to all tests in this file
beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});
test('city database has New York', () => {
    expect(isCity('New York')).toBeTruthy();
});
