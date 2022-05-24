const axios = require('axios');
const URL = 'https://nft-monks-backend-prod.herokuapp.com/pools/';
// const URL = 'http://localhost:8080/pools/';
const TOKEN = '8112557887258041';

export const getPools = async () => {
  const response = await axios.get(`${URL}?authToken=${TOKEN}`);
  return response.data;
}

export const updatePool = async (_id, nfts) => {
  console.log(nfts)
  const response = await axios.patch(`${URL}${_id}?authToken=${TOKEN}`, { nfts });
  return response.data;
}