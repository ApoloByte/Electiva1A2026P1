require("dotenv").config();
const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* =====================
PRODUCTOS
===================== */

app.get("/products",(req,res)=>{

const products = db.prepare("SELECT * FROM products").all();

res.json(products);

});

app.get("/products/:id",(req,res)=>{

const id = req.params.id;

const product = db.prepare(
"SELECT * FROM products WHERE id=?"
).get(id);

res.json(product);

});

/* =====================
CARRITO
===================== */

app.get("/cart",(req,res)=>{

const items = db.prepare(`
SELECT
cart_items.id,
products.name,
products.price,
cart_items.quantity,
(products.price * cart_items.quantity) as subtotal
FROM cart_items
JOIN products ON products.id = cart_items.product_id
`).all();

const total = items.reduce((acc,item)=> acc + item.subtotal,0);

res.json({
items,
total
});

});

app.post("/cart",(req,res)=>{

const {productId,quantity} = req.body;

const existing = db.prepare(`
SELECT * FROM cart_items WHERE product_id = ?
`).get(productId);

if(existing){

db.prepare(`
UPDATE cart_items
SET quantity = quantity + ?
WHERE product_id = ?
`).run(quantity,productId);

}else{

db.prepare(`
INSERT INTO cart_items (product_id,quantity)
VALUES (?,?)
`).run(productId,quantity);

}

res.json({message:"Producto agregado al carrito"});

});

app.delete("/cart/:id",(req,res)=>{

const id = req.params.id;

db.prepare(`
DELETE FROM cart_items WHERE id = ?
`).run(id);

res.json({message:"Item eliminado"});

});

app.listen(process.env.PORT,()=>{

console.log("Servidor corriendo en puerto",process.env.PORT);

});