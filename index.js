const mercadopago = require('mercadopago');
const { preferences, customers, payment, configure } = mercadopago;


    const mercadoPagoCreatePreference = async (token, preference)=>{
        configure({ access_token: token });
        try {
            return await preferences.create(preference)
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

    const createCustomer = async(token, email, name, lastName, dni) => {
        configure({ access_token: token });

        try {
            const customer = {
                email,
                first_name: name,
                last_name: lastName,
                identification:{
                    type: "DNI",
                    number: dni
                }
            }
            const { body } = await customers.create(customer)
            return { customer: body} 
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }

    }

    const findCustomerByMail = async(token, email) => {
        configure({ access_token: token });
        try {
            const { body } = await customers.search({qs:{email}})
            return { customer: body.results[0]} 
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

    const findCustomerByMailAndIdentification = async(token, email, dni) => {
        configure({ access_token: token });
        try {
            const { body } = await customers.search({qs:{email, identification:{ number: dni}}})
            return { customer: body.results[0]} 
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

    const getPaymentInfoById = async(token,id) => {
        configure({ access_token: token });
        try {
             const { body } = await payment.get(id)
            return { 
                email: body.payer.email, 
                identificationNumber: body.payer.identification.number, 
                customerId: body.payer.id,
                customerFirstName: body.payer.first_name 
            }
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

module.exports = { 
    mercadoPagoCreatePreference,
    createCustomer,
    getPaymentInfoById,
    findCustomerByMailAndIdentification,
    findCustomerByMail
}

