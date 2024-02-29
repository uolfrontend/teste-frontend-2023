import { CustomerApiResponseType } from './Api.types';
import MockCustomers from './mocks/customers.mock.json';

const baseRootApi = process.env.REACT_APP_API_URL;
const customersApi = '/customers.json';

const getCustomers = async (): Promise<CustomerApiResponseType> => {
  try {
    const response = await fetch(baseRootApi + customersApi, {
      mode: 'navigate', // Inseguro, mas para fins demonstrativos
      referrerPolicy: 'no-referrer-when-downgrade',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (error) {
    return MockCustomers;
  }
};

const Apis = {
  getCustomers,
};

export default Apis;
