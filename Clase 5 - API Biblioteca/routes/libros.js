const express = require("express");
const router = express.Router();

const Libro = require("../models/Libro");

// Obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

//Crear un nuevo libro
router.post("/", async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el libro" });
  }
});

//Actualizar un libro
router.put("/:id", async (req, res) => {
  try {
    const libros = await Libro.findByIdAndUpdate(req.params.id, req.body, {new: true });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Libro" });
  }
});

//Eliminar un libro
router.delete("/:id", async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
});

module.exports = router;
