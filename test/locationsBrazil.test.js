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
        console.log(res.body)

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

describe('Regions of Brazil', () => {

    it('Should contain the 5 regions of Brazil', async () => {

        const res = await request(baseURL)
            .get('/localidades/regioes');

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveLength(5)
    })
    it('Should contain the correct name and abbreviation of the Centro-Oeste/CO region', async () => {

        const res = await request(baseURL)
            .get(`/localidades/regioes/`);

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    nome: 'Centro-Oeste',
                    sigla: 'CO'
                })
            ])
        );
    })
    it('Should return all 7 states of the North region', async () => {

        const idRegion = 1;

        const res = await request(baseURL)
            .get(`/localidades/regioes/${idRegion}/estados`);

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveLength(7);
    })
    it('Should verify that the state of Alagoas/AL belongs to the Northeast region', async () => {

        const idRegion = 2;

        const res = await request(baseURL)
            .get(`/localidades/regioes/${idRegion}/estados`);

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    nome: 'Alagoas'
                })
            ])
        );
    })
})
