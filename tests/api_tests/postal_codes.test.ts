import supertest from 'supertest';
import app from '../../src/app';

describe('GET => /api/v1/postal_stations', () => {
    const correct_code = 1;
    const none_post_station = 99;

    it('Should return 200 ', async function () {
        await supertest(app)
            .get(`/api/v1/postal_stations?post_code=${correct_code}`)
            .expect(200, {
                post: {
                    code: 1,
                    name: 'Mombasa',
                    capital: 'Mombasa (City)'
                },
                status: 200
            });
    });

    // test for wrong  post station
    it('Should return 400', async function () {
        await supertest(app)
            .get(`/api/v1/postal_stations?post_code=${none_post_station}`)
            .expect(400, {
                error: `Post station with the code ${none_post_station} not found`,
                status: 400
            });
    });
});
