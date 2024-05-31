import SideNav from '../ui/dashboard/sidenav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-node w-full md:w-64">
        <SideNav />
      </div>
      <div className="flew-grow md: overflow-y-auto p-6 md:p-12">
        {children}
      </div>
    </div>
  );
}
