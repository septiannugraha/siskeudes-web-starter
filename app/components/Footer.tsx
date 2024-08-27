// components/Footer.tsx

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-200 p-4 ${className}`}>
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Your App Name. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;