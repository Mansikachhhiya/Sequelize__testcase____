const request = require("supertest");
const app = require("../index");


describe("User Api test",()=>{
    it("Should create a new user ",async()=>{
        const res = await request(app)
            .post('/api/users')
            .send({
            firstName : "Bob",
            lastName:'Doe',
            email:"bob@gmail.com",
            password:"12345678"
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('User')
        })
    it("Should get all users ",async ()=>{
        const res = await request(app)
            .get("/api/users")
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('Users')
        })
        it("Should get user by id",async ()=>{
            const res = await request(app)
                .get("/api/users/2")
            expect(res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty("Users")
        })
    }
)