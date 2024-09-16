function fetchDataWithCB(cb){
    setTimeout(() => {
        cb(null, "peanut butter")
    }, 1000);
}

// Jest will wait until the done callback is called before finishing the test.
test('the data is peanut butter', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchDataWithCB(callback);
  });