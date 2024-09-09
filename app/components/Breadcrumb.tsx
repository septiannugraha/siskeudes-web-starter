// components/Breadcrumb.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome } from 'react-icons/fi';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
            <FiHome className="mr-2" />
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href}>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                {isLast ? (
                  <span className="text-sm font-medium text-gray-500">{segment}</span>
                ) : (
                  <Link href={href} className="text-sm font-medium text-gray-700 hover:text-blue-600">
                    {segment}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
