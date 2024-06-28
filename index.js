require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;

// console.log('Environment Variables:', process.env);
// console.log('Current Directory:', __dirname);
// Sync the database and start the server
//Probando con cambios para subir a nueva
conn
  .sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening at ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
    if (err.parent) {
      console.error("Parent error:", err.parent);
    }
  });
