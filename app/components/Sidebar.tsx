// components/Sidebar.tsx

import Link from 'next/link';
import { menuItems } from '../data/menuItems';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-64 bg-gray-100 p-4">
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
  );
};

export default Sidebar;
