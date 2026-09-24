"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Plan = {
    name: string;
    description: string;
    estimatedPrice: number;
    estimatedTime: string;
    recomendations: string;
    address: string;
    image: string;
    userId: string;
}

type CreatePlanFormProps = {
  postToEdit?: Plan;
};

export default function CreatePlanForm({ postToEdit }: CreatePlanFormProps) {
  const router = useRouter();
  const [ planData, updatePlan ] = useState<Plan>({
    name: "",
    description: "",
    estimatedPrice: 0,
    estimatedTime: "",
    recomendations: "",
    address: "",
    image: "",
    userId: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    updatePlan((prevPlan) => ({
        ...prevPlan, 
        [name]: value === "estimatedPrice" ? parseFloat(value) : value,
    }));

  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();


    try {
        const planToSubmit = {
        name: planData.name,
        description: planData.description,
        estimatedPrice: planData.estimatedPrice,
        estimatedTime: planData.estimatedTime,
        recomendations: planData.recomendations,
        address: planData.address,
        image: planData.image,
        userId: planData.userId,
    };
        router.push("/plans");
    }
    catch (err) {
        console.log(err);
    }

  }
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 mt-10 w-full max-w-md">
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
          Nombre del Plan
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="nombre"
          value={planData.name}
          onChange={handleChange}
          required
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />
            <label htmlFor="address" className="block text-sm font-semibold text-slate-700">
          Dirección
        </label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder="dirección"
          value={planData.address}
          onChange={handleChange}
          required
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />
            <label htmlFor="image" className="block text-sm font-semibold text-slate-700">
          Imagen
        </label>
        <input
          id="image"
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={planData.image}
          onChange={handleChange}
          required
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />
            <label htmlFor="estimatedPrice" className="block text-sm font-semibold text-slate-700">
          Precio Estimado         
        </label>
        <input
          id="estimatedPrice"
          type="text"
          name="estimatedPrice"
          placeholder="precio estimado"
          value={planData.estimatedPrice}
          onChange={handleChange}
          required
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />
        
        <label htmlFor="description" className="block text-sm font-semibold text-slate-700">
          Descripción
        </label>
        <input
          id="description"
          type="text"
          name="description"
          placeholder="descripción"
          value={planData.description}
          onChange={handleChange}
          required
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />
        <label htmlFor="estimatedPrice" className="block text-sm font-semibold text-slate-700">
          Precio Estimado         
        </label>
        <input
          id="estimatedPrice"
          type="text"
          name="estimatedPrice"
          placeholder="precio estimado"
          value={planData.estimatedPrice}
          onChange={handleChange}
          required
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />
            <label htmlFor="estimatedTime" className="block text-sm font-semibold text-slate-700">
          Tiempo Estimado         
        </label>
        <input
          id="estimatedTime"
          type="text"
          name="estimatedTime"
          placeholder="tiempo estimado"
          value={planData.estimatedTime}
          onChange={handleChange}
          required
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />
        

        <label htmlFor="recomendations" className="block text-sm font-semibold text-slate-700">
          Recomendaciones
        </label>
        <input
          id="recomendations"
          type="text"
          name="recomendations"
          placeholder="recomendaciones"
          value={planData.recomendations}
          onChange={handleChange}
          required
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mt-1 outline-none"
        />
        <button type="submit" className="w-full bg-blue-700 text-white font-semibold rounded-xl py-4 mt-6">
          Crear Plan
        </button>
        
    </form>

 );
}