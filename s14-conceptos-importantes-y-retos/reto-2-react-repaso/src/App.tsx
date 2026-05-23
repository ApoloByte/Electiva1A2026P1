import ImageManager from './components/ImageManager';

function App() {
  return (
    <div style={styles.pantalla}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Mi Galería App</h1>
      </header>

      <main style={styles.contenido}>
        <ImageManager />
      </main>
    </div>
  );
}

const styles = {
  pantalla: {
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
    margin: 0,
    fontFamily: 'system-ui, sans-serif'
  },
  header: {
    backgroundColor: '#0f172a',
    padding: '20px',
    textAlign: 'center' as const
  },
  logo: {
    margin: 0,
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '600' as const
  },
  contenido: {
    padding: '20px'
  }
};

export default App;