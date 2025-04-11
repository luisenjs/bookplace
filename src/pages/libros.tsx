import { useContext, useEffect, useState } from "react";
import { Card } from "../components/card";
import { Libro } from "../interfaces/libro";
import axios from "axios";
import { BookContext } from "../context/librocontext";

export function Libros() {

    const [libros, setLibros] = useState<Libro[]>([])

    const { selectLibro } = useContext(BookContext);

    useEffect(() => {
        getLibros();
    }, [])

    async function getLibros() {
        const data = await axios.get("http://localhost:3000/libros/")
        setLibros(data.data);
    }

    return (
        <div className="flex flex-col gap-3 p-4 h-full">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-semibold">Todos los libros</h2>
            </div>
            <div className="flex flex-row flex-wrap gap-4 overflow-auto">
                {libros && libros.map((libro, index) => (
                    <Card key={index} onClick={() => selectLibro(libro)} className="flex flex-col gap-3 p-3 rounded-lg bg-slate-300 text-center min-h-60 w-44">
                        <img className="bg-gray-400 text-center h-60 w-40 content-center rounded-lg" src={libro.coverImage} alt={`cover de ${libro.title}`} />
                        <div>
                            <p className="italic">{libro.title}</p>
                            <p>{libro.author}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}