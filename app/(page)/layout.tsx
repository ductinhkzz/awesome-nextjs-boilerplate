import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Header } from '@/layouts';
import { LoadingOverlay } from '@/components';

export const metadata: Metadata = {
  title: 'Awesome nextjs boilerplate',
  description: 'Created by GhostAlpha',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Header />
      <main className='relative isolate px-3 pt-14 sm:px-6 lg:px-8'>
        <div className='xl:container mx-auto max-w-xl mt-8'>{children}</div>
      </main>
    </Suspense>
  );
}
