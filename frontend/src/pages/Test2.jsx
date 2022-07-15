import axios from 'axios';

const Test2 = () => {
  const obj = { name: 'kjb', age: '28' };
  axios.post('/api/test2', obj);
  return '';
}

export default Test2;