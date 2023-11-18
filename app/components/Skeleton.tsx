import clsx from 'clsx';
import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'circular' | 'rectangular' | 'rounded';
}

const variants: Record<'circular' | 'rectangular' | 'rounded', string> = {
  circular: 'rounded-full',
  rounded: 'rounded',
  rectangular: '',
};

const Skeleton = ({ className, variant = 'rounded' }: SkeletonProps) => {
  return (
    <div className={clsx(' animate-pulse bg-gray-400 rounded dark:bg-gray-700', variants[variant], className)}></div>
  );
};

export { Skeleton };
