/// <reference types="cypress" />

describe('GET Filme', () => {

    var ID_DO_FILME = 'tt1285016'
    var API_KEY = '52ec71bf';

    it('Listar Todos os dados do filme', () => {

        cy.request({

            method: 'GET',
            url: `/?i=${ID_DO_FILME}&apikey=${API_KEY}`

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })

    })

    it('Validar Nome, Ano e Linguagem do filme', () => {
        cy.request({
            method: 'GET',
            url: `?i=${ID_DO_FILME}&apikey=${API_KEY}`

        }).then((response) => {
            expect(response.body.Title).to.eq('The Social Network')
            expect(response.body.Year).to.eq('2010')
            expect(response.body.Language).to.eq('English, French')

        })

    
        })

    it('Validar request mensagem de erro', () => {


        cy.request({
        method: 'GET',
        url: `?i=0000&apikey=${API_KEY}`
        
        }).then((response) => {
        expect(response.body.Response).to.eq('False')
        expect(response.body.Error).to.eq('Incorrect IMDb ID.')

        })
    })
})
            
