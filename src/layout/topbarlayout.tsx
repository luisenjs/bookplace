export function TopbarLayout() {
    return (
        <div className="flex flex-row gap-3 content-center">
            <input className="grow" type="text" placeholder="Buscar..." />
            <button className="bg-gray-400 p-2 rounded-lg">Notis</button>
            <button className="bg-gray-400 p-2 rounded-lg">Logout</button>
        </div>
    )
}