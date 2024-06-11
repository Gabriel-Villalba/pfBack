const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const port = process.env.PORT|| 3000
// Sync the database and start the server
conn.sync()
  .then(() => {
    server.listen(port, () => {
      console.log('Server listening at 3001');
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
    if (err.parent) {
      console.error('Parent error:', err.parent);
    }
  }); 