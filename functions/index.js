const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Crear y desplegar tu primera función
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
