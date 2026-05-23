import React, { useState, useEffect } from 'react';

// Interfaz para validar la respuesta del servidor
interface ApiResponse {
  images: string[];
}

const ImageManager: React.FC = () => {
  // 1. useState para almacenar la lista de URLs de las imágenes
  const [images, setImages] = useState<string[] | undefined>(undefined);
  
  // Estado para controlar la pantalla de carga visual
  const [cargando, setCargando] = useState<boolean>(true);

  // 2. Función asíncrona para hacer el fetch al endpoint
  const fetchImageList = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch('https://electiva5-api.apolobyte.top/list-images');
      const resultado: ApiResponse = await respuesta.json();
      
      const rutaBase = 'https://electiva5-api.apolobyte.top/uploads/';
      
      // Mapeamos el arreglo de nombres para construir las URLs completas
      const urlsCompletas = resultado.images.map((nombreImagen) => {
        return `${rutaBase}${nombreImagen}`;
      });
      
      setImages(urlsCompletas);
    } catch (error) {
      console.error("Error al obtener la lista de imágenes:", error);
    } finally {
      setCargando(false);
    }
  };

  // 3. useEffect para ejecutar la función una sola vez al cargar el componente
  useEffect(() => {
    fetchImageList();
  }, []); 

  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>🖼️ Administrador de Imágenes</h2>
      <p style={styles.subtitulo}>Lista de archivos cargados desde el servidor</p>

      {cargando ? (
        <div style={styles.mensajeEstado}>
          <p>Cargando imágenes desde el servidor...</p>
        </div>
      ) : images === undefined || images.length === 0 ? (
        <div style={styles.estadoVacio}>
          <p>No se encontraron imágenes en el servidor.</p>
        </div>
      ) : (
        /* 4. LISTADO UTILIZANDO LA FUNCIÓN MAP DENTRO DE ETIQUETAS <ul> Y <li> */
        <ul style={styles.lista}>
          {images.map((url, index) => {
            // Obtenemos solo el nombre del archivo cortando la URL por la última diagonal
            const nombreArchivo = url.split('/').pop();

            return (
              <li key={index} style={styles.itemLista}>
                <div style={styles.infoImagen}>
                  <span style={styles.numero}>#{index + 1}</span>
                  <span style={styles.nombreTexto}>{nombreArchivo}</span>
                </div>
                <img 
                  src={url} 
                  alt={nombreArchivo} 
                  style={styles.imagenMiniatura} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/60?text=Error';
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

// Estilos en línea para adaptar el diseño en forma de lista limpia
const styles = {
  contenedor: {
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    maxWidth: '600px',
    margin: '20px auto',
    fontFamily: 'system-ui, sans-serif',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
  },
  titulo: {
    margin: '0 0 4px 0',
    color: '#0f172a',
    textAlign: 'center' as const,
    fontSize: '24px'
  },
  subtitulo: {
    margin: '0 0 24px 0',
    color: '#64748b',
    textAlign: 'center' as const,
    fontSize: '14px'
  },
  mensajeEstado: {
    textAlign: 'center' as const,
    color: '#64748b',
    padding: '40px 0'
  },
  estadoVacio: {
    padding: '40px 20px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: '2px dashed #cbd5e1',
    textAlign: 'center' as const,
    color: '#475569'
  },
  lista: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px'
  },
  itemLista: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  infoImagen: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  numero: {
    fontWeight: 'bold' as const,
    color: '#3b82f6',
    fontSize: '14px'
  },
  nombreTexto: {
    color: '#334155',
    fontSize: '15px',
    fontWeight: '500' as const,
    wordBreak: 'break-all' as const
  },
  imagenMiniatura: {
    width: '60px',
    height: '60px',
    objectFit: 'cover' as const,
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#e2e8f0'
  }
};

export default ImageManager;