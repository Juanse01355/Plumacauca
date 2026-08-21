import { verifyGoogleToken } from '../services/authService.js';

// POST /api/auth/google
// Recibe el token de Google y devuelve la información del usuario
export async function googleLogin(req, res) {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'El token de Google es requerido',
    });
  }

  try {
    const user = await verifyGoogleToken(token);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Token de Google inválido o no se pudo decodificar',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Login con Google exitoso',
      data: user.toJSON(),
    });
  } catch (error) {
    console.error('Error en login con Google:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
    });
  }
}