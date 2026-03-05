export default function AdminConteudoSobrePage() {
  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Cadastro de conteúdo: Sobre</h1>
        <p className="text-slate-600">Formulário simulado para gerenciamento da seção Sobre do site.</p>
      </div>

      <form className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Título da seção
          <input
            type="text"
            defaultValue="Terapeuta de Massoterapia"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Texto de apresentação
          <textarea
            rows={5}
            defaultValue="Olá, sou [Nome do Terapeuta], terapeuta de massoterapia com anos de experiência no campo..."
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Bloco de benefícios
          <textarea
            rows={5}
            defaultValue="A massoterapia oferece uma série de benefícios para o corpo e a mente..."
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <button
          type="button"
          className="rounded-md bg-[#2B579E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#244a87]"
        >
          Salvar conteúdo (simulado)
        </button>
      </form>
    </section>
  );
}
