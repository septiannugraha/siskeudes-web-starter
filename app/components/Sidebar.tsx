// components/Sidebar.tsx

import Link from 'next/link';
import { menuItems } from '../data/menuItems';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
       <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-gray-100 p-4 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:block hidden
        `}
      >
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="flex items-center p-2 hover:bg-gray-200 rounded">
                {item.icon && <item.icon className="mr-2" />}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;
