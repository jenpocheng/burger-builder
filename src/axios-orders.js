import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactjs-my-burger.firebaseio.com/'
});

export default instance;