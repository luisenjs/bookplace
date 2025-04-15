import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
//import { Link } from "react-router";

type newbookprops = {
    isOpen: boolean;
    onClose: () => void;
}

export function NewBook({ isOpen, onClose }: newbookprops) {

    const { register, handleSubmit, reset } = useForm()

    const [currentStep, setCurrentStep] = useState(0);

    if (!isOpen) return null;

    function send(e: FieldValues) {
        alert(JSON.stringify(e));
        reset();
        setCurrentStep(0);
        onClose();
    }

    const steps: { stepName: string, component: React.ReactNode }[] = [
        {
            stepName: "Información del libro",
            component: (
                <>
                    <div className="flex flex-col w-full">
                        <label className="font-bold" htmlFor="id">ID</label>
                        <input type="text" {...register("id")} id="id" placeholder="ISBN-9080020202020" className="outline-none focus:ring-2 focus:ring-blue-300 w-full border border-gray-400 rounded-lg p-1" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="font-bold" htmlFor="title">Título</label>
                        <input type="text" {...register("title")} id="title" placeholder="Cien años de soledad" className="outline-none focus:ring-2 focus:ring-blue-300 w-full border border-gray-400 rounded-lg p-1" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="font-bold" htmlFor="author">Autor(a)</label>
                        <input type="text" {...register("author")} id="author" placeholder="Paquita la del barrio" className="outline-none focus:ring-2 focus:ring-blue-300 w-full border border-gray-400 rounded-lg p-1" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="font-bold" htmlFor="pages">Páginas totales</label>
                        <input type="text" {...register("pages")} id="pages" placeholder="500" className="outline-none focus:ring-2 focus:ring-blue-300 w-full border border-gray-400 rounded-lg p-1" />
                    </div>
                </>
            )
        },
        {
            stepName: "Más información",
            component: (
                <>
                    <div className="flex flex-col w-full">
                        <label className="font-bold" htmlFor="language">Lenguaje</label>
                        <input type="text" {...register("language")} id="language" placeholder="Español" className="outline-none focus:ring-2 focus:ring-blue-300 w-full border border-gray-400 rounded-lg p-1" />
                    </div>
                </>
            )
        }
    ]

    return (
        <div className="fixed bg-black/70 inset-0 z-10 flex justify-center items-center">
            <div className="bg-white w-1/4 max-h-3/4 rounded-2xl flex flex-col p-5 gap-4">
                <div className="flex flex-col gap-1 w-full">
                    <h2 className="font-semibold text-xl">Creando un libro</h2>
                </div>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(send)}>
                    {steps.map((step, index) => (
                        <div key={index} hidden={index !== currentStep}>
                            <h2>{step.stepName}</h2>
                            {step.component}
                        </div>
                    ))}
                    {currentStep < steps.length - 1 && (
                        <button type="button" onClick={() => { setCurrentStep(currentStep + 1) }} className="bg-blue-500 rounded-lg px-5 py-1 text-white text-center hover:-translate-y-0.5 hover:shadow-md hover:shadow-gray-500 active:translate-1 active:shadow-none">Siguiente</button>
                    )}
                    {currentStep == steps.length - 1 && (
                        <button type="submit" className="bg-blue-500 rounded-lg px-5 py-1 text-white text-center hover:-translate-y-0.5 hover:shadow-md hover:shadow-gray-500 active:translate-1 active:shadow-none">Guardar</button>
                    )}
                </form>
            </div>
        </div>
    )
}