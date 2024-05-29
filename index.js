const server = require('./server')
const {conn} = require('./DB_connection')

const PORT = 3001
const axios = require('axios');
const dot = require('dotenv')

dot.config()
axios.defaults.baseURL = 'http://localhost:3001'; //*establece la URL base para todas las solicitudes realizadas con la biblioteca Axios

    conn.
    sync({ force: true })
    .then(() => {
      server.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
      });
    });