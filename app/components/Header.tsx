import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Siskeudes Web Starter</h1>
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/contoh" className="hover:underline">Example</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
