const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Developed by <span className="text-pink-500 font-semibold">สิทธาเองจ้า</span>
        </p>
        <p className="text-xs md:text-sm mt-2">
          Follow me on <a href="https://www.instagram.com/theeerat_/" className="text-blue-400 hover:underline">Instagram</a> | <a href="https://github.com/Theerat22" className="text-blue-400 hover:underline">Github</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
