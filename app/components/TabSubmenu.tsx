// components/TabSubmenu.tsx

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface TabSubmenuProps {
  subItems: { name: string; path: string }[];
}

const TabSubmenu: React.FC<TabSubmenuProps> = ({ subItems }) => {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-md">
      <div className="flex overflow-x-auto">
        {subItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex-shrink-0 px-4 py-2 border-b-2 ${
              pathname === item.path
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabSubmenu;
