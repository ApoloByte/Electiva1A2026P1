const Database = require('better-sqlite3');
const db = new Database('tienda.db'); // Crea el archivo tienda.db

//Crear tablas
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  );
`);

//Insertar poroductos
const row = db.prepare('SELECT COUNT(*) as count FROM products').get();

if (row.count === 0) {
    const insert = db.prepare('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)');
    
    const productosIniciales = [
        ['Teclado Mecánico', 100.00, 'https://m.media-amazon.com/images/I/71P5eKh8sVL._AC_UF894,1000_QL80_.jpg'],
        ['Mouse Gamer', 50.00, 'https://www.pcware.com.co/wp-content/uploads/2023/12/M690PRO-R2BK_002-1200x675.jpg'],
        ['Monitor 27 Pulgadas"', 199.00, 'https://gamerscolombia.com/cdn/shop/files/132.png?v=1757629137&width=1024'],
        ['Base MultiDireccional Para POrtatil', 45.00, 'https://jaltechsas.com/wp-content/uploads/2023/10/SOPORTE-GIRATORIO-PARA-PORTATIL_80288_AL8_3-600x600.png'],
        ['Portatil Asus laptop', 500.00, 'https://www.asus.com/media/global/gallery/bZB3PS4W8nGgNpDr_setting_xxx_0_90_end_2000.png']
    ];

    for (const p of productosIniciales) {  //inserta los productos uno a uno
        insert.run(p[0], p[1], p[2]);
    }
    console.log("Productos iniciales insertados.");
}

module.exports = db; //exporta la base de datos lo que permite usarla en otros archivos