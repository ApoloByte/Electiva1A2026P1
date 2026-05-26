# Retos Electiva 5 - React Repaso

Tres proyectos React + TypeScript con Vite. Monorepo gestionado con **pnpm**.

## Requisito: instalar pnpm

Si aún no lo tienes:

```bash
npm install -g pnpm
```

O con Corepack (incluido en Node.js 16+):

```bash
corepack enable
corepack prepare pnpm@10.0.0 --activate
```

## Instalación y ejecución

Desde la raíz del repositorio (instala los tres retos):

```bash
pnpm install
```

Ejecutar un reto:

```bash
pnpm dev:1   # reto-1-react-repaso
pnpm dev:2   # reto-2-react-repaso
pnpm dev:3   # reto-3-react-repaso
```

O dentro de una carpeta concreta:

```bash
cd reto-1-react-repaso
pnpm install
pnpm dev
```

Compilar todos:

```bash
pnpm build
```

## Proyectos

| Carpeta | Descripción |
|---------|-------------|
| `reto-1-react-repaso` | Lista de animales con `useState`, `map`, operador ternario para `isPet`, fetch a `/animals` |
| `reto-2-react-repaso` | `ImageManager` con galería desde `/list-images` |
| `reto-3-react-repaso` | Catálogo de productos con interfaces `Category` y `Product`, fetch a `/products` |
