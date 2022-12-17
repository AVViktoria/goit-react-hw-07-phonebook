import axios from 'axios';

axios.defaults.baseURL = 'https://6392d77bab513e12c5fab7c2.mockapi.io';
// export async function fetchContacts() {
//   const { data } = await axios.get('/contacts/:id');
//   return data;
//   // console.log(data);
// }

// export async function addContact() {
//   const { data } = await axios.post('/contacts');
//   return data;
// }
// export async function deleteContact() {
//   const { data } = await axios.delete('/contacts/:id');
//   return data;
// }
//* fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
//* addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
//* deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".
export const getContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log('get contact', data);
    return data;
  } catch (error) {
    return error.message;
  }
};
export const postContacts = async contact => {
  try {
    const { data } = await axios.post('/contacts', { ...contact });
    console.log('add contact', data);
    return data;
  } catch (error) {
    return error.message;
  }
};
export const deleteContacts = async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    console.log('del contact', data);
    // return data;
    return data.id;
  } catch (error) {
    return error.message;
  }
};
