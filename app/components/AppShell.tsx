'use client'

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import OfflineIndicator from './OfflineIndicator';

interface AppShellProps {
    children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => console.log('Service Worker registered with scope:', registration.scope))
        .catch(error => console.error('Service Worker registration failed:', error));
    }
  }, []);


  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow overflow-auto p-4 pb-16 lg:pb-4">
          {children}
        </main>
        <OfflineIndicator/>
        <Footer className="hidden lg:block" />
        <BottomBar />
      </div>
    </div>
  );
};

export default AppShell;
