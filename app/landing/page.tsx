'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  username: string;
  role: string;
  accessibleMenus: string[];
}

export default function LandingPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

    useEffect(() => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    if (!token || !userStr) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userStr));
  }, [router]);

  if (!user) return null; // or a loading spinner

  const menuItems = [
    { title: "Perencanaan Desa", href: "/perencanaan", access: ['all', 'perencanaan'] },
    { title: "Monitoring Keuangan Desa", href: "/monitoring", access: ['all', 'monitoring'] },
    { title: "Penganggaran dan Penatausahaan", href: "/penganggaran", access: ['all', 'penganggaran'] },
    { title: "Pengelolaan Aset Desa", href: "/aset", access: ['all', 'aset'] },
    { title: "Usulan Masyarakat", href: "/usulan", access: ['all', 'usulan'] },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 relative">
        {/* Background curves */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-200 rounded-tl-lg"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gray-200 rounded-br-lg"></div>

        {/* Logo and titles */}
        <div className="text-center mb-8 relative z-10">
          <Image
            src="/images/logo_pemda.png"
            alt="Kabupaten Deli Serdang Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">SISKEUDES?</h1>
          <h2 className="text-2xl font-semibold mb-4">Kabupaten Deli Serdang</h2>
          <p className="text-gray-600 mb-2">Halo, selamat datang {user.username}...</p>
          <p className="text-lg font-medium">
            Mari Wujudkan Tata Kelola Keuangan Desa<br />yang Akuntabel dan Transparan
          </p>
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
          {menuItems.map((item, index) => (
            (user.accessibleMenus.includes('all') || user.accessibleMenus.some(menu => item.access.includes(menu))) && (
              <MenuItem key={index} title={item.title} href={item.href} className={index === 4 ? "md:col-span-2" : ""} />
            )
          ))}
        </div>

        {/* Link Desa button */}
        <div className="mt-8 text-center relative z-10">
          <Link href="/link-desa" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Link Desa
          </Link>
        </div>
      </div>
    </div>
  );
}

interface MenuItemProps {
  title: string;
  href: string;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, href, className = '' }) => (
  <Link href={href} className={`bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors ${className}`}>
    <span className="font-medium">{title}</span>
  </Link>
);
