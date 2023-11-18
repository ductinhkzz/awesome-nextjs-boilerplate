import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account | Awesome nextjs boilerplate',
  description: 'Created by GhostAlpha',
};

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default AccountLayout;
