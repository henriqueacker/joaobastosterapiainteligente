import Link from 'next/link';

const secoes = [
  {
    titulo: 'Página inicial',
    descricao: 'Edite títulos principais, textos de chamada e CTA da home.',
    href: '/admin/conteudo/pagina-inicial',
  },
  {
    titulo: 'Sobre',
    descricao: 'Cadastre textos institucionais, apresentação do terapeuta e benefícios.',
    href: '/admin/conteudo/sobre',
  },
  {
    titulo: 'Localização',
    descricao: 'Gerencie endereço, mapa incorporado e informações de acesso.',
    href: '/admin/conteudo/localizacao',
  },
];

export default function AdminConteudoPage() {
  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Conteúdo do site</h1>
        <p className="text-slate-600">
          Central para gerenciar os textos e informações exibidos nas páginas públicas.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {secoes.map((secao) => (
          <article key={secao.titulo} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{secao.titulo}</h2>
            <p className="mt-2 text-sm text-slate-600">{secao.descricao}</p>
            <Link
              href={secao.href}
              className="mt-4 inline-flex rounded-md bg-[#2B579E] px-3 py-2 text-sm font-medium text-white hover:bg-[#244a87]"
            >
              Editar seção
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
