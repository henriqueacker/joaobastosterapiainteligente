'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AdminSidebar from '@/app/components/admin/AdminSidebar';

const AUTH_STORAGE_KEY = 'admin-auth';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  const isAuthenticated =
    typeof window !== 'undefined' && localStorage.getItem(AUTH_STORAGE_KEY) === 'true';

  useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      router.replace('/admin/login');
    }

    if (isAuthenticated && isLoginPage) {
      router.replace('/admin');
    }
  }, [isAuthenticated, isLoginPage, router]);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    router.push('/admin/login');
  };

  if (isLoginPage) {
    return <div className="min-h-screen bg-slate-50">{children}</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-600">Redirecionando para o login...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      <AdminSidebar />

      <div className="flex-1">
        <header className="border-b border-slate-200 bg-white px-4 py-4 md:px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Ambiente administrativo</p>
              <h2 className="text-lg font-semibold text-slate-900">Gestão da clínica</h2>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Ver site público
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-md bg-slate-800 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Sair
              </button>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
