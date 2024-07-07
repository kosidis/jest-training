import request = require('supertest');

test('get star wars', async () => {
    const response = await request('https://swapi.dev/api/').get('/people/1');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Luke Skywalker');
});

test('create sample user', async () => {
    const user = '{"name": "morpheus", "job": "leader"}';
    const response = await request('https://reqres.in').post('/api/users').send(user);

    expect(response.status).toBe(201);
});

test('get users', async () => {

    const response = await request('https://reqres.in').get('/api/users?page=2').expect('Content-Type', /json/);

    expect(response.status).toBe(200);

    const data = response.body.data;
    const emails = data.map((user: any) => user.email);

    expect(emails).toContain('lindsay.ferguson@reqres.in');

});