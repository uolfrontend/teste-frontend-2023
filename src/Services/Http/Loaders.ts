import Apis from './Apis';
import { CustomerApiResponseType } from './Api.types';

export const customersLoader = async (): Promise<CustomerApiResponseType> => {
  const { customers } = await Apis.getCustomers();

  return { customers };
};
