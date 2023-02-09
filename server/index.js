const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: false, alter: false }).then(async () => {
  server.listen(3001, () => {
    console.log("Servidor levantado en el puerto 3001");
  });
});
