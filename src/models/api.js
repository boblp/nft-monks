const axios = require('axios');
const URL = 'https://nft-monks-backend-prod.herokuapp.com/pools/';
// const URL = 'http://localhost:8080/pools/';

export const getPools = async () => {
  const response = await axios.get(`${URL}?authToken=${process.env.REACT_APP_TOKEN}`);
  return response.data;
}

export const updatePool = async (_id, nfts) => {
  const response = await axios.patch(`${URL}${_id}?authToken=${process.env.REACT_APP_TOKEN}`, { nfts });
  return response.data;
}