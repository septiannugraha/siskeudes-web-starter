// data/menuItems.ts

import { IconType } from 'react-icons';
import { FiHome, FiList, FiBookOpen, FiDollarSign, FiCalendar } from 'react-icons/fi';

export interface MenuItem {
  name: string;
  path: string;
  icon: IconType;
  showInBottomBar?: boolean;
}

export const menuItems: MenuItem[] = [
  { name: 'Home', path: '/', icon: FiHome, showInBottomBar: true },
  { name: 'Example', path: '/contoh', icon: FiList, showInBottomBar: true },
  { name: 'Daftar', path: '/daftar', icon: FiBookOpen, showInBottomBar: true },
  { name: 'Penatausahaan', path: '/penatausahaan', icon: FiDollarSign, showInBottomBar: true },
  { name: 'Perencanaan', path: '/perencanaan', icon: FiCalendar },
  // Add more menu items as needed
];
