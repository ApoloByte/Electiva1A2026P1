import React from 'react';

const Bienvenida: React.FC = () => {
  return (
    <div style={styles.contenedor}>
      <h1 style={styles.titulo}>¡Te damos la bienvenida! 👋</h1>
      <p style={styles.texto}>Nos alegra mucho tenerte de vuelta por aquí.</p>
    </div>
  );
};

const styles = {
  contenedor: {
    padding: '24px',
    borderRadius: '12px',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    fontFamily: 'system-ui, sans-serif',
    maxWidth: '400px',
    margin: '16px auto',
    textAlign: 'center' as const, // TypeScript necesita 'as const' para estilos específicos
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  titulo: {
    margin: '0 0 8px 0',
    color: '#111827',
    fontSize: '24px',
  },
  texto: {
    margin: '0',
    color: '#4b5563',
    fontSize: '16px',
  },
};

export default Bienvenida;