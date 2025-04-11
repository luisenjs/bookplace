import { BookMarked, Home, Settings, SquareLibrary } from "lucide-react";
import { NavLink } from "react-router";

export function SidebarLayout() {

    return (
        <div className="h-full">
            <div className="text-center p-8">
                <p>BOOKPLACE</p>
            </div>
            <div className="flex flex-col gap-6 justify-between">
                <div className="flex flex-col gap-3 ">
                    <NavLink to="/libros" className={({ isActive }) => `bg-gray-100 mx-4 p-2 rounded-lg text-left flex gap-2 hover:-translate-y-0.5 active:translate-1 ${isActive ? "text-sky-600 bg-white shadow-md" : "hover:bg-gray-300"}`}><Home />Descubrir</NavLink>
                    <NavLink to="/mis-libros" className={({ isActive }) => `bg-gray-100 mx-4 p-2 rounded-lg text-left flex gap-2 hover:-translate-y-0.5 active:translate-1 ${isActive ? "text-sky-600 bg-white shadow-md" : "hover:bg-gray-300"}`}><SquareLibrary />Mis creaciones</NavLink>
                    <NavLink to="/guardados" className={({ isActive }) => `bg-gray-100 mx-4 p-2 rounded-lg text-left flex gap-2 hover:-translate-y-0.5 active:translate-1 ${isActive ? "text-sky-600 bg-white shadow-md" : "hover:bg-gray-300"}`}><BookMarked />Guardados</NavLink>
                </div>
                <div className="flex flex-col">
                    <NavLink to="/settings" className={({ isActive }) => `bg-gray-100 mx-4 p-2 rounded-lg text-left flex gap-2 ${isActive ? "text-sky-600 bg-white shadow-md" : "hover:bg-gray-300"}`}><Settings />Settings</NavLink>
                </div>
            </div>
        </div >
    )
}