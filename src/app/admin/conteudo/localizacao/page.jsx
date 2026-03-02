export default function AdminConteudoLocalizacaoPage() {
  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Cadastro de conteúdo: Localização</h1>
        <p className="text-slate-600">Formulário simulado para editar endereço e mapa da clínica.</p>
      </div>

      <form className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Nome do local
          <input
            type="text"
            defaultValue="Clínica Terapia Inteligente"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Endereço completo
          <input
            type="text"
            defaultValue="Rua Exemplo, 123 - Centro - São Paulo/SP"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Link do Google Maps (embed)
          <textarea
            rows={4}
            defaultValue="https://www.google.com/maps/embed?..."
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Instruções de acesso
          <textarea
            rows={4}
            defaultValue="Estamos próximos à estação X, com estacionamento conveniado ao lado."
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
          />
        </label>

        <button
          type="button"
          className="rounded-md bg-[#2B579E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#244a87]"
        >
          Salvar localização (simulado)
        </button>
      </form>
    </section>
  );
}
