import { useContext, useState } from "react"
import { BookContext } from "../context/librocontext"
import { Card } from "../components/card";
import { ArrowDownToLine, Maximize, Star, X } from "lucide-react";
import { Libro } from "../interfaces/libro";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router";

export function BookLayout() {

    const { libro, deselectLibro } = useContext(BookContext);

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    async function guardadLibro(libro: Libro) {
        const { data } = await axios.get("http://localhost:3000/guardados/");
        console.log(libro.id)
        const isSaved = data.some((guardado: Libro) => guardado.id === libro.id);
        if (!isSaved) {
            const body = JSON.stringify(libro);
            await axios.post("http://localhost:3000/guardados/", body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            toast.success("Libro guardado correctamente");
        } else {
            toast.info("El libro ya está guardado");
        }
    }

    return (
        <div className="relative flex flex-col items-center h-full justify-center">
            {libro
                ?
                <>
                    <Link to={`/libros/${libro.id}`} onMouseOver={() => { setIsTooltipVisible(true) }} onMouseOut={() => { setIsTooltipVisible(false) }} className="absolute left-1 top-2">
                        <Maximize />
                        {isTooltipVisible && <div className="absolute bg-gray-300 text-gray-800 px-2 text-nowrap rounded-lg -top-6 -translate-x-2/5">Ver en pantalla completa</div>}
                    </Link>
                    <button onClick={deselectLibro} className="absolute right-1 top-2"><X /></button>
                    <div className="relative flex flex-col items-center">
                        <Card className="flex flex-col gap-3 p-3 rounded-lg text-center min-h-60 w-full">
                            <div className="h-60 w-full flex justify-center items-center rounded-lg">
                                <img className="bg-gray-400 text-center h-60 w-40 content-center rounded-lg" src={libro.coverImage} alt={`cover de ${libro.title}`} />
                            </div>
                            <div>
                                <p className="italic">{libro.title}</p>
                                <p>{libro.author}</p>
                            </div>
                        </Card>
                        <div className="flex p-3">{Array.from({ length: libro.rating || 0 }).map((_, index) => (
                            <Star key={index} />
                        ))}
                        </div>
                        <div className="flex gap-3 p-3">
                            <div className="w-16">
                                <p>{libro.pages}</p>
                                <p>Páginas</p>
                            </div>
                            <div className="border"></div>
                            <div className="w-16">
                                <p>{libro.reviews.length}</p>
                                <p>Reviews</p>
                            </div>
                        </div>
                        <button className="bg-sky-600 rounded-lg p-3 w-60 flex gap-2 justify-center hover:-translate-y-0.5 active:translate-1" onClick={() => { guardadLibro(libro) }}>Guardar libro<ArrowDownToLine /></button>
                    </div></>
                :
                <div className="p-4">
                    <p className="opacity-50">Seleccione un libro para ver más información</p>
                </div>
            }
        </div>
    )
}