import { User } from '../models/User.js';

// Verifica el token de Google y crea/retorna el usuario
export function verifyGoogleToken(token) {
  // En desarrollo, extraemos la información si viene decodificada
  // En producción, aquí se validaría con Google TokenInfo
  return new Promise((resolve) => {
    try {
      // Base64 decode del payload del ID Token (formato JWT)
      const payload = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64url').toString()
      );

      const user = new User({
        googleId: payload.sub,
        name: payload.name || '',
        email: payload.email || '',
        picture: payload.picture || '',
      });

      resolve(user);
    } catch (error) {
      // Si no se puede decodificar, retornar un usuario con los datos si vienen en el body
      resolve(null);
    }
  });
}

export default { verifyGoogleToken };