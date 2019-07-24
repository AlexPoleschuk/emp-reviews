import axios from 'axios';

export default async () => {
  const responce = await axios.get(
    'http://employees-reviews.mocklab.io/employees',
  );

  return responce.data;
};
