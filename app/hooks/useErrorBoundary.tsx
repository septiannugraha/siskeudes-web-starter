'use client'

import { useState, useCallback } from 'react';

const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);

  const throwError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    throw new Error('Error thrown from useErrorBoundary');
  }

  return { throwError };
};

export default useErrorBoundary;