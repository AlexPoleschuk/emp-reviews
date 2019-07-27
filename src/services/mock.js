import axios from 'axios';

export default async () => {
  const response = await axios.get(
    'http://employees-reviews.mocklab.io/employees',
  );

  return response.data;
};
