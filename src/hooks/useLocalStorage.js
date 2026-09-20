import { useState, useEffect } from 'react';

/**
 * Persist state to localStorage with error handling.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.warn('localStorage read failed:', err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn('localStorage write failed:', err);
    }
  }, [key, value]);

  return [value, setValue];
}