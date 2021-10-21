const { 
    createPreference, 
    updatePreference
} = require('../../')
const token = 'YOUR_ACCESS_TOKEN'

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
    const response = await createPreference(token, preference)
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
    const response = await updatePreference(token, preferenceId, item)
  }

