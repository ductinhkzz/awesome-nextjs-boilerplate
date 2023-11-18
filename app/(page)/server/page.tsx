import { options } from '@/api/auth/[...nextauth]/options';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Server | Awesome nextjs boilerplate',
  description: 'Created by GhostAlpha',
};

const Page = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server');
  }
  return (
    <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
      <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        This is Server Page
        <br />
        Welcome {session?.user?.name} !
      </h2>
      <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
        <a
          href='/'
          className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Back home
        </a>
      </div>
    </div>
  );
};

export default Page;
