// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">Penganggaran dan Penatausahaan</h1>
        <div className="flex items-center">
          <span className="mr-2">Pemerintah Kabupaten Deli Serdang</span>
          <Image src="/images/logo_pemda.png" alt="Logo Pemda" width={50} height={50} />
        </div>
      </div>
      <Breadcrumb />
      <p className="text-sm text-gray-600 mt-2">Tahun Anggaran 2024</p>
    </header>
  );
};

export default Header;
