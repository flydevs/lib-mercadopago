const { 
    createSubscription
} = require('../../')
const token = 'YOUR_ACCESS_TOKEN'

const subscription = {
	back_url:'https://www.mercadopago.com.ar',
    payer_email: 'pablo.calofatti1@gmail.com',
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
    const response = await createSubscription(token, subscription)
}
