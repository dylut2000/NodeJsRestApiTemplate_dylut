const request = require('supertest');

/**
 * @require express.app to access the all project
 */
const app = require('./app');


/**
 * simple test the root app
 * Use done to notify that it ends
 * Jest test will end when it hits the last line of the test function, 
 * so you need to use a done() to make it right.
 */
describe('Test the root path', () => {
    test('It should respond the GET method', (done) => {
        request(app).get('/').then((response) => {
            // route not found handled with an error handler
            expect(response.statusCode).toBe(404);
            done();
        });
    });

    test('It should respond with a not found abject', (done) => {
        request(app).get('/').then((response) => {
            //console.log(JSON.parse(response.text));
            // route not found handled with an error handler
            expect(JSON.parse(response.text)).toEqual({error: { message: 'not found', dylut: 'App documentation coming soon...' }});
            done();
        });
    });
});