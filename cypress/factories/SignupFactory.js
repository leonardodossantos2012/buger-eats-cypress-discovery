var faker = require('faker-br')

export default {

    deliver: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: faker.br.cpf(),
            email: faker.internet.email(firstName),
            whatsapp: '11930148927',
            adress: {
                postalcode: '07863260',
                street: 'Estrada da Divisa',
                number: '351',
                details: 'Bloco E Apto 11',
                district: 'Chácaras São José',
                city_state: 'Franco da Rocha/SP'
            },
            delivery_method: 'Bike Elétrica',
            cnh: '/images/cnh-digital.jpg'
        }

        return data
    }
}