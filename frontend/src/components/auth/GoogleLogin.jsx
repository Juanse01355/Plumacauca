import React, { useEffect, useState } from 'react';

function GoogleLogin({ onSuccess, compact = false }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsLoading(false);
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });
        window.google.accounts.id.renderButton(
          document.getElementById('google-login-button'),
          {
            theme: 'outline',
            size: 'large',
            text: 'continue_with',
            shape: compact ? 'pill' : 'rectangular',
            width: compact ? 200 : undefined,
          }
        );
      }
    };
    script.onerror = () => {
      setIsLoading(false);
      setError('Error al cargar Google Identity Services');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      // Enviar el token al backend (API 1: auth)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: response.credential }),
      });

      const data = await res.json();

      if (data.success && onSuccess) {
        onSuccess(data.data);
      } else {
        setError(data.message || 'Error en la autenticación');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className={`google-login ${compact ? 'google-login-compact' : ''}`}>
      {isLoading && <p>Cargando...</p>}
      {error && <p className="error-message">{error}</p>}
      <div id="google-login-button"></div>
    </div>
  );
}

export default GoogleLogin;