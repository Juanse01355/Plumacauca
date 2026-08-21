import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import mapRoutes from './routes/mapRoutes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas API
app.use('/api/auth', authRoutes); // API 1: Login con Google
app.use('/api/map', mapRoutes);   // API 2: Mapa navegable

// Ruta de salud
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Manejo de errores
app.use(notFoundHandler);
app.use(errorHandler);

export default app;