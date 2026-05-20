import { useState, useEffect } from "react";

export const Mensaje = () => {
  const [texto, setTexto] = useState("Cargando mensaje...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTexto("Welcome To Mario Kart");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>{texto}</h1>
    </>
  );
};