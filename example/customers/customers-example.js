const { 
    createCustomer, 
    updateCustomer, 
    findCustomerByMail,
    findCustomerByMailAndIdentification 
} = require('../../')

const token = 'YOUR_ACCESS_TOKEN'
const customer = {
    email: 'user10@gmail.com',
    first_name: 'User',
    last_name: 'Test',
    phone: {
      area_code: '11',
      number: '12345678'
    },
    identification: {
      type: 'DNI',
      number: '11111111'
    }
}
const create = async () => {
    const response = await createCustomer(token, customer);
}

const findByEmail = async () => {
    const response = await findCustomerByMail(token, customer.email);
}

const findByEmailAndDNI = async () => {
    const response = await findCustomerByMailAndIdentification(token, customer.email, customer.identification.number);
    console.log(response)
}

const update = async () => {
    const response = await updateCustomer(token, customerId, { first_name: 'User Updated' });
}

