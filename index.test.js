// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {

    test('id, name, instrument, createdAt, and updatedAt are returned in the response', async () => {
        const response = await request(app).get('/musicians');
        expect(response.statusCode).toBe(200);
        const responseData = JSON.parse(response.text);
        responseData.forEach(musician => {
            expect(musician).toHaveProperty('id');
            expect(musician).toHaveProperty('name');
            expect(musician).toHaveProperty('instrument');
            expect(musician).toHaveProperty('createdAt');
            expect(musician).toHaveProperty('updatedAt');
        })
    })
        
})