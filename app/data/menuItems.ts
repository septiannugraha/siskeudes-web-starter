// data/menuItems.ts

import { IconType } from 'react-icons';
import { FiHome, FiList, FiBookOpen, FiDollarSign, FiCalendar, FiSettings, FiFileText, FiUsers, FiBook, FiHelpCircle } from 'react-icons/fi';

export interface MenuItem {
  name: string;
  path: string;
  icon: IconType;
  showInBottomBar?: boolean;
  subItems?: MenuItem[];
}

export const penganggaranMenuItems: MenuItem[] = [
  { name: 'Penganggaran', path: '/penganggaran', icon: FiFileText },
  {
    name: 'Penatausahaan',
    path: '/penganggaran/penatausahaan',
    icon: FiUsers,
    subItems: [
      { name: 'Saldo Awal', path: '/penganggaran/penatausahaan/saldo-awal', icon: FiFileText },
      { name: 'Penerimaan Desa', path: '/penganggaran/penatausahaan/penerimaan-desa', icon: FiFileText },
      { name: 'SPP Kegiatan', path: '/penganggaran/penatausahaan/spp-kegiatan', icon: FiFileText },
      { name: 'Pencairan SPP', path: '/penganggaran/penatausahaan/pencairan-spp', icon: FiFileText },
      { name: 'SPJ Kegiatan', path: '/penganggaran/penatausahaan/spj-kegiatan', icon: FiFileText },
      { name: 'Pengembalian', path: '/penganggaran/penatausahaan/pengembalian', icon: FiFileText },
      { name: 'Penyetoran Pajak', path: '/penganggaran/penatausahaan/penyetoran-pajak', icon: FiFileText },
      { name: 'Mutasi Kas', path: '/penganggaran/penatausahaan/mutasi-kas', icon: FiFileText },
    ]
  },
  { name: 'Pembukuan', path: '/penganggaran/pembukuan', icon: FiBook },
  { name: 'Laporan', path: '/penganggaran/laporan', icon: FiFileText },
  { name: 'Pengaturan', path: '/penganggaran/pengaturan', icon: FiSettings },
  { name: 'Bantuan', path: '/penganggaran/bantuan', icon: FiHelpCircle },
];
