
// In some cases, you only need to do setup once, at the beginning of a file.
// if both initializeCityDatabase() and clearCityDatabase() returned promises, and the city database could be reused between tests


const arr = [];
async function initializeCityDatabase(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arr.push('Vienna');
            arr.push('New York');
            arr.push('San Juan');
            resolve(arr);
        }, 1000);
    })
}

async function clearCityDatabase(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            while(arr.length > 0){
                arr.pop();
            }
            resolve(arr);
        }, 1000);
    })
}

function isCity(city){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === city) return true;
    }
    return false;
}

// Applies to all tests in this file
beforeAll(() => {
    return initializeCityDatabase();
});
  
afterAll( () => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});
  
test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});