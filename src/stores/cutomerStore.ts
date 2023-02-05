import { writable, get, type Writable } from 'svelte/store';

export interface CustomerData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface CustomerStore {
  customers: Writable<CustomerData[]>;
  addCustomer(customer: CustomerData): void;
  updateCustomerById(id: string, updatedData: CustomerData): void;
  filterById(id: string): CustomerData;
  filterByName(name: string): CustomerData[];
  removeCustomerById(id: string): void;
}

export const customerStore1 = (() => {
  const { subscribe, update } = writable<CustomerData[]>([]);
  const add = (customer: CustomerData) => update($store => [...$store, customer]);
  const updateById = (id: string, updated: CustomerData) => update($store => 
    $store.map(c => c.id === id ? ({ ...c, ...updated }) : c)
  );
  const removeById = (id: string) => update($store => 
    $store.filter(c => c.id !== id)
  );
  return {
    subscribe,
    add,
    updateById,
    removeById
  }
})();

export const customerStore: CustomerStore = {
  customers: writable([]),
  addCustomer(customer: CustomerData) {
    const customers = get(customerStore.customers);
    customers.push(customer);
    customerStore.customers.set(customers);
  },
  updateCustomerById(id: string, updatedData: CustomerData) {
    const customers = get(customerStore.customers);
    const index = customers.findIndex(customer => customer.id === id);
    if (index === -1) {
      console.error(`Customer with id ${id} not found`);
      return;
    }
    customers[index] = { ...customers[index], ...updatedData };
    customerStore.customers.set(customers);
  },
  filterById(id: string) {
    const customers = get(customerStore.customers);
    return customers.filter(customer => customer.id === id)[0];
  },
  filterByName(name: string) {
    const customers = get(customerStore.customers);
    return customers.filter(customer => customer.name.includes(name));
  },
  removeCustomerById(id: string) {
    const customers = get(customerStore.customers);
    const index = customers.findIndex(customer => customer.id === id);
    if (index === -1) {
      console.error(`Customer with id ${id} not found`);
      return;
    }
    customers.splice(index, 1);
    customerStore.customers.set(customers);
  },
};



