import { useState, useEffect } from 'react'

export const ImageManager = () => {
    const [images, setImages] = useState<string[] | undefined>(undefined);
    const fetchImagesList = async () => {
        try {
            const response = await fetch('https://electiva5-api.apolobyte.top/list-images');
            const data = await response.json();
            const listadoImagenes: string[] = Array.isArray(data) ? data : data.images || [];
            setImages(listadoImagenes);
        } catch (error) {
            console.error('Error al cargar las imagenes', error);
            setImages([]);
        }

    };

    useEffect(() => {
        fetchImagesList();
    }, []);
    const baseUrl = 'https://electiva5-api.apolobyte.top/uploads/';


    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1> Solucion reto 2 REACT</h1>
            <h2>Galeria de Imagenes</h2>
            <h3>Lista de Imagenes</h3>

            {images === undefined ? (
                <p>Cargando Imagenes. . . </p>
            ) : (
                <ul>
                    {images.map((image, index) => (
                        <li key={index} style={{ marginBottom: '20px', listStyleType: 'disc' }}>
                            <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                                {image}
                            </span>

                            <img src={`${baseUrl}${image}`}
                                alt={image}
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', display: 'block' }}
                            />
                        </li>
                    ))}

                </ul>
            )}
        </div>
    )

}
