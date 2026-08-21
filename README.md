# PlumaCauca

Breve descripción del proyecto: qué hace, para quién es y qué problema resuelve.

## Tecnologías utilizadas

### Frontend
- **React 18** — librería para construir la interfaz de usuario
- **Vite** — bundler y servidor de desarrollo
- **React Router DOM** — navegación entre páginas
- **Leaflet** + **React Leaflet** — mapas interactivos

### Backend
- **Node.js** + **Express** — servidor y API REST
- **CORS** — habilita peticiones desde el frontend
- **dotenv** — manejo de variables de entorno
- **Nodemon** *(solo en desarrollo)* — reinicia el servidor automáticamente al detectar cambios

## Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- npm (viene con Node.js) o yarn

## Instalación

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

> Ajusta las rutas `frontend` / `backend` según cómo esté organizado el proyecto (monorepo, carpetas separadas, etc).

## Variables de entorno

Crea un archivo `.env` en la carpeta del **backend** con el siguiente contenido (ajusta los valores a tu entorno):

```env
PORT=4000
DATABASE_URL=tu_url_de_base_de_datos
CORS_ORIGIN=http://localhost:5173
```

Si el **frontend** necesita variables (por ejemplo la URL de la API), crea un `.env` en esa carpeta usando el prefijo que exige Vite:

```env
VITE_API_URL=http://localhost:4000
```

## Cómo ejecutar el proyecto

### 1. Levantar el backend

```bash
cd backend
npm run dev
```

El servidor quedará escuchando en el puerto configurado (por defecto `http://localhost:4000`).

### 2. Levantar el frontend

En otra terminal:

```bash
cd frontend
npm run dev
```

Vite mostrará la URL local (normalmente `http://localhost:5173`) donde puedes ver la aplicación.

## Iniciar sesión / probar el login

- URL de login: `http://localhost:5173/login`
- Usuario de prueba: `demo@ejemplo.com`
- Contraseña de prueba: `demo123`

> Reemplaza estos datos por credenciales de prueba reales (nunca uses credenciales de producción aquí).

## Estructura del proyecto

plumacauca/
├── frontend/ # Aplicación React + Vite
├── backend/ # API en Node.js + Express
└── README.md