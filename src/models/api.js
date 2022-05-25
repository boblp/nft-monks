const axios = require('axios');
const URL = process.env.REACT_APP_API_URL;
const TOKEN = process.env.REACT_APP_AUTH_TOKEN;

export const getPools = async () => {
  const response = await axios.get(`${URL}?authToken=${TOKEN}`);
  return response.data;
}

export const updatePool = async (_id, nfts) => {
  const response = await axios.patch(`${URL}${_id}?authToken=${TOKEN}`, { nfts });
  return response.data;
}