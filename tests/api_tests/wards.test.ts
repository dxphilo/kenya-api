import supertest from 'supertest';
import app from '../../src/app';

describe('GET => /api/v1/wards', () => {
    const correct_ward = 40101;
    const none_ward = 99;

    it('Should return 200 ', async function () {
        await supertest(app)
            .get(`/api/v1/wards?ward_code=${correct_ward}`)
            .expect(200, {
                ward: {
                    code: '40101',
                    office: 'Ahero'
                },
                status: 200
            });
    });

    // test for wrong county
    it('Should return 400', async function () {
        await supertest(app)
            .get(`/api/v1/wards?ward_code=${none_ward}`)
            .expect(400, {
                error: `Ward with the code ${none_ward} not found`,
                status: 400
            });
    });
});
