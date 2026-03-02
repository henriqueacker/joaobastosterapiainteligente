<<<<<<< codex/create-admin-environment-and-layout-bobdvl
import AdminLayout from '@/app/layouts/AdminLayout';
=======
import Link from 'next/link';
import AdminSidebar from './components/AdminSidebar';
>>>>>>> master

export const metadata = {
  title: 'Admin | Terapia Inteligente',
  description: 'Ambiente administrativo para gerenciamento da clínica.',
};

<<<<<<< codex/create-admin-environment-and-layout-bobdvl
export default function RootAdminLayout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
=======
export default function AdminLayout({ children }) {
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
            <Link
              href="/"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Ver site público
            </Link>
          </div>
        </header>

        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
>>>>>>> master
}
