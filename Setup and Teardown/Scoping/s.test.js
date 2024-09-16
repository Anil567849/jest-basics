


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
beforeEach(() => {
    return initializeCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });



  const fd = {};
  async function initializeFoodDatabase(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fd['Vienna'] = 'Wiener Schnitzel';
            fd['San Juan'] = 'Mofongo';
            resolve(fd);
        }, 1000);
    })
}

function isValidCityFoodPair(city, food){
    return (fd[city] == food);
}
  
  describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      return initializeFoodDatabase();
    });
  
    test('Vienna <3 veal', () => {
      expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
  
    test('San Juan <3 plantains', () => {
      expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
  });