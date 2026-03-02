'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AUTH_STORAGE_KEY = 'admin-auth';
const MOCK_USER = {
  email: 'admin@terapiainteligente.com',
  password: '123456',
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validCredentials =
      form.email === MOCK_USER.email && form.password === MOCK_USER.password;

    if (!validCredentials) {
      setError('Credenciais inválidas. Use o acesso simulado abaixo.');
      return;
    }

    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    router.push('/admin');
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Login do administrador</h1>
        <p className="mt-1 text-sm text-slate-500">Ambiente simulado até a integração com backend.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-700">
            E-mail
            <input
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Senha
            <input
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#2B579E]"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            className="w-full rounded-md bg-[#2B579E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#244a87]"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
          <p className="font-semibold">Acesso simulado:</p>
          <p>E-mail: admin@terapiainteligente.com</p>
          <p>Senha: 123456</p>
        </div>
      </div>
    </section>
  );
}
