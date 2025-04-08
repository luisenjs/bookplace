import { useContext } from "react";
import { BookContext } from "../context/librocontext";
import { Libros } from "../pages/libros";
import { BookLayout } from "./bookinfoLayout";

export function LibrosLayout() {

    const { libro } = useContext(BookContext);

    return (
        <div className="flex flex-row h-full relative">
            <main className="grow">
                <Libros></Libros>
            </main>
            {
                libro
                    ?
                    <aside className={`bg-blue-950 w-80 h-full text-white content-center items-center text-center absolute right-0 z-10 transform transition-transform duration-300 ease-in-out ${libro ? 'translate-x-0' : 'translate-x-full'}`}>
                        <BookLayout></BookLayout>
                    </aside>
                    :
                    <></>
            }
        </div>
    )
}