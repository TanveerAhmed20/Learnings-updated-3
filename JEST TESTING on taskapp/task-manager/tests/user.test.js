const request = require('supertest');
const express = require('express');
const app = require('../src/app');


test('should signup a new user',async ()=>{
    await request(app).post('/users')
    .send({
        name:"tanveer",
        email:"tnvrahmed98@gmail.com",
        password : "mypass121:"
}).expect(201);