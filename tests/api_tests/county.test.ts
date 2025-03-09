import supertest from 'supertest';
import app from '../../src/app';

describe('GET => /api/v1/county', () => {
    const available_county_code = 40; // Update to a code present in counties
    const none_county = 99;

    before(() => {
        console.log('Server setup complete for county tests');
    });

    it('Should return 200', async function () {
        await supertest(app)
            .get(`/api/v1/county?county_code=${available_county_code}`)
            .expect(200);
    });

    it('Should return 400', async function () {
        await supertest(app)
            .get(`/api/v1/county?county_code=${none_county}`)
            .expect(400);
    });
});
