<<<<<<< HEAD
const server = require('./src/app.js');
const { conn } = require('./src/db.js');


conn.sync().then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001');
  });
});
=======
require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env || 3001;

// Sync the database and start the server
conn.sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening at ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
    if (err.parent) {
      console.error('Parent error:', err.parent);
    }
  }); 
>>>>>>> 5c2dd52033de96aa9642e7bebe0904837098ff60
