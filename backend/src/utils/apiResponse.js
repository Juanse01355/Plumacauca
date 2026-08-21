export function successResponse(res, data, message = 'Operación exitosa', status = 200) {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
}

export function errorResponse(res, message = 'Error interno', status = 500, errors = null) {
  return res.status(status).json({
    success: false,
    message,
    ...(errors && { errors }),
  });
}