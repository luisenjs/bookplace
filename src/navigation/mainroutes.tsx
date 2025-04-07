import { MainLayout } from "../layout/mainlayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { NotFound } from "../pages/notfound";
import { LibrosLayout } from "../layout/libroslayout";
import { SavedBooks } from "../pages/guardados";

export function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/*" element={<Navigate to="/notfound" replace />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/libros" element={<LibrosLayout />} />
                    <Route path="/guardados" element={<SavedBooks />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}