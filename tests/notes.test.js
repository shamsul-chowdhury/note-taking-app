const request = require('supertest');
const app = require('../index');

let token;
let note_id;

beforeAll(async () => {
  // Log in a user and get the token for further requests
  const res = await request(app).post('/auth/login').send({
    username: 'testeee1',
    password: '1234',
  });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty('token');
  token = res.body.token;
  console.log("res", res);
}, 20000);

describe('Notes Endpoints', () => {
  it('should create a new note', async () => {
    const res = await request(app)
      .post('/notes')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Note',
        body: 'This is a test note.',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all notes', async () => {
    const res = await request(app).get('/notes').set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    note_id = res.body[0]._id
  });


  it('should get a specific note', async () => {
    const response = await request(app).get(`/notes/${note_id}`).set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('my_note1');
    expect(response.body.body).toBe('my grocery list 1');
  });



});
