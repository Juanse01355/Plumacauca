import React from 'react';
import GoogleLogin from '../components/auth/GoogleLogin.jsx';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>PlumaCauca</h1>
        <p>Inicia sesión para continuar</p>
        <GoogleLogin onSuccess={() => (window.location.href = '/mapa')} />
      </div>
    </div>
  );
}

export default LoginPage;