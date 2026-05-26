import { useEffect, useState } from "react";

export const ImageManager = () => {

    const [images, setImages] = useState<string[] | undefined>([]);

    const fetchImageList = async () => {

        const response = await fetch(
            "https://electiva5-api.apolobyte.top/list-images"
        );

        const data = await response.json();

        
        //console.log(data);
        //setImages(data);}
        setImages(data.images);
    }

    useEffect(() => {

        fetchImageList();

    }, []);

    return (
        <div>

            <h2>Administrador de imágenes</h2>

            <p>Cantidad de imágenes: {images?.length}</p>

            <ul>

                {
                    images?.map((image, index) => (

                        <li key={index}>

                            <p>{image}</p>

                            <img
                                src={`https://electiva5-api.apolobyte.top/uploads/${image}`}
                                alt={image}
                                width="200"
                            />

                        </li>

                    ))
                }

            </ul>

        </div>
    )
}