const agendamentos = [
  { data: '12/01/2026', horario: '10:00', cliente: 'Mariana Souza', servico: 'Relaxante', status: 'Confirmado' },
  { data: '12/01/2026', horario: '11:30', cliente: 'Rafael Costa', servico: 'Terapêutica', status: 'Pendente' },
  { data: '12/01/2026', horario: '14:00', cliente: 'Fernanda Lima', servico: 'Drenagem', status: 'Confirmado' },
];

export default function AdminAgendamentosPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Agendamentos</h1>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Data</th>
              <th className="px-4 py-3 font-semibold">Horário</th>
              <th className="px-4 py-3 font-semibold">Cliente</th>
              <th className="px-4 py-3 font-semibold">Serviço</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((item) => (
              <tr key={`${item.cliente}-${item.horario}`} className="border-t border-slate-100">
                <td className="px-4 py-3">{item.data}</td>
                <td className="px-4 py-3">{item.horario}</td>
                <td className="px-4 py-3">{item.cliente}</td>
                <td className="px-4 py-3">{item.servico}</td>
                <td className="px-4 py-3">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
