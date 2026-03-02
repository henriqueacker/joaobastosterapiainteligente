export default function AdminConfiguracoesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Configurações</h1>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="font-semibold text-slate-900">Dados da clínica</h2>
          <p className="mt-2 text-sm text-slate-600">Nome fantasia: Terapia Inteligente</p>
          <p className="text-sm text-slate-600">Telefone principal: (11) 90000-0000</p>
          <p className="text-sm text-slate-600">E-mail: contato@terapiainteligente.com</p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="font-semibold text-slate-900">Horário de atendimento</h2>
          <p className="mt-2 text-sm text-slate-600">Segunda a Sexta: 08:00 às 19:00</p>
          <p className="text-sm text-slate-600">Sábado: 09:00 às 14:00</p>
          <p className="text-sm text-slate-600">Domingo: fechado</p>
        </article>
      </div>
    </section>
  );
}
