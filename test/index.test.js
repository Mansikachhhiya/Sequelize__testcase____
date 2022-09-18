const {add,app} = require("../index");
const supertest = require("supertest");

test("add positive number",()=>{
    expect(add(1,2)).toBe(3);
});

test("add negative no",()=>{
    expect(add(-2,-9)).toBe(-11);
})

test("add negative n",()=>{
    expect(add(-2,-9)).toBe(-11);
})

test("test get api ",async()=> {
    await supertest(app)
        .get('/user')
        .expect(200)
        .then(result => {
            expect(result && result.body && typeof result.body == "object")
        })
})

