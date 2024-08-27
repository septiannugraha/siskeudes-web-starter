import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
