const axios = require('axios')

    const setHeaders = (token) => {
        return { headers: {
                Authorization: `Bearer ${token}`
            }}
    }
    const url = 'https://api.mercadopago.com/'
    
    const createPreference = async (token, preference)=>{
        try {
            const { data } = await axios.post(`${url}checkout/preferences`, preference, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const updatePreference = async (token, id, preference)=>{
        try {
            const { data } = await axios.put(`${url}checkout/preferences/${id}`, preference, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const createSubscription = async (token, subscription)=>{
        try {
            const { data } = await axios.post(`${url}preapproval/`, subscription, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const cancelSubscription = async (token, subscriptionId)=>{
        try {
            const { data } = await axios.put(`${url}preapproval/${subscriptionId}`, {
                status: 'cancelled'
            }, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const findSubscriptionById = async (token, subscriptionId)=>{
        try {
            const { data } = await axios.get(`${url}preapproval/${subscriptionId}`, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const createCustomer = async(token, customer) => {
        try {
            const { data } = await axios.post(`${url}v1/customers`,customer, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }

    }

    const findCustomerByMail = async(token, email) => {
        try {
            const { data } = await axios.get(`${url}v1/customers/search?email=${email}`, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null }
        }
    }

    const updateCustomer = async(token,id, customer) => {
        try {
            const { data } = await axios.put(`${url}v1/customers/${id}`, customer, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null }
        }
    }

    const findCustomerByMailAndIdentification = async(token, email, dni) => {
        try {
            const { data } = await axios.get(`${url}v1/customers/search?email=${email}&&identification.number=${dni}`, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const getPaymentInfoById = async(token,paymentId) => {
        try {
            const { data } = await axios.get(`${url}v1/payments/${paymentId}`, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const cancelPayment = async(token,paymentId) => {
        try {
            const { data } = await axios.put(`${url}v1/payments/${paymentId}`,{
                status: 'cancelled'
            }, setHeaders(token))
            return data        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const createPayment = async(token,payment) => {
        try {
            const { data } = await axios.get(`${url}v1/payments/`, payment, setHeaders(token))
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
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
    cancelSubscription,
    findSubscriptionById,
    cancelPayment,
    createPayment,
    updateCustomer
}

