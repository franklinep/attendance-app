const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// Conectar a MongoDB
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Conectado a la base de datos MongoDB.");
})
.catch(err => {
  console.log("No se pudo conectar a la base de datos MongoDB.", err);
  process.exit();
});

db.user = require("./user.model.js")(mongoose);
db.laboratory = require("./laboratory.model.js")(mongoose);
db.attendance = require("./attendance.model.js")(mongoose);

module.exports = db;