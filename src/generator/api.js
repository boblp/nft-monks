const URL = process.env.API_URL
const TOKEN = process.env.AUTH_TOKEN
const axios = require('axios')

export const getPools = async () => {
  const pools = await axios.get(URL);
  console.log(pools)

  return pools
}