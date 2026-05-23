// src/styles/productStyles.ts
export const productStyles = {
  container: {
    padding: '20px',
    fontFamily: 'Segoe UI, Roboto, sans-serif',
    backgroundColor: '#fafafa',
    minHeight: '100vh',
  },
  mainTitle: {
    textAlign: 'center' as const,
    color: '#333',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column' as const,
    borderLeft: '5px solid #0070f3'
  },
  image: {
    width: '100%',
    height: '140px',
    objectFit: 'cover' as const,
    borderRadius: '4px',
    marginBottom: '15px',
  },
  title: { margin: '0 0 10px 0', color: '#111' },
  text: { margin: '4px 0', fontSize: '14px', color: '#444' },
};