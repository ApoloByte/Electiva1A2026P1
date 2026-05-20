import { useState, useEffect } from "react";

export const Tiempo = () => {
    const [tiempo, setTiempo] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTiempo(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1>
                hora actual colombia: {tiempo}
            </h1>

        </>
    )
}