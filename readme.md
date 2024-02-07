# Nombre del Proyecto

Este proyecto es una aplicación web de ejemplo que utiliza Node.js, Express.js, Prisma, React, Vite y Tailwind CSS.

Realizar un CRUD de usuarios y registro de tarjetas habientes de los usuarios.

## Requisitos

- Node.js
- MongoDB (local o en la nube)
- Prisma CLI
- Vite

## Tecnologías Utilizadas

- [Node.js](https://nodejs.org/): Utilizado en el backend para ejecutar el servidor y manejar las solicitudes HTTP.
- [Express.js](https://expressjs.com/): Utilizado en el backend para manejar las rutas y los endpoints de la API.
- [Prisma](https://www.prisma.io/): Utilizado en el backend para manejar la base de datos.
- [React](https://reactjs.org/): Utilizado en el frontend para construir la interfaz de usuario.
- [Vite](https://vitejs.dev/): Utilizado en el frontend para el bundling y el desarrollo en caliente.
- [Tailwind CSS](https://tailwindcss.com/): Utilizado en el frontend para el diseño y estilos.
- [TypeScript](https://www.typescriptlang.org/): Utilizado en todo el proyecto para el tipado estático.
- [TRPC](https://trpc.io/): Utilizado en el backend para manejar las solicitudes y respuestas de la API.

## Estructura del Proyecto

El proyecto se divide en dos partes principales: el backend y el frontend.

### Backend

El backend se encuentra en la carpeta [backend](backend/). Contiene el servidor Express en [server.ts](backend/src/server.ts) y las rutas en [routes](backend/src/routes/). La configuración de la base de datos se encuentra en [schema.prisma](backend/prisma/schema.prisma).

- Se ejecuta en http://localhost:4000.

### Frontend

El frontend se encuentra en la carpeta [frontend](frontend/). El punto de entrada principal es [main.tsx](frontend/src/main.tsx). Los componentes de React se encuentran en [components.json](frontend/components.json) y las rutas en [routes](frontend/src/routes/).

- Se ejecuta en http://localhost:5173.

## Cómo Ejecutar el Proyecto

Para ejecutar el backend, navega a la carpeta backend y ejecuta:

```sh
pnpm install
pnpm dev 
```
## Validaciones

- Se realizan validaciones en el backend y en el frontend utilizando Zod y React Hook Form.

## TODO

- [ ] Agregar pruebas unitarias y de integración.
- [ ] Agregar autenticación y autorización.
- [ ] Agregar paginación y filtros.
- [ ] Agregar notificaciones y mensajes de error.
- [ ] Mejorar arquitectura hexagonal.
- [ ] Mejorar componentes y estilos.

## Autor

- [Bryan Grados](https://github.com/BryanGrados)