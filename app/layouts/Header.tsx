'use client';
import { useSession, signOut } from 'next-auth/react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { NAVIGATIONS } from '../constants';
import { UserMenu } from '@/components';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {NAVIGATIONS.map((item) => (
            <a key={item.name} href={item.href} className='text-sm font-semibold leading-6 text-gray-900'>
              {item.name}
            </a>
          ))}
        </div>
        {!session && (
          <div className='hidden lg:flex lg:flex-1 lg:justify-end divide-x divide-gray-200'>
            <a href='/api/auth/signin' className='text-sm font-semibold leading-6 text-gray-900 px-2'>
              Log in
            </a>
            <a href='#' className='text-sm font-semibold leading-6 text-gray-900 px-2'>
              Register
            </a>
          </div>
        )}
        {session && <UserMenu user={session?.user} onLogout={signOut} />}
      </nav>
      <Transition
        show={mobileMenuOpen}
        as={Fragment}
        enter='transform transition ease-in-out duration-300'
        enterFrom='translate-x-full'
        enterTo='translate-x-0'
        leave='transform transition ease-in-out duration-300'
        leaveFrom='translate-x-0'
        leaveTo='translate-x-full'
      >
        <Dialog as='div' className='lg:hidden fixed inset-0 z-50 flex' onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Nextjs boilerplate</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {NAVIGATIONS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  {!session && (
                    <>
                      <a
                        href='/api/auth/signin'
                        className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      >
                        Log in
                      </a>
                      <a
                        href='#'
                        className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      >
                        Register
                      </a>
                    </>
                  )}
                  {session && (
                    <div className='flex flex-1 justify-start items-center gap-2'>
                      <img src={session.user?.image ?? ''} alt='User avatar' className='rounded-full' />
                      <span className='text-sm text-gray-900'>{session?.user?.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
};

export { Header };
