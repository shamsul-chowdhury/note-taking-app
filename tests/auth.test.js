const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');


describe('Auth Endpoints', () => {

  it('should register a new user', async () => {
    const res = await request(app).post('/auth/register').send({
      username: 'testuser',
      password: 'testpassword',
    });
    expect(res.statusCode).toEqual(201);
  }, 20000);

  it('should log in an existing user', async () => {
    const res = await request(app).post('/auth/login').send({
      username: 'testeee1',
      password: '1234',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
