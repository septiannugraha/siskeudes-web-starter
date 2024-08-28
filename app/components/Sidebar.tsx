// components/Sidebar.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import { menuItems, MenuItem } from '../data/menuItems';

const SidebarItem: React.FC<{ item: MenuItem, level?: number }> = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <Link
        href={item.path}
        className={`flex items-center p-2 hover:bg-gray-200 rounded ${level > 0 ? 'ml-4' : ''}`}
        onClick={() => item.subItems && setIsOpen(!isOpen)}
      >
        {item.icon && <item.icon className="mr-2" />}
        <span>{item.name}</span>
        {item.subItems && (
          <span className="ml-auto">{isOpen ? '▼' : '▶'}</span>
        )}
      </Link>
      {item.subItems && isOpen && (
        <ul className="mt-2">
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
    <aside className="hidden lg:block w-64 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
