export  default function Servicos({ titulo, texto }) {
    return (
      <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-900 transition-colors group-hover:text-brand">
          {titulo}
        </h3>
  
        <div className="mb-4 mt-2 h-0.5 w-12 rounded-full bg-brand transition-all duration-300 group-hover:w-20" />
  
        <p className="text-base leading-relaxed text-slate-600">
          {texto}
        </p>
      </article>
    );
  }