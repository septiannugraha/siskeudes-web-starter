'use client'

import React, { createContext, useContext, useState, useCallback } from 'react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 5000); // Auto remove after 5 seconds
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`mb-2 p-4 rounded-md shadow-md ${getToastColor(toast.type)}`}
          >
            <p className="text-white">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="absolute top-1 right-1 text-white"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const getToastColor = (type: ToastType) => {
  switch (type) {
    case 'success':
      return 'bg-green-500';
    case 'error':
      return 'bg-red-500';
    case 'info':
      return 'bg-blue-500';
    case 'warning':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};
