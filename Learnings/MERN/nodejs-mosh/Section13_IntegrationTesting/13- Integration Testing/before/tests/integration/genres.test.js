const request = require('supertest');
const {Genre} = require('../../models/genre')
const {User} = require('../../models/user')
const chalk = require('chalk')
const mongoose = require('mongoose')
let server ;

describe('/api/genres',()=>{
    beforeEach(()=>{
        server = require('../../index')
    })

    afterEach(async ()=>{

        // await Genre.remove({}); 
        // it's best practice to reset the  Collection before unmounting the server 
        // so that everytime we run a test we donont keep on appending new data thus causing fail in our tests
        server.close();
    })

    
    describe('GET /',()=>{
       
        it('should return status code 200',async()=>{
            const res = await request(server).get('/api/genres');
            expect(res.status).toBe(200);
        })

        // it('should return all genres',async()=>{
        //     await Genre.collection.insertMany([
        //         {name:"genre1"},
        //         {name:"genre2"}
        //     ])

        //     // expect.assertions(3);
        //     const res = await request(server).get('/api/genres');
        //     expect(res.status).toBe(200);
        //     expect(res.body.length).toBe(2);
        //     expect(res.body.some(g=>g.name==='genre1')).toBeTruthy();
        // })
    })


    describe('GET /:id',()=>{
        it('should return single genre',async()=>{
            const genre = new Genre({name:'genre1'});
            await genre.save();

            expect.assertions(3);
            const res = await request(server).get(`/api/genres/${genre._id}`);
            expect(res.status).toBe(200);
            // expect(res.body.length).toBe(2);
            expect(res.body.name ==='genre1').toBeTruthy();
            // console.log(chalk.bgGreen('hello'))
            // console.log(res.body)
            expect(res.body).toHaveProperty('name',genre.name)
        })

        it('should return 404 if invalid id is passed',async()=>{
            const obj = '11312312'
            // const obj = new mongoose.Types.ObjectId('123123111321');
            // expect.assertions(2); 
            const res = await request(server).get(`/api/genres/${obj}`);
            expect(res.status).toBe(404);
            expect(res.body.message ==='invalid id').toBeTruthy();

            // expect(res.body.length).toBe(2);
            // expect(res.body).toBeTruthy();
            // console.log(chalk.bgGreen('hello'))
            // console.log(res.body)
            // expect(res.body).toHaveProperty('name',genre.name)
        })
    })

    describe('POST /', ()=>{
        //define the ahppy path , and tehn in each test, we change
        // one parameter that clearly align with the name of the test
        let token;
        let name;
        const exec = async () =>{
            return await request(server)
            .post('/api/genres')
            .set('x-auth-token',token)
            .send({name})
        }

        beforeEach(()=>{
             token = new User().generateAuthToken();
             name = "genre1";
        })

        it('should return 401 if client is not logged in', async ()=>{
            
            token =''
            const res = await exec();

            expect(res.status).toBe(401)
        })

        it('should return 400 if genre is less than 5 characters', async ()=>{
            // const token= new User().generateAuthToken();
            name = "1234"
            const res = await exec();

            expect(res.status).toBe(400)
        })

        it('should return 400 if genre is more than 50 characters', async ()=>{
            // const token= new User().generateAuthToken();
            name =  new Array(52).join('a');
            const res = await  exec();

            expect(res.status).toBe(400)
        })

        
        it('should save the genre if it is valid', async ()=>{
            // const token= new User().generateAuthToken();

            //TODO: 

            // const res = await request(server)
            // .post('/api/genres')
            // .set('x-auth-token',token)
            // .send({name: 'genre1'})
            exec();
            const genre = await Genre.find({name:'genre1'})
            
            expect(genre).not.toBeNull(); // another matcher function
        })

    });

})