import SparkMD5 from 'spark-md5';

export default (email) => {
  const hash = SparkMD5.hash(email.trim().toLowerCase());

  return `https://www.gravatar.com/avatar/${hash}`;
};
