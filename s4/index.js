const express = require("express");
const app = express();

app.use(express.json());

let productos = [
  { id: 1, nombre: "Laptop", precio: 2500 },
  { id: 2, nombre: "Mouse", precio: 50 }
];
app.get("/productos", (req, res) => {
  res.json(productos);
});

app.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ mensaje: "Nombre y precio obligatorios" });
  }

  const nuevo = {
    id: productos.length + 1,
    nombre,
    precio
  };

  productos.push(nuevo);

  res.status(201).json(nuevo);
});

app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;

  const producto = productos.find(p => p.id == id);

  if (!producto) {
    return res.status(404).json({ mensaje: "No encontrado" });
  }

  producto.nombre = nombre;
  producto.precio = precio;

  res.json(producto);
});

app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;

  productos = productos.filter(p => p.id != id);

  res.json({ mensaje: "Eliminado" });
});

app.get("/hello/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}!`);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});