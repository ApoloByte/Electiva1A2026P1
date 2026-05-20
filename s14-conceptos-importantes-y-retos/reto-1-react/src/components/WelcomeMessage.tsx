
interface WelcomeProps {
  name?: string; // El signo '?' hace que el nombre sea opcional
}

export const WelcomeMessage: React.FC<WelcomeProps> = ({ name = "Usuario" }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>¡Bienvenido al sistema, {name}!</h1>
      <p style={styles.text}>Que tengas buen dia.</p>
    </div>
  );
};

// Unos estilos rápidos para que no se vea plano
const styles = {
  container: {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f0f2f5',
    textAlign: 'center' as const,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
  },
  title: {
    color: '#0070f3',
    margin: '0 0 10px 0',
  },
  text: {
    color: '#333',
    fontSize: '16px',
  },
};