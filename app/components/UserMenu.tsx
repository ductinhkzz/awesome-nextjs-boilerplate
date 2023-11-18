'use client';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import clsx from 'clsx';
import { ArrowRightOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

import { UserInfo } from '@/components';
import styles from '@/config/style';
import { IUser } from '@/types';

interface UserMenuProps {
  user?: IUser;
  isLoading?: boolean;
  onLogout?: () => void;
}

const UserMenu = ({ user, isLoading, onLogout }: UserMenuProps) => {
  const router = useRouter();
  if (!user) {
    return null;
  }

  return (
    <div className='hidden lg:flex lg:flex-1 lg:justify-end relative'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className={clsx(styles.flexBox.end, 'flex-1 gap-2', isLoading && 'pointer-events-none')}>
            <UserInfo user={user} isLoading={isLoading} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-1 w-24 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => router.push('/account')}
                  className={clsx(
                    'group flex items-center rounded px-2 py-2 text-sm w-full gap-1',
                    active && 'bg-violet-500 text-white',
                    !active && 'text-gray-900',
                  )}
                >
                  <UserIcon className='h-4 w-4' />
                  Account
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={clsx(
                    'group flex items-center rounded px-2 py-2 text-sm w-full gap-1',
                    active && 'bg-violet-500 text-white',
                    !active && 'text-gray-900',
                  )}
                  onClick={onLogout}
                >
                  <ArrowRightOnRectangleIcon className='h-4 w-4' />
                  Logout
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export { UserMenu };
