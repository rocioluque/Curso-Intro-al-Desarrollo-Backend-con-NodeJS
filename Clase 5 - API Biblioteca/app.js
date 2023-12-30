const express = require("express");
const app = express();
app.use(express.json());

const librosRouter = require("./routes/libros");

const errorHanddler = require("./middleware/errorHanddler");

app.use("/libros", librosRouter);

app.use(errorHanddler);

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});