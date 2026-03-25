const Database = require('better-sqlite3');

const db = new Database('../base_datos.db');

db.exec(`
CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL,
    imagen TEXT
);

CREATE TABLE IF NOT EXISTS carrito (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    producto_id INTEGER,
    cantidad INTEGER,
    FOREIGN KEY(producto_id) REFERENCES productos(id)
);
`);

const count = db.prepare("SELECT COUNT(*) as total FROM productos").get();

if (count.total === 0) {
    const insert = db.prepare("INSERT INTO productos (nombre, precio, imagen) VALUES (?, ?, ?)");

    const productos = [
    [
        'Nike Air Max',
        350000,
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80'
    ],
    [
        'Air Jordan 11 Retro Low',
        420000,
        'https://nikeco.vtexassets.com/arquivos/ids/915152-500-500?v=638983795524130000'
    ],
    [
        'Puma RS-X',
        300000,
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&auto=format&fit=crop&q=80'
    ],
    [
        'New Balance 574',
        280000,
        'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=400&auto=format&fit=crop&q=80'
    ],
    [
        'Air Jordan 1 Mid',
        784950,
        'https://nikeco.vtexassets.com/arquivos/ids/912635-800-auto?v=638978684407570000&width=800&height=auto&aspect=true'
    ]
];

    const transaccion = db.transaction((data) => {
        data.forEach(p => insert.run(p));
    });

    transaccion(productos);
}

module.exports = db;