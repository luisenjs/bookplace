import { Libros } from "../pages/libros";
import { BookLayout } from "./bookinfoLayout";

export function LibrosLayout() {
    return (
        <div className="flex flex-row h-full">
            <main className="grow">
                <Libros></Libros>
            </main>
            <aside className="bg-blue-950 flex-none w-80 h-full text-white content-center items-center text-center">
                <BookLayout></BookLayout>
            </aside>
        </div>
    )
}