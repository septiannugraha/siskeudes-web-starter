// components/MobileMenu.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import { penganggaranMenuItems, MenuItem } from '../data/menuItems';

const MobileMenuItem: React.FC<{ item: MenuItem, level?: number }> = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div
        className={`flex items-center justify-between p-2 ${level > 0 ? 'bg-gray-100' : ''}`}
        onClick={() => item.subItems && setIsOpen(!isOpen)}
      >
        <Link href={item.path} className="flex items-center">
          {item.icon && <item.icon className="mr-2" />}
          <span>{item.name}</span>
        </Link>
        {item.subItems && (
          <span>{isOpen ? '▼' : '▶'}</span>
        )}
      </div>
      {item.subItems && isOpen && (
        <ul className={`ml-4 ${level > 0 ? 'border-l border-gray-300' : ''}`}>
          {item.subItems.map((subItem) => (
            <MobileMenuItem key={subItem.path} item={subItem} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4">
            <button
              className="mb-4 text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <ul className="space-y-2">
              {penganggaranMenuItems.map((item) => (
                <MobileMenuItem key={item.path} item={item} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
