import { Bell } from "lucide-react";

export function TopbarLayout() {
    return (
        <div className="flex flex-row gap-3 content-center justify-end">
            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1"><Bell /></button>
            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg hover:-translate-y-0.5 active:translate-1">Logout</button>
        </div>
    )
}