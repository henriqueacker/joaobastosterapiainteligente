'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/logo.jpg';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const linkClass =
    'rounded-md px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10';

  return (
    <header className="bg-[#2B579E] shadow-md fixed w-full z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" onClick={closeMenu}>
          <Image src={Logo} width={150} alt="logo" priority />
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-xl"
          aria-label="Abrir menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex md:items-center md:gap-2">
          <Link href="/#agendamento" className={linkClass}>
            Agendamentos
          </Link>
          <Link href="/#servicos" className={linkClass}>
            Serviços
          </Link>
          <Link href="/#localizacao" className={linkClass}>
            Localização
          </Link>
          <Link href="/#sobre" className={linkClass}>
            Sobre
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#2B579E] shadow-lg transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col mt-20 space-y-2 px-4">
          <Link href="/#agendamento" className={linkClass} onClick={closeMenu}>
            Agendamentos
          </Link>
          <Link href="/#servicos" className={linkClass} onClick={closeMenu}>
            Serviços
          </Link>
          <Link href="/#localizacao" className={linkClass} onClick={closeMenu}>
            Localização
          </Link>
          <Link href="/#sobre" className={linkClass} onClick={closeMenu}>
            Sobre
          </Link>
        </div>
      </div>
    </header>
  );
}