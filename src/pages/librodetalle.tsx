import { ArrowLeft, Share, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { Libro } from "../interfaces/libro";
import axios from "axios";
import Swal from "sweetalert2";

export function LibroDetalle() {

    const { libroid } = useParams();

    const navigate = useNavigate();

    const [libro, setlibro] = useState<Libro>();

    useEffect(() => {
        async function getLibro() {
            const { data } = await axios.get(`http://localhost:3000/libros/${libroid}`)
            setlibro(data)
        }
        getLibro();
    })

    return (
        <div className="bg-gray-200 p-4 h-full">
            <div className="p-4 bg-white rounded-2xl h-full flex flex-col">
                <div className="flex justify-between">
                    <button onClick={() => navigate("/libros")} className="flex gap-2 p-1 px-2 bg-blue-950 text-white rounded-lg w-fit items-center"><ArrowLeft size={20} />Volver al inicio</button>
                    <button onClick={() => Swal.fire("Enlace copiado")} className="flex gap-2 p-1 px-2 bg-blue-950 text-white rounded-lg w-fit items-center">Compartir libro <Share size={20} /></button>
                </div>
                <div className="w-full flex flex-col gap-4 items-center overflow-auto">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-semibold">{libro?.title}</h1>
                        <h3 className="italic">{libro?.author}</h3>
                        <div className="flex gap-1">
                            {libro && libro.tags.map((tag => (
                                <small className="bg-blue-900/60 p-1 rounded-lg text-white">{tag}</small>
                            )))}
                        </div>
                    </div>
                    <img className="w-1/4" src={libro?.coverImage} alt={libro?.title} />
                    <div className="flex flex-col items-center">
                        <span className="italic">{libro?.publisher} - {libro?.publishedYear}</span>
                        <div className="flex gap-3">
                            {libro && libro.genre.map((genero) => (
                                <span>{genero}</span>
                            ))}
                        </div>
                        <span className="capitalize">{libro?.language}</span>
                        <div className="flex p-3">{Array.from({ length: libro?.rating || 0 }).map((_, index) => (
                            <Star key={index} />
                        ))}
                        </div>
                    </div>
                    <div className="w-1/3 text-center">
                        <p>{libro?.summary}</p>
                    </div>
                    <div className="w-2/5 flex flex-col gap-2">
                        <h4 className="text-xl font-semibold">Comentarios</h4>
                        <div className="flex flex-col gap-4">
                            {libro && libro?.reviews.map((review) => (
                                <div className="flex flex-col bg-gray-100 p-3 rounded-xl">
                                    <div className="flex justify-between w-full h-3/6 border-b border-gray-300">
                                        <div className="flex gap-1 items-center">
                                            <span>{review.username}</span>
                                            <span className="text-blue-900 italic">@{review.userId}</span>
                                            <div className="flex p-3">{Array.from({ length: review?.rating || 0 }).map((_, index) => (
                                                <Star size={12} key={index} />
                                            ))}
                                            </div>
                                        </div>
                                        <span>{review.date.toString()}</span>
                                    </div>
                                    <p>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}