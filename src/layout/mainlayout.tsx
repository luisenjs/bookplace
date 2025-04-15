import { Outlet } from "react-router";
import { BookProvider } from "../context/librocontext";
import { SidebarLayout } from "./sidebarlayout";
import { TopbarLayout } from "./topbarlayout";

export function MainLayout() {
    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="bg-white flex-none w-48 justify-center items-center">
                <SidebarLayout></SidebarLayout>
            </div>
            <div className="flex flex-col w-full max-h-full">
                <div className="bg-gray-100 flex-none h-20 content-center p-4">
                    <TopbarLayout></TopbarLayout>
                </div>
                <div className="h-full w-full bg-gray-200">
                    <BookProvider>
                        <Outlet />
                    </BookProvider>
                </div>
            </div>
        </div>
    )
}