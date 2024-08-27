import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import OfflineIndicator from './OfflineIndicator';

interface AppShellProps {
    children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <main className="flex-grow overflow-auto p-4">
                    {children}
                </main>
                <Footer />
            </div>
            <OfflineIndicator />
        </div>
    );
};

export default AppShell;
