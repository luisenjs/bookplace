import { createContext, useState } from "react";
import { Libro } from "../interfaces/interfaces"

type BookContextType = {
    libro: Libro | null;
    selectLibro: (libro: Libro) => void;
    deselectLibro: () => void;
}

export const BookContext = createContext<BookContextType>({
    libro: null,
    selectLibro: () => { },
    deselectLibro: () => { },
})

export function BookProvider({ children }: { children: React.ReactNode }) {

    const defaultLibro: Libro = {
        nombre: "",
        autor: "",
        imagen: "",
        calificacion: 0,
        paginas_totales: 0,
        reviews_totales: 0,
        comentarios_totales: 0,
        resumen: ""
    }

    const [libro, setLibro] = useState<Libro>(defaultLibro);

    function selectLibro(libro: Libro) {
        setLibro(libro);
    }

    function deselectLibro() {
        setLibro(defaultLibro);
    }

    return (
        <BookContext.Provider value={{ libro, selectLibro, deselectLibro }}>
            {children}
        </BookContext.Provider>
    )

}