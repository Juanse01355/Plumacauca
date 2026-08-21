// Estructura de datos del usuario autenticado con Google
export class User {
  constructor({ googleId, name, email, picture }) {
    this.googleId = googleId || null;
    this.name = name || '';
    this.email = email || '';
    this.picture = picture || '';
    this.createdAt = new Date().toISOString();
  }

  toJSON() {
    return {
      googleId: this.googleId,
      name: this.name,
      email: this.email,
      picture: this.picture,
      createdAt: this.createdAt,
    };
  }
}