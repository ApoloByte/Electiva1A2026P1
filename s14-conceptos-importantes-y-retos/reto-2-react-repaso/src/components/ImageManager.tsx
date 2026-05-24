import { useState, useEffect } from 'react'

export const ImageManager = () => {
    const [images, setImages] = useState<string[] | undefined>(undefined);

    const fetchImageList = async () => {
        try {
            const response = await fetch('https://electiva5-api.apolobyte.top/list-images');
            const data = await response.json();
            const listadoImagenes: string[] = Array.isArray(data) ? data : data.images || [];
            setImages(listadoImagenes);
        } catch (error) {
            console.error('Error al cargar la lista de imágenes:', error);
            setImages([]); 
        }
    };

    useEffect(() => {
        fetchImageList();
    }, []);

    const baseUrl = 'https://electiva5-api.apolobyte.top/uploads/';

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>SOLUCION RETO 2 REACT XD</h1>
            <h2>Administrador de imágenes</h2>

            {images === undefined ? (
                <p>Cargando imágenes...</p>
            ) : (
                <ul>
                    {images.map((imgName, index) => (
                        <li key={index} style={{ marginBottom: '20px', listStyleType: 'disc' }}>
                            <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                                {imgName}
                            </span>

                            <img
                                src={`${baseUrl}${imgName}`}
                                alt={imgName}
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', display: 'block' }}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
