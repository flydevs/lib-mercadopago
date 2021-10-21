# flydev-mercadopagolib

This library provides developers with a simple set of bindings to help you integrate Mercado Pago API to a website and start receiving payments.

If this is your first time using this library, the first thing you should do is get your MercadoPago credentials from the following link https://www.mercadopago.com.ar/developers/es/guides/resources/credentials

# INSTALLATION

$ npm install flydevs-mp-lib

Copy the access_token in the credentials section of the page and replace YOUR_ACCESS_TOKEN with it.

# GETTING STARTED

In the following link we can find the repository and in it an example folder with the different use cases for the functions that currently exist

https://github.com/flydevs/lib-mercadopago

# CUSTOMERS EXAMPLES

    const { 
        createCustomer, 
        findCustomerByMail, 
        findCustomerByMailAndIdentification, 
        updatecustomer
        } = require('flydevs-mp-lib')

    const customer = {
        email: 'user@user.com',
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
        return await createCustomer(YOUR_ACCESS_TOKEN, customer);
    }

# createCustomer RESPONSE

    {
        "id": "1004238245-IZwmhfkG4h0ruj",
        "email": "test@test.com",
        "first_name": "User",
        "last_name": "Test",
        "phone": {
            "area_code": "54",
            "number": "991234567"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678900"
        },
        "address": {
            "id": null,
            "zip_code": null,
            "street_name": null,
            "street_number": null
        },
        "date_registered": null,
        "description": null,
        "date_created": "0001-01-01T00:00:00.000+00:00",
        "date_last_updated": "2021-10-21T01:37:21.194+00:00",
        "metadata": {
            "source_sync": "source_k"
        },
        "default_card": null,
        "default_address": null,
        "cards": [],
        "addresses": [],
        "live_mode": false,
        "user_id": 1004238245,
        "merchant_id": 84396693,
        "client_id": 1031414947837762,
        "status": "active"
    }

    const findByEmail = async () => {
        return await findCustomerByMail(YOUR_ACCESS_TOKEN, customer.email);
    }

# findCustomerByMail and findCustomerByMailAndIdentification RESPONSE

    {
        "paging": {
            "limit": 10,
            "offset": 0,
            "total": 1
        },
        "results": [
            {
                "address": {
                    "id": null,
                    "zip_code": null,
                    "street_name": null,
                    "street_number": null,
                    "city": null
                },
                "addresses": [],
                "cards": [],
                "date_created": "2021-10-21T01:37:21.194142979Z",
                "date_last_updated": "2021-10-21T01:37:21.194+00:00",
                "date_registered": null,
                "default_address": null,
                "default_card": null,
                "description": null,
                "email": "test@test.com",
                "first_name": "User",
                "id": "1004238245-IZwmhfkG4h0ruj",
                "identification": {
                    "type": "DNI",
                    "number": "12345678900"
                },
                "last_name": "Test",
                "live_mode": false,
                "metadata": {
                    "source_sync": "source_k"
                },
                "phone": {
                    "area_code": "54",
                    "number": "991234567"
                }
            }
        ]
    }
    const findByEmailAndDNI = async () => {
        return await findCustomerByMailAndIdentification(YOUR_ACCESS_TOKEN, customer.email, customer.identification.number);
        
    }

    const update = async () => {
        return await updatecustomer(YOUR_ACCESS_TOKEN, customerId, { first_name: 'User Updated' });
    }
# updateCustomer RESPONSE

    {
        "id": "1004238245-IZwmhfkG4h0ruj",
        "email": "test@test.com",
        "first_name": "User Updated",
        "last_name": "Test",
        "phone": {
            "area_code": "54",
            "number": "991234567"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678900"
        },
        "address": {
            "id": null,
            "zip_code": null,
            "street_name": null,
            "street_number": null
        },
        "date_registered": null,
        "description": null,
        "date_created": "0001-01-01T00:00:00.000+00:00",
        "date_last_updated": "2021-10-21T01:44:08.026+00:00",
        "metadata": {
            "source_sync": "source_k"
        },
        "default_card": null,
        "default_address": null,
        "cards": [],
        "addresses": [],
        "live_mode": false,
        "user_id": 1004238245,
        "merchant_id": 84396693,
        "client_id": 1031414947837762,
        "status": "active"
    }
# PREFERENCE

    const { 
    createPreference, 
    updatePreference
    } = require('flydevs-mp-lib')

    const preference = {
    items: [
      {
        title: 'Dummy Title',
        description: 'Dummy description',
        picture_url: 'http://www.myapp.com/myimage.jpg',
        category_id: 'cat123',
        quantity: 1,
        unit_price: 10
      }
    ],
    back_urls: {
        success: 'http://successexample.com',
        failure: 'http://failexample.com',
        pending: 'http://pendingexample.com',
    },
    external_reference: 'myref',
    payer: {
        phone: { area_code: '54', number: '1111111' },
        address: { 
            zip_code: '8400', 
            street_name: 'amancay', 
            street_number: 123 
        },
        email: 'user@user.com',
        identification: { number: '123123123', type: 'DNI' },
        name: 'User',
        surname: 'Test',
      },
      redirect_urls: {
        success: 'http://successexample.com',
        failure: 'http://failexample.com',
        pending: 'http://pendingexample.com',
    },
  }

    const create = async () => {
        return await createPreference(YOUR_ACCESS_TOKEN, preference)
    }
# createPrefrence RESPONSE 

    {
    additional_info: '',
    auto_return: '',
    back_urls: {
        failure: 'http://failexample.com',
        pending: 'http://pendingexample.com',
        success: 'http://successexample.com'
    },
    binary_mode: false,
    client_id: '1031414947837762',
    collector_id: 84396693,
    coupon_code: null,
    coupon_labels: null,
    date_created: '2021-10-21T01:50:16.955+00:00',
    date_of_expiration: null,
    expiration_date_from: null,
    expiration_date_to: null,
    expires: false,
    external_reference: 'myref',
    id: '84396693-6bf0fd21-dbb7-46ef-b0f2-9a5ca232d445',
    init_point: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=84396693-6bf0fd21-dbb7-46ef-b0f2-9a5ca232d445',
    internal_metadata: null,
    items: [
        {
        id: '',
        category_id: 'cat123',
        currency_id: 'ARS',
        description: 'Dummy description',
        picture_url: 'http://www.myapp.com/myimage.jpg',
        title: 'Dummy Title',
        quantity: 1,
        unit_price: 10
        }
    ],
    marketplace: 'NONE',
    marketplace_fee: 0,
    metadata: {},
    notification_url: null,
    operation_type: 'regular_payment',
    payer: {
        phone: { area_code: '54', number: '1111111' },
        address: { zip_code: '8400', street_name: 'amancay', street_number: '123' },
        email: 'user@user.com',
        identification: { number: '123123123', type: 'DNI' },
        name: 'User',
        surname: 'Test',
        date_created: null,
        last_purchase: null
    },
    payment_methods: {
        default_card_id: null,
        default_payment_method_id: null,
        excluded_payment_methods: [ [Object] ],
        excluded_payment_types: [ [Object] ],
        installments: null,
        default_installments: null
    },
    processing_modes: null,
    product_id: null,
    redirect_urls: { failure: '', pending: '', success: '' },
    sandbox_init_point: 'https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=84396693-6bf0fd21-dbb7-46ef-b0f2-9a5ca232d445',
    site_id: 'MLA',
    shipments: {
        default_shipping_method: null,
        receiver_address: {
        zip_code: '',
        street_name: '',
        street_number: null,
        floor: '',
        apartment: '',
        city_name: null,
        state_name: null,
        country_name: null
        }
    },
    total_amount: null,
    last_updated: null
    }
    const update = async () => {
        const item = {
            items: [
                {
                title: 'Updated Title',
                description: 'Dummy description',
                picture_url: 'http://www.myapp.com/myimage.jpg',
                category_id: 'cat123',
                quantity: 1,
                unit_price: 10
                }
            ],
        }
        return await updatePreference(YOUR_ACCESS_TOKEN, preferenceId, item)
    }
# updatePreference RESPONSE

    {
    additional_info: '',
    auto_return: '',
    back_urls: {
        failure: 'http://failexample.com',
        pending: 'http://pendingexample.com',
        success: 'http://successexample.com'
    },
    binary_mode: false,
    client_id: '1031414947837762',
    collector: {
        tags: [ 'normal', 'credits_profile', 'messages_as_seller' ],
        operator_id: null
    },
    collector_id: 84396693,
    coupon_code: null,
    coupon_labels: null,
    date_created: '2021-10-20T18:06:12.282+00:00',
    date_of_expiration: null,
    expiration_date_from: null,
    expiration_date_to: null,
    expires: false,
    external_reference: 'myref',
    headers: [],
    id: '84396693-7afe9fb6-4762-4547-ab9e-bc624afc7de2',
    init_point: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=84396693-7afe9fb6-4762-4547-ab9e-bc624afc7de2',
    internal_metadata: null,
    items: [
        {
        id: '',
        category_id: 'cat123',
        currency_id: 'ARS',
        description: 'Dummy description',
        picture_url: 'http://www.myapp.com/myimage.jpg',
        title: 'Updated Title',
        quantity: 1,
        unit_price: 10
        }
    ],
    live_mode: false,
    marketplace: 'NONE',
    marketplace_fee: 0,
    metadata: {},
    notification_url: null,
    operation_type: 'regular_payment',
    payer: {
        phone: { area_code: '54', number: '1111111' },
        address: { zip_code: '8400', street_name: 'amancay', street_number: '321' },
        email: 'pablo.calofatti1@gmail.com',
        identification: { number: '123123123', type: 'DNI' },
        name: 'pablo',
        surname: 'calofatti',
        date_created: null,
        last_purchase: null
    },
    payment_methods: {
        default_card_id: null,
        default_payment_method_id: null,
        excluded_payment_methods: [ [Object] ],
        excluded_payment_types: [ [Object] ],
        installments: null,
        default_installments: null
    },
    processing_modes: null,
    product_id: null,
    purpose: '',
    redirect_urls: { failure: '', pending: '', success: '' },
    sandbox_init_point: 'https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=84396693-7afe9fb6-4762-4547-ab9e-bc624afc7de2',
    site_id: 'MLA',
    shipments: {
        default_shipping_method: null,
        receiver_address: {
        zip_code: '',
        street_name: '',
        street_number: null,
        floor: '',
        apartment: '',
        city_name: null,
        state_name: null,
        country_name: null
        }
    },
    total_amount: 10,
    last_updated: '2021-10-21T01:52:24.737+00:00'
    }

# SUBSCRIPTION

    const { 
        createSubscription
    } = require('flydevs-mp-lib')

    const subscription = {
        back_url:'https://www.mercadopago.com.ar',
        payer_email: 'user@user.com',
        reason:'Plan Pase Mensual Gold',
        auto_recurring:{
            frequency:'1',
            frequency_type:'months',
            transaction_amount:1100,
            currency_id:'ARS',
            repetitions:12,
            free_trial:{
                frequency_type:'months',
                frequency:'1'
            }
        }
    }

    const create = async () => {
        return await createSubscription(YOUR_ACCESS_TOKEN, subscription)
    }

#  createSubscription RESPONSE
    {
        "id": "2c9380847c94e44e017c9f1e69e90d26",
        "payer_id": 449250417,
        "payer_email": "",
        "back_url": "https://www.mercadopago.com.ar",
        "collector_id": 84396693,
        "application_id": 1031414947837762,
        "status": "pending",
        "reason": "Plan Pase Mensual Gold",
        "date_created": "2021-10-20T15:12:23.015-04:00",
        "last_modified": "2021-10-20T15:12:23.017-04:00",
        "init_point": "https://www.mercadopago.com/mla/debits/new?preapproval_id=2c9380847c94e44e017c9f1e69e90d26",
        "sandbox_init_point": "https://sandbox.mercadopago.com/mla/debits/new?preapproval_id=2c9380847c94e44e017c9f1e69e90d26",
        "auto_recurring": {
            "frequency": 1,
            "frequency_type": "months",
            "transaction_amount": 1100,
            "currency_id": "ARS",
            "end_date": "2022-10-20T15:12:23.015-04:00"
        },
        "payment_method_id": null
    }
