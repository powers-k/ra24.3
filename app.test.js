const request = require('supertest');
const app = require('./app');

describe('Express App Tests', () => {

    //test the main route
    describe('GET/', () => {
        it('should return "Hello World" on the main page', async () => {
            const response = await request(app)
            .get('/')
            .expect(200);

            expect(response.text).toBe('Hello World');
        });

        it('should return text/html content type', async () => {
            const response = await request(app)
            .get('/')
            .expect(200);

            expect(response.headers['content-type']).toMatch(/text\/html/);
        });
    });

    //additional test
    describe('GET /api/health', () => {
        it('should return server status', async () => {
            const response = await request(app)
            .get('/api/health')
            .expect(200);

            expect(response.body).toEqual({
                status: 'OK',
                message: 'Server is running'
            });
        });
    });

    //test for non-existent routes
    describe('GET /nonexistent', () => {
        it('should return 404 for non-existent routes', async () => {
            await request(app)
            .get('/nonexistent')
            .expect(404);
        });
    });
});