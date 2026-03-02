const clientes = [
  { nome: 'Mariana Souza', telefone: '(11) 98888-1111', ultimaSessao: '03/01/2026' },
  { nome: 'Rafael Costa', telefone: '(11) 97777-2222', ultimaSessao: '02/01/2026' },
  { nome: 'Fernanda Lima', telefone: '(11) 96666-3333', ultimaSessao: '30/12/2025' },
];

export default function AdminClientesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Clientes</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {clientes.map((cliente) => (
          <article key={cliente.nome} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="font-semibold text-slate-900">{cliente.nome}</h2>
            <p className="text-sm text-slate-600">Telefone: {cliente.telefone}</p>
            <p className="text-sm text-slate-500">Última sessão: {cliente.ultimaSessao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
