import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver.json').then((d) => {
    //         this.deliver = d;
    //     })
    // })

    it('Usuario deve se tornar um entregador', function () {
        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })

    it('CPF Incorreto', function () {
        var deliver = signupFactory.deliver()
        deliver.cpf = '1424564xxxx'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Email Incorreto', function () {
        var deliver = signupFactory.deliver()
        deliver.email = 'leonardo.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Oops! Email com formato inválido.'
        signupPage.alertMessageShouldBe(expectedMessage)
    })

    context('Compos obrigatórios', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o e-mail' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signupPage.go()
            signupPage.submit()

        })

        messages.forEach(function (msg) {
            it(`${msg.field} é obrigatório`, function () {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

    // it('Campos obrigatórios', function () {
    //     signupPage.go()
    //     signupPage.submit()

    //     signupPage.alertMessageShouldBe('É necessário informar o nome')
    //     signupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     signupPage.alertMessageShouldBe('É necessário informar o email')
    //     signupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })
})