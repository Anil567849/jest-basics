const { default: axios } = require("axios");


// Instead return value form jsonplaceholder we are mocking our return value; 
async function fetchData(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return res.data;
}

test('spy on', async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "hello"
        }
    })

    const res = await fetchData(); // {data: {id: 1, todo: 'hello'}} - rather than response from jsonplaceholder
    // console.log(res);
    
    expect(res.todo).toBe("hello");
})