'use client';
import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]); // Updates ref when value changes

  return ref.current; // Returns previous value
}

export default usePrevious;
