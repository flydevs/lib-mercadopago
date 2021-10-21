const mercadopago = require('mercadopago');
const axios = require('axios')


const url = 'https://api.mercadopago.com/';

    const createPreference = async (token, preference)=>{
        try {
            const { data } = await axios.post(`${url}checkout/preferences`, preference,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const updatePreference = async (token, id, preference)=>{
        try {
            const { data } = await axios.put(`${url}checkout/preferences/${id}`, preference,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const createSubscription = async (token, subscription)=>{
        try {
            const { data } = await axios.post(`${url}preapproval/`, subscription,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const cancelSubscription = async (token, subscriptionId)=>{
        try {
            const { data } = await axios.put(`${url}preapproval/${subscriptionId}`, {
                status: 'cancelled'
            },
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const findSubscriptionById = async (token, subscriptionId)=>{
        try {
            const { data } = await axios.get(`${url}preapproval/${subscriptionId}`,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const createCustomer = async(token, customer) => {
        try {
            const { data } = await axios.post(`${url}v1/customers`,customer,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }

    }

    const findCustomerByMail = async(token, email) => {
        try {
            const { data } = await axios.get(`${url}v1/customers/search?email=${email}`,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null }
        }
    }

    const updateCustomer = async(token,id, customer) => {
        try {
            const { data } = await axios.put(`${url}v1/customers/${id}`, customer,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null }
        }
    }

    const findCustomerByMailAndIdentification = async(token, email, dni) => {
        try {
            const { data } = await axios.get(`${url}v1/customers/search?email=${email}&&identification.number=${dni}`,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const getPaymentInfoById = async(token,paymentId) => {
        try {
            const { data } = await axios.get(`${url}v1/payments/${paymentId}`,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data
        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const cancelPayment = async(token,paymentId) => {
        try {
            const { data } = await axios.put(`${url}v1/payments/${paymentId}`,{
                status: 'cancelled'
            },
            { headers: {
                Authorization: `Bearer ${token}`
            }})
            return data        } catch (error) {
            return { Error: error.name, Message: error.message, Cause: error.cause ? error.cause[0] : null}
        }
    }

    const createPayment = async(token,payment) => {
        try {
            const { data } = await axios.get(`${url}v1/payments/`, payment,
            { headers: {
                Authorization: `Bearer ${token}`
            }})
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

