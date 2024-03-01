/**
 * Dá para melhorar bastante este arquivo,
 * separando em arquivos e criando múltiplas instâncias e reuso do fetch
 * Veja: https://github.com/hfisaquiel/js-service-proxy-scaffold/tree/master/Services/Http
 */

import { CustomerApiResponseType } from './Api.types';

/**
 * Tive de criar um trabalho em volta ou solução de contorno (vulga gambiarra)
 * para poder o navegador não bloquear as requisições
 */
const withProxy = process.env.REACT_APP_PROXY_API_ENABLED;

const baseRootApi = withProxy
  ? process.env.REACT_APP_PROXY_API_URL
  : process.env.REACT_APP_API_URL;

const customersApi = '/customers.json';

const getCustomers = async (): Promise<CustomerApiResponseType> => {
  try {
    const response = await fetch(baseRootApi + customersApi, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (error) {
    return { customers: [] };
  }
};

const Apis = {
  getCustomers,
};

export default Apis;
