import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useEffect, useState } from "react";
import { Libro } from "../interfaces/libro";
import axios from "axios";
import { NewBook } from "../components/newbookmodal";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";

type librostype = {
    id: string;
    title: string;
    author: string;
    pages: number;
    coverImage: string;
    available: boolean;
}

const columnHelper = createColumnHelper<librostype>();

const columns = [
    columnHelper.accessor("title", {
        header: () => (<span>Título</span>),
        cell: info => (<p>{info.getValue()}</p>)
    }),
    columnHelper.accessor("author", {
        header: () => (<span>Autor</span>),
        cell: info => (<p>{info.getValue()}</p>)
    }),
    columnHelper.accessor("pages", {
        header: () => (<span>Páginas</span>),
        cell: info => (<p>{info.getValue()}</p>)
    }),
    columnHelper.accessor("coverImage", {
        header: () => (<span>Cubierta</span>),
        cell: info => (<img src={info.getValue()} className="h-20 w-full object-cover flex justify-center"></img>)
    }),
    columnHelper.accessor("available", {
        header: () => (<span>Disponibilidad</span>),
        cell: info => (<p>{info.getValue() ? "Disponible" : "No disponible"}</p>)
    })
]

export function MisLibros() {

    const [mislibros, setmislibros] = useState<Libro[]>([]);

    const [isnewbookopen, setisnewbookopen] = useState(false);

    async function setbooks() {
        const { data } = await axios.get("http://localhost:3000/misLibros");
        setmislibros(data);
    }

    useEffect(() => {
        setbooks();
    })

    const table = useReactTable({
        data: mislibros,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    async function eliminar(id: string) {
        Swal.fire({
            title: "Estás seguro de querer eliminar esta entrada",
            icon: "question",
            width: "30vw",
            padding: "30px",
            showCancelButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: "w-40 bg-sky-600 rounded-lg py-2 text-white mr-1",
                cancelButton: "w-40 bg-red-400 rounded-lg py-2 text-white ml-1"
            }
        }).then(async (response) => {
            if (response.isConfirmed) {
                await axios.delete(`http://localhost:3000/misLibros/${id}`)
                Swal.fire({
                    title: "Eliminado",
                    icon: "success",
                    width: "30vw",
                    padding: "30px"
                })
            }
        })
        setbooks();
    }

    return (
        <>
            <div className="flex flex-col gap-5 p-5">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold">Mis libros</h2>
                    <button onClick={() => { setisnewbookopen(true) }} className="bg-blue-500 text-white shadow-md shadow-blue-300 px-5 py-1 hover:bg-blue-400 active:translate-1 rounded-lg">Crear nuevo libro</button>
                </div>
                <div className="w-full shadow-md shadow-gray-300 rounded-2xl">
                    <table className="w-full">
                        <thead>
                            {
                                table.getHeaderGroups().map((headergroups => (
                                    <tr key={headergroups.id} className="bg-sky-100">
                                        {
                                            headergroups.headers.map((header) => (
                                                <th key={header.id} className="py-2">
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                </th>
                                            ))
                                        }
                                        <th className="py-2">Acciones</th>
                                    </tr>
                                )))
                            }
                        </thead>
                        <tbody>
                            {
                                table.getRowModel().rows.map((row) => (
                                    <tr key={row.id} className={`${Number(row.id) % 2 ? "bg-gray-200" : "bg-gray-100"}`}>
                                        {
                                            row.getVisibleCells().map((cell) => (
                                                <td key={cell.id} className="py-3 text-center">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))
                                        }
                                        <td className="py-3 text-center">
                                            <button onClick={() => { eliminar(row.original.id) }} className="bg-red-300 p-2 hover:bg-red-400 active:translate-1 rounded-lg text-red-700"><Trash2 size={20} /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <NewBook isOpen={isnewbookopen} onClose={() => { setisnewbookopen(false) }} />
        </>
    )
}