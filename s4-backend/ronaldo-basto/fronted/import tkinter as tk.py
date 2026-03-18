import tkinter as tk
from tkinter import ttk


class Trabajador:

    def __init__(self, nombre, amarras_realizadas, perdidas):
        self.nombre = nombre
        self.amarras_realizadas = amarras_realizadas
        self.perdidas = perdidas


class Nodo:

    def __init__(self, trabajador):
        self.trabajador = trabajador
        self.siguiente = None


class ListaEnlazada:

    def __init__(self):
        self.cabeza = None


    def agregar_trabajador(self, trabajador):

        nuevo_nodo = Nodo(trabajador)

        if self.cabeza is None:
            self.cabeza = nuevo_nodo
            return

        nodo_actual = self.cabeza

        while nodo_actual.siguiente:
            nodo_actual = nodo_actual.siguiente

        nodo_actual.siguiente = nuevo_nodo


    def ranking_top3(self):

        if self.cabeza is None:
            return "No hay trabajadores registrados"

        trabajadores = []
        nodo_actual = self.cabeza

        while nodo_actual:
            trabajadores.append(nodo_actual.trabajador)
            nodo_actual = nodo_actual.siguiente

        trabajadores.sort(
            key=lambda t: (t.amarras_realizadas - t.perdidas),
            reverse=True
        )

        resultado = "🏆 TOP 3 TRABAJADORES MÁS EFICIENTES\n\n"

        posicion = 1

        for trabajador in trabajadores[:3]:

            eficiencia = trabajador.amarras_realizadas - trabajador.perdidas

            resultado += (
                f"{posicion}. {trabajador.nombre}\n"
                f"   Amarras: {trabajador.amarras_realizadas}\n"
                f"   Perdidas: {trabajador.perdidas}\n"
                f"   Eficiencia: {eficiencia}\n\n"
            )

            posicion += 1

        return resultado


lista_trabajadores = ListaEnlazada()


def registrar_trabajador():

    nombre = entrada_nombre.get()
    amarras = int(entrada_amarras.get())
    perdidas = int(entrada_perdidas.get())

    trabajador = Trabajador(nombre, amarras, perdidas)

    lista_trabajadores.agregar_trabajador(trabajador)

    area_resultados.delete("1.0", tk.END)
    area_resultados.insert(tk.END, f"Trabajador {nombre} registrado")

    entrada_nombre.delete(0, tk.END)
    entrada_amarras.delete(0, tk.END)
    entrada_perdidas.delete(0, tk.END)

    entrada_nombre.focus()


def mostrar_top3():

    area_resultados.delete("1.0", tk.END)
    resultado = lista_trabajadores.ranking_top3()
    area_resultados.insert(tk.END, resultado)


ventana = tk.Tk()
ventana.title("Sistema de Trabajadores")
ventana.geometry("600x400")


titulo = tk.Label(
    ventana,
    text="Sistema de Gestión de Trabajadores",
    font=("Arial", 16, "bold")
)
titulo.pack(pady=10)


frame_datos = tk.Frame(ventana)
frame_datos.pack(pady=10)


tk.Label(frame_datos, text="Nombre").grid(row=0, column=0, padx=5, pady=5)
entrada_nombre = ttk.Entry(frame_datos, width=25)
entrada_nombre.grid(row=0, column=1)


tk.Label(frame_datos, text="Amarras").grid(row=1, column=0, padx=5, pady=5)
entrada_amarras = ttk.Entry(frame_datos, width=25)
entrada_amarras.grid(row=1, column=1)


tk.Label(frame_datos, text="Perdidas").grid(row=2, column=0, padx=5, pady=5)
entrada_perdidas = ttk.Entry(frame_datos, width=25)
entrada_perdidas.grid(row=2, column=1)


ttk.Button(
    frame_datos,
    text="Registrar",
    command=registrar_trabajador
).grid(row=1, column=2, padx=10)


frame_botones = tk.Frame(ventana)
frame_botones.pack(pady=10)


ttk.Button(
    frame_botones,
    text="Top 3 eficiencia",
    command=mostrar_top3
).grid(row=0, column=0, padx=5)


area_resultados = tk.Text(ventana, width=70, height=12)
area_resultados.pack(pady=10)


ventana.mainloop()