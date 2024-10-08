// components/BottomBar.tsx

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { penganggaranMenuItems } from '../data/menuItems';

const BottomBar: React.FC = () => {
  const pathname = usePathname();
  const bottomBarItems = penganggaranMenuItems.filter(item => item.showInBottomBar);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 lg:hidden">
      <ul className="flex justify-around">
        {bottomBarItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`flex flex-col items-center p-2 ${
                pathname.startsWith(item.path)
                  ? 'text-blue-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.icon && <item.icon className="text-xl mb-1" />}
              <span className="text-xs">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomBar;