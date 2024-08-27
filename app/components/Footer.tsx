const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
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