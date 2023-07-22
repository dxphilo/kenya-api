import supertest from 'supertest';
import app from '../../src/app';

describe('GET => /county', () => {
    const available_county_code = 40;
    const none_county = 99;

    it('Should return 200 ', async function () {
        await supertest(app)
            .get(`/county?county_code=${available_county_code}`)
            .expect(200);
    });

    // test for wrong county
    it('Should return 400', async function () {
        await supertest(app)
            .get(`/county?county_code=${none_county}`)
            .expect(400, {
                error: `County with the code ${none_county} not found`,
                status: 400
            });
    });
});
