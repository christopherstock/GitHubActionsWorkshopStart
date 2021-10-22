const request = require('supertest');

describe('request Express.js server app', () => {
    let server;

    beforeEach(() => {
        server = require('../src/server');
    });

    afterEach((done) => {
        server.close();
        done();
    });

    it('respond 200 on base path /', (done) => {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('respond 200 and users on path /user', (done) => {
        request(server)
            .get('/user')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, (err, response) => {
                expect(response.body).toEqual([
                    {name: 'John Smith',    username: 'jsmith'},
                    {name: 'Jane Williams', username: 'jwilliams'},
                    {name: 'Robert Brown',  username: 'rbrown'},
                ]);
                done();
            });
    });

    it('respond 404 on invalid path', (done) => {
        request(server)
            .get('/invalid/path')
            .expect(404, done);
    });
});
