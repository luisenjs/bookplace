import { MainLayout } from "../layout/mainlayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { NotFound } from "../pages/notfound";
import { LibrosLayout } from "../layout/libroslayout";
import { SavedBooks } from "../pages/guardados";
import { ToastContainer } from "react-toastify";
import { MisLibros } from "../pages/mislibros";
import { LibroDetalle } from "../pages/librodetalle";

export function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/*" element={<Navigate to="/notfound" replace />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/libros" element={<LibrosLayout />} />
                    <Route path="/libros/:libroid" element={<LibroDetalle/>} />
                    <Route path="/mis-libros" element={<MisLibros />} />
                    <Route path="/guardados" element={<SavedBooks />} />
                    <Route path="/settings" />
                </Route>
            </Routes>
            <ToastContainer theme="colored" closeOnClick={true} />
        </BrowserRouter>
    )
}