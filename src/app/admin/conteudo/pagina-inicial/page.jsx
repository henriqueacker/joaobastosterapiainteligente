export default function AdminConteudoPaginaInicialPage() {
  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Cadastro de conteúdo: Página inicial</h1>
        <p className="text-slate-600">Gerencie os textos principais da home pública (hero e chamadas).</p>
      </div>

      <form className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Título principal
          <input
            type="text"
            defaultValue="Bem-vindo à Terapia Inteligente"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Subtítulo
          <textarea
            rows={3}
            defaultValue="Cuidamos do seu bem-estar com atendimento humanizado e técnicas terapêuticas personalizadas."
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Texto do botão WhatsApp
          <input
            type="text"
            defaultValue="Agendar pelo WhatsApp"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <button
          type="button"
          className="rounded-md bg-[#2B579E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#244a87]"
        >
          Salvar página inicial (simulado)
        </button>
      </form>
    </section>
  );
}
