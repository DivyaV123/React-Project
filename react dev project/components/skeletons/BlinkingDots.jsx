import React from 'react';
import './GlobalSkeleton.scss';
import { Skeleton } from '../ui/skeleton';
const BlinkingDots = () => {
  return (
    <div className="flex space-x-1 justify-center">
      <Skeleton className="w-2 h-2 bg-gray-500 "></Skeleton>
      <Skeleton className="w-2 h-2 bg-gray-500 "></Skeleton>
      <Skeleton className="w-2 h-2 bg-gray-500 "></Skeleton>
    </div>
  );
};

export default BlinkingDots;
