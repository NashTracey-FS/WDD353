const axios = require ('axios');
require('dotenv').config();

const  geRegistrationn= async (data) =>{
   return await axios.post(process.env.service_url, data);
}

module.exports = getRegistration;