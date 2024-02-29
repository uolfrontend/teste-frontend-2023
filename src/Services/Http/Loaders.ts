import Apis from './Apis';
import { CustomerApiResponseType } from './Api.types';

export const customersLoader = async (): Promise<CustomerApiResponseType> => {
  try {
    const { customers } = await Apis.getCustomers();

    if (customers) {
      return { customers };
    }
  } catch {
    return { customers: [] };
  }
};
