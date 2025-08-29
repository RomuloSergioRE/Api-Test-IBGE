const request = require('supertest');

const baseURL = 'https://servicodados.ibge.gov.br/api/v1';

describe('States of Brazil', () => {

    it('Deve retorna todos os estados do brasil que são 27 no total', async () => {

        const res = await request(baseURL)
            .get('/localidades/estados');

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveLength(27);
    })
    it('Deve retorna o estado do Ceará pelo ID', async () => {

        const idState = 23;

        const res = await request(baseURL)
            .get(`/localidades/estados/${idState}`);

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveProperty('nome', 'Ceará');
        console.log(res.body)

    })
    it('Deve verificar o nome da região do estado do Ceará é Nordeste, ', async () => {

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

    it('Deve conter as 5 regioes do Brasil', async () => {

        const res = await request(baseURL)
            .get('/localidades/regioes');

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveLength(5)
    })
    it('Deve conter o nome e sigla corretas da região Centro-Oeste/CO', async () => {

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
    it('Deve retornar todos os 7 estados da região Norte', async () => {

        const idRegion = 1;

        const res = await request(baseURL)
            .get(`/localidades/regioes/${idRegion}/estados`);

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        expect(res.body).toHaveLength(7);
    })
    it('Deve verificar se a estado do Alagoas/AL é da região Nordeste', async () => {

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
