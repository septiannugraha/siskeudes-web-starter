// components/PageLayout.tsx

import React from 'react';
import { usePathname } from 'next/navigation';
import { penganggaranMenuItems } from '../data/menuItems';
import TabSubmenu from './TabSubmenu';

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const currentMainPath = '/' + pathname.split('/')[1];
    const currentMenuItem = penganggaranMenuItems.find(item => item.path === currentMainPath);

    return (
        <div className="flex flex-col h-full">
            {currentMenuItem?.subItems && (
                <>
                    <div className="lg:hidden"> {/* Mobile tabs */}
                        <TabSubmenu subItems={currentMenuItem.subItems} />
                    </div>
                    <div className="hidden"> {/* Desktop tabs */}
                        <TabSubmenu subItems={currentMenuItem.subItems} />
                    </div>
                </>
            )}
            <div className="flex-grow overflow-auto p-4">
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
