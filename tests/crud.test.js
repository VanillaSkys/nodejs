const supertest = require('supertest');
const app = require('../app.js');

describe('CRUD', () => {
    describe('onGet', () => {
        test('Status 200', async() => {
            const response = await supertest(app).get(`/api/v1/crud/onGet`)
            expect(response.status).toBe(200)
        })
    })
    describe('onPost', () => {
        test('Status 201', async() => {
            const response = await supertest(app).post(`/api/v1/crud/onPost`).send({
                name: "kut",
                number: 10
            })
            expect(response.status).toBe(201)
            expect(response.text).toBe("Success Post")
        })
    })
    describe('onPut', () => {
        test('Status 200', async() => {
            const id = '44cf60a5-c9b1-404a-840b-e03eb033cf70'
            const response = await supertest(app).put(`/api/v1/crud/onPut`).send({
                id: id,
                name: 'kuy'
            })
            expect(response.status).toBe(200)
            expect(response.text).toBe("Success Put")
        })
    })
    describe('onDelete', () => {
        test('Status 200', async() => {
            const id = '4e043072-4014-46c3-bfc2-70a5ede9fc64'
            const response = await supertest(app).delete(`/api/v1/crud/onDelete/:${id}`)
            expect(response.status).toBe(200)
            expect(response.text).toBe("Success Delete")
        })
    })

})