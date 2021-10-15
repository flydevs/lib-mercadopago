const mercadopago = require('mercadopago');
const { preferences, customers, payment, preapproval, configure } = mercadopago;

    const createPreference = async (token, preference)=>{
        configure({ access_token: token });
        try {
            return await preferences.create(preference)
        } catch (error) {
            return { Error: error.name, Message: error.message }
        }
    }

    const updatePreference = async (token, id, preference)=>{
        configure({ access_token: token });
        try {
            return await preferences.update(id, preference)
        } catch (error) {
            return { Error: error.name, Message: error.message }
        }
    }

    const createSubscription = async (token, preference)=>{
        configure({ access_token: token });
        try {
            return await preapproval.create(preference)
        } catch (error) {
            return { Error: error.name, Message: error.message }
        }
    }

    const pauseSubscription = async (token, subscriptionId)=>{
        configure({ access_token: token });
        try {
            return await preapproval.pause(subscriptionId)
        } catch (error) {
            return { Error: error.name, Message: error.message }
        }
    }

    const findSubscriptionById = async (token, subscriptionId)=>{
        configure({ access_token: token });
        try {
            return await preapproval.findById(subscriptionId)
        } catch (error) {
            return { Error: error.name, Message: error.message }
        }
    }

    const createCustomer = async(token, email, name, lastName, dni, identificationType) => {
        configure({ access_token: token });

        try {
            const customer = {
                email,
                first_name: name,
                last_name: lastName,
                identification:{
                    type: identificationType,
                    number: dni
                }
            }
            return await customers.create(customer)
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }

    }

    const findCustomerByMail = async(token, email) => {
        configure({ access_token: token });
        try {
            return await customers.search({qs:{email}})
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

    const findCustomerByMailAndIdentification = async(token, email, dni) => {
        configure({ access_token: token });
        try {
            return await customers.search( {qs:{email, identification:{ number: dni}}})
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

    const getPaymentInfoById = async(token,id) => {
        configure({ access_token: token });
        try {
            return await payment.get(id)
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

    const cancelPayment = async(token,paymentId) => {
        configure({ access_token: token });
        try {
            return await payment.cancel(paymentId)
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

    const createPayment = async(token,payment) => {
        configure({ access_token: token });
        try {
            return await payment.create(payment)
        } catch (error) {
            return { Error: error.name, Message: error.message}
        }
    }

module.exports = { 
    createPreference,
    createCustomer,
    getPaymentInfoById,
    findCustomerByMailAndIdentification,
    findCustomerByMail,
    createSubscription,
    updatePreference,
    pauseSubscription,
    findSubscriptionById,
    cancelPayment,
    createPayment
}

