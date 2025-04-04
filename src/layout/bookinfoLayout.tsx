import { useContext } from "react"
import { BookContext } from "../context/librocontext"
import { Card } from "../components/card";
import { ArrowDownToLine, Star, X } from "lucide-react";

export function BookLayout() {

    const { libro, deselectLibro } = useContext(BookContext);

    return (
        <div className="relative flex flex-col items-center">
            {libro?.autor !== ""
                ?
                <div className="relative flex flex-col items-center">
                    <button onClick={deselectLibro} className="absolute right-1 top-[-15px]"><X /></button>
                    <Card className="flex flex-col gap-3 p-3 rounded-lg text-center min-h-60 w-full">
                        <div className="bg-gray-400 text-center min-h-40 w-full content-center rounded-lg">imagen</div>
                        <div>
                            <p>{libro!.nombre}</p>
                            <p>{libro!.autor}</p>
                        </div>
                    </Card>
                    <div className="flex p-3">{Array.from({ length: libro?.calificacion || 0 }).map((_, index) => (
                        <Star key={index} />
                    ))}
                    </div>
                    <div className="flex gap-3 p-3">
                        <div className="w-16">
                            <p>{libro!.paginas_totales}</p>
                            <p>Páginas</p>
                        </div>
                        <div className="border"></div>
                        <div className="w-16">
                            <p>{libro!.reviews_totales}</p>
                            <p>Reviews</p>
                        </div>
                        <div className="border"></div>
                        <div className="w-16">
                            <p>{libro!.comentarios_totales}</p>
                            <p>Comertarios</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <p>{libro!.resumen}</p>
                    </div>
                    <button className="bg-sky-600 rounded-lg p-3 w-[60%] flex gap-2 justify-center">Guardar libro<ArrowDownToLine /></button>
                </div>
                :
                <div className="p-4">
                    <p className="opacity-50">Seleccione un libro para ver más información</p>
                </div>
            }
        </div>
    )
}