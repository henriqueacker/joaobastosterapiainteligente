<<<<<<< codex/create-admin-environment-and-layout-bobdvl
import StatCard from '@/app/components/admin/StatCard';
=======
import StatCard from './components/StatCard';
>>>>>>> master

const proximosAtendimentos = [
  { cliente: 'Mariana Souza', servico: 'Massagem Relaxante', horario: '10:00' },
  { cliente: 'Rafael Costa', servico: 'Massagem Terapêutica', horario: '11:30' },
  { cliente: 'Fernanda Lima', servico: 'Drenagem Linfática', horario: '14:00' },
];

export default function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600">Resumo rápido do funcionamento da clínica hoje.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Agendamentos hoje" value="12" helper="3 novos nas últimas 24h" />
        <StatCard label="Clientes ativos" value="86" helper="+8% no último mês" />
        <StatCard label="Taxa de ocupação" value="78%" helper="meta mensal: 80%" />
        <StatCard label="Faturamento (mês)" value="R$ 12.450" helper="até o momento" />
      </div>

      <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Próximos atendimentos</h2>
        <div className="mt-4 space-y-3">
          {proximosAtendimentos.map((item) => (
            <div key={`${item.cliente}-${item.horario}`} className="rounded-lg border border-slate-100 p-3">
              <p className="font-medium text-slate-900">{item.cliente}</p>
              <p className="text-sm text-slate-600">{item.servico}</p>
              <p className="text-sm text-slate-500">Horário: {item.horario}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
