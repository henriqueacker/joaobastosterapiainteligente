'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/admin', label: 'Dashboard', exact: true },
  { href: '/admin/agendamentos', label: 'Agendamentos' },
  { href: '/admin/clientes', label: 'Clientes' },
  { href: '/admin/servicos', label: 'Serviços' },
  { href: '/admin/conteudo', label: 'Conteúdo do Site' },
  { href: '/admin/configuracoes', label: 'Configurações' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-r border-slate-200 bg-white p-4 md:w-64 md:min-h-screen">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-900">Painel Admin</h1>
        <p className="text-sm text-slate-500">Terapia Inteligente</p>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-[#2B579E] text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
