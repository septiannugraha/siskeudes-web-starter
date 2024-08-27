import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-64 p-4 h-full">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block p-2 hover:bg-gray-200 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile" className="block p-2 hover:bg-gray-200 rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block p-2 hover:bg-gray-200 rounded">
              Settings
            </Link>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
