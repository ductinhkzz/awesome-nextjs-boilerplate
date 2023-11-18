import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client | Awesome nextjs boilerplate',
  description: 'Created by GhostAlpha',
};

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default ClientLayout;
