import Link from 'next/link';
import React from 'react';

export default function Footer() {

    const anoAtual = new Date().getFullYear();


    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
                <p className="text-sm text-slate-500">&copy; {anoAtual} Todos direitos reservados</p>
                <ul className="flex flex-wrap items-center justify-center gap-2 text-sm md:justify-end">
                    <li>
                        <Link href="/#agendamentos" className="rounded px-2 py-1 text-slate-700 hover:text-brand">
                            Agendamentos
                        </Link>
                    </li>
                    <li>
                        <Link href="/#servicos" className="rounded px-2 py-1 text-slate-700 hover:text-brand">
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link href="/#localizacao" className="rounded px-2 py-1 text-slate-700 hover:text-brand">
                            Localização
                        </Link>
                    </li>
                    <li>
                        <Link href="/#sobre" className="rounded px-2 py-1 text-slate-700 hover:text-brand">
                            Sobre
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}