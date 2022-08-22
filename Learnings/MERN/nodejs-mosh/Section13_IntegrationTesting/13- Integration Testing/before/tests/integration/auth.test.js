const request = require('supertest');
const {Genre} = require('../../models/genre')
const {User} = require('../../models/user')
const chalk = require('chalk')
const mongoose = require('mongoose')
describe('auth middleware',()=>{
    beforeEach(()=>{
        server = require('../../index')
    })
    let token;
    // afterEach(async ()=>{

    //     // await Genre.remove({}); 
    //     // it's best practice to reset the  Collection before unmounting the server 
    //     // so that everytime we run a test we donont keep on appending new data thus causing fail in our tests
    //     server.close();
    // })

    const exec =  ()=>{
        return request(server).post('/api/genres').send({name:'genre'}); // returns a promise

    }

    it('shoudl return 401 if no token is found ', async ()=>{
        token = null
        const res = await exec() ; 
        expect(res.status).toBe(401);
    })
})