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

    const [libro, setLibro] = useState<Libro | null>(null);

    function selectLibro(libro: Libro) {
        setLibro(libro);
    }

    function deselectLibro() {
        setLibro(null);
    }

    return (
        <BookContext.Provider value={{ libro, selectLibro, deselectLibro }}>
            {children}
        </BookContext.Provider>
    )

}