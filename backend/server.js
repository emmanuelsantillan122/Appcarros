const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require("cors");
const carRoutes = require("./router/carRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Conectado a la base de datos de Atlas");
  } catch (error) {
    console.error(error);
  }
};

connectDB();
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api', carRoutes);

// Listen on PORT
app.listen(PORT, () => {
  console.log(`El servidor está en funcionamiento en el puerto ${PORT}`);
});

console.log('Servidor Up');
