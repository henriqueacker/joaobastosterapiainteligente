const servicos = [
  { nome: 'Massagem Relaxante', preco: 'R$ 180,00', duracao: '60 min' },
  { nome: 'Massagem Terapêutica', preco: 'R$ 220,00', duracao: '75 min' },
  { nome: 'Drenagem Linfática', preco: 'R$ 200,00', duracao: '60 min' },
];

export default function AdminServicosPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Serviços</h1>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {servicos.map((servico) => (
          <div
            key={servico.nome}
            className="flex flex-col gap-2 border-b border-slate-100 p-4 last:border-b-0 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-medium text-slate-900">{servico.nome}</p>
              <p className="text-sm text-slate-500">Duração: {servico.duracao}</p>
            </div>
            <p className="font-semibold text-[#2B579E]">{servico.preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
