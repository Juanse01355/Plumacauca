export function notFoundHandler(req, res, next) {
  res.status(404).json({
    message: 'Ruta no encontrada',
    path: req.originalUrl,
  });
}

export function errorHandler(err, req, res, next) {
  console.error('Error del servidor:', err);

  res.status(err.status || 500).json({
    message: err.message || 'Error interno del servidor',
    error: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
}