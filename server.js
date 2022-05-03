require("dotenv").config()
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

// server
const app = express();

const port = 3001;

// conectado a la DB
mongoose.connect(process.env.DATABASE_URL_CLOUD, {useNewUrlParser: true});
const db = mongoose.connection;

// events
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos."));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use("/tareas", require("./routes/tareas-routes"));

// Iniciar server
app.listen(port, () => console.log("El servidor esta escuchando..."));