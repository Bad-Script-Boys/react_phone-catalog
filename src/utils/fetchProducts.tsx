import { Product } from '../types';
import { Device } from '../types/Device';

/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = '/react_phone-catalog/api/';

// returns a promise resolved after a given delay
function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export function request<T>(url: string): Promise<T> {
  return wait(500)
    .then(() => fetch(BASE_URL + url))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const getProducts = (): Promise<Product[]> => {
  return request<Product[]>('products.json');
};

export const getDevices = (url: string): Promise<Device[]> => {
  return request<Device[]>(url + '.json');
};
