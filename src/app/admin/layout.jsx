
import AdminLayout from '@/app/layouts/AdminLayout';


export const metadata = {
  title: 'Admin | Terapia Inteligente',
  description: 'Ambiente administrativo para gerenciamento da clínica.',
};

export default function RootAdminLayout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}
