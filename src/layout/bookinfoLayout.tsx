import { useContext } from "react"
import { BookContext } from "../context/librocontext"
import { Card } from "../components/card";
import { ArrowDownToLine, Star, X } from "lucide-react";
import { Libro } from "../interfaces/interfaces";
import axios from "axios";

export function BookLayout() {

    const { libro, deselectLibro } = useContext(BookContext);

    async function guardadLibro(libro: Libro) {
        const body = JSON.stringify(libro);
        await axios.post("http://localhost:3000/guardados/", body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="relative flex flex-col items-center h-full justify-center">
            {libro
                ?
                <>
                    <button onClick={deselectLibro} className="absolute right-1 top-2"><X /></button>
                    <div className="relative flex flex-col items-center">
                        <Card className="flex flex-col gap-3 p-3 rounded-lg text-center min-h-60 w-full">
                            <div className="h-60 w-full flex justify-center items-center rounded-lg">
                                <div className="bg-gray-400 text-center h-60 w-40 content-center rounded-lg">imagen</div>
                            </div>
                            <div>
                                <p>{libro.nombre}</p>
                                <p>{libro.autor}</p>
                            </div>
                        </Card>
                        <div className="flex p-3">{Array.from({ length: libro.calificacion || 0 }).map((_, index) => (
                            <Star key={index} />
                        ))}
                        </div>
                        <div className="flex gap-3 p-3">
                            <div className="w-16">
                                <p>{libro.paginas_totales}</p>
                                <p>Páginas</p>
                            </div>
                            <div className="border"></div>
                            <div className="w-16">
                                <p>{libro.reviews_totales}</p>
                                <p>Reviews</p>
                            </div>
                            <div className="border"></div>
                            <div className="w-16">
                                <p>{libro.comentarios_totales}</p>
                                <p>Comertarios</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p>{libro.resumen}</p>
                        </div>
                        <button className="bg-sky-600 rounded-lg p-3 w-[60%] flex gap-2 justify-center" onClick={() => { guardadLibro(libro) }}>Guardar libro<ArrowDownToLine /></button>
                    </div></>
                :
                <div className="p-4">
                    <p className="opacity-50">Seleccione un libro para ver más información</p>
                </div>
            }
        </div>
    )
}