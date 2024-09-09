// components/Sidebar.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { penganggaranMenuItems, MenuItem } from '../data/menuItems';

const SidebarItem: React.FC<{ item: MenuItem, level?: number }> = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.path);

  return (
    <li>
      <Link
        href={item.path}
        className={`flex items-center p-3 ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'} ${level > 0 ? 'pl-8' : ''}`}
        onClick={(e) => {
          if (item.subItems) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {item.icon && <item.icon className="mr-3 text-xl" />}
        <span>{item.name}</span>
        {item.subItems && (
          <span className="ml-auto">{isOpen ? '▼' : '▶'}</span>
        )}
      </Link>
      {item.subItems && isOpen && (
        <ul className="bg-blue-600">
          {item.subItems.map((subItem) => (
            <SidebarItem key={subItem.path} item={subItem} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-blue-700 text-white h-screen">
      <div className="p-4 bg-blue-800">
        <Image src="/siskeudes_logo.png" alt="SISKEUDES Logo" width={150} height={50} />
      </div>
      <nav className="flex-grow overflow-y-auto">
        <ul>
          {penganggaranMenuItems.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </ul>
      </nav>
      <div className="p-4 bg-blue-800">
        <div className="flex items-center">
          <Image src="/user_avatar.png" alt="User Avatar" width={40} height={40} className="rounded-full mr-3" />
          <div>
            <p className="font-semibold">Desa (Username)</p>
            <p className="text-sm">Logout</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
