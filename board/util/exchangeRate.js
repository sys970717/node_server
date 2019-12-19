const axios = require('axios');

module.exports = async (options) => {
  console.log('options > ', `${options.url}${options.path}`);
  try {
    return await axios.get(`${options.url}${options.path}${options.params}`, {

    });
  } catch (err) {
    console.error('err > ', err);
  }
};
