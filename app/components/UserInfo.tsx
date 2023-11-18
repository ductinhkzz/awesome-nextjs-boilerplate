import React from 'react';

import { IUser } from '../types';
import { Skeleton } from './Skeleton';

interface UserInfoProps {
  user: IUser;
  isLoading?: boolean;
}

const UserInfo = ({ user, isLoading }: UserInfoProps) => {
  if (isLoading) {
    return (
      <>
        <Skeleton variant='circular' className='w-[32px] h-[32px]' />
        <Skeleton variant='rectangular' className='w-[80px] h-[25px]' />
      </>
    );
  }

  return (
    <>
      {user.image ? (
        <img src={user?.image} alt='User avatar' width={32} height={32} className='rounded-full' />
      ) : (
        <div className='rounded-full w-[32px] h-[32px] bg-blue-400'>{user.name?.charAt(0).toUpperCase()}</div>
      )}
      <span className='text-sm text-gray-900'>{user?.name}</span>
    </>
  );
};

export { UserInfo };
