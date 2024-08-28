// components/MobileSubMenu.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuItem } from '../data/menuItems';

interface MobileSubMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileSubMenuItem: React.FC<{ item: MenuItem, level?: number }> = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div
        className={`flex items-center justify-between p-2 ${level > 0 ? 'ml-4' : ''}`}
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
        <ul>
          {item.subItems.map((subItem) => (
            <MobileSubMenuItem key={subItem.path} item={subItem} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ items, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
      <button
        className="absolute top-4 right-4 text-blue-500"
        onClick={onClose}
      >
        Close
      </button>
      <ul className="p-4">
        {items.map((item) => (
          <MobileSubMenuItem key={item.path} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MobileSubMenu;
