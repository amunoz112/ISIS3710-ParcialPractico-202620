
import CrearPlan from "@/components/CrearPlan";
export default function Home() {
  return (
    <div className="flex-1 bg-slate-50 px-20 py-6">
      <h1 className="text-3xl font-bold text-slate-900">Planes</h1>
      <p className="text-lg text-slate-600 mt-2">
      </p>
      <CrearPlan/>
    </div>

  );
}