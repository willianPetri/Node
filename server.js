const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require("require-dir");

//iniciando o app
const app = express();
// para permitir que envia requisição do tipo json
app.use(express.json());
app.use(cors());


// iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir("./src/models");
// require('./src/models/Product');


// Recebe todas as requisições(POST, GET, PUT, DELETE)
app.use("/api", require("./src/routes"));



app.listen(3001);