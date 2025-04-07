import { BookMarked, Home, Settings, SquareLibrary } from "lucide-react";
import { useNavigate } from "react-router";

export function SidebarLayout() {

    const navigate = useNavigate();

    return (
        <div className="h-full">
            <div className="text-center p-8">
                <p>BOOKPLACE</p>
            </div>
            <div className="flex flex-col gap-6 justify-between">
                <div className="flex flex-col gap-3 ">
                    <button className="bg-gray-100 hover:bg-gray-300 mx-4 p-2 rounded-lg text-left flex gap-2" onClick={() => { navigate("/libros") }}><Home />Descubrir</button>
                    <button className="bg-gray-100 hover:bg-gray-300 mx-4 p-2 rounded-lg text-left flex gap-2" onClick={() => { navigate("/mis-libros") }}><SquareLibrary />Mis libros</button>
                    <button className="bg-gray-100 hover:bg-gray-300 mx-4 p-2 rounded-lg text-left flex gap-2" onClick={() => { navigate("/guardados") }}><BookMarked />Guardados</button>
                </div>
                <div className="flex flex-col">
                    <button className="bg-gray-100 hover:bg-gray-300 mx-4 p-2 rounded-lg text-left flex gap-2"><Settings />Configuración</button>
                </div>
            </div>
        </div>
    )
}