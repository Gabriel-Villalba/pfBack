const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Sync the database and start the server
conn.sync({force: true})
  .then(() => {
    server.listen(3001, () => {
      console.log('Server listening at 3001');
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
    if (err.parent) {
      console.error('Parent error:', err.parent);
    }
  });