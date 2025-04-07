import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "../components/card"
import { Libro } from "../interfaces/interfaces"

export function SavedBooks() {

    const [guardados, setGuardados] = useState<Libro[]>([])

    useEffect(() => {
        getGuardados()
    }, [])

    async function getGuardados() {
        const data = await axios.get("http://localhost:3000/guardados/")
        setGuardados(data.data);
    }

    async function eliminar(id: string) {
        await axios.delete(`http://localhost:3000/guardados/${id}`)
        getGuardados()
    }


    return (
        <div className="flex flex-col gap-3 p-4 h-full">
            <div className="flex flex-row justify-between">
                <p>Mis libros guardados</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 overflow-auto">
                {guardados && guardados.map((libro, index) => (
                    <Card key={index} className="flex flex-col gap-3 p-3 rounded-lg bg-slate-300 text-center min-h-60 w-44">
                        <div className="bg-gray-400 text-center min-h-40 w-full content-center rounded-lg">imagen</div>
                        <div className="grow">
                            <p>{libro.nombre}</p>
                            <p>{libro.autor}</p>
                        </div>
                        <button className="flex bg-sky-400 rounded-lg p-2" onClick={() => { eliminar(libro.id) }}>Eliminar de guardados</button>
                    </Card>
                ))}
            </div>
        </div>
    )
}