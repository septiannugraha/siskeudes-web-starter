// data/menuItems.ts

import { IconType } from 'react-icons';
import { FiHome, FiList, FiBookOpen, FiDollarSign, FiCalendar, FiSettings } from 'react-icons/fi';

export interface MenuItem {
  name: string;
  path: string;
  icon: IconType;
  showInBottomBar?: boolean;
  subItems?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { name: 'Home', path: '/', icon: FiHome, showInBottomBar: true },
  {
    name: 'Penatausahaan',
    path: '/penatausahaan',
    icon: FiDollarSign,
    showInBottomBar: true,
    subItems: [
      { name: 'Pendapatan', path: '/penatausahaan/pendapatan', icon: FiList },
      { name: 'Pengeluaran', path: '/penatausahaan/pengeluaran', icon: FiList },
    ]
  },
  {
    name: 'Perencanaan',
    path: '/perencanaan',
    icon: FiCalendar,
    showInBottomBar: true,
    subItems: [
      { name: 'Anggaran', path: '/perencanaan/anggaran', icon: FiBookOpen },
      { name: 'Kegiatan', path: '/perencanaan/kegiatan', icon: FiBookOpen },
    ]
  },
  { name: 'Daftar', path: '/daftar', icon: FiList },
  { name: 'Example', path: '/contoh', icon: FiSettings, showInBottomBar: true },
];
