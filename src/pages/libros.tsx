import { useContext, useEffect, useState } from "react";
import { Card } from "../components/card";
import { Libro } from "../interfaces/interfaces";
import axios from "axios";
import { BookContext } from "../context/librocontext";
import { ChevronRight } from "lucide-react";

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
                <p>Todos los libros</p>
                <button className="bg-sky-200 text-blue-600 p-1 p rounded-lg flex">Ver todos<ChevronRight /></button>
            </div>
            <div className="flex flex-row flex-wrap gap-4 overflow-auto">
                {libros && libros.map((libro, index) => (
                    <Card key={index} onClick={() => selectLibro(libro)} className="flex flex-col gap-3 p-3 rounded-lg bg-slate-300 text-center min-h-60 w-44">
                        <div className="bg-gray-400 text-center min-h-40 w-full content-center rounded-lg">imagen</div>
                        <div>
                            <p>{libro.nombre}</p>
                            <p>{libro.autor}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}