const request = require('supertest');

const baseURL = 'https://servicodados.ibge.gov.br/api/v1';

describe('States of Brazil', () => {

    it('Should return all 27 states of Brazil', async () => {

        const res = await request(baseURL)
            .get('/localidades/estados');

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveLength(27);
    })
    it('Should return the state of Ceará by ID', async () => {

        const idState = 23;

        const res = await request(baseURL)
            .get(`/localidades/estados/${idState}`);

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('nome', 'Ceará');

    })
    it('Should verify that the region name of the state of Ceará is Northeast', async () => {

        const idState = 23;

        const res = await request(baseURL)
            .get(`/localidades/estados/${idState}`);

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('regiao');
        expect(res.body.regiao).toHaveProperty('nome', 'Nordeste');

    })

})
